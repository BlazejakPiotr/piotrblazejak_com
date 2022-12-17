import React from "react";
import AllProjects from "../../src/components/projects/projects-page";
import { ProjectInterface } from "../../src/interfaces/projects";

type DataType = {
  data: ProjectInterface[];
};

const ProjectsPage = ({ data }: DataType) => {
  return <AllProjects data={data} />;
};

export default ProjectsPage;

export async function getStaticProps() {
  const { projects } = await import("../../data/data.json");
  return {
    props: {
      data: projects,
    },
  };
}
