"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PatternHero from "@/components/PatternHero";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
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
      setFormData({ name: "", email: "", organization: "", role: "", subject: "", message: "" });
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                {/* Photo */}
                <div className="relative mb-8 aspect-[4/3] lg:aspect-[3/4] bg-white shadow-xs overflow-hidden lg:block">
                  <Image
                    src="/images/emmylou-grosser-standing.jpg"
                    alt="Dr. Emmylou Grosser"
                    fill
                    sizes="400px"
                    className="object-cover"
                    style={{ objectPosition: '95% top' }}
                  />
                </div>
                
                <h2 className="font-serif font-medium text-2xl text-foreground">
                  Let&apos;s Connect
                </h2>
                <p className="mt-4 text-foreground-secondary leading-7">
                I welcome inquiries about my research, speaking engagements, workshops, and collaboration
opportunities. This is also where you can share feedback or request resources you would like to
see on this website. Please use this form to send me a message. 
                </p>
              </div>


              {/* Contact Form */}
              <div className="bg-white p-8 shadow-xs lg:col-span-2">
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
                      htmlFor="organization"
                      className="block text-sm font-medium text-foreground"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="mt-2 block w-full border border-border bg-white px-[14px] py-[12px] text-foreground placeholder:text-foreground-tertiary shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your organization"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-foreground"
                    >
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="mt-2 block w-full border border-border bg-white px-[14px] py-[12px] text-foreground placeholder:text-foreground-tertiary shadow-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your role"
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
