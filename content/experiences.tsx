import Experience from "../types/experience";
import {skills} from "./skills";
import {projects} from "./projects";

export const experiences: Array<Experience> = [
  {
    position: "Senior iOS Developer",
    company: "Starkey",
    dateStart: "Jan 2019",
    dateEnd: "Present",
    link: "https://www.starkey.com/",
    snippet: "Starkey is one of the largest hearing aid manufacturers in the world.",
    description: (
      <>
        <p>
          As a lead on a team of 6, I spearheaded the development of a complex mobile health application, exemplifying my expertise in project management and team leadership within the medical device industry. My role involved meticulous planning and execution of full project sprints, which ensured not only timely delivery but also the achievement of critical goals. I maintained a keen eye on engineer performance and sprint progress, which was instrumental in meeting project timelines.
        </p>
        <p>
          My leadership extended to fostering cross-functional collaboration, where I played a pivotal role in designing complex algorithms. This endeavor underscored my ability to effectively coordinate with diverse teams and disciplines. I also championed high-quality coding practices within the team, advocating for thorough documentation, commenting, and unit testing. This initiative significantly improved code quality and maintainability.
        </p>
        <p>
          In addition to conducting weekly meetings for a group of over 10 developers, I provided strategic leadership and continuous feedback, focusing on talent development and team building. My management skills were further demonstrated through the oversight of a globally distributed team of engineers located in India, China, and America, showcasing my adeptness in multicultural team management and remote coordination.
        </p>
        <p>
          My approach was underpinned by a deep understanding and application of Lean/Agile methodologies and software engineering tools. I led change initiatives and actively contributed to the development of organizational policies and operational strategies, playing a key role in the overall success and efficiency of the project.
        </p>
      </>
    ),
    skills: [
      skills.swift,
      skills.ios,
      skills.android,
      skills.kotlin,
      skills.csharp,
      skills.firebase,
      skills.git,
      skills.scrum,
      skills.jira,
    ],
    projects: [],
  },
  {
    position: "Project Manager",
    company: "Playgroup",
    dateStart: "Feb 2021",
    dateEnd: "Mar 2022",
    link: "http://playgroup.community/",
    snippet: "Forum software made for engaging online communities",
    description: (
      <>
        <p>
          In my recent project, I demonstrated comprehensive project management skills by efficiently managing a $40,000 self-funded budget, ensuring both optimal resource allocation and cost-effectiveness. My leadership extended to guiding and mentoring a team of two software engineers, where I fostered a collaborative environment crucial for the project's success. Utilizing my expertise in software development and project management, I played a pivotal role in directing the team's efforts and ensuring cohesive progress.
        </p>
        <p>
          To streamline task management and maintain project momentum, I implemented Trello. This tool was instrumental in tracking and coordinating development activities throughout the project lifecycle, ensuring that no detail was overlooked. Additionally, I held biweekly meetings to closely monitor project progress, address any emerging issues promptly, and provide constructive feedback. This regular oversight was key in maintaining strict adherence to project timelines and upholding the highest quality standards, ultimately contributing to the successful completion of the project.
        </p>
      </>
    ),
    skills: [
      skills.trello,
      skills.ux,
    ],
    projects: [],
  },
  {
    position: "Project Manager",
    company: "ReferralKit",
    dateStart: "Feb 2021",
    dateEnd: "Mar 2022",
    link: "http://referralkit.co/",
    snippet: "Referral software made for growing newsletters",
    description: (
      <>
        <p>
          In my recent project, I demonstrated comprehensive project management skills by efficiently managing a $40,000 self-funded budget, ensuring both optimal resource allocation and cost-effectiveness. My leadership extended to guiding and mentoring a team of two software engineers, where I fostered a collaborative environment crucial for the project's success. Utilizing my expertise in software development and project management, I played a pivotal role in directing the team's efforts and ensuring cohesive progress.
        </p>
        <p>
          To streamline task management and maintain project momentum, I implemented Trello. This tool was instrumental in tracking and coordinating development activities throughout the project lifecycle, ensuring that no detail was overlooked. Additionally, I held biweekly meetings to closely monitor project progress, address any emerging issues promptly, and provide constructive feedback. This regular oversight was key in maintaining strict adherence to project timelines and upholding the highest quality standards, ultimately contributing to the successful completion of the project.
        </p>
      </>
    ),
    skills: [
      skills.js,
      skills.nodejs,
      skills.ux,
      skills.figma,
      skills.trello
    ],
    projects: [],
  },
  {
    position: "Manager",
    company: "Newsletter Crew",
    dateStart: "Jan 2020",
    dateEnd: "Feb 2021",
    link: "https://newslettercrew.com/",
    snippet: "Podcast, blog, and community for newsletter creators",
    description: (
      <>
        <p>
          I successfully led the strategic sale of a significant project, culminating in a profitable 6-figure deal, showcasing my exceptional business acumen and negotiation skills throughout the sales process. In addition to this achievement, I employed a diverse range of skills to create and sustain a profitable business. This venture included a variety of activities such as blog writing, podcast production, online event hosting, and community management, demonstrating my versatility and ability to engage audiences across multiple platforms.
        </p>
        <p>
          Furthermore, my role included managing and mentoring a cross-functional team, which consisted of a writer and a community manager. In this capacity, I provided consistent guidance and support, ensuring that the team's efforts were in line with the project's goals and adhered to the highest quality standards. This experience highlights my leadership skills, ability to manage diverse teams, and commitment to achieving excellence in all aspects of project execution.
        </p>
      </>
    ),
    skills: [
      skills.js,
      skills.trello,
    ],
    projects: [projects.newslettercrew],
  },
  {
    position: "Software Engineer II",
    company: "Smiths Medical",
    dateStart: "Mar 2016",
    dateEnd: "Jan 2019",
    link: "https://www.linkedin.com/company/l-sm-icu/",
    snippet: "Smiths Medical develops, manufactures and sells innovative medical products used in infusion therapy, vascular access, and vital care applications.",
    description: (
      <>
        <p>
        I led the design and development of an iOS medical application, significantly enhancing patient adherence by 53%. My role extended to managing the end-to-end development of various internal applications, where I displayed exceptional leadership in complex project execution and demonstrated technical proficiency in iOS frameworks. Further showcasing my depth of knowledge, I authored and presented a strategic whitepaper on native versus hybrid development in the medical domain. This paper, along with a mobile products roadmap, was successfully communicated to a 300+ member R&D organization, highlighting my expertise in mobile technology and effective communication skills.
        </p>
        <p>
          In my pursuit of innovation in healthcare technology, I pioneered a medical game prototype using Swift and delved into neural network concepts on iOS, emphasizing my commitment to advanced technical research. Additionally, I directed a multidisciplinary team in designing and implementing web applications using a variety of technologies, including Vue.js, PHP, and the MEAN stack. This role underscored my skills in full-stack development and team leadership.
        </p>
        <p>
          Furthermore, I implemented an MVC architectural redesign and spearheaded the development of Django-based web application prototypes. This initiative showcased my strategic foresight in software architecture and product conceptualization, further solidifying my position as a leader and innovator in the field of technology development.
        </p>
      </>
    ),
    skills: [skills.swift, skills.ios, skills.django, skills.python, skills.angular, skills.express, skills.mongodb, skills.nodejs, skills.html, skills.css, skills.git],
    projects: [],
  },
];
