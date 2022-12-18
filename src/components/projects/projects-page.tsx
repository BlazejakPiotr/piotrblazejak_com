import Link from "next/link";
import React from "react";
import { ProjectInterface } from "../../interfaces/projects";

type DataType = {
  data: ProjectInterface[];
};

const AllProjects = ({ data }: DataType) => {
  return (
    <div>
      <h1 className="section-title">
        <span>My projects</span>
      </h1>
      <div>
        <div className="projects-list">
          {data?.map((project: any) => (
            <Link key={project.id} href={`/projects/${project.id}`} passHref>
              <div
                className="card"
                style={{ backgroundImage: `url(/projects/${project.logo})` }}
              >
                <div className="card-data"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default AllProjects;
