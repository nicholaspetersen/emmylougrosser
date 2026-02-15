import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PatternHero from "@/components/PatternHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Resources | Dr. Emmylou Grosser",
  description:
    "Publications, articles, and resources on biblical Hebrew poetry by Dr. Emmylou Grosser.",
};

const selectedPublications = [
  {
    title: "Unparalleled Poetry: A Cognitive Approach to the Free-Rhythm Verse of the Hebrew Bible",
    series: "Cognition and Poetics Series",
    publisher: "New York: Oxford University Press, 2023",
    link: "https://global.oup.com/academic/product/unparalleled-poetry-9780190902360?cc=us&lang=en&#",
    description:
      "This monograph argues that the modern framework of \"parallelism\" is not adequate for understanding the structures and effects of biblical Hebrew poetry. I draw upon studies of human perception and the arts to present a new framework for how aural free-rhythm lines are possible in biblical poetry—and even more, how they are a good cognitive fit, as lines fit to lines in part-whole organization. How we understand and hear poetic lines affects how we experience and interpret biblical poems.",
    note: "Note: The content of my earlier articles on David's Lament (2017) and Symmetry in the Song of Deborah (2021) is revised and expanded and included in the monograph.",
    relatedLinks: [
      { label: "David's Lament article", url: "https://muse.jhu.edu/pub/137/article/678742" },
      { label: "Symmetry article", url: "https://brill.com/view/journals/vt/71/2/article-p175_2.xml?language=en&srsltid=AfmBOoppPFye6WH_EtAmTAU9cJ6ed1GkycTRmYu5npdxhx5YUbKKHWU_" },
    ],
    type: "Book",
  },
  {
    title: "Configuring Psalm 29 as a Poem: Cognitive Strategies and the Artful Reading Experience",
    journal: "Religions 15 (2024): 1428",
    link: "https://doi.org/10.3390/rel15121428",
    description:
      "In this article I use color and mark-ups to demonstrate the concepts of Unparalleled Poetry, showing what Psalm 29 does as a poem and how it does it.",
    type: "Article",
  },
  {
    title: "On the Nature of Poetry, Parallelism, and Methods: A Response to Ernst Wendland",
    journal: "Journal of Translation 20, no. 2 (2024): 81-97",
    link: "https://doi.org/10.54395/JOT-E6UNP",
    description:
      "This article sets my work within the broader context of biblical poetry studies, explaining ways that I build upon and also depart from the work of other scholars.",
    type: "Article",
  },
];

const otherResources = [
  {
    title: "Biblical Hebrew Poetry with Emmylou Grosser",
    source: "The Biblical Languages Podcast (Biblingo)",
    link: "https://www.youtube.com/watch?v=kYN_j-EEMrM",
    description:
      "Kevin Grasso and I had a fun time discussing what lines are in biblical Hebrew poetry, in the context of Psalm 29. Not surprisingly, we ran out of time before we ran out of things to talk about.",
    type: "Podcast",
  },
  {
    title: "Can a Cognitive Framework for Poetry Inform the Study of Narrative?",
    source: "Diegesis in Mind",
    link: "https://diegesis-in-mind.com/2024/02/01/can-a-cognitive-framework-for-poetry-inform-the-study-of-narrative/",
    description:
      "In this written interview, Michael Lyons asks some key questions about my cognitive approach to biblical poetry, including how it might help us with the study of narrative.",
    type: "Interview",
  },
  {
    title: "How Lines Matter in Biblical Poetry: The Song of the Sea (Exodus 15:1-18) as a Case Study",
    source: "Bible Translation Conference, Chiang Mai, 2025",
    description:
      "Conference presentation created especially for people working in Bible translation.",
    type: "Presentation",
    note: "Link forthcoming",
  },
  {
    title: "Hebrew Poetic Structures and Potential Effects in Relation to Quality Poetry Translations",
    source: "Bible Translation Conference, Quality in Translation, Dallas, 2023",
    link: "https://btconference.squarespace.com/2023-proceedings/hebrew-poetic-structures-and-potential-effects-in-relation-to-quality-poetry-translations",
    description:
      "Conference presentation created especially for people working in Bible translation.",
    type: "Presentation",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <PatternHero
          label="Resources"
          title="Publications & Resources"
          subtitle="Publications, articles, and other resources on biblical Hebrew poetry"
        />

        {/* Selected Publications */}
        <section className="bg-background-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-8">
            <h2 className="font-serif font-medium text-[30px] leading-[38px] text-foreground">
              Selected Publications
            </h2>

            <div className="mt-12 space-y-6">
              {selectedPublications.map((pub, index) => (
                <article
                  key={index}
                  className="bg-white p-8 shadow-xs"
                >
                  {/* Icon with background circle */}
                  <div className="mb-4">
                    <div className="inline-flex rounded-full items-center justify-center w-10 h-10 bg-primary/10">
                      {pub.type === "Book" && (
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      )}
                      {pub.type === "Article" && (
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <h3 className="font-serif font-medium text-xl lg:text-2xl text-foreground">
                    {pub.title}
                  </h3>
                  {pub.series && (
                    <p className="mt-1 text-sm text-foreground-secondary">{pub.series}</p>
                  )}
                  {pub.publisher && (
                    <p className="mt-1 text-sm text-foreground-secondary">
                      {pub.publisher}
                    </p>
                  )}
                  {pub.journal && (
                    <p className="mt-1 text-sm text-foreground-secondary italic">
                      {pub.journal}
                    </p>
                  )}
                  <p className="mt-4 text-foreground-secondary leading-7">
                    {pub.description}
                  </p>
                  {pub.note && (
                    <p className="mt-3 text-sm text-foreground-tertiary italic">
                      {pub.note}
                    </p>
                  )}
                  {pub.relatedLinks && (
                    <div className="mt-6 pt-4 border-t border-border-light">
                      <p className="text-sm font-semibold text-foreground mb-3">
                        Earlier versions of this content:
                      </p>
                      <div className="flex flex-wrap gap-4">
                        {pub.relatedLinks.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-foreground-secondary hover:text-foreground transition-colors underline"
                          >
                            {link.label} →
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  {pub.link && (
                    <div className="mt-6">
                      <Button
                        href={pub.link}
                        variant="primary"
                        external
                      >
                        View Publication
                      </Button>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Other Resources */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-8">
            <h2 className="font-serif font-medium text-[30px] leading-[38px] text-foreground">
              Other Resources
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherResources.map((resource, index) => (
                <article
                  key={index}
                  className="p-6 border border-border-light"
                >
                  {/* Icon with background circle stacked above title */}
                  <div className="mb-4">
                    <div className="inline-flex rounded-full items-center justify-center w-10 h-10 bg-primary/10">
                      {resource.type === "Podcast" && (
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                          />
                        </svg>
                      )}
                      {resource.type === "Interview" && (
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      )}
                      {resource.type === "Presentation" && (
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {resource.title}
                  </h3>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    {resource.source}
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary leading-relaxed">
                    {resource.description}
                  </p>
                  {resource.note && (
                    <p className="mt-2 text-xs text-foreground-tertiary italic">
                      {resource.note}
                    </p>
                  )}
                  {resource.link && (
                    <div className="mt-6">
                      <Button
                        href={resource.link}
                        variant="primary"
                        external
                      >
                        View Resource
                      </Button>
                    </div>
                  )}
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
