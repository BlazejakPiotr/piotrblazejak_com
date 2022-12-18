import React from "react";
import Button from "../button/button";

const HomePage = () => {
  return (
    <div>
      <div className="home">
        <div className="text">
          Hello, my name is <span style={{ color: "#E84646" }}>Piotr</span>
          <br />
          I'm <span style={{ color: "#E84646" }}>Front-End</span> Developer
        </div>
        <div style={{ marginBottom: "16px" }}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Ea, sequi?Exercitationem aut, distinctio in ducimus</p>
        </div>
        <div style={{ display: "flex", gap: "30px" }}>
          <Button text="About me" /> <Button text="View my work" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
