import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PatternHero from "@/components/PatternHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Workshops | Dr. Emmylou Grosser",
  description:
    "Workshops and presentations on biblical Hebrew poetry by Dr. Emmylou Grosser.",
};

const workshops: Array<{
  title: string;
  date: string;
  description?: string;
  event?: string;
  location?: string;
  cta?: { label: string; href: string };
}> = [
  {
    title: "Virtual workshops on the Song of the Sea (Exodus 15:1-18)",
    date: "Spring, 2026",
    cta: { label: "Contact me", href: "/contact" },
  },
  {
    title: "Biblical Hebrew Poetry and Cognitive Strategies",
    event: "Cognitive Linguistics in Biblical Interpretation pre-SBL Workshop",
    location: "Denver, CO",
    date: "Friday, November 20, 2026, 3-6 pm",
  },
];

const upcomingPresentations = [
  {
    title:
      "Building on Unparalleled Poetry: Contributions and Ongoing Research Questions for Biblical Hebrew Poetry",
    event:
      "'My tongue is the pen of a skillful scribe': Poetics, Performance, and Philology",
    organizer: "Centre for the Study of the Bible",
    location: "Oriel College, University of Oxford",
    date: "Sunday, April 26, 2026",
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <Header />
      <main>
        <PatternHero
          title="Biblical Poetry Workshops"
          subtitle="Learn about biblical Hebrew poetry through interactive sessions"
        />

        {/* Biblical Poetry Workshops */}
        <section className="bg-background-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-8">
            <h2 className="font-serif font-medium text-[30px] leading-[38px] text-foreground text-center">
              Biblical Poetry Workshops
            </h2>

            <div className="mt-12 space-y-6">
              {workshops.map((workshop, index) => (
                <article
                  key={index}
                  className="bg-white p-8 shadow-xs"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="font-serif font-medium text-xl lg:text-2xl text-foreground">
                        {workshop.title}
                      </h3>
                      {workshop.event && (
                        <p className="mt-2 text-foreground-secondary">
                          {workshop.event}
                        </p>
                      )}
                      <div className="mt-4 flex flex-wrap gap-4 text-sm">
                        {workshop.location && (
                          <span className="inline-flex items-center gap-1 text-foreground-secondary">
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {workshop.location}
                          </span>
                        )}
                        <span className="inline-flex items-center gap-1 text-foreground-secondary">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {workshop.date}
                        </span>
                      </div>
                      {workshop.description && (
                        <p className="mt-4 text-foreground-secondary">
                          {workshop.description}
                        </p>
                      )}
                    </div>
                    {workshop.cta && (
                      <div className="flex-shrink-0">
                        <Button href={workshop.cta.href} variant="primary">
                          {workshop.cta.label}
                        </Button>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Presentations */}
        <section className="bg-background-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-8">
            <h2 className="font-serif font-medium text-[30px] leading-[38px] text-foreground text-center">
              Upcoming Presentations
            </h2>

            <div className="mt-12 space-y-6">
              {upcomingPresentations.map((presentation, index) => (
                <article key={index} className="bg-white p-8 shadow-xs">
                  <h3 className="font-serif font-medium text-xl lg:text-2xl text-foreground">
                    {presentation.title}
                  </h3>
                  <p className="mt-3 text-lg text-primary font-medium">
                    {presentation.event}
                  </p>
                  <p className="mt-1 text-foreground-secondary">{presentation.organizer}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm">
                    <span className="inline-flex items-center gap-1 text-foreground-secondary">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {presentation.location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-foreground-secondary">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {presentation.date}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif font-medium text-[30px] leading-[38px] text-white">
                Interested in a Workshop?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                I offer workshops and presentations on biblical Hebrew poetry for various audiences, from academic conferences to church groups. Let&apos;s discuss how I can serve your community.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="secondary" size="lg">
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
