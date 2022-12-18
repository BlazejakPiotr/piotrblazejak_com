import Image from "next/image";
import React from "react";
import { ProjectInterface } from "../../interfaces/projects";

type DataType = {
  data: ProjectInterface;
};

const SingleProject = ({ data }: DataType) => {
  return (
    <div className="project-container">
      <Image
        src={`/projects/spotify/${data.screenshots[0].url}`}
        alt={data.title}
        width={750}
        height={500}
      />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default SingleProject;
