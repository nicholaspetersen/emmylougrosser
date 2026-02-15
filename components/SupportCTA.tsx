import Button from "./ui/Button";

export default function SupportCTA() {
  return (
    <section 
      className="relative py-24 overflow-hidden"
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
          className="bg-white/90 backdrop-blur-[7.55px] p-16 flex flex-col gap-8 items-center"
        >
          <div className="text-center max-w-[768px] flex flex-col gap-5">
            <h2 
              className="font-medium text-4xl leading-[44px] tracking-[-0.72px] text-foreground"
              style={{ fontFamily: 'var(--font-crimson)' }}
            >
              Support this work
            </h2>
            <p className="text-xl leading-[30px] text-foreground-secondary">
              Your contribution helps fund the creation of open-access resources
              for educators, translators, and students worldwide.
            </p>
          </div>
          <div className="flex gap-3">
            <Button href="/support" variant="primary">
              Support the work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
