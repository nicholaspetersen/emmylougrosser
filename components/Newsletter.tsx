"use client";

import { useState } from "react";
import Button from "./ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Submit the form
      const form = e.target as HTMLFormElement;
      form.submit();
      
      // Show success message and clear input
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <section className="bg-background-secondary py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="flex flex-col gap-6 lg:gap-8 items-center">
          <div className="text-center max-w-[768px] flex flex-col gap-4 lg:gap-5">
            <h2 
              className="font-semibold text-3xl lg:text-4xl leading-tight lg:leading-[44px] tracking-[-0.72px] text-foreground"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Stay connected to what is going on
            </h2>
            <p className="text-lg lg:text-xl leading-7 lg:leading-[30px] text-foreground-secondary">
              Be the first to know about new resources and upcoming projects.
            </p>
          </div>

          <form 
            action="https://mesaglobal.us6.list-manage.com/subscribe/post?u=8c0bd5bec630e48dbd14b4efb&id=e4c59ed36d"
            method="POST"
            onSubmit={handleSubmit}
            target="hidden_iframe"
            className="w-full max-w-[480px]"
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1">
                <label htmlFor="mce-EMAIL" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="mce-EMAIL"
                  name="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-[14px] py-[12px] border border-border bg-white text-foreground placeholder:text-foreground-tertiary shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              {/* Hidden fields for Mailchimp */}
              <input type="hidden" name="b_8c0bd5bec630e48dbd14b4efb_e4c59ed36d" value="" />
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

          {/* Hidden iframe to prevent redirect */}
          <iframe name="hidden_iframe" style={{ display: 'none' }} title="Hidden iframe"></iframe>
        </div>
      </div>
    </section>
  );
}
