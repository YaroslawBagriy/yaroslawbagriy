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
      name: "Arvid Kahl",
      position: "Creator, Founder, Teacher",
      description: `Yeah this is a solid product. The newsletter community is an incredibly supportive place, and Yaro is an amazing curator of the public (and hidden) knowledge in our industry. Very impressive! And since we all learn best in groups, the private community is a no-brainer, particularly at this price. Where else could you get focused people with the same goals working together on a common goal?`,
      imageUrl: "/arvid-kahl.jpg",
    },
    {
      name: "Anna Grigoryan",
      position: "Founder of Kradl",
      description: `One of the best communities to join if you're looking for solid newsletter advice. Yaro really made it feel like home and a very open environment to discuss the working processes and talk candidly. Highly recommend.`,
      imageUrl: "/anna-grigoryan.jpg",
    },
    {
      name: "Sam Julien",
      position: "Newsletter Writer",
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
