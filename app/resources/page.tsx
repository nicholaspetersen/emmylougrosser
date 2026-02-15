import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PatternHero from "@/components/PatternHero";

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
  },
  {
    title: "Configuring Psalm 29 as a Poem: Cognitive Strategies and the Artful Reading Experience",
    journal: "Religions 15 (2024): 1428",
    link: "https://doi.org/10.3390/rel15121428",
    description:
      "In this article I use color and mark-ups to demonstrate the concepts of Unparalleled Poetry, showing what Psalm 29 does as a poem and how it does it.",
  },
  {
    title: "On the Nature of Poetry, Parallelism, and Methods: A Response to Ernst Wendland",
    journal: "Journal of Translation 20, no. 2 (2024): 81-97",
    link: "https://doi.org/10.54395/JOT-E6UNP",
    description:
      "This article sets my work within the broader context of biblical poetry studies, explaining ways that I build upon and also depart from the work of other scholars.",
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
          title="Resources"
          subtitle="Publications, articles, and other resources on biblical Hebrew poetry"
        />

        {/* Selected Publications */}
        <section className="bg-background-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-8">
            <h2 className="font-serif font-medium text-[30px] leading-[38px] text-foreground">
              Selected Publications
            </h2>

            <div className="mt-6 space-y-6">
              {selectedPublications.map((pub, index) => (
                <article
                  key={index}
                  className="bg-white p-8 shadow-xs"
                >
                  <h3 className="font-serif font-medium text-xl lg:text-2xl text-foreground">
                    {pub.link ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
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
                    <div className="mt-4 flex flex-wrap gap-4">
                      {pub.relatedLinks.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:text-primary-hover transition-colors"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      View Publication →
                    </a>
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

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              {otherResources.map((resource, index) => (
                <article
                  key={index}
                  className="p-6 border border-border-light"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="mt-4 font-semibold text-lg text-foreground">
                    {resource.link ? (
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {resource.title}
                      </a>
                    ) : (
                      resource.title
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-foreground-secondary">
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
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                    >
                      Access Resource →
                    </a>
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
