import Image from "next/image";
import Button from "./ui/Button";
import { PortableText } from "@portabletext/react";
import { safeFetch } from "@/sanity/lib/client";
import { homePageQuery } from "@/sanity/lib/queries";
import type { HomePage, PortableTextBlock } from "@/sanity/lib/types";

const fallbackBio: PortableTextBlock[] = [
  { _type: "block", _key: "a", style: "normal", markDefs: [], children: [{ _type: "span", _key: "a1", text: "I\u2019m a biblical scholar and the author of Unparalleled Poetry, a book that challenges readers to move beyond the limited framework of parallelism and adopt a new framework that does justice to the multidimensional patterning of the free-rhythm poetry of the Hebrew Bible.", marks: [] }] } as PortableTextBlock,
  { _type: "block", _key: "b", style: "normal", markDefs: [], children: [{ _type: "span", _key: "b1", text: "I love studying the verbal art of the Bible, and I\u2019ve created this space to share my research and resources built from it.", marks: [] }] } as PortableTextBlock,
];

export default async function AboutSection() {
  const page = await safeFetch<HomePage | null>(homePageQuery, null);
  const bio = page?.aboutBio ?? fallbackBio;

  return (
    <section className="bg-background-secondary py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Photo */}
          <div className="relative w-full max-w-[400px] lg:max-w-none lg:w-[600px] aspect-square shadow-xs overflow-hidden flex-shrink-0">
            <Image
              src="/images/emmylou-grosser.jpg"
              alt="Dr. Emmylou Grosser"
              fill
              sizes="(max-width: 768px) 400px, 600px"
              className="object-cover"
              priority
            />
          </div>

          {/* Content Card */}
          <div className="bg-white p-8 lg:p-11 w-full lg:w-[560px] -mt-12 lg:-mt-0 lg:-ml-[20px] relative z-10 shadow-xs lg:shadow-none">
            <div className="flex flex-col gap-4 lg:gap-5">
              <h2
                className="font-medium text-3xl lg:text-4xl leading-tight lg:leading-[44px] tracking-[-0.72px] text-foreground"
                style={{ fontFamily: 'var(--font-crimson)' }}
              >
                About Dr. Grosser
              </h2>
              <div className="text-base lg:text-lg leading-7 text-foreground-secondary space-y-4 lg:space-y-5 [&_em]:italic [&_strong]:font-semibold [&_a]:underline [&_a]:hover:text-foreground">
                <PortableText value={bio} />
              </div>
              <div className="mt-1">
                <Button href="/bio" variant="outline">
                  Read bio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
