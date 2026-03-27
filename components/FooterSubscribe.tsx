"use client";

import { useState } from "react";

export default function FooterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    if (email) {
      setTimeout(() => {
        setStatus("success");
        setEmail("");
      }, 500);
    } else {
      e.preventDefault();
    }
  };

  return (
    <>
      {status === "success" ? (
        <p className="text-sm text-foreground-secondary">Thanks for subscribing!</p>
      ) : (
        <form
          action="https://mesaglobal.us6.list-manage.com/subscribe/post?u=8c0bd5bec630e48dbd14b4efb&id=e4c59ed36d"
          method="POST"
          onSubmit={handleSubmit}
          target="hidden_iframe_footer"
          className="flex flex-col sm:flex-row gap-2 w-full max-w-sm"
        >
          <label htmlFor="footer-email" className="sr-only">Email address</label>
          <input
            type="email"
            id="footer-email"
            name="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-3 py-2 text-sm border border-border bg-white text-foreground placeholder:text-foreground-tertiary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <input type="hidden" name="b_8c0bd5bec630e48dbd14b4efb_e4c59ed36d" value="" />
          <button
            type="submit"
            className="px-4 py-2 text-sm font-bold bg-primary text-white hover:bg-primary-hover transition-colors font-[family-name:var(--font-crimson-text)]"
          >
            Subscribe
          </button>
        </form>
      )}
      <iframe name="hidden_iframe_footer" style={{ display: "none" }} title="Hidden iframe footer" />
    </>
  );
}
