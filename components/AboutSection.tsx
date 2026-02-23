import Image from "next/image";
import Button from "./ui/Button";

export default function AboutSection() {
  return (
    <section className="bg-background-secondary py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Photo - large rounded rectangle */}
          <div className="relative w-full max-w-[400px] lg:max-w-none lg:w-[600px] aspect-square shadow-xs overflow-hidden flex-shrink-0">
            <Image
              src="/images/emmylou-grosser.jpg"
              alt="Dr. Emmylou Grosser"
              fill
              sizes="(max-width: 768px) 400px, 600px"
              className="object-cover"
              priority
            />
          </div>

          {/* Content Card - overlaps photo from right on desktop, stacks on mobile */}
          <div className="bg-white p-8 lg:p-11 w-full lg:w-[560px] -mt-12 lg:-mt-0 lg:-ml-[20px] relative z-10 shadow-xs lg:shadow-none">
            <div className="flex flex-col gap-4 lg:gap-5">
              <h2 
                className="font-medium text-3xl lg:text-4xl leading-tight lg:leading-[44px] tracking-[-0.72px] text-foreground"
                style={{ fontFamily: 'var(--font-crimson)' }}
              >
                About Dr. Grosser
              </h2>
              <div className="text-base lg:text-lg leading-7 text-foreground-secondary space-y-4 lg:space-y-5">
                <p>
                  I&apos;m a biblical scholar and the author of <em>Unparalleled Poetry</em>, a
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
