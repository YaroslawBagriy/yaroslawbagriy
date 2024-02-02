import Project from "../types/project";
import {skills} from "./skills";

const playgroup = {
  title: "Playgroup",
  link: "https://www.playgroup.community/",
  imageUrl: "/playgroup-1.png",
  slug: "playgroup",
  description: `
      Playgroup is a contemporary forum software designed to foster engaging online communities. It seamlessly integrates with platforms like Ghost, Memberful, MemberSpace, MemberStack, and MemberPress, allowing users to easily create a community connected to their existing site. One of Playgroup's key features is its ability to import content and user data from other platforms, making transitions smooth and hassle-free. The forum offers standard functionalities such as channels, threads, and comments, and provides the flexibility of having both public and private forums. Built using NextJS, Playgroup optimizes SEO for public forums, ensuring greater online visibility. Additionally, it offers the capability to export community content, facilitating easy migration to other forum platforms. To enhance user engagement, Playgroup sends weekly email digests summarizing community activities, keeping members informed and connected.
      `,
  snippet: "Modern forum software made for engaging online communities",
  skills: [
    skills.trello,
    skills.figma,
    skills.nextjs,
  ],
  images: [
    "/playgroup-1.png",
    "/playgroup-2.png",
    "/playgroup-3.png",
    "/playgroup-4.png",
    "/playgroup-5.png",
    "/playgroup-6.png",
    "/playgroup-7.png",
    "/playgroup-8.png",
  ],
  testimonials: [
    {
      name: "Justin Jackson",
      position: "Founder",
      description: `In the past I've used phpBB and Discourse for my community's forums. They were a pain to maintain and looked terrible. Since I switched to Playgroup, my members are happier and I'm happier!`,
      imageUrl: "/justin-jackson.jpg",
    },
    {
      name: "Dan Rowden",
      position: "Community Manager",
      description: `I've been a moderator with MegaMaker for years and we've switched over from Discourse in a matter of minutes. I love the fresh look and structure Playgroup provides — excited to use it some more!`,
      imageUrl: "/jon-friesen.jpg",
    },
    {
      name: "Dan Rowden",
      position: "Developer Experience Engineer",
      description: `A solid community/forum newcomer, but it's the pricing that stands out for me. The $0/m and $19/m plans for are unmatched (from what I've seen) in the market. (Also the playable demo on the homepage is 👌)`,
      imageUrl: "/dan-rowden.jpg",
    },
  ],
};

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

const referrakit = {
  title: "ReferralKit",
  link: "https://referralkit.co/",
  imageUrl: "/referralkit-1.png",
  slug: "referrakit",
  description: `
      ReferralKit is a referral software tailored for expanding newsletters, streamlining the referral process with its user-friendly features. It offers seamless email integration, allowing users to effortlessly incorporate their subscriber lists and embed unique referral links, rewards, and referral counts into every email. The software's versatility extends to its rewards system, where users can create a variety of rewards for different referral milestones, including digital products and physical goods. Additionally, ReferralKit enhances user experience with its automation capability, sending fully automated emails as soon as new subscribers are referred, ensuring a smooth and efficient referral journey.
      `,
  snippet: "Referral software made for growing newsletters",
  skills: [
    skills.nodejs,
    skills.js,
    skills.tailwind,
    skills.html,
    skills.trello,
    skills.figma,
  ],
  images: [
    "/referralkit-1.png",
    "/referralkit-2.png",
    "/referralkit-3.png",
  ],
  testimonials: [],
};

const scoutout = {
  title: "Scout Out",
  link: "https://scoutoutapp.com/",
  imageUrl: "/scoutout-1.png",
  slug: "scoutout",
  description: `
      Scout Out is a nightlife discovery app designed to spice up your evenings by matching you with exciting new bars without revealing their names until you arrive. By simply setting your preferences in the app, Scout Out curates a mystery pub crawl experience for you, all at no cost. Users select their desired bar type, and the app takes care of the rest, guiding them on an adventure to discover a new bar. The journey to the mystery location is part of the excitement, as the app provides a path to follow without turn-by-turn directions, making each outing an exploration. Once you reach your destination, you're introduced to an awesome bar that might have otherwise remained off your radar, offering a unique way to enjoy the nightlife.
  `,
  snippet: "Mobile app that creates mystery pub crawls",
  skills: [
    skills.swift,
    skills.ios,
    skills.git,
  ],
  images: [
    "/scoutout-1.png",
  ],
  testimonials: [],
};

export const projects: { [key: string]: Project } = {
  playgroup: {
    ...playgroup,
    otherProjects: [referrakit, newslettercrew, scoutout],
  },
  newslettercrew: {
    ...newslettercrew,
    otherProjects: [referrakit, playgroup, scoutout],
  },
  referrakit: {
    ...referrakit,
    otherProjects: [newslettercrew, playgroup, scoutout],
  },
  scoutout: {
    ...scoutout,
    otherProjects: [newslettercrew, playgroup, referrakit],
  },
};
