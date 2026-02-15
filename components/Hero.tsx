import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-background-secondary min-h-[500px] lg:h-[680px] overflow-hidden isolate">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-background-secondary" />
        {/* Decorative pattern - right side */}
        <div 
          className="absolute right-0 top-[-68%] w-full h-[189%] opacity-30 lg:opacity-100"
          style={{
            backgroundImage: `url('/images/pattern.png')`,
            backgroundSize: 'auto 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
          }}
        />
        {/* Gradient overlay - fades pattern to white on left */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 29%, rgb(255, 255, 255) 69%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 h-full flex items-center py-12 lg:py-0">
        <div className="max-w-[560px] flex flex-col gap-8 lg:gap-12">
          <div className="flex flex-col gap-4 lg:gap-6">
            <p 
              className="font-normal text-2xl sm:text-3xl lg:text-4xl leading-tight lg:leading-[44px] tracking-[-0.72px] text-foreground"
              style={{ fontFamily: 'var(--font-crimson)' }}
            >
              Emmylou Grosser, PhD
            </p>
            <h1 
              className="font-medium text-[40px] sm:text-[52px] lg:text-[68px] leading-[44px] sm:leading-[56px] lg:leading-[72px] tracking-[-1.36px] text-foreground"
              style={{ fontFamily: 'var(--font-crimson)' }}
            >
              Illuminating the Artistry of Scripture
            </h1>
            <p className="text-lg sm:text-xl leading-7 sm:leading-[30px] text-foreground-secondary max-w-[470px]">
              Research, publications, and resources that illuminate the Bible&apos;s literary artistry.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
            <Button href="/resources" variant="primary">
              Explore resources
            </Button>
            <Button href="/support" variant="outline">
              Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
