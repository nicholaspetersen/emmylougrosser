import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PatternHero from "@/components/PatternHero";
import Button from "@/components/ui/Button";
import { safeFetch } from "@/sanity/lib/client";
import { publicationsQuery, resourcesPageQuery, resourcesQuery } from "@/sanity/lib/queries";
import type { Publication, Resource, ResourcesPage } from "@/sanity/lib/types";

function resourceHref(resource: Resource): string | undefined {
  if (resource.linkType === "file") return resource.attachmentUrl || resource.link;
  if (resource.linkType === "none") return undefined;
  return resource.link;
}

function ResourceTypeIcon({ type }: { type: Resource["type"] }) {
  if (type === "Podcast") {
    return (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    );
  }

  if (type === "Interview") {
    return (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    );
  }

  if (type === "Presentation") {
    return (
      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      </svg>
    );
  }

  return (
    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  const href = resourceHref(resource);

  return (
    <article className="p-6 border border-border-light">
      <div className="mb-4">
        <div className="inline-flex rounded-full items-center justify-center w-10 h-10 bg-primary/10">
          <ResourceTypeIcon type={resource.type} />
        </div>
      </div>
      <h3 className="font-semibold text-lg text-foreground">
        {resource.title}
      </h3>
      {resource.source && (
        <p className="mt-3 text-sm text-foreground-secondary">
          {resource.source}
        </p>
      )}
      <p className="mt-3 text-sm text-foreground-secondary leading-relaxed">
        {resource.description}
      </p>
      {resource.note && (
        <p className="mt-2 text-xs text-foreground-tertiary italic">
          {resource.note}
        </p>
      )}
      {href && (
        <div className="mt-6">
          <Button href={href} variant="primary" external>
            View Resource
          </Button>
        </div>
      )}
    </article>
  );
}

function FeaturedResourceCard({ resource }: { resource: Resource }) {
  const href = resourceHref(resource);

  return (
    <article className="bg-white p-6 sm:p-8 shadow-xs">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-col lg:flex-row lg:gap-5">
          <div className="mb-4 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 lg:mb-0">
            <ResourceTypeIcon type={resource.type} />
          </div>
          <div className="min-w-0">
            <p className="text-base font-semibold leading-6 text-accent">Featured Resource</p>
            <h2 className="mt-1 font-serif font-medium text-xl lg:text-2xl text-foreground">
              {resource.title}
            </h2>
            {resource.source && (
              <p className="mt-1 text-sm text-foreground-secondary">{resource.source}</p>
            )}
            <p className="mt-2 text-foreground-secondary leading-7">{resource.description}</p>
            {resource.note && (
              <p className="mt-2 text-sm text-foreground-tertiary italic">{resource.note}</p>
            )}
          </div>
        </div>
        {href && (
          <div className="shrink-0 lg:pl-8">
            <Button href={href} variant="primary" external>
              View Resource
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Resources | Dr. Emmylou Grosser",
  description:
    "Publications, articles, and resources on biblical Hebrew poetry by Dr. Emmylou Grosser.",
};

export default async function ResourcesPage() {
  const [selectedPublications, otherResources, resourcesPage] = await Promise.all([
    safeFetch<Publication[]>(publicationsQuery, []),
    safeFetch<Resource[]>(resourcesQuery, []),
    safeFetch<ResourcesPage | null>(resourcesPageQuery, null),
  ]);

  const featuredResource = resourcesPage?.featuredResource;

  return (
    <>
      <Header />
      <main>
        <PatternHero
          title="Publications & Resources"
          subtitle="Publications, articles, and other resources on biblical Hebrew poetry"
        />

        {featuredResource && (
          <section className="bg-background-secondary pt-16 lg:pt-24">
            <div className="mx-auto max-w-[1280px] px-8">
              <FeaturedResourceCard resource={featuredResource} />
            </div>
          </section>
        )}

        {/* Selected Publications */}
        <section className={featuredResource ? "bg-background-secondary pt-12 lg:pt-16" : "bg-background-secondary pt-16 lg:pt-24"}>
          <div className="mx-auto max-w-[1280px] px-8">
            <h2 className="font-serif font-medium text-[30px] leading-[38px] text-foreground text-center">
              Selected Publications
            </h2>

            <div className="mt-12 space-y-6">
              {selectedPublications.map((pub) => (
                <article
                  key={pub._id}
                  className="bg-white p-8 shadow-xs"
                >
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
                  {pub.relatedLinks && pub.relatedLinks.length > 0 && (
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
        <section className="bg-background-secondary pt-12 lg:pt-16 pb-16 lg:pb-24">
          <div className="mx-auto max-w-[1280px] px-8">
            <h2 className="font-serif font-medium text-[30px] leading-[38px] text-foreground text-center">
              Other Resources
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherResources.map((resource) => (
                <ResourceCard key={resource._id} resource={resource} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
