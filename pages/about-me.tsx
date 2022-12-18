import React from "react";
import AboutMePage from "../src/components/about/about-page";
import { WorkExperienceInterface } from "../src/interfaces/workexp";

type DataType = {
  data: WorkExperienceInterface[];
  skills: string[];
};

const AboutPage = ({ data, skills }: DataType) => {
  return <AboutMePage data={data} skills={skills} />;
};

export default AboutPage;

export async function getStaticProps() {
  const { workexp, skills } = await import("../data/data.json");
  return {
    props: {
      data: workexp,
      skills: skills,
    },
  };
}
