import React from "react"; 
import "../../home/styles/Project.css";

function Projects() {
  const projects = [
    {
      title: "Smart Airs",
      image: "/project/smart.png",
      description: "Smart Airs aims to provide a seamless and efficient solution for users to manage their taxes.",
      tech: "React | ExpressJs",
      link: "https://smartairs.tax/",
    },
    {
      title: "Maxcoin",
      image: "/project/max.png",
      description: "MaxCoin is a web-based cryptocurrency platform designed to offer users an easy and secure way to trade and manage digital assets.",
      tech: "ExpressJs | MySQL",
      link: "https://support.maicoin.com/en/support/home",
    },
    {
      title: "Pesrichi Brown website",
      image: "/project/pesrichi.png",
      description: "Pesrichi brown is a website for a tech supplying firm that sells various building interior fittings and cabinets.",
      tech: "Wordpress",
      link: "https://pesbrownrichi.org/",
    },
    {
      title: "Crystal Land Academy",
      image: "/project/crystal.png",
      description: "Lendsqr is a loan management dashboard using React, designed to facilitate loan applications and track loan statuses.",
      tech: "React | Expressjs| Mongodb | VPS hosting",
      link: "http://crystallandacademy.com",
    },
    {
      title: "CL3F Wilson",
      image: "/project/cw.png",
      description: "BabTech e-learning app, built with Firebase and React, offers a seamless online learning experience with tech courses.",
      tech: "React | Firebase | Expressjs | Mysql",
      link: "http://cl3fwilson.com",
    },
    {
      title: "Resolve (on-going)",
      image: "/project/resolve.png",
      description: "Trust Market is a web app built with React and Node.js, offering dynamic product listings.",
      tech: "Nextjs | Prisma | Postgres",
      link: "https://resolve-web-app-dev.vercel.app/login",
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
            <div className="projectImageWrapper">
              <img src={project.image} alt={`${project.title} screenshot`} className="projectImage" />
            </div>
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
