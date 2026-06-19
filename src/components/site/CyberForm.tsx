import React, { useState } from "react";
import { User, Mail, Lock, CheckCircle, ShieldAlert } from "lucide-react";
import { CyberInput, CyberButton } from "./CyberCard";

export function CyberForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setStatus("error");
      setErrorMessage("System override failed: All fields are required.");
      return;
    }
    
    // Simple email validation regex
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("error");
      setErrorMessage("System override failed: Access protocol invalid (Invalid Email).");
      return;
    }

    if (formData.password.length < 6) {
      setStatus("error");
      setErrorMessage("System override failed: Encryption key too weak (Min 6 chars).");
      return;
    }

    setLoading(true);
    setStatus("idle");

    // Mock request simulation
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {status === "success" ? (
        <div className="text-center p-8 bg-green-950/20 border border-green-500/40 rounded-xl animate-fade-in shadow-[0_0_30px_rgba(34,197,94,0.15)]"
             style={{ clipPath: "polygon(0 15px, 15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px))" }}>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.7)]" />
          </div>
          <h3 className="font-display text-2xl text-green-400 tracking-wider">Access Granted</h3>
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
            Your network profile has been registered on JXM Mainframe. Prepare for combat, operator.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="inline-flex py-2.5 px-6 border border-green-500/40 bg-green-500/10 text-green-400 text-xs font-semibold uppercase tracking-wider hover:bg-green-500 hover:text-black transition-all duration-300"
              style={{ clipPath: "polygon(0 10px, 10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)" }}
            >
              Return to Control Center
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <CyberInput
              color="purple"
              icon={User}
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              disabled={loading}
              autoComplete="username"
            />
            <CyberInput
              color="blue"
              icon={Mail}
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              autoComplete="email"
            />
            <CyberInput
              color="orange"
              icon={Lock}
              label="Secret Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
              autoComplete="new-password"
            />
          </div>

          {status === "error" && (
            <div className="flex items-start gap-2.5 p-3.5 bg-red-950/20 border border-red-500/40 text-red-400 text-xs rounded-lg animate-shake">
              <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <CyberButton
            type="submit"
            color="purple"
            disabled={loading}
            className="w-full mt-2 font-display text-lg tracking-wider"
          >
            {loading ? "Decrypting Protocol..." : "Access Mainframe"}
          </CyberButton>
        </form>
      )}
    </div>
  );
}
