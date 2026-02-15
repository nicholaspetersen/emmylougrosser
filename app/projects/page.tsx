import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PatternHero from "@/components/PatternHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Projects | Dr. Emmylou Grosser",
  description:
    "Current research projects in biblical Hebrew poetry by Dr. Emmylou Grosser.",
};

const projects = [
  {
    title: "Poetics of biblical poetry",
    description:
      "The structure and artistry of the Song of the Sea (Exodus 15:1-18), including a forthcoming article in the REPAC Symposium Proceedings, \"Textual Repetition and Creativity in Ancient Mesopotamia, Israel, Egypt and China\" (Universität Wien, February 2024)",
    links: [
      {
        label: "REPAC Project",
        url: "https://ucrisportal.univie.ac.at/en/projects/repetition-parallelism-and-creativity-an-inquiry-into-the-constru/",
      },
    ],
    status: "Active",
  },
  {
    title: "Biblical Hebrew poetry and the Masoretic accents",
    description:
      "The interface of poetic structure and the Masoretic accents from a prosodic phonological framework, a collaborative research project.",
    collaborators: [
      {
        name: "Dr. Sophia Pitcher",
        url: "https://ufs.academia.edu/SophiaPitcher",
      },
    ],
    status: "Active",
  },
  {
    title: "Poetics of biblical narrative",
    description:
      "Exploring the Song of the Sea (Exodus 15:1-18) in its narrative context, examining how poetic and narrative elements interact and enhance each other.",
    status: "Active",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <PatternHero
          title="Projects"
          subtitle="Current research in biblical Hebrew poetry"
        />

        <section className="bg-background-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-8">
            <h2 className="font-serif font-medium text-[30px] leading-[38px] text-foreground">
              Current Projects
            </h2>

            <div className="mt-6 space-y-6">
              {projects.map((project, index) => (
                <article
                  key={index}
                  className="bg-white p-8 shadow-xs"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif font-medium text-xl lg:text-2xl text-foreground">
                      {project.title}
                    </h3>
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded flex-shrink-0">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-4 text-foreground-secondary leading-7">
                    {project.description}
                  </p>

                  {project.collaborators && (
                    <div className="mt-6">
                      <p className="text-sm text-foreground-tertiary">
                        Collaborator{project.collaborators.length > 1 ? "s" : ""}:
                      </p>
                      <div className="mt-2 flex flex-wrap gap-3">
                        {project.collaborators.map((collaborator, collabIndex) => (
                          <a
                            key={collabIndex}
                            href={collaborator.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                          >
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
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                            {collaborator.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.links && project.links.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-4">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Get Involved CTA */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif font-medium text-[30px] leading-[38px] text-white">
                Interested in Collaboration?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                I welcome opportunities to collaborate with scholars working on
                biblical poetry, cognitive linguistics, or related fields.
              </p>
              <div className="mt-8">
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                >
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
