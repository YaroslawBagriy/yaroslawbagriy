import Project from "../types/project";
import {skills} from "./skills";

const newslettercrew = {
  title: "Newsletter Crew",
  link: "https://www.newslettercrew.com/",
  imageUrl: "/newsletter-crew-1.png",
  slug: "newsletter-crew",
  description: `
        Educaider contains 800+ courses in New Zealand you can search from. I worked
        on implementing the design, adding a content-managed blog, search feature,
        course pages and campus pages.
      `,
  snippet: "Podcast, blog, and community for newsletter creators",
  skills: [
    skills.trello
  ],
  images: [
    "/newsletter-crew-1.png",
    "/newsletter-crew-2.png",
    "/newsletter-crew-3.png",
  ],
  testimonials: [
    {
      name: "Sam Julien",
      position: "",
      description: `I have found Newsletter Crew to be a remarkably helpful and friendly community! I love being able to get feedback on things I'm working on and share ideas with other creators. I especially love that it includes folks from many different niches and industries. Great for getting out of the echo chamber!`,
      imageUrl: "/profile.jpg",
    },
  ],
};

const dancerTribe = {
  title: "Dancer Tribe",
  link: "https://dancertribe.com/",
  imageUrl: "/project-dancer-tribe.png",
  slug: "dancer-tribe",
  description: `
        I designed and developed a worldwide directory of dance studios that include
        schedules, pricing, reviews and photos. It also allows studio owners add
        and manage their own pages.
      `,
  snippet: "A directory of dance studios",
  skills: [
    skills.angular,
    skills.firebase,
    skills.algolia,
    skills.ux,
    skills.ts,
    skills.sass,
  ],
  images: [
    "/project-dancer-tribe-1.png",
    "/project-dancer-tribe-2.png",
    "/project-dancer-tribe-3.png",
  ],
  testimonials: [
    {
      name: "Judith Black",
      position: "CEO, Tuple",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a urna eu quam consectetur blandit. Morbi gravida vel nunc sed imperdiet. Aliquam sit amet tortor sem. Vivamus dapibus luctus elit, sit amet consectetur nisl vehicula vel. Nullam ut ex ut felis rhoncus convallis consectetur ac tellus.`,
      imageUrl: "/profile.jpg",
    },
  ],
};

const educaider = {
  title: "Newsletter Crew",
  link: "https://www.newslettercrew.com/",
  imageUrl: "/newsletter-crew-1.png",
  slug: "newsletter-crew",
  description: `
        Educaider contains 800+ courses in New Zealand you can search from. I worked
        on implementing the design, adding a content-managed blog, search feature,
        course pages and campus pages.
      `,
  snippet: "Podcast, blog, and community for newsletter creators",
  skills: [
    skills.trello
  ],
  images: [
    "/newsletter-crew-1.png",
    "/newsletter-crew-2.png",
    "/newsletter-crew-3.png",
  ],
  testimonials: [
    {
      name: "Sam Julien",
      position: "",
      description: `I have found Newsletter Crew to be a remarkably helpful and friendly community! I love being able to get feedback on things I'm working on and share ideas with other creators. I especially love that it includes folks from many different niches and industries. Great for getting out of the echo chamber!`,
      imageUrl: "/profile.jpg",
    },
  ],
};

const dubber = {
  title: "Dubber",
  link: "https://www.dubber.net/",
  imageUrl: "/project-dubber.png",
  slug: "dubber",
  description: `
        A content-managed marketing website and blog for Dubber -
        the world's leading provider of cloud-based call recording and voice AI.
        I worked on creating components for the CMS including the blog pages.
      `,
  snippet:
    "Marketing website for the world's leading provider of cloud-based call recording and voice AI",
  skills: [skills.react, skills.nextjs, skills.ts, skills.contentful],
  testimonials: [
    {
      name: "Judith Black",
      position: "CEO, Tuple",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a urna eu quam consectetur blandit. Morbi gravida vel nunc sed imperdiet. Aliquam sit amet tortor sem. Vivamus dapibus luctus elit, sit amet consectetur nisl vehicula vel. Nullam ut ex ut felis rhoncus convallis consectetur ac tellus.`,
      imageUrl: "/profile.jpg",
    },
  ],
};

const nzma = {
  title: "New Zealand Management Academies (NZMA)",
  link: "https://www.nzma.ac.nz/",
  imageUrl: "/project-nzma.jpg",
  slug: "nzma",
  snippet:
    "Marketing website for NZMA - a school offering vocational courses in New Zealand",
  description: `
        NZMA offers a wide range of vocational courses in different industries
        such as hospitality, cookery, business, plumbing, etc. I implemented
        the designs.
      `,
  skills: [skills.react, skills.nextjs, skills.ts, skills.contentful],
};

const nzst = {
  title: "New Zealand School of Tourism",
  link: "https://www2.nzschooloftourism.co.nz/",
  imageUrl: "/project-nzst.jpg",
  slug: "nzst",
  snippet: "A content-managed website for NZST",
  description: `
        A content-managed marketing website and blog for New Zealand School of Tourism.
        I developed the CMS components needed to accomplish the design.
      `,
  skills: [skills.react, skills.nextjs, skills.ts, skills.contentful],
  testimonials: [
    {
      name: "Judith Black",
      position: "CEO, Tuple",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a urna eu quam consectetur blandit. Morbi gravida vel nunc sed imperdiet. Aliquam sit amet tortor sem. Vivamus dapibus luctus elit, sit amet consectetur nisl vehicula vel. Nullam ut ex ut felis rhoncus convallis consectetur ac tellus.`,
      imageUrl: "/profile.jpg",
    },
  ],
};

const apolinar = {
  title: "Apolinar",
  link: "https://apolinargroup.com/",
  imageUrl: "/project-apolinar.jpeg",
  slug: "apolinar",
  snippet: "Marketing website for Apolinar Group - a web agency in New Zealand",
  description: `
        Apolinar is an award-winning digital team in New Zealand. I worked on
        implementing the design of their landing page.
      `,
  skills: [skills.html, skills.sass, skills.js],
  testimonials: [
    {
      name: "Judith Black",
      position: "CEO, Tuple",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a urna eu quam consectetur blandit. Morbi gravida vel nunc sed imperdiet. Aliquam sit amet tortor sem. Vivamus dapibus luctus elit, sit amet consectetur nisl vehicula vel. Nullam ut ex ut felis rhoncus convallis consectetur ac tellus.`,
      imageUrl: "/profile.jpg",
    },
  ],
};

export const projects: { [key: string]: Project } = {
  "dancer-tribe": {
    ...dancerTribe,
    otherProjects: [educaider, newslettercrew, nzst],
  },
  newslettercrew: {
    ...newslettercrew,
    otherProjects: [dubber, nzma, apolinar],
  },
  educaider: {
    ...educaider,
    otherProjects: [dubber, nzma, apolinar],
  },
  dubber: {
    ...dubber,
    otherProjects: [dancerTribe, apolinar],
  },
  nzma: {
    ...nzma,
    otherProjects: [educaider, newslettercrew, dancerTribe],
  },
  nzst: {
    ...nzst,
    otherProjects: [educaider, newslettercrew, dubber, apolinar],
  },
  apolinar: {
    ...apolinar,
    otherProjects: [dubber, dancerTribe, educaider, newslettercrew],
  },
};
