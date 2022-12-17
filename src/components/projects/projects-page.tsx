import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProjectInterface } from "../../interfaces/projects";

type DataType = {
  data: ProjectInterface[];
};

const AllProjects = ({ data }: DataType) => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects-list">
        {data?.map((project: any) => (
          <Link key={project.id} href={`/projects/${project.id}`} passHref>
            <div className="card">
              <Image
                width={600 * 0.65}
                height={400 * 0.65}
                alt={project.title}
                src={`/projects/${project.logo}`}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
