import Skill from "../types/skill";

export const skills: { [key: string]: Skill } = {
  swift: {
    name: "Swift",
    slug: "swift",
    icon: "logos:swift",
  },
  ios: {
    name: "iOS",
    slug: "iOS",
    icon: "logos:ios",
  },
  android: {
    name: "Android",
    slug: "android",
    icon: "logos:android",
  },
  csharp: {
    name: "C#",
    slug: "csharp",
    icon: "logos:c-sharp",
  },
  kotlin: {
    name: "Kotlin",
    slug: "kotlin",
    icon: "logos:kotlin",
  },
  react: {
    name: "React",
    slug: "react",
    icon: "logos:react",
  },
  nextjs: {
    name: "Next.js",
    icon: "logos:nextjs-icon",
    slug: "nextjs",
  },
  contentful: {
    name: "Contentful CMS",
    icon: "logos:contentful",
    slug: "contentful",
  },
  angular: {
    name: "Angular",
    icon: "logos:angular-icon",
    slug: "angular",
  },
  html: {
    name: "HTML",
    icon: "logos:html-5",
    slug: "html",
  },
  css: {
    name: "CSS",
    icon: "logos:css-3",
    slug: "css",
  },
  js: {
    name: "JavaScript",
    icon: "logos:javascript",
    slug: "js",
  },
  ts: {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    slug: "ts",
  },
  sass: {
    name: "SASS",
    icon: "logos:sass",
    slug: "sass",
  },
  less: {
    name: "LESS",
    icon: "logos:less",
    slug: "less",
  },
  git: {
    name: "Git",
    icon: "fa-brands:git",
    slug: "git",
  },
  firebase: {
    name: "Firebase",
    icon: "logos:firebase",
    slug: "firebase",
  },
  mysql: {
    name: "MySQL",
    icon: "logos:mysql",
    slug: "mysql",
  },
  algolia: {
    name: "Algolia",
    icon: "logos:algolia",
    slug: "algolia",
  },
  bootstrap: {
    name: "Bootstrap",
    icon: "logos:bootstrap",
    slug: "bootstrap",
  },
  spring: {
    name: "Spring",
    icon: "logos:spring-icon",
    slug: "spring",
  },
  java: {
    name: "Java",
    icon: "logos:java",
    slug: "java",
  },
  redux: {
    name: "Redux",
    icon: "logos:redux",
    slug: "redux",
  },
  cpp: {
    name: "C++",
    icon: "logos:c-plusplus",
    slug: "cpp",
  },
  scrum: {
    name: "Scrum",
    slug: "scrum",
  },
  ux: {
    name: "UI/UX Design",
    slug: "ux",
  },
  tailwind: {
    name: "Tailwind",
    icon: "logos:tailwindcss-icon",
    slug: "tailwind",
  },
  django: {
    name: "Django",
    icon: "logos:django",
    slug: "django",
  },
  python: {
    name: "Python",
    icon: "logos:python",
    slug: "python",
  },
  express: {
    name: "Express",
    icon: "logos:express",
    slug: "express",
  },
  mongodb: {
    name: "MongoDB",
    icon: "logos:mongodb",
    slug: "mongodb",
  },
  nodejs: {
    name: "NodeJS",
    icon: "logos:nodejs",
    slug: "nodejs",
  },
  trello: {
    name: "Trello",
    icon: "logos:trello",
    slug: "trello",
  },
  jira: {
    name: "Jira",
    icon: "logos:jira",
    slug: "jira",
  },
  figma: {
    name: "Figma",
    icon: "logos:figma",
    slug: "figma",
  },
};

export const featuredSkills: Array<Skill> = [
  skills.swift, skills.csharp, skills.react, skills.nextjs, skills.nodejs, skills.js,
  skills.ts, skills.tailwind, skills.html, skills.css, skills.python, skills.firebase, skills.git, skills.jira,
  skills.trello, skills.figma
]