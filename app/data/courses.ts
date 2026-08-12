
export interface Course {
  id: number;
  slug: string;
  title: string;
  category: string;
  price: string;
  buyButtonText: string;
  lessons: string;
  
  instructor: string;
  image: string;
  description: string;
  // Info Card
  duration: string;
  lectures: string;
  skillLevel: string;
  videoDuration: string;
  participants: string;

  durationImage: string;
  lectureImage: string;
  skillImage: string;
  videoImage: string;
  participantImage: string;
  courseDescription1: string;
courseDescription2: string;

mainFeatures: string[];
keyHighlightsTitle: string;

keyHighlightsDescription: string;

keyHighlights: string[];

keyHighlightsFooter: string;
instructorImage: string;

instructorName: string;

instructorRole: string;

students: string;

instructorDescription: string;

skills: string[];
 // FAQ
  faqTitle: string;
 

  // Right Card
  contactCardTitle: string;
  contactButton: string;
  contactFooter: string;
  //modules
  modules: {
  module: string;
  hours: string;
  title: string;
  image: string;
  topics: string[];
}[];
}

export const courses: Course[] = [
  {
    id: 1,
    slug: "professional-writing",
    title: "Professional writing and communication mastery",

   category:"DESIGN",
    price: "$160.00 USD",
     buyButtonText: "Buy this course",
     image:
      "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/69006048550ade63440895f5_koursio-course-card-two-language-03.webp",
    lessons: "32 LESSONS",
   
    instructor: "Sarah Johnson",
   
    description:
      "Master professional writing, emails, reports, grammar, business communication, and presentation skills through practical assignments and real-world projects.",
      duration: "3 weeks",

  lectures: "42",

  skillLevel: "Beginner",

  videoDuration: "1 hr 28 min",

  participants: "7.1k students",

  durationImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8b_Clock%20Icons-2.svg",

  lectureImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e89_Books%20Icons.svg",

  skillImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8a_Skills%20Arrow.svg",

  videoImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8d_Video%20Icons.svg",

  participantImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8c_Persons.svg",
    courseDescription1:
  "This course unlocks creative potential by teaching learners how to use modern digital design tools with confidence and imagination. It explores the latest software, design techniques, and workflows used by professionals to create visually compelling content. Learners gain practical skills to bring their ideas to life across branding, digital graphics, UI/UX, and visual storytelling projects.",

courseDescription2:
  "With a hands-on approach, the course empowers students to experiment, innovate, and refine their artistic style. It introduces essential tools, shortcuts, and smart design methods to improve productivity and creativity. By the end, learners will be able to craft polished designs that align with current industry trends and creative standards.",

mainFeatures: [
  "Practical training using top modern design tools.",
  "Hands-on projects to apply creative design skills.",
  "Techniques to enhance creativity and visual thinking.",
  "Industry trends, styles, and design best practices.",
  "Time-saving workflows, shortcuts, and tool mastery.",
  "Guidance to build a strong creative design portfolio."
],
keyHighlightsTitle: "Key highlights",

keyHighlightsDescription:
"Our intensive Angular course covers component architecture, reactive programming, TypeScript, and state management to build scalable, modern single-page applications.",

keyHighlights: [

"Comprehensive curriculum",

"Industry-recognized certification",

"Interactive learning experience",

"Downloadable study materials",

"Personalized mentorship",

"Community access",

"Industry-relevant skills",

"Lifetime access",

"Lifetime interview preparation support"

],

keyHighlightsFooter:
"This program emphasizes practical application, taking you through every stage from initial project setup to final deployment. You will complete a large-scale capstone project, ensuring you graduate with a strong portfolio piece and the confidence to tackle real-world challenges in a professional development environment.",
instructorImage:
"https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/69142b17d16c24537b04a115_member-jasmine-square.webp",

instructorName:"Jasmine Konopelski",

instructorRole:"Software Engineer",

students:"7.1k students",

instructorDescription:
"A dedicated engineer skilled in full stack development, scalable applications, and automation solutions. Jasmine prepares students with essential technology skills backed by strong practical knowledge.",

skills:[
"Software development",
"Database management",
"Cloud computing"
],
faqTitle: "Frequently asked questions",


contactCardTitle:"Have more questions before you enroll?",

contactButton:"Talk to our team",

contactFooter:"Don't leave your questions unanswered",
modules: [
  {
    module: "Module 1",
    hours: "14 hours",
    title: "Linguistic precision and tone control",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f74cf4bbf742512fb296_course-module-image-1.webp",
    topics: [
      "Clarity and simplicity",
      "Writing cohesion",
      "Tone variation",
      "Advanced grammar mastery"
    ]
  },

  {
    module: "Module 2",
    hours: "19 hours",
    title: "Impactful storytelling & messaging",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f756dc232dc381f062fd_course-module-image-2.webp",
    topics: [
      "Word choice & semantics",
      "Visual storytelling",
      "Message structuring",
      "Storytelling for brands"
    ]
  },

  {
    module: "Module 3",
    hours: "15 hours",
    title: "Professional writing for brand building",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f765a3a0f59d43040a69_course-module-image-3.webp",
    topics: [
      "Writing hooks & openers",
      "Story elements",
      "Documentation & Storybook",
      "Email & Copywriting"
    ]
  }
],
},

  {
    id: 2,
    slug: "finance-education",
    title: "Unlock wealth strategies through finance education",
   category:"DEVELOPMENT",
    price: "$97.00 USD",
     buyButtonText: "Buy this course",
    lessons: "34 LESSONS",
   
    instructor: "David Brown",
    image:
      "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/68ff65a95e7daa5ef21f02cb_koursio-course-card-two-finance-02.webp",
    description:
      "Learn budgeting, investing, financial planning, saving strategies, and wealth management from experienced finance experts.",
   duration: "3 weeks",

  lectures: "42",

  skillLevel: "Beginner",

  videoDuration: "1 hr 28 min",

  participants: "7.1k students",

  durationImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8b_Clock%20Icons-2.svg",

  lectureImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e89_Books%20Icons.svg",

  skillImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8a_Skills%20Arrow.svg",

  videoImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8d_Video%20Icons.svg",

  participantImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8c_Persons.svg",
 
  courseDescription1:
  "This course unlocks creative potential by teaching learners how to use modern digital design tools with confidence and imagination. It explores the latest software, design techniques, and workflows used by professionals to create visually compelling content. Learners gain practical skills to bring their ideas to life across branding, digital graphics, UI/UX, and visual storytelling projects.",

courseDescription2:
  "With a hands-on approach, the course empowers students to experiment, innovate, and refine their artistic style. It introduces essential tools, shortcuts, and smart design methods to improve productivity and creativity. By the end, learners will be able to craft polished designs that align with current industry trends and creative standards.",

mainFeatures: [
  "Practical training using top modern design tools.",
  "Hands-on projects to apply creative design skills.",
  "Techniques to enhance creativity and visual thinking.",
  "Industry trends, styles, and design best practices.",
  "Time-saving workflows, shortcuts, and tool mastery.",
  "Guidance to build a strong creative design portfolio."
],
keyHighlightsTitle: "Key highlights",

keyHighlightsDescription:
"Our intensive Angular course covers component architecture, reactive programming, TypeScript, and state management to build scalable, modern single-page applications.",

keyHighlights: [

"Comprehensive curriculum",

"Industry-recognized certification",

"Interactive learning experience",

"Downloadable study materials",

"Personalized mentorship",

"Community access",

"Industry-relevant skills",

"Lifetime access",

"Lifetime interview preparation support"

],

keyHighlightsFooter:
"This program emphasizes practical application, taking you through every stage from initial project setup to final deployment. You will complete a large-scale capstone project, ensuring you graduate with a strong portfolio piece and the confidence to tackle real-world challenges in a professional development environment.",
 
instructorImage:
"https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/69142b17d16c24537b04a115_member-jasmine-square.webp",

instructorName:"Jasmine Konopelski",

instructorRole:"Software Engineer",

students:"7.1k students",

instructorDescription:
"A dedicated engineer skilled in full stack development, scalable applications, and automation solutions. Jasmine prepares students with essential technology skills backed by strong practical knowledge.",

skills:[
"Software development",
"Database management",
"Cloud computing"
],
faqTitle: "Frequently asked questions",



contactCardTitle:"Have more questions before you enroll?",

contactButton:"Talk to our team",

contactFooter:"Don't leave your questions unanswered",
modules: [
  {
    module: "Module 1",
    hours: "14 hours",
    title: "Linguistic precision and tone control",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f74cf4bbf742512fb296_course-module-image-1.webp",
    topics: [
      "Clarity and simplicity",
      "Writing cohesion",
      "Tone variation",
      "Advanced grammar mastery"
    ]
  },

  {
    module: "Module 2",
    hours: "19 hours",
    title: "Impactful storytelling & messaging",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f756dc232dc381f062fd_course-module-image-2.webp",
    topics: [
      "Word choice & semantics",
      "Visual storytelling",
      "Message structuring",
      "Storytelling for brands"
    ]
  },

  {
    module: "Module 3",
    hours: "15 hours",
    title: "Professional writing for brand building",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f765a3a0f59d43040a69_course-module-image-3.webp",
    topics: [
      "Writing hooks & openers",
      "Story elements",
      "Documentation & Storybook",
      "Email & Copywriting"
    ]
  }
],
},

  {
    id: 3,
    slug: "modern-ui-design",
    title: "Modern UI components and frameworks",
 category:"DESIGN",
    price: "$189.00 USD",
     buyButtonText: "Buy this course",
    lessons: "35 LESSONS",
    duration: "12 Weeks",
    instructor: "Emma Wilson",
    image:
      "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/68ff43196f58058bddffea44_koursio-course-card-two-design-02.webp",
    description:
      "Learn modern UI design, responsive layouts, design systems, Figma, and frontend frameworks used in professional web development.",
    

  lectures: "42",

  skillLevel: "Beginner",

  videoDuration: "1 hr 28 min",

  participants: "7.1k students",

  durationImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8b_Clock%20Icons-2.svg",

  lectureImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e89_Books%20Icons.svg",

  skillImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8a_Skills%20Arrow.svg",

  videoImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8d_Video%20Icons.svg",

  participantImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8c_Persons.svg",
  courseDescription1:
  "This course unlocks creative potential by teaching learners how to use modern digital design tools with confidence and imagination. It explores the latest software, design techniques, and workflows used by professionals to create visually compelling content. Learners gain practical skills to bring their ideas to life across branding, digital graphics, UI/UX, and visual storytelling projects.",

courseDescription2:
  "With a hands-on approach, the course empowers students to experiment, innovate, and refine their artistic style. It introduces essential tools, shortcuts, and smart design methods to improve productivity and creativity. By the end, learners will be able to craft polished designs that align with current industry trends and creative standards.",

mainFeatures: [
  "Practical training using top modern design tools.",
  "Hands-on projects to apply creative design skills.",
  "Techniques to enhance creativity and visual thinking.",
  "Industry trends, styles, and design best practices.",
  "Time-saving workflows, shortcuts, and tool mastery.",
  "Guidance to build a strong creative design portfolio."
],
keyHighlightsTitle: "Key highlights",

keyHighlightsDescription:
"Our intensive Angular course covers component architecture, reactive programming, TypeScript, and state management to build scalable, modern single-page applications.",

keyHighlights: [

"Comprehensive curriculum",

"Industry-recognized certification",

"Interactive learning experience",

"Downloadable study materials",

"Personalized mentorship",

"Community access",

"Industry-relevant skills",

"Lifetime access",

"Lifetime interview preparation support"

],

keyHighlightsFooter:
"This program emphasizes practical application, taking you through every stage from initial project setup to final deployment. You will complete a large-scale capstone project, ensuring you graduate with a strong portfolio piece and the confidence to tackle real-world challenges in a professional development environment.",

instructorImage:
"https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/69142b17d16c24537b04a115_member-jasmine-square.webp",

instructorName:"Jasmine Konopelski",

instructorRole:"Software Engineer",

students:"7.1k students",

instructorDescription:
"A dedicated engineer skilled in full stack development, scalable applications, and automation solutions. Jasmine prepares students with essential technology skills backed by strong practical knowledge.",

skills:[
"Software development",
"Database management",
"Cloud computing"
],
faqTitle: "Frequently asked questions",


contactCardTitle:"Have more questions before you enroll?",

contactButton:"Talk to our team",

contactFooter:"Don't leave your questions unanswered",

 modules: [
  {
    module: "Module 1",
    hours: "14 hours",
    title: "Linguistic precision and tone control",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f74cf4bbf742512fb296_course-module-image-1.webp",
    topics: [
      "Clarity and simplicity",
      "Writing cohesion",
      "Tone variation",
      "Advanced grammar mastery"
    ]
  },

  {
    module: "Module 2",
    hours: "19 hours",
    title: "Impactful storytelling & messaging",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f756dc232dc381f062fd_course-module-image-2.webp",
    topics: [
      "Word choice & semantics",
      "Visual storytelling",
      "Message structuring",
      "Storytelling for brands"
    ]
  },

  {
    module: "Module 3",
    hours: "15 hours",
    title: "Professional writing for brand building",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f765a3a0f59d43040a69_course-module-image-3.webp",
    topics: [
      "Writing hooks & openers",
      "Story elements",
      "Documentation & Storybook",
      "Email & Copywriting"
    ]
  }
],
},

  {
    id: 4,
    slug: "advanced-negotiation",
    title: "Advanced deal strategies and communication",
    category:"DEVELOPMENT",
    price: "$170.00 USD",
     buyButtonText: "Buy this course",
    lessons: "30 LESSONS",
    duration: "6 Weeks",
    instructor: "Michael Carter",
    image:
      "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/68ff193bbae5a1ec05809d5c_koursio-course-card-two-business-02.webp",
    description:
      "Develop advanced negotiation techniques, persuasive communication, and business deal strategies used by successful professionals.",
    

  lectures: "42",

  skillLevel: "Beginner",

  videoDuration: "1 hr 28 min",

  participants: "7.1k students",

  durationImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8b_Clock%20Icons-2.svg",

  lectureImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e89_Books%20Icons.svg",

  skillImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8a_Skills%20Arrow.svg",

  videoImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8d_Video%20Icons.svg",

  participantImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8c_Persons.svg",
  courseDescription1:
  "This course unlocks creative potential by teaching learners how to use modern digital design tools with confidence and imagination. It explores the latest software, design techniques, and workflows used by professionals to create visually compelling content. Learners gain practical skills to bring their ideas to life across branding, digital graphics, UI/UX, and visual storytelling projects.",

courseDescription2:
  "With a hands-on approach, the course empowers students to experiment, innovate, and refine their artistic style. It introduces essential tools, shortcuts, and smart design methods to improve productivity and creativity. By the end, learners will be able to craft polished designs that align with current industry trends and creative standards.",

mainFeatures: [
  "Practical training using top modern design tools.",
  "Hands-on projects to apply creative design skills.",
  "Techniques to enhance creativity and visual thinking.",
  "Industry trends, styles, and design best practices.",
  "Time-saving workflows, shortcuts, and tool mastery.",
  "Guidance to build a strong creative design portfolio."
],
keyHighlightsTitle: "Key highlights",

keyHighlightsDescription:
"Our intensive Angular course covers component architecture, reactive programming, TypeScript, and state management to build scalable, modern single-page applications.",

keyHighlights: [

"Comprehensive curriculum",

"Industry-recognized certification",

"Interactive learning experience",

"Downloadable study materials",

"Personalized mentorship",

"Community access",

"Industry-relevant skills",

"Lifetime access",

"Lifetime interview preparation support"

],

keyHighlightsFooter:
"This program emphasizes practical application, taking you through every stage from initial project setup to final deployment. You will complete a large-scale capstone project, ensuring you graduate with a strong portfolio piece and the confidence to tackle real-world challenges in a professional development environment.",
 
instructorImage:
"https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/69142b17d16c24537b04a115_member-jasmine-square.webp",

instructorName:"Jasmine Konopelski",

instructorRole:"Software Engineer",

students:"7.1k students",

instructorDescription:
"A dedicated engineer skilled in full stack development, scalable applications, and automation solutions. Jasmine prepares students with essential technology skills backed by strong practical knowledge.",

skills:[
"Software development",
"Database management",
"Cloud computing"
],
faqTitle: "Frequently asked questions",


contactCardTitle:"Have more questions before you enroll?",

contactButton:"Talk to our team",

contactFooter:"Don't leave your questions unanswered",
modules: [
  {
    module: "Module 1",
    hours: "14 hours",
    title: "Linguistic precision and tone control",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f74cf4bbf742512fb296_course-module-image-1.webp",
    topics: [
      "Clarity and simplicity",
      "Writing cohesion",
      "Tone variation",
      "Advanced grammar mastery"
    ]
  },

  {
    module: "Module 2",
    hours: "19 hours",
    title: "Impactful storytelling & messaging",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f756dc232dc381f062fd_course-module-image-2.webp",
    topics: [
      "Word choice & semantics",
      "Visual storytelling",
      "Message structuring",
      "Storytelling for brands"
    ]
  },

  {
    module: "Module 3",
    hours: "15 hours",
    title: "Professional writing for brand building",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f765a3a0f59d43040a69_course-module-image-3.webp",
    topics: [
      "Writing hooks & openers",
      "Story elements",
      "Documentation & Storybook",
      "Email & Copywriting"
    ]
  }
],
},

  {
    id: 5,
    slug: "smart-management",
    title: "Elevate your career with smart management",
   category:"DESIGN",
    price: "$210.00 USD",
     buyButtonText: "Buy this course",
    lessons: "37 LESSONS",
    duration: "14 Weeks",
    instructor: "Sophia Miller",
    image:
      "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6900b82c1b6bb565a1bd889a_koursio-course-card-two-mang-03.webp",
    description:
      "Master leadership, strategic planning, project management, team collaboration, and decision-making techniques.",
      

  lectures: "42",

  skillLevel: "Beginner",

  videoDuration: "1 hr 28 min",

  participants: "7.1k students",

 durationImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8b_Clock%20Icons-2.svg",

  lectureImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e89_Books%20Icons.svg",

  skillImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8a_Skills%20Arrow.svg",

  videoImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8d_Video%20Icons.svg",

  participantImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8c_Persons.svg",
  courseDescription1:
  "This course unlocks creative potential by teaching learners how to use modern digital design tools with confidence and imagination. It explores the latest software, design techniques, and workflows used by professionals to create visually compelling content. Learners gain practical skills to bring their ideas to life across branding, digital graphics, UI/UX, and visual storytelling projects.",

courseDescription2:
  "With a hands-on approach, the course empowers students to experiment, innovate, and refine their artistic style. It introduces essential tools, shortcuts, and smart design methods to improve productivity and creativity. By the end, learners will be able to craft polished designs that align with current industry trends and creative standards.",

mainFeatures: [
  "Practical training using top modern design tools.",
  "Hands-on projects to apply creative design skills.",
  "Techniques to enhance creativity and visual thinking.",
  "Industry trends, styles, and design best practices.",
  "Time-saving workflows, shortcuts, and tool mastery.",
  "Guidance to build a strong creative design portfolio."
],
keyHighlightsTitle: "Key highlights",

keyHighlightsDescription:
"Our intensive Angular course covers component architecture, reactive programming, TypeScript, and state management to build scalable, modern single-page applications.",

keyHighlights: [

"Comprehensive curriculum",

"Industry-recognized certification",

"Interactive learning experience",

"Downloadable study materials",

"Personalized mentorship",

"Community access",

"Industry-relevant skills",

"Lifetime access",

"Lifetime interview preparation support"

],

keyHighlightsFooter:
"This program emphasizes practical application, taking you through every stage from initial project setup to final deployment. You will complete a large-scale capstone project, ensuring you graduate with a strong portfolio piece and the confidence to tackle real-world challenges in a professional development environment.",

instructorImage:
"https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/69142b17d16c24537b04a115_member-jasmine-square.webp",

instructorName:"Jasmine Konopelski",

instructorRole:"Software Engineer",

students:"7.1k students",

instructorDescription:
"A dedicated engineer skilled in full stack development, scalable applications, and automation solutions. Jasmine prepares students with essential technology skills backed by strong practical knowledge.",

skills:[
"Software development",
"Database management",
"Cloud computing"
],
faqTitle: "Frequently asked questions",


contactCardTitle:"Have more questions before you enroll?",

contactButton:"Talk to our team",

contactFooter:"Don't leave your questions unanswered",
modules: [
  {
    module: "Module 1",
    hours: "14 hours",
    title: "Linguistic precision and tone control",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f74cf4bbf742512fb296_course-module-image-1.webp",
    topics: [
      "Clarity and simplicity",
      "Writing cohesion",
      "Tone variation",
      "Advanced grammar mastery"
    ]
  },

  {
    module: "Module 2",
    hours: "19 hours",
    title: "Impactful storytelling & messaging",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f756dc232dc381f062fd_course-module-image-2.webp",
    topics: [
      "Word choice & semantics",
      "Visual storytelling",
      "Message structuring",
      "Storytelling for brands"
    ]
  },

  {
    module: "Module 3",
    hours: "15 hours",
    title: "Professional writing for brand building",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f765a3a0f59d43040a69_course-module-image-3.webp",
    topics: [
      "Writing hooks & openers",
      "Story elements",
      "Documentation & Storybook",
      "Email & Copywriting"
    ]
  }
],
    },

  {
    id: 6,
    slug: "workflow-productivity",
    title: "Optimize workflow for peak productivity",
    category:"DEVELOPMENT",
    price: "$175.00 USD",
     buyButtonText: "Buy this course",
    lessons: "60 LESSONS",
    duration: "9 Weeks",
    instructor: "James Anderson",
    image:
      "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/68ff6442482fc30df3f7ab49_koursio-course-card-two-finance-01.webp",
    description:
      "Increase productivity using modern workflow systems, automation, planning methods, and effective business tools.",
    

  lectures: "42",

  skillLevel: "Beginner",

  videoDuration: "1 hr 28 min",

  participants: "7.1k students",

 durationImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8b_Clock%20Icons-2.svg",

  lectureImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e89_Books%20Icons.svg",

  skillImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8a_Skills%20Arrow.svg",

  videoImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8d_Video%20Icons.svg",

  participantImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8c_Persons.svg",
  courseDescription1:
  "This course unlocks creative potential by teaching learners how to use modern digital design tools with confidence and imagination. It explores the latest software, design techniques, and workflows used by professionals to create visually compelling content. Learners gain practical skills to bring their ideas to life across branding, digital graphics, UI/UX, and visual storytelling projects.",

courseDescription2:
  "With a hands-on approach, the course empowers students to experiment, innovate, and refine their artistic style. It introduces essential tools, shortcuts, and smart design methods to improve productivity and creativity. By the end, learners will be able to craft polished designs that align with current industry trends and creative standards.",

mainFeatures: [
  "Practical training using top modern design tools.",
  "Hands-on projects to apply creative design skills.",
  "Techniques to enhance creativity and visual thinking.",
  "Industry trends, styles, and design best practices.",
  "Time-saving workflows, shortcuts, and tool mastery.",
  "Guidance to build a strong creative design portfolio."
],
keyHighlightsTitle: "Key highlights",

keyHighlightsDescription:
"Our intensive Angular course covers component architecture, reactive programming, TypeScript, and state management to build scalable, modern single-page applications.",

keyHighlights: [

"Comprehensive curriculum",

"Industry-recognized certification",

"Interactive learning experience",

"Downloadable study materials",

"Personalized mentorship",

"Community access",

"Industry-relevant skills",

"Lifetime access",

"Lifetime interview preparation support"

],

keyHighlightsFooter:
"This program emphasizes practical application, taking you through every stage from initial project setup to final deployment. You will complete a large-scale capstone project, ensuring you graduate with a strong portfolio piece and the confidence to tackle real-world challenges in a professional development environment.",

instructorImage:
"https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/69142b17d16c24537b04a115_member-jasmine-square.webp",

instructorName:"Jasmine Konopelski",

instructorRole:"Software Engineer",

students:"7.1k students",

instructorDescription:
"A dedicated engineer skilled in full stack development, scalable applications, and automation solutions. Jasmine prepares students with essential technology skills backed by strong practical knowledge.",

skills:[
"Software development",
"Database management",
"Cloud computing"
],
faqTitle: "Frequently asked questions",


contactCardTitle:"Have more questions before you enroll?",

contactButton:"Talk to our team",

contactFooter:"Don't leave your questions unanswered",
modules: [
  {
    module: "Module 1",
    hours: "14 hours",
    title: "Linguistic precision and tone control",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f74cf4bbf742512fb296_course-module-image-1.webp",
    topics: [
      "Clarity and simplicity",
      "Writing cohesion",
      "Tone variation",
      "Advanced grammar mastery"
    ]
  },

  {
    module: "Module 2",
    hours: "19 hours",
    title: "Impactful storytelling & messaging",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f756dc232dc381f062fd_course-module-image-2.webp",
    topics: [
      "Word choice & semantics",
      "Visual storytelling",
      "Message structuring",
      "Storytelling for brands"
    ]
  },

  {
    module: "Module 3",
    hours: "15 hours",
    title: "Professional writing for brand building",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f765a3a0f59d43040a69_course-module-image-3.webp",
    topics: [
      "Writing hooks & openers",
      "Story elements",
      "Documentation & Storybook",
      "Email & Copywriting"
    ]
  }
],
},

  {
    id: 7,
    slug: "content-language",
    title: "Content creation and language proficiency",
  category:"DESIGN",
    price: "$110.00 USD",
     buyButtonText: "Buy this course",
    lessons: "29 LESSONS",
    duration: "7 Weeks",
    instructor: "Olivia Taylor",
    image:
      "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/69004535d18f3fc3ad1786ad_koursio-course-card-two-language-01.webp",
    description:
      "Build expertise in content writing, storytelling, copywriting, blogging, and professional language communication.",
  

  lectures: "42",

  skillLevel: "Beginner",

  videoDuration: "1 hr 28 min",

  participants: "7.1k students",

  durationImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8b_Clock%20Icons-2.svg",

  lectureImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e89_Books%20Icons.svg",

  skillImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8a_Skills%20Arrow.svg",

  videoImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8d_Video%20Icons.svg",

  participantImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8c_Persons.svg",
  courseDescription1:
  "This course unlocks creative potential by teaching learners how to use modern digital design tools with confidence and imagination. It explores the latest software, design techniques, and workflows used by professionals to create visually compelling content. Learners gain practical skills to bring their ideas to life across branding, digital graphics, UI/UX, and visual storytelling projects.",

courseDescription2:
  "With a hands-on approach, the course empowers students to experiment, innovate, and refine their artistic style. It introduces essential tools, shortcuts, and smart design methods to improve productivity and creativity. By the end, learners will be able to craft polished designs that align with current industry trends and creative standards.",

mainFeatures: [
  "Practical training using top modern design tools.",
  "Hands-on projects to apply creative design skills.",
  "Techniques to enhance creativity and visual thinking.",
  "Industry trends, styles, and design best practices.",
  "Time-saving workflows, shortcuts, and tool mastery.",
  "Guidance to build a strong creative design portfolio."
],
keyHighlightsTitle: "Key highlights",

keyHighlightsDescription:
"Our intensive Angular course covers component architecture, reactive programming, TypeScript, and state management to build scalable, modern single-page applications.",

keyHighlights: [

"Comprehensive curriculum",

"Industry-recognized certification",

"Interactive learning experience",

"Downloadable study materials",

"Personalized mentorship",

"Community access",

"Industry-relevant skills",

"Lifetime access",

"Lifetime interview preparation support"

],

keyHighlightsFooter:
"This program emphasizes practical application, taking you through every stage from initial project setup to final deployment. You will complete a large-scale capstone project, ensuring you graduate with a strong portfolio piece and the confidence to tackle real-world challenges in a professional development environment.",
  
instructorImage:
"https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/69142b17d16c24537b04a115_member-jasmine-square.webp",

instructorName:"Jasmine Konopelski",

instructorRole:"Software Engineer",

students:"7.1k students",

instructorDescription:
"A dedicated engineer skilled in full stack development, scalable applications, and automation solutions. Jasmine prepares students with essential technology skills backed by strong practical knowledge.",

skills:[
"Software development",
"Database management",
"Cloud computing"
],
faqTitle: "Frequently asked questions",


contactCardTitle:"Have more questions before you enroll?",

contactButton:"Talk to our team",

contactFooter:"Don't leave your questions unanswered",
modules: [
  {
    module: "Module 1",
    hours: "14 hours",
    title: "Linguistic precision and tone control",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f74cf4bbf742512fb296_course-module-image-1.webp",
    topics: [
      "Clarity and simplicity",
      "Writing cohesion",
      "Tone variation",
      "Advanced grammar mastery"
    ]
  },

  {
    module: "Module 2",
    hours: "19 hours",
    title: "Impactful storytelling & messaging",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f756dc232dc381f062fd_course-module-image-2.webp",
    topics: [
      "Word choice & semantics",
      "Visual storytelling",
      "Message structuring",
      "Storytelling for brands"
    ]
  },

  {
    module: "Module 3",
    hours: "15 hours",
    title: "Professional writing for brand building",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f765a3a0f59d43040a69_course-module-image-3.webp",
    topics: [
      "Writing hooks & openers",
      "Story elements",
      "Documentation & Storybook",
      "Email & Copywriting"
    ]
  }
],
},

  {
    id: 8,
    slug: "effective-management",
    title: "Empower success through effective management",
    category:"DEVELOPMENT",
     buyButtonText: "Buy this course",
    price: "$110.00 USD",
    lessons: "39 LESSONS",
    duration: "11 Weeks",
    instructor: "Daniel Thomas",
    image:
      "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6900b45c9bb119ab2252ebcb_koursio-course-card-two-mang-02.webp",
    description:
      "Learn planning, organizing, leadership, communication, and management strategies to become an effective team leader.",
 

  lectures: "42",

  skillLevel: "Beginner",

  videoDuration: "1 hr 28 min",

  participants: "7.1k students",

 durationImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8b_Clock%20Icons-2.svg",

  lectureImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e89_Books%20Icons.svg",

  skillImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8a_Skills%20Arrow.svg",

  videoImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8d_Video%20Icons.svg",

  participantImage: "https://cdn.prod.website-files.com/68b824698be8e7c047a5da51/68ef3f44ab0583ebfd406e8c_Persons.svg",
  courseDescription1:
  "This course unlocks creative potential by teaching learners how to use modern digital design tools with confidence and imagination. It explores the latest software, design techniques, and workflows used by professionals to create visually compelling content. Learners gain practical skills to bring their ideas to life across branding, digital graphics, UI/UX, and visual storytelling projects.",

courseDescription2:
  "With a hands-on approach, the course empowers students to experiment, innovate, and refine their artistic style. It introduces essential tools, shortcuts, and smart design methods to improve productivity and creativity. By the end, learners will be able to craft polished designs that align with current industry trends and creative standards.",

mainFeatures: [
  "Practical training using top modern design tools.",
  "Hands-on projects to apply creative design skills.",
  "Techniques to enhance creativity and visual thinking.",
  "Industry trends, styles, and design best practices.",
  "Time-saving workflows, shortcuts, and tool mastery.",
  "Guidance to build a strong creative design portfolio."
],
keyHighlightsTitle: "Key highlights",

keyHighlightsDescription:
"Our intensive Angular course covers component architecture, reactive programming, TypeScript, and state management to build scalable, modern single-page applications.",

keyHighlights: [

"Comprehensive curriculum",

"Industry-recognized certification",

"Interactive learning experience",

"Downloadable study materials",

"Personalized mentorship",

"Community access",

"Industry-relevant skills",

"Lifetime access",

"Lifetime interview preparation support"

],

keyHighlightsFooter:
"This program emphasizes practical application, taking you through every stage from initial project setup to final deployment. You will complete a large-scale capstone project, ensuring you graduate with a strong portfolio piece and the confidence to tackle real-world challenges in a professional development environment.",
   
instructorImage:
"https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/69142b17d16c24537b04a115_member-jasmine-square.webp",

instructorName:"Jasmine Konopelski",

instructorRole:"Software Engineer",

students:"7.1k students",

instructorDescription:
"A dedicated engineer skilled in full stack development, scalable applications, and automation solutions. Jasmine prepares students with essential technology skills backed by strong practical knowledge.",

skills:[
"Software development",
"Database management",
"Cloud computing"
],
faqTitle: "Frequently asked questions",


contactCardTitle:"Have more questions before you enroll?",

contactButton:"Talk to our team",

contactFooter:"Don't leave your questions unanswered",
modules: [
  {
    module: "Module 1",
    hours: "14 hours",
    title: "Linguistic precision and tone control",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f74cf4bbf742512fb296_course-module-image-1.webp",
    topics: [
      "Clarity and simplicity",
      "Writing cohesion",
      "Tone variation",
      "Advanced grammar mastery"
    ]
  },

  {
    module: "Module 2",
    hours: "19 hours",
    title: "Impactful storytelling & messaging",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f756dc232dc381f062fd_course-module-image-2.webp",
    topics: [
      "Word choice & semantics",
      "Visual storytelling",
      "Message structuring",
      "Storytelling for brands"
    ]
  },

  {
    module: "Module 3",
    hours: "15 hours",
    title: "Professional writing for brand building",
    image: "https://cdn.prod.website-files.com/68cbe4e796aeebf91972e0f3/6912f765a3a0f59d43040a69_course-module-image-3.webp",
    topics: [
      "Writing hooks & openers",
      "Story elements",
      "Documentation & Storybook",
      "Email & Copywriting"
    ]
  }
],
}
];