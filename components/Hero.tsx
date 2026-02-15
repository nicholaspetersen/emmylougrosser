import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-background-secondary h-[680px] overflow-hidden isolate">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-background-secondary" />
        {/* Decorative pattern - right side */}
        <div 
          className="absolute right-0 top-[-68%] w-full h-[189%]"
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
      <div className="relative z-10 mx-auto max-w-[1280px] px-8 h-full flex items-center">
        <div className="max-w-[560px] flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <p 
              className="font-normal text-4xl leading-[44px] tracking-[-0.72px] text-foreground"
              style={{ fontFamily: 'var(--font-crimson)' }}
            >
              Emmylou Grosser, PhD
            </p>
            <h1 
              className="font-medium text-[68px] leading-[72px] tracking-[-1.36px] text-foreground"
              style={{ fontFamily: 'var(--font-crimson)' }}
            >
              Illuminating the Artistry of Scripture
            </h1>
            <p className="text-xl leading-[30px] text-foreground-secondary max-w-[470px]">
              Research, publications, and resources that illuminate the Bible&apos;s literary artistry.
            </p>
          </div>
          <div className="flex gap-4 items-start">
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
