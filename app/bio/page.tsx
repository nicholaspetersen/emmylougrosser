import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PatternHero from "@/components/PatternHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Bio | Dr. Emmylou Grosser",
  description:
    "Learn about Dr. Emmylou Grosser, a scholar specializing in biblical Hebrew poetry, cognitive poetics, and linguistics.",
};

const education = [
  {
    institution: "University of Wisconsin–Madison",
    degrees: [
      "PhD, Hebrew Bible and Northwest Semitic Languages, with a minor in linguistics",
      "MA, Hebrew Bible and Northwest Semitic Languages",
    ],
  },
  {
    institution: "Gordon-Conwell Theological Seminary",
    degrees: ["MA, Old Testament", "MA, New Testament"],
  },
  {
    institution: "Wheaton College, Illinois",
    degrees: ["BA, Biblical and Theological Studies, with minors in math and music"],
  },
];

export default function BioPage() {
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

                <div className="mt-8 space-y-6 text-lg leading-7 text-foreground-secondary">
                  <p>
                    I am a scholar and educator with Mesa Scholars, a global
                    theological cohort that resources the church worldwide, and a
                    research fellow for the Department of Hebrew, University of the
                    Free State, Bloemfontein, South Africa. My research focuses on
                    the literary artistry of the Bible, drawing from
                    interdisciplinary approaches, especially cognitive poetics and
                    linguistics. I am passionate about making these insights freely
                    available to Bible educators and readers globally. I received my
                    Ph.D. from the University of Wisconsin–Madison in Hebrew Bible
                    and Northwest Semitic Languages in 2013 and published a
                    monograph on biblical Hebrew poetry,{" "}
                    <em>Unparalleled Poetry</em>, in 2023.
                  </p>

                  <p>
                    While my expertise is now in biblical poetry, I did not
                    appreciate or read much poetry at all until I fell in love with
                    the Song of Songs in Hebrew, which serendipitously was the same
                    time I fell in love with my husband. It is probably no accident
                    that I have experienced my most significant shifts in thinking
                    about biblical poetry while engaging in the most transformative,
                    cognitive-embodied, and holistic experiences of my life:
                    mothering and permaculture gardening. I hope that through my
                    work more people will experience the beauty of biblical poetry.
                  </p>
                </div>

                {/* Education Section */}
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
              Explore my publications and resources on biblical Hebrew poetry.              </p>
              <div className="mt-8">
              <Button href="/contact" variant="outline">
                      Get in Touch
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
