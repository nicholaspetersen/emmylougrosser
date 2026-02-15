import Accordion from "./ui/Accordion";

const faqItems = [
  {
    question: "Why does biblical poetry matter?",
    answer:
      "Biblical poetry comprises roughly one-third of the Hebrew Bible and includes some of its most powerful and beloved texts. Understanding how Hebrew poetry works—its structures, rhythms, and effects—helps us read and interpret these texts more faithfully. It also opens up the aesthetic dimension of Scripture, allowing us to experience its artistry as ancient audiences did.",
  },
  {
    question: "Who is this website for?",
    answer:
      "This website is for anyone interested in the literary artistry of the Bible—scholars, students, translators, pastors, and curious readers. Whether you're conducting academic research, preparing a sermon, or simply want to deepen your appreciation of Scripture's poetry, you'll find resources here to help.",
  },
  {
    question: "How is this work funded?",
    answer:
      "This work is funded through a combination of institutional support, grants, and generous donations from individuals who believe in making biblical scholarship accessible. Your contributions help create open-access resources for educators, translators, and students worldwide.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-background-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="flex flex-col gap-12 lg:gap-16 items-center">
          {/* Section Header */}
          <div className="text-center max-w-[900px]">
            <p className="text-base font-semibold leading-6 text-accent">
              FAQ
            </p>
            <h2 
              className="mt-2 font-medium text-3xl lg:text-4xl leading-tight lg:leading-[44px] tracking-[-0.72px] text-foreground"
              style={{ fontFamily: 'var(--font-crimson)' }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion */}
          <div className="w-full max-w-[700px]">
            <Accordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
