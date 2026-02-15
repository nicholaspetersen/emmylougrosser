import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background-secondary pt-16 pb-12">
      <div className="mx-auto max-w-[1280px] px-8">
        {/* Top section */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8 max-w-[320px]">
            <p className="text-base leading-6 text-foreground-secondary">
              Illuminating the artistry of scripture
            </p>
            <div className="flex gap-8 items-center">
              <Link
                href="/contact"
                className="text-base font-semibold leading-6 text-foreground-secondary hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/support"
                className="text-base font-semibold leading-6 text-foreground-secondary hover:text-foreground transition-colors"
              >
                Support
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#d5d9eb]">
          <p className="text-base leading-6 text-foreground-tertiary">
            © {new Date().getFullYear()} Emmylou Grosser
          </p>
        </div>
      </div>
    </footer>
  );
}
