"use client";

import { useState } from "react";
import { saveUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSignup = () => {
    if (!email) return;

    saveUser({
      email,
      credits: 5, // 🎁 free credits
    });

    router.push("/tools");
  };

  return (
    <main style={{ maxWidth: "420px", margin: "80px auto", padding: "16px" }}>
      <h1>Create your account</h1>

      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          marginTop: "24px",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #e5e7eb",
        }}
      />

      <button
        onClick={handleSignup}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "12px",
          background: "#4f46e5",
          color: "#fff",
          borderRadius: "8px",
          border: "none",
          fontWeight: 700,
        }}
      >
        Sign up & get free credits
      </button>
    </main>
  );
}