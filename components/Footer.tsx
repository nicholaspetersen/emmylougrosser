"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import FooterSubscribe from "./FooterSubscribe";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/bio", label: "Bio" },
  { href: "/resources", label: "Resources" },
  { href: "/workshops", label: "Workshops" },
  { href: "/projects", label: "Projects" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className="bg-background-secondary pt-12 lg:pt-16 pb-8 lg:pb-12">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        {/* Top section */}
        <div className="flex flex-col gap-8 lg:gap-10">
          <div className="flex flex-col gap-6 lg:gap-8 max-w-[680px]">
            <p className="text-xl leading-6 text-foreground-secondary font-medium font-[family-name:var(--font-crimson-text)]">
              Illuminating the artistry of scripture
            </p>
            <div className="flex flex-wrap gap-x-6 lg:gap-x-8 gap-y-3 lg:gap-y-4 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm lg:text-base font-semibold leading-6 text-foreground-secondary hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {!isHome && (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-8 border-y border-[#d5d9eb]">
              <p className="text-sm font-medium text-foreground-secondary flex-shrink-0">
                Stay connected
              </p>
              <FooterSubscribe />
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className={`pt-6 lg:pt-8 ${isHome ? "mt-12 lg:mt-16 border-t border-[#d5d9eb]" : "mt-8 lg:mt-10"}`}>
          <p className="text-xs leading-6 text-foreground-tertiary">
            © {new Date().getFullYear()} Emmylou Grosser
          </p>
        </div>
      </div>
    </footer>
  );
}
