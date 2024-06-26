import SiteLayout from "../components/SiteLayout";
import Project from "../components/Project";
import Icon from "../components/Icon";
import React from "react";
import { skills } from "../content/skills";
import { projects } from "../content/projects";
import IProject from "../types/project";
import IExperience from "../types/experience";
import { GetStaticProps } from "next";
import {experiences} from "../content/experiences";
import DetailedExperience from "../components/DetailedExperience";

interface ProjectPageProps {
  slug: string;
}

export default function ProjectPage(props: ProjectPageProps) {
  const { slug } = props;
  const skill = skills[slug];

  if (!skill) return null;

  const { name, icon } = skill;
  const projectList: Array<IProject> = [];

  Object.keys(projects).forEach((key) => {
    const project = projects[key];
    const matchingSkill = project.skills?.find((skill) => skill.slug === slug);
    if (matchingSkill) projectList.push(project);
  });

  const experienceList: Array<IExperience> = experiences.filter((experience) => {
    return (experience.skills.filter((s) => s.slug === skill.slug))?.length;
  })

  return (
    <SiteLayout showSkills={true}>
      <main>
        <div className="container py-10 lg:py-16">
          <div className="mb-12 flex items-center">
            {icon && <Icon icon={icon} className="block mr-5 text-5xl" />}
            <h1 className="">{name}</h1>
          </div>

          {!projectList?.length && !experienceList?.length ? <p>Nothing to see here</p> : ''}

          {projectList?.length > 0 && (
            <div className="mb-10">
              <h2 className="mb-4">Projects</h2>
              {projectList?.length ? (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {projectList.map((p) => (
                    <Project content={p} key={p.slug} />
                  ))}
                </div>
              ) : (
                <p>No projects found.</p>
              )}
            </div>
          )}

          {experienceList?.length > 0 && (
            <>
              <h2 className="mb-4">Experience</h2>
              <div className="grid gap-5">
                {experienceList.map((e) => (
                  <DetailedExperience content={{...e, projects: []}} key={`${e.position} ${e.company}`} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </SiteLayout>
  );
}

export const getStaticPaths = async () => {
  const paths = Object.keys(skills).map((key) => ({
    params: { slug: skills[key].slug },
  }));

  return {
    paths,
    // fallback: "blocking",
    fallback: false //to make it work with next export
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params) {
    const { slug } = context.params;

    if (slug) {
      // @ts-ignore
      const skill = skills[slug];

      if (skill) {
        return {
          props: {
            slug,
          },
        };
      }
    }
  }

  return {
    notFound: true,
  };
};
