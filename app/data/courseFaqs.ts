export interface FAQItem {
  question: string;
  answer: string;
}

export const faqTitle = "Frequently asked questions";

export const faqs: FAQItem[] = [
  {
    question: "How do I enroll in an online course?",
    answer:
      "Anyone with an interest in learning can enroll! We have beginner-friendly, intermediate, and advanced-level courses for students, professionals, and lifelong learners.",
  },
  {
    question: "How do I register for a course?",
    answer:
      "You can browse our course catalog, select your desired program, and complete the registration process online using our secure payment system.",
  },
  {
    question: "Are your courses available online or offline?",
    answer:
      "Most of our courses are available online, allowing you to learn anytime, anywhere.",
  },
  {
    question: "Do I need prior knowledge before joining?",
    answer:
      "Each course includes a recommended skill level and prerequisites.",
  },
  {
    question: "How can the course help my career?",
    answer:
      "Our programs are designed to build real-world skills and improve employability.",
  },
];

export const contactCardTitle =
  "Have more questions before you enroll?";

export const contactButton = "Talk to our team";

export const contactFooter =
  "Don't leave your questions unanswered";