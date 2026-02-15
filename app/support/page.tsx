import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PatternHero from "@/components/PatternHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Support | Dr. Emmylou Grosser",
  description:
    "Support open-access scholarship in biblical Hebrew poetry. Learn how you can help make these insights freely available.",
};

const supportWays = [
  {
    title: "Share the Resources",
    description:
      "Help spread awareness of biblical Hebrew poetry research by sharing articles, presentations, and resources with colleagues, students, and faith communities.",
    icon: "share",
  },
  {
    title: "Invite Me to Speak",
    description:
      "Bring insights into biblical Hebrew poetry to your institution, church, or conference. I offer workshops, lectures, and seminars for various audiences.",
    icon: "speak",
  },
  {
    title: "Financial Support",
    description:
      "Your financial contributions help sustain independent scholarship and enable the creation of new open-access resources for the global church.",
    icon: "heart",
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main>
        <PatternHero
          title="Support This Work"
          subtitle="Help make biblical poetry scholarship freely available worldwide"
        />

        {/* Mission Statement & Ways to Support */}
        <section className="bg-background-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-8">
            {/* Mission Statement - centered */}
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif font-medium text-[30px] leading-[38px] text-foreground">
                Open-Access Scholarship
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-7 text-foreground-secondary">
                <p>
                  I am passionate about making insights into biblical poetry freely
                  available to Bible educators and readers around the world. Too
                  often, academic scholarship remains locked behind expensive
                  paywalls, inaccessible to those who could benefit most from it.
                </p>
                <p>
                  My goal is to bridge the gap between academic research and the
                  global church—from seminary professors to local pastors, from
                  Bible translators to curious readers. Everyone deserves access to
                  tools that can deepen their appreciation of Scripture&apos;s literary
                  artistry.
                </p>
                <p>
                  Your support helps sustain this mission. Whether through sharing
                  resources, inviting me to speak, or contributing financially, you
                  become a partner in making biblical poetry scholarship accessible
                  to all.
                </p>
              </div>
            </div>

            {/* Ways to Support */}
            <div className="mt-24">
              <h2 className="font-serif font-medium text-[30px] leading-[38px] text-foreground text-center">
                Ways to Support
              </h2>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {supportWays.map((way, index) => (
                  <article
                  key={index}
                  className="bg-white p-8 shadow-xs flex flex-col"
                >
                    {/* Icon with background circle */}
                    <div className="mb-6 flex">
                      <div className="inline-flex rounded-full items-center justify-center w-10 h-10 bg-primary/10">
                        {way.icon === "share" && (
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
                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                            />
                          </svg>
                        )}
                        {way.icon === "speak" && (
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
                        {way.icon === "heart" && (
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
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl text-foreground">
                      {way.title}
                    </h3>
                    <p className="mt-4 text-foreground-secondary">{way.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved CTA */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif font-medium text-[30px] leading-[38px] text-white">
                Ready to Get Involved?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                I&apos;d love to hear from you. Whether you have questions about
                supporting this work or want to discuss a speaking engagement,
                please reach out.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="secondary" size="lg">
                  Contact Me
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
