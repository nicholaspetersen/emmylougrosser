interface PageHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
}

export default function PageHeader({ title, subtitle, label }: PageHeaderProps) {
  return (
    <section className="bg-background-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-8 text-center flex flex-col items-center">
        {label && (
          <p className="text-base font-semibold leading-6 text-accent mb-2">
            {label}
          </p>
        )}
        <h1 className="font-serif font-medium text-4xl lg:text-[44px] leading-[44px] tracking-[-0.72px] text-foreground text-center">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 font-serif text-xl leading-[30px] text-foreground-secondary max-w-2xl text-center">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
