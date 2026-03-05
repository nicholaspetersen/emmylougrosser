import Accordion from "./ui/Accordion";

const faqItems = [
  {
    question: "Why does biblical poetry matter?",
    answer:
      "Biblical poetry comprises roughly one-third of the Bible and includes some of its most powerful and beloved texts. Understanding how ancient Hebrew poetry works helps us read and interpret these texts more faithfully, rather than merely importing our own poetry traditions’ reading strategies. Better understanding of what biblical poems do and how they do it also opens up the aesthetic dimension of Scripture, bringing us closer to experiencing the ancient artistry. Moreover, a better understanding of the conventions of biblical poetry can cast light on the conventions of biblical prose, since both belong to the same cultural-literary tradition.",
  },
  {
    question: "Do I need to read Hebrew to appreciate biblical poetry?",
    answer: [
      "Like other poetries, biblical Hebrew poetry is crafted by poets who carefully put particular words from a particular language into a particular order. Poetry artfully exploits the possibilities of its language—sounds and phrases and word meanings and much more—for structures, rhythms, and effects. Translations (especially with resource guides) can help us better appreciate poems we can’t read, even though no translation of a poem can do all the things that the original poem does.",
      "I believe that if more people were exposed to the beauty and joy of reading biblical poems in Hebrew, more people would learn Hebrew. I also believe that if more wordsmiths who don’t read Hebrew were shown the artistry of biblical poems, more artful translations would be created and new poems/songs would be inspired, which would in turn be appreciated in new ways by their audiences.",
    ],
  },
  {
    question: "Who is this website for?",
    answer: [
      "This website is for anyone interested in the literary artistry of the Bible—scholars, students, translators, pastors, and curious readers. Whether you're conducting academic research, preparing a sermon, or simply want to deepen your appreciation of Scripture's poetry, you'll find resources here to help.",
      "At this stage, the resources are especially designed for people working with the Hebrew text, with varying degrees of familiarity with current scholarly conversations. My intention is for the users of this website to in turn make this material usable for their own audiences in their own unique contexts. Subscribe to the mailing list to receive updates when content is added.",
    ],

  },
  {
    question: "Can I give input for future content?",
    answer:
      "Yes! The resources on this website are for real people in real contexts, best created in partnership. The needs of different audiences are often vastly different, so please reach out about what would best help you in your context. The future content of this website will be shaped by those engaging with it.",
  },
  {
    question: "How is this work funded?",
    answer:
      "This work is funded through a combination of institutional support, grants, and generous donations from individuals who believe in making biblical scholarship accessible. Your contributions help create open-access resources for researchers,educators, translators, and students worldwide.",
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
