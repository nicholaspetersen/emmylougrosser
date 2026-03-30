import Accordion from "./ui/Accordion";
import { safeFetch } from "@/sanity/lib/client";
import { faqItemsQuery } from "@/sanity/lib/queries";
import type { FaqItem } from "@/sanity/lib/types";

export default async function FAQ() {
  const faqItems = await safeFetch<FaqItem[]>(faqItemsQuery, []);

  return (
    <section className="bg-background-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="flex flex-col gap-12 lg:gap-16 items-center">
          {/* Section Header */}
          <div className="text-center max-w-[900px]">
            <p className="text-base font-semibold leading-6 text-accent">
              FAQ
            </p>
            <h2
              className="mt-2 font-medium text-3xl lg:text-4xl leading-tight lg:leading-[44px] tracking-[-0.72px] text-foreground"
              style={{ fontFamily: 'var(--font-crimson)' }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion */}
          <div className="w-full max-w-[700px]">
            <Accordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
