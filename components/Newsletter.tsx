"use client";

import { useState } from "react";
import Button from "./ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Stub: In production, this would connect to an email service
    if (email) {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <section className="bg-background-secondary py-24 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="flex flex-col gap-8 items-center">
          <div className="text-center max-w-[768px] flex flex-col gap-5">
            <h2 
              className="font-semibold text-4xl leading-[44px] tracking-[-0.72px] text-foreground"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Stay connected to what is going on
            </h2>
            <p className="text-xl leading-[30px] text-foreground-secondary">
              Be the first to know about new resources and upcoming projects.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-[480px]">
            <div className="flex gap-2">
              <div className="flex-1">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-[14px] py-[12px] border border-border bg-white text-foreground placeholder:text-foreground-tertiary shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </div>

            {status === "success" && (
              <p className="mt-4 text-sm text-green-700 text-center">
                Thank you for subscribing! You&apos;ll hear from us soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
