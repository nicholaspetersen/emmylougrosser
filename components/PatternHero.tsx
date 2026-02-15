interface PatternHeroProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export default function PatternHero({ title, subtitle, label }: PatternHeroProps) {
  return (
    <section 
      className="relative py-8 overflow-hidden"
      style={{
        backgroundImage: `url('/images/pattern.png')`,
        backgroundSize: '936px 936px',
        backgroundPosition: 'top left',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="mx-auto max-w-[1280px] px-8">
        {/* Frosted glass card */}
        <div 
          className="bg-white/90 backdrop-blur-[7.55px] p-12 lg:p-16 flex flex-col items-center"
        >
          <div className="text-center max-w-[768px] flex flex-col gap-5">
            {label && (
              <p className="text-base font-semibold leading-6 text-accent">
                {label}
              </p>
            )}
            <h1 
              className="font-medium text-4xl lg:text-[44px] leading-[44px] tracking-[-0.72px] text-foreground"
              style={{ fontFamily: 'var(--font-crimson)' }}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="font-serif text-xl leading-[30px] text-foreground">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
