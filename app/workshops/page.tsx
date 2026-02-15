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

const workshops = [
  {
    title: "Virtual workshops on the Song of the Sea (Exodus 15:1-18)",
    date: "Spring, 2026",
    description:
      "Explore the poetic structure and artistry of one of the oldest poems in the Hebrew Bible through interactive virtual sessions.",
    cta: { label: "Contact for more information", href: "/contact" },
  },
  {
    title: "Biblical Hebrew Poetry and Cognitive Strategies",
    event: "Cognitive Linguistics in Biblical Interpretation pre-SBL Workshop",
    location: "Denver, CO",
    date: "Friday, November 20, 2026, 3-6 pm",
    description:
      "A hands-on workshop exploring how cognitive approaches can deepen our understanding of biblical Hebrew poetry.",
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
          title="Workshops"
          subtitle="Learn about biblical Hebrew poetry through interactive sessions"
        />

        {/* Workshop Photo Placeholder */}
        <section className="bg-background-secondary py-12">
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="aspect-[21/9] bg-white rounded-2xl shadow-xs overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="mx-auto h-16 w-16 text-foreground-secondary/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="mt-2 text-sm text-foreground-secondary/50">Workshop Photo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Biblical Poetry Workshops */}
        <section className="bg-background-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-8">
            <h2 className="font-serif font-medium text-[30px] leading-[38px] text-foreground">
              Biblical Poetry Workshops
            </h2>

            <div className="mt-12 space-y-6">
              {workshops.map((workshop, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-xs"
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
                      <p className="mt-4 text-foreground-secondary">
                        {workshop.description}
                      </p>
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
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-8">
            <h2 className="font-serif font-medium text-[30px] leading-[38px] text-foreground">
              Upcoming Presentations
            </h2>

            <div className="mt-12 space-y-6">
              {upcomingPresentations.map((presentation, index) => (
                <article key={index} className="bg-background-secondary rounded-xl p-8 border border-border-light">
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
      </main>
      <Footer />
    </>
  );
}
