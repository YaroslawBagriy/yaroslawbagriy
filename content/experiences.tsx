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
    snippet: "Starkey stands as one of the world's foremost manufacturers of hearing aids, dedicated to creating the finest hearing aid solutions and accompanying technology.",
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
    dateStart: "Apr 2020",
    dateEnd: "Apr 2021",
    link: "http://referralkit.co/",
    snippet: "Referral software made for growing newsletters",
    description: (
      <>
        <p>
          I founded this project that concluded with a profitable acquisition, securing a deal in the five-figure range. My role was integral in the acquisition process, where I showcased my skills in negotiation, strategic planning, and realizing the project's value. Leading a small yet diverse team consisting of a developer and a UI/UX designer, I ensured effective collaboration, integrating both development and design elements seamlessly to meet our project objectives.
        </p>
        <p>
          My approach to project management was methodical and efficient, utilizing Trello to maintain an organized workflow and ensure clear communication throughout the project's lifecycle. This strategy was pivotal in achieving timely project completion. I also placed a strong emphasis on regular team engagement, conducting biweekly meetings to review progress, address challenges, and provide constructive feedback. This approach fostered a proactive and responsive team atmosphere. Additionally, I was actively involved in the design phase, using Figma to provide critical input on UI/UX design, thereby enhancing the user experience and aligning the design with the overall project goals.
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
    projects: [projects.referrakit],
  },
  {
    position: "Product/Project Manager",
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
  {
    position: "Software Engineer",
    company: "XMedical",
    dateStart: "Aug 2017",
    dateEnd: "Sept 2017",
    link: "https://www.linkedin.com/company/l-sm-icu/",
    snippet: "XMedical is a mobile application designed to decrease hospital readmissions among COPD patients by leveraging advanced data analysis of environmental pollution metrics.",
    description: (
      <>
        <p>
          I led a team of five to secure a top 3 placement at the Google Start-up Weekend 2017 Hackathon, showcasing exceptional leadership and collaborative skills in a competitive setting. During this event, we engineered an iOS prototype designed to reduce hospital readmissions for COPD patients by using advanced data analysis of pollution metrics, demonstrating our innovative problem-solving abilities and technical expertise in healthcare technology.
        </p>
      </>
    ),
    skills: [skills.swift, skills.ios, skills.django, skills.python, skills.angular, skills.express, skills.mongodb, skills.nodejs, skills.html, skills.css, skills.git],
    projects: [],
  },
  {
    position: "Lead iOS Developer",
    company: "Scout Out",
    dateStart: "Mar 2015",
    dateEnd: "Sept 2016",
    link: "https://www.scoutoutapp.com/",
    snippet: "Scout Out is a nightlife discovery app matching you with an awesome new place to try, but you won't know the name of it until you arrive.",
    description: (
      <>
        <p>
          I led the complete development of an innovative iOS application designed for entertainment decision-making, covering all aspects from concept to design, implementation, and successful market launch, demonstrating my extensive skills in mobile app development. I managed the technicalities of code signing, provisioning, and App Store deployment, ensuring smooth, compliant application releases.
        </p>
        <p>
          In addition, I designed and implemented a RESTful API, paving the way for easy expansion into web applications, indicating my foresight in software architecture and scalability. I revamped the frontend using the MVC architectural pattern, greatly improving the application's extensibility and maintainability for future updates. 
        </p>
        <p>
          Furthermore, I optimized the core algorithm to eliminate bugs and enhance the user experience, underscoring my commitment to product quality and customer satisfaction.
        </p>
      </>
    ),
    skills: [skills.swift, skills.ios, skills.git],
    projects: [],
  },
  {
    position: "Project Engineer",
    company: "Open Systems International",
    dateStart: "Jan 2015",
    dateEnd: "Feb 2016",
    link: "https://www.osii.com/",
    snippet: "Open Systems International designs scalable Operations Technology (OT) solutions that utility companies of various sizes can implement to monitor, control, and enhance their real-time operations.",
    description: (
      <>
        <p>
          I helped with the design, configuration, testing, and integration of SCADA systems, showcasing advanced technical expertise and leadership in complex system environments. I effectively delegated tasks such as networking and server installation to technical specialists, optimizing team expertise and workflow efficiency in critical projects. My role also involved providing comprehensive support for customer software issues, both virtually and in-person, demonstrating exceptional problem-solving skills and a customer-focused approach.
        </p>
        <p>
          In addition to technical duties, I cultivated and maintained strong professional relationships with customers, reflecting a commitment to excellent client service and communication skills. I led daily team meetings to review project deadlines and tasks, ensuring timely project delivery and effective team coordination. This underscores my strong organizational and management capabilities.
        </p>
      </>
    ),
    skills: [],
    projects: [],
  },
  {
    position: "Embedded Software Engineer",
    company: "Danfoss Power Solutions",
    dateStart: "Jun 2013",
    dateEnd: "Sept 2014",
    link: "https://www.danfoss.com/en/",
    snippet: "Danfoss Power Solutions excels as a global supplier of mobile hydraulic solutions for markets such as construction, agriculture, and various other off-highway vehicle sectors.",
    description: (
      <>
        <p>
          I developed a Hardware Abstraction Layer in C, which was crucial in modernizing several product lines, significantly reducing obsolescence and enhancing system functionality. By utilizing GNU Open Source tools, I optimized the development process, effectively speeding up time-to-delivery and cutting project costs, showcasing my proficiency in creating cost-effective and efficient software solutions.
        </p>
        <p>
          Additionally, I engineered a modular hardware testing system that innovatively reduced the product testing duration by two weeks, demonstrating my strong capabilities in system design and efficiency improvement.
        </p>
      </>
    ),
    skills: [],
    projects: [],
  },
  {
    position: "Electrical Engineer",
    company: "Turck",
    dateStart: "Jun 2012",
    dateEnd: "Sept 2012",
    link: "https://www.turck.us/en/",
    snippet: "Turck USA excels as an expert in the fields of sensor technology, fieldbus systems, and connectivity products, along with interface technology, human-machine interfaces (HMI), and RFID systems.",
    description: (
      <>
        <p>
          I wrote advanced firmware in C to significantly enhance and expand the capabilities of hardware modules to take in ambient temperature input, showcasing a strong emphasis on functional improvement and technical innovation.
        </p>
        <p>
          Additionally, I conducted thorough Electromagnetic Compatibility (EMC) testing on products to ensure they met industry standards, thereby enhancing product reliability. To further streamline these processes, I modernized the EMC test code using Visual Basic, leading to more efficient and effective testing protocols.
        </p>
      </>
    ),
    skills: [],
    projects: [],
  },
];
