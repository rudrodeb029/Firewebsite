import React, { useState } from "react";
import { Eye, EyeOff, LucideIcon } from "lucide-react";

type CyberColor = "purple" | "blue" | "orange";

interface CyberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: CyberColor;
  children: React.ReactNode;
  showSlantedBars?: boolean;
  hoverEffect?: boolean;
}

export function CyberCard({
  color = "purple",
  children,
  showSlantedBars = true,
  hoverEffect = true,
  className = "",
  ...props
}: CyberCardProps) {
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
    transition: "transform 400ms ease-out, box-shadow 400ms ease-out",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.35)",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverEffect) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Rotate max 8 degrees on hover
    const rotateX = ((centerY - y) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * -8;
    
    // Cast shadow in opposite direction of tilt for dynamic 3D effect
    const shadowX = (rotateY * -1.5).toFixed(1);
    const shadowY = (rotateX * 1.5).toFixed(1);
    const blur = Math.max(15, 15 + Math.abs(rotateX) * 2).toFixed(1);
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(12px)`,
      transition: "transform 100ms ease-out, box-shadow 100ms ease-out",
      boxShadow: `${shadowX}px ${shadowY}px ${blur}px rgba(0, 0, 0, 0.65)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
      transition: "transform 500ms ease-out, box-shadow 500ms ease-out",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.35)",
    });
  };

  const colorMap = {
    purple: {
      border: "stroke-purple-500/50",
      bgGradient: "from-[#1a0e35]/95 via-[#080512]/98 to-[#120522]/95",
      bars: "bg-purple-500/60",
    },
    blue: {
      border: "stroke-sky-500/50",
      bgGradient: "from-[#081d40]/95 via-[#02050f]/98 to-[#041126]/95",
      bars: "bg-sky-500/60",
    },
    orange: {
      border: "stroke-amber-500/50",
      bgGradient: "from-[#2f1205]/95 via-[#050308]/98 to-[#1a0601]/95",
      bars: "bg-amber-500/60",
    },
  };

  const currentTheme = colorMap[color];

  return (
    <div
      className={`relative p-[2px] rounded-xl transition-all duration-300 ${className}`}
      style={{
        transformStyle: "preserve-3d",
        ...tiltStyle,
        ...props.style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <style>{`
        @keyframes cyberBorderFlow {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes currentSweep {
          0% { transform: translateX(-150%) skewX(-20deg); opacity: 0; }
          15% { opacity: 1; }
          45% { opacity: 1; }
          60% { transform: translateX(150%) skewX(-20deg); opacity: 0; }
          100% { transform: translateX(150%) skewX(-20deg); opacity: 0; }
        }
        .animate-cyber-border-${color} {
          stroke-dasharray: 30 170;
          animation: cyberBorderFlow 4s linear infinite;
        }
        .animate-current-sweep-${color} {
          animation: currentSweep 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* Background card shape with color gradient - matching SVG corners at 2.5% X-axis, 15% Y-axis */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${currentTheme.bgGradient} z-0`} 
        style={{
          clipPath: "polygon(0% 15%, 2.5% 0%, 25% 0%, 27.5% 4%, 47.5% 4%, 50% 0%, 97.5% 0%, 100% 15%, 100% 85%, 97.5% 100%, 65% 100%, 62.5% 96%, 47.5% 96%, 45% 100%, 2.5% 100%, 0% 85%)"
        }}
      />

      {/* Sweeping scanline current light effect */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none z-10" 
        style={{ clipPath: "polygon(0% 15%, 2.5% 0%, 25% 0%, 27.5% 4%, 47.5% 4%, 50% 0%, 97.5% 0%, 100% 15%, 100% 85%, 97.5% 100%, 65% 100%, 62.5% 96%, 47.5% 96%, 45% 100%, 2.5% 100%, 0% 85%)" }}
      >
        <div 
          className={`absolute top-0 bottom-0 w-32 animate-current-sweep-${color}`}
          style={{
            background: `linear-gradient(to right, transparent, ${
              color === 'purple' ? 'rgba(168, 85, 247, 0.15)' : 
              color === 'blue' ? 'rgba(56, 189, 248, 0.15)' : 
              'rgba(251, 191, 36, 0.15)'
            }, transparent)`
          }}
        />
      </div>
      
      {/* Card Body with comfortable padding */}
      <div 
        className="relative z-10 p-6 md:p-8 min-h-[80px]"
      >
        <div>
          {children}
        </div>
        
        {/* Slanted bars decoration bottom right */}
        {showSlantedBars && (
          <div className="absolute bottom-5 right-6 flex gap-[3px] z-20 pointer-events-none">
            <div className={`w-[3px] h-3.5 transform skew-x-[-25deg] ${currentTheme.bars}`} />
            <div className={`w-[3px] h-3.5 transform skew-x-[-25deg] ${currentTheme.bars}`} />
            <div className={`w-[3px] h-3.5 transform skew-x-[-25deg] ${currentTheme.bars}`} />
          </div>
        )}
      </div>

      {/* Custom Cyberpunk SVG Border Overlay with 2.5% sharp chamfers */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 15 L 2.5 0 L 25 0 L 27.5 4 L 47.5 4 L 50 0 L 97.5 0 L 100 15 L 100 85 L 97.5 100 L 65 100 L 62.5 96 L 47.5 96 L 45 100 L 2.5 100 L 0 85 Z"
          fill="none"
          strokeWidth="1.5"
          className={`${currentTheme.border}`}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

interface CyberInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: CyberColor;
  icon: LucideIcon;
  label: string;
}

export function CyberInput({
  color = "purple",
  icon: Icon,
  label,
  type = "text",
  className = "",
  ...props
}: CyberInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const colorMap = {
    purple: {
      border: "stroke-purple-500/50",
      textColor: "text-purple-400",
      line: "bg-gradient-to-r from-purple-500/40 via-purple-500/10 to-transparent",
      iconBg: "bg-purple-950/40 border-purple-500/40",
      bars: "bg-purple-500/50",
    },
    blue: {
      border: "stroke-sky-500/50",
      textColor: "text-sky-400",
      line: "bg-gradient-to-r from-sky-500/40 via-sky-500/10 to-transparent",
      iconBg: "bg-sky-950/40 border-sky-500/40",
      bars: "bg-sky-500/50",
    },
    orange: {
      border: "stroke-amber-500/50",
      textColor: "text-amber-400",
      line: "bg-gradient-to-r from-amber-500/40 via-amber-500/10 to-transparent",
      iconBg: "bg-amber-950/40 border-amber-500/40",
      bars: "bg-amber-500/50",
    },
  };

  const currentTheme = colorMap[color];

  return (
    <div className={`relative flex items-center w-full min-h-[76px] p-[2px] transition-all duration-300 ${className}`}>
      {/* Background shape */}
      <div 
        className="absolute inset-0 bg-[#0d0a16]/95 z-0" 
        style={{
          clipPath: "polygon(0 14px, 14px 0, 32% 0, 34% 5px, 68% 5px, 70% 0, calc(100% - 14px) 0, 100% 14px, 100% calc(100% - 14px), calc(100% - 14px) 100%, 65% 100%, 63% 95px, 45% 95px, 43% 100%, 14px 100%, 0 calc(100% - 14px))"
        }}
      />

      {/* Custom Cyberpunk SVG Border Overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 18 L 4 0 L 26 0 L 29 6 L 68 6 L 71 0 L 96 0 L 100 18 L 100 82 L 96 100 L 62 100 L 59 94 L 41 94 L 38 100 L 4 100 L 0 82 Z"
          fill="none"
          strokeWidth="1.5"
          className={`${currentTheme.border}`}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Main input wrapper */}
      <div className="relative z-10 flex items-center w-full h-full py-3 pl-4 pr-5 gap-4">
        {/* Left Side: Octagonal/Chamfered Icon Box */}
        <div 
          className={`flex items-center justify-center h-[42px] w-[42px] shrink-0 border transition-transform duration-300 hover:scale-105 ${currentTheme.iconBg}`}
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)"
          }}
        >
          <Icon className={`h-[18px] w-[18px] ${currentTheme.textColor}`} strokeWidth={2.5} />
        </div>

        {/* Right Side: Text Area */}
        <div className="flex-1 flex flex-col justify-center min-w-0 pr-6 relative">
          <input
            type={isPassword ? (showPassword ? "text" : "password") : type}
            placeholder={label}
            className="w-full bg-transparent border-0 outline-none text-foreground placeholder-muted-foreground/50 text-sm font-medium pt-1 transition-all duration-300"
            {...props}
          />
          {/* Bottom line under text field */}
          <div className={`absolute bottom-[-6px] left-0 right-8 h-[1px] ${currentTheme.line}`} />
        </div>

        {/* Password eye visibility toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-12 top-1/2 -translate-y-1/2 z-30 p-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? (
              <EyeOff className="h-4.5 w-4.5 text-amber-500" />
            ) : (
              <Eye className="h-4.5 w-4.5 text-amber-500" />
            )}
          </button>
        )}

        {/* Slanted bars decoration bottom right */}
        <div className="absolute bottom-3.5 right-4.5 flex gap-[2px] z-20 pointer-events-none">
          <div className={`w-[2.5px] h-3 transform skew-x-[-25deg] ${currentTheme.bars}`} />
          <div className={`w-[2.5px] h-3 transform skew-x-[-25deg] ${currentTheme.bars}`} />
          <div className={`w-[2.5px] h-3 transform skew-x-[-25deg] ${currentTheme.bars}`} />
        </div>
      </div>
    </div>
  );
}

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: CyberColor;
  children: React.ReactNode;
}

export function CyberButton({
  color = "purple",
  children,
  className = "",
  ...props
}: CyberButtonProps) {
  const colorMap = {
    purple: {
      bg: "bg-purple-600 hover:bg-purple-500 shadow-[0_4px_12px_rgba(0,0,0,0.3)]",
      border: "border-purple-500/40",
    },
    blue: {
      bg: "bg-sky-600 hover:bg-sky-500 shadow-[0_4px_12px_rgba(0,0,0,0.3)]",
      border: "border-sky-500/40",
    },
    orange: {
      bg: "bg-amber-600 hover:bg-amber-500 shadow-[0_4px_12px_rgba(0,0,0,0.3)]",
      border: "border-amber-500/40",
    },
  };

  const currentTheme = colorMap[color];

  return (
    <button
      className={`relative py-3.5 px-8 text-sm font-semibold uppercase tracking-wider text-white border transition-all duration-300 active:scale-95 rounded-sm ${currentTheme.bg} ${currentTheme.border} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 z-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity" />
    </button>
  );
}

