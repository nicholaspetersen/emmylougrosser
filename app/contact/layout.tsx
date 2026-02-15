import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Dr. Emmylou Grosser",
  description:
    "Get in touch with Dr. Emmylou Grosser for speaking engagements, workshops, research inquiries, and collaboration opportunities.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
