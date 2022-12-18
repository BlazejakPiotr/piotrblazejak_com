import React from "react";
import { WorkExperienceInterface } from "../../interfaces/workexp";
import { MdWorkOutline } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import Image from "next/image";

type DataType = {
  data: WorkExperienceInterface[];
  skills: string[];
};

const AboutMePage = ({ data, skills }: DataType) => {
  console.log(skills[0]);
  return (
    <div>
      <h1 className="section-title">
        <span>About me</span>
      </h1>

      <div
        style={{
          flex: "1 40%",
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        <div style={{ flex: "1 60%" }}>
          <p style={{ marginBottom: "30px" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum unde
            minus, voluptas facilis iure soluta quis officia fugiat. Accusamus
            similique eum hic corrupti laudantium. Maiores sunt dolor autem
            quasi nostrum reprehenderit pariatur nulla amet corporis blanditiis
            totam distinctio cumque, velit veniam omnis culpa dolores esse
            repellendus! Placeat, itaque! Labore, id, cupiditate fugit,
            accusantium rerum iure illo eum quae excepturi quia facere quo nemo
            autem ipsa! Natus ut ad officiis accusantium iste ab sunt,
            necessitatibus sequi pariatur, blanditiis magnam eius saepe quidem
            ducimus explicabo quaerat consectetur tempora optio aperiam in
            totam. Voluptas tempora sint unde nihil rerum. Laudantium quas
            veritatis quod?
          </p>
          <h2 className="section-subtitle">Tech stack</h2>
          <div className="skills-container">
            {skills.map((item) => (
              <div key={item} className="skill-item">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: "1 30%" }}>
          <Image src={"/ja.png"} width={180} height={450} alt="me" />
        </div>
        <div></div>
      </div>
      <div style={{ flex: "1 25%" }}>
        <h2 className="section-subtitle">Work Experience</h2>
        {data.map((exp: WorkExperienceInterface) => (
          <div key={exp.id} className="work-exp-item">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3>{exp.title}</h3>
              <p>
                {exp.started} - {exp.finished}
              </p>
            </div>
            <h4>{exp.company}</h4>
            <ul>
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMePage;
