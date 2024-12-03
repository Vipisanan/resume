import React from "react";
import "./style.css";

const data = [
  {
    name: "??",
    duration: "1 year",
    describe: "description ,,,,,",
    technologies: ["X", "Y"],
  },
];
const ProjectExperience = ({ projects = data }) => {
  return (
    <section className="project-experience">
      {/* <h2>Project Experience</h2> */}
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3 className="project-title">{project.name}</h3>
          <p className="project-duration"> {project.duration}</p>
          <p className="project-description">{project.describe}</p>
          <ul className="project-technologies">
            {project.technologies.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ProjectExperience;
