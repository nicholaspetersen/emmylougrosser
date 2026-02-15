import Button from "./ui/Button";

export default function FeaturedResource() {
  return (
    <section className="bg-background-secondary py-24 overflow-hidden">
      <div className="flex flex-col gap-12 items-center">
        {/* Section Header - Centered */}
        <div className="text-center max-w-[900px] px-8">
          <p className="text-base font-semibold leading-6 text-accent">
            Resources
          </p>
          <h2 
            className="mt-2 font-medium text-[30px] leading-[38px] text-foreground"
            style={{ fontFamily: 'var(--font-crimson)' }}
          >
            Unparalleled Poetry
          </h2>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-[1280px] px-8 w-full">
          <div className="flex gap-24 items-start justify-center">
            {/* Book Cover with shadow effects */}
            <div className="relative flex-shrink-0">
              <div 
                className="relative"
                style={{
                  filter: 'drop-shadow(0px 8.93px 11.9px rgba(10, 13, 18, 0.08)) drop-shadow(0px 2.98px 4.46px rgba(10, 13, 18, 0.03))'
                }}
              >
                {/* Book cover */}
                <img 
                  src="/images/unparalled-poetry-book-cover.png"
                  alt="Unparalleled Poetry book cover"
                  className="w-[311px] h-auto"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-8 max-w-[680px]">
              <p className="text-lg leading-7 text-foreground-secondary">
                The driving questions of Unparalleled Poetry are, what makes a line
                a line and a poem a poem, and what strategies do we need in order to
                read (= hear!) these poems according to their conventions? By
                highlighting the literary structures and potential effects of
                biblical Hebrew poetry, I seek to help scholars, translators, and
                readers across traditions better understand the text and its
                meaning—and its potential to artistically impact and shape its
                audiences.
              </p>

              <div className="flex gap-3 items-start">
                <Button
                  href="https://global.oup.com/academic/product/unparalleled-poetry-9780190902360"
                  variant="primary"
                  external
                >
                  Purchase
                </Button>
                <Button href="/support" variant="outline">
                  Help make this book open-access
                </Button>
              </div>

              <p className="text-sm leading-5 text-foreground-secondary">
                Academic monographs are inaccessible to many scholars globally due
                to cost. You can help make this book open access (free for download)
                for readers everywhere. Thanks to a generous gift, we are 40% of the
                way there. If 46 people donate the cost of one book ($115),
                Unparalleled Poetry will become open access!
              </p>

              <div className="flex gap-6 items-start">
                <a
                  href="/resources"
                  className="text-base font-semibold leading-6 text-foreground-secondary hover:text-foreground transition-colors"
                >
                  View Biblical Poetry
                </a>
                <a
                  href="/resources"
                  className="text-base font-semibold leading-6 text-foreground-secondary hover:text-foreground transition-colors"
                >
                  View other publications
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
