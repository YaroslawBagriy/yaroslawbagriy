import Project from "../types/project";
import {skills} from "./skills";

const newslettercrew = {
  title: "Newsletter Crew",
  link: "https://www.newslettercrew.com/",
  imageUrl: "/newsletter-crew-1.png",
  slug: "newslettercrew",
  description: `
      Newsletter Crew, a platform consisting of a podcast, blog, and community for newsletter creators, was developed using no-code tools: Discord for community engagement, Ghost for blogging, Transistor for podcast hosting, and Memberful for membership management. It was successfully acquired in February 2021 for a six-figure sum.
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
      imageUrl: "/sam-julien.jpg",
    },
  ],
};

export const projects: { [key: string]: Project } = {
  newslettercrew: {
    ...newslettercrew,
    otherProjects: [],
  },
};
