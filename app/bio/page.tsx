import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PatternHero from "@/components/PatternHero";
import Button from "@/components/ui/Button";
import { PortableText } from "@portabletext/react";
import { safeFetch } from "@/sanity/lib/client";
import { bioPageQuery } from "@/sanity/lib/queries";
import type { BioPage } from "@/sanity/lib/types";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Bio | Dr. Emmylou Grosser",
  description:
    "Learn about Dr. Emmylou Grosser, a scholar specializing in biblical Hebrew poetry, cognitive poetics, and linguistics.",
};

export default async function BioPage() {
  const page = await safeFetch<BioPage | null>(bioPageQuery, null);

  const bioParagraphs = page?.bioParagraphs ?? ([] as import("@/sanity/lib/types").PortableTextBlock[]);
  const education = page?.education ?? [];

  return (
    <>
      <Header />
      <main>
        <PatternHero
          title="Bio"
          subtitle="Scholar and educator in biblical Hebrew poetry"
        />

        <section className="bg-background-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Photo */}
              <div className="lg:col-span-1 max-w-[580px]">
                <div className="relative aspect-[4/3] lg:aspect-[3/4] bg-white shadow-xs overflow-hidden">
                  <Image
                    src="/images/emmylou-grosser-desk.jpg"
                    alt="Dr. Emmylou J. Grosser"
                    fill
                    sizes="(max-width: 1024px) 100vw, 580px"
                    className="object-cover"
                    style={{ objectPosition: '65% top' }}
                    priority
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2">
                <h2 className="font-serif font-medium text-[30px] leading-[38px] text-foreground">
                  Dr. Emmylou J. Grosser
                </h2>

                <div className="mt-8 text-lg leading-7 text-foreground-secondary space-y-6 [&_em]:italic [&_strong]:font-semibold [&_a]:underline [&_a]:hover:text-foreground">
                  <PortableText value={bioParagraphs} />
                </div>

                {/* Education Section */}
                {education.length > 0 && (
                  <div className="mt-16">
                    <h3 className="font-serif font-medium text-2xl text-foreground">
                      Education
                    </h3>
                    <div className="mt-8 space-y-8">
                      {education.map((edu, index) => (
                        <div key={index} className="border-l-2 border-primary pl-6">
                          <h4 className="font-semibold text-foreground">
                            {edu.institution}
                          </h4>
                          <ul className="mt-2 space-y-1">
                            {edu.degrees.map((degree, degreeIndex) => (
                              <li
                                key={degreeIndex}
                                className="text-foreground-secondary text-sm"
                              >
                                {degree}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif font-medium text-[30px] leading-[38px] text-white">
                Interested in my research?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Explore my publications and resources on biblical Hebrew poetry.
              </p>
              <div className="mt-8">
                <Button href="/resources" variant="outline">
                  Explore Resources
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
