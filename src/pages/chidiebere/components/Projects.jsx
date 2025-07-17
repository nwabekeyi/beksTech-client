import React from "react";
import "../../home/styles/Project.css";

function Projects() {
  const projects = [
    {
      title: "Smart Airs",
      description:
        "Smart Airs aims to provide a seamless and efficient solution for users to manage their taxes.",
      tech: "React | ExpressJs",
      link: "#",
    },
    {
      title: "Maxcoin",
      description:
        "MaxCoin is a web-based cryptocurrency platform designed to offer users an easy and secure way to trade and manage digital assets.",
      tech: "ExpressJs | MySQL",
      link: "#",
    },
    {
      title: "Pesrichi Brown website",
      description:
        "Pesrichi brown is a website for a tech supplying firm that sells various building interior fittings and cabinets.",
      tech: "Wordpress",
      link: "#",
    },
    {
      title: "Lendsqr",
      description:
        "Lendsqr is a loan management dashboard using React, designed to facilitate loan applications and track loan statuses.",
      tech: "React | SCSS",
      link: "#",
    },
    {
      title: "Babtech e-learning (on-going)",
      description:
        "BabTech e-learning app, built with Firebase and React, offers a seamless online learning experience with tech courses.",
      tech: "React | Firebase",
      link: "#",
    },
    {
      title: "Trust Market (on-going)",
      description:
        "Trust Market is a web app built with React and Node.js, offering dynamic product listings.",
      tech: "React | ExpressJs | MongoDB",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="Block">
      <h2 className="heading blockHeading" style={{ textAlign: "center" }}>
        My Projects
      </h2>

      <div className="projectGrid">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            <h3 className="projectTitle">{project.title}</h3>
            <p className="projectDesc">{project.description}</p>
            <p className="projectTech">{project.tech}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="projectLink"
            >
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
