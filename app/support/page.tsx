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


export default function SupportPage() {
  return (
    <>
      <Header />
      <main>
        <PatternHero
          title="Support This Work"
          subtitle="Help make biblical poetry scholarship freely available worldwide"
        />

        {/* Give Financially */}
        <section className="bg-background-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-[800px] px-8">
            <p className="text-base font-semibold leading-6 text-accent">Support This Work</p>
            <h2 className="mt-2 font-serif font-medium text-[30px] leading-[38px] text-foreground">
              Give Financially
            </h2>
            <p className="mt-4 text-lg leading-7 text-foreground-secondary">
              I am passionate about making biblical poetry scholarship freely available to educators
              and readers around the world. There are two ways to give — choose whichever works best for you.
            </p>

            <div className="mt-12 space-y-0 divide-y divide-border">
              {/* Mesa Global */}
              <div className="py-8 flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="inline-flex rounded-full items-center justify-center w-10 h-10 bg-primary/10 flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-foreground">Tax-Deductible Gift</h3>
                  <p className="mt-1 text-sm font-medium text-accent">via Mesa Global</p>
                  <p className="mt-3 text-foreground-secondary">
                    Give through Mesa Global to support ongoing open-access resource development. This fund is ongoing and tax-deductible for US donors.
                  </p>
                </div>
                <div className="sm:flex-shrink-0">
                  <Button href="https://www.mesaglobal.co/projects/68046" variant="primary" external>
                    Give via Mesa Global
                  </Button>
                </div>
              </div>

              {/* GoFundMe */}
              <div className="py-8 flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="inline-flex rounded-full items-center justify-center w-10 h-10 bg-primary/10 flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-foreground">Make <em>Unparalleled Poetry</em> Open Access</h3>
                  <p className="mt-1 text-sm font-medium text-accent">via GoFundMe</p>
                  <p className="mt-3 text-foreground-secondary">
                    Help make this book free to download for readers everywhere. If 46 people donate the cost of one book ($115), <em>Unparalleled Poetry</em> will become open access. We&apos;re already 40% of the way there!
                  </p>
                </div>
                <div className="sm:flex-shrink-0">
                  <Button href="#" variant="outline" external>
                    Give via GoFundMe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Ways to Support */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-[800px] px-8">
            <h2 className="font-serif font-medium text-[30px] leading-[38px] text-white">
              Other Ways to Help
            </h2>
            <div className="mt-10 space-y-0 divide-y divide-white/20">
              <div className="py-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="inline-flex rounded-full items-center justify-center w-10 h-10 bg-white/10 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-white">Share the Resources</h3>
                  <p className="mt-1 text-white/70">Share articles and resources with colleagues, students, and faith communities.</p>
                </div>
                <a href="/resources" className="text-sm font-semibold text-white/90 hover:text-white transition-colors sm:flex-shrink-0">
                  Browse resources →
                </a>
              </div>
              <div className="py-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="inline-flex rounded-full items-center justify-center w-10 h-10 bg-white/10 flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-white">Provide Feedback</h3>
                  <p className="mt-1 text-white/70">Tell me about what&apos;s useful and what you&apos;d like to see on this website.</p>
                </div>
                <a href="/contact" className="text-sm font-semibold text-white/90 hover:text-white transition-colors sm:flex-shrink-0">
                  Get in touch →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
