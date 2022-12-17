import React from "react";
import SingleProject from "../../src/components/projects/single-project";
import { ProjectInterface } from "../../src/interfaces/projects";

type DataType = {
  data: ProjectInterface;
};
const ProjectPage = ({ data }: DataType) => {
  return <SingleProject data={data} />;
};

export default ProjectPage;

export async function getStaticPaths() {
  const data = await import("../../data/data.json");
  const allProjects = data.projects;

  const allPaths = allProjects.map((path) => {
    return {
      params: {
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.id;
  const { projects } = await import("../../data/data.json");
  const projectData = projects.find((item) => id === item.id);

  return {
    props: { data: projectData },
  };
}
