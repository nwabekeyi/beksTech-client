import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../home/styles/Project.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
useEffect(() => {
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/projects");
      setProjects(res.data);
    } catch (err) {
      setError("Failed to load projects: " + err.message);
    } finally {
      setLoading(false);
    }
  };
  fetchProjects();
}, []);


  return (
    <section id="projects" className="Block">
      <h2 className="heading blockHeading" style={{ textAlign: "center" }}>
        My Projects
      </h2>

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <span>Loading projects...</span>
        </div>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : projects.length === 0 ? (
        <p className="no-projects">No projects found</p>
      ) : (
        <div className="projectGrid">
          {projects.map((project) => (
            <div key={project._id || project.id} className="projectCard">
              <h3 className="projectTitle">{project.title}</h3>
              <div className="projectImageWrapper">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="projectImage"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.parentNode.innerHTML = '<div class="image-error">Image failed to load</div>';
                    }}
                  />
                ) : (
                  <div className="image-placeholder">No Image</div>
                )}
              </div>
              <p className="projectDesc">{project.description}</p>
              <div className="projectTech">
                {project.tech && Array.isArray(project.tech) && project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;