"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PatternHero from "@/components/PatternHero";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Stub: In production, this would send to a backend
    if (formData.name && formData.email && formData.message) {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <>
      <Header />
      <main>
        <PatternHero
          title="Contact"
          subtitle="Get in touch with Dr. Emmylou Grosser"
        />

        <section className="bg-background-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="font-serif font-medium text-2xl text-foreground">
                  Let&apos;s Connect
                </h2>
                <p className="mt-4 text-foreground-secondary leading-7">
                  I welcome inquiries about my research, speaking engagements,
                  workshops, and collaboration opportunities. Please use the form
                  to send me a message, and I&apos;ll respond as soon as possible.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="bg-white  p-6 shadow-xs">
                    <h3 className="font-semibold text-foreground">
                      Speaking &amp; Workshops
                    </h3>
                    <p className="mt-2 text-foreground-secondary text-sm">
                      Interested in having me speak at your institution, church, or
                      conference? I offer presentations on biblical Hebrew poetry
                      for various audiences, from academic to general.
                    </p>
                  </div>
                  <div className="bg-white p-6 shadow-xs">
                    <h3 className="font-semibold text-foreground">Research Inquiries</h3>
                    <p className="mt-2 text-foreground-secondary text-sm">
                      Have questions about my work on cognitive poetics and biblical
                      poetry? I&apos;m happy to discuss research topics and potential
                      collaborations.
                    </p>
                  </div>
                  <div className="bg-white p-6 shadow-xs">
                    <h3 className="font-semibold text-foreground">Media &amp; Interviews</h3>
                    <p className="mt-2 text-foreground-secondary text-sm">
                      For podcast appearances, interviews, or media inquiries,
                      please include details about your platform and topic of
                      interest.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 shadow-xs">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground"
                    >
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 block w-full border border-border bg-white px-[14px] py-[12px] text-foreground placeholder:text-foreground-tertiary shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground"
                    >
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 block w-full border border-border bg-white px-[14px] py-[12px] text-foreground placeholder:text-foreground-tertiary shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-2 block w-full border border-border bg-white px-[14px] py-[12px] text-foreground shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a topic...</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="workshop">Workshop Inquiry</option>
                      <option value="research">Research Question</option>
                      <option value="media">Media/Interview</option>
                      <option value="support">Support/Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground"
                    >
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2 block w-full border border-border bg-white px-[14px] py-[12px] text-foreground placeholder:text-foreground-tertiary shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  {status === "success" && (
                    <div className="rounded-lg bg-green-50 p-4">
                      <p className="text-sm text-green-800">
                        Thank you for your message! I&apos;ll be in touch soon.
                      </p>
                    </div>
                  )}

                  <Button type="submit" variant="primary" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
