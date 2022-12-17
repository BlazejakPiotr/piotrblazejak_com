import React from "react";
import { ProjectInterface } from "../../interfaces/projects";

type DataType = {
  data: ProjectInterface;
};

const SingleProject = ({ data }: DataType) => {
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
};

export default SingleProject;
