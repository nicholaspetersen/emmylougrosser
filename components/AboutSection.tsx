import Button from "./ui/Button";

export default function AboutSection() {
  return (
    <section className="bg-background-secondary py-24 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="flex items-center justify-center">
          {/* Photo - large rounded rectangle */}
          <div className="relative w-[540px] h-[540px] rounded-2xl shadow-xs overflow-hidden flex-shrink-0">
            {/* Placeholder for photo */}
            <div className="absolute inset-0 bg-[#e8e8e8] flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="mx-auto h-24 w-24 text-foreground-secondary/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <p className="mt-2 text-sm text-foreground-secondary/50">Photo</p>
              </div>
            </div>
          </div>

          {/* Content Card - overlaps photo from right */}
          <div className="bg-white p-12 w-[665px] -ml-[35px] relative z-10">
            <div className="flex flex-col gap-5">
              <h2 
                className="font-medium text-4xl leading-[44px] tracking-[-0.72px] text-foreground"
                style={{ fontFamily: 'var(--font-crimson)' }}
              >
                About Dr. Grosser
              </h2>
              <div className="text-xl leading-[30px] text-foreground-secondary space-y-5">
                <p>
                  I&apos;m a biblical scholar and the author of Unparalleled Poetry, a
                  book that challenges readers to move beyond the limited framework
                  of parallelism and adopt a new framework that does justice to the
                  multidimensional patterning of the free-rhythm poetry of the
                  Hebrew Bible.
                </p>
                <p>
                  I love studying the verbal art of the Bible, and I&apos;ve created
                  this space to share my research and resources built from it.
                </p>
              </div>
              <div className="mt-1">
                <Button href="/bio" variant="outline">
                  Read bio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
