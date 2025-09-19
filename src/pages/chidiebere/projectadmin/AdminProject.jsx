import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import PuffLoader from "react-spinners/PuffLoader";
import '../../home/styles/AdminProject.css';

const AdminProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    image: '',  
    description: '',
    tech: '',
    link: ''
  });

  const navigate = useNavigate();
  const location = useLocation();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // remove JWT
    navigate("/signin"); // redirect
  };

  // Fetch projects from API
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/projects');
      
      if (!Array.isArray(response.data)) {
        throw new Error('API response is not an array');
      }
      
      setProjects(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load projects: ' + err.message);
      console.error('API Error:', {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status
      });
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();

    // Check if we should open the form after login
    const shouldOpenForm = sessionStorage.getItem("openFormAfterLogin");
    if (shouldOpenForm) {
      setShowForm(true);
      sessionStorage.removeItem("openFormAfterLogin");
    }
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject(prev => ({ ...prev, [name]: value }));
  };

  // Submit new project to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const projectData = {
        ...newProject,
        tech: newProject.tech.split(',').map(t => t.trim())
      };
      
      const response = await axios.post(
        '/api/projects',
        projectData
      );
      
      setProjects(prev => [response.data, ...prev]);
      setNewProject({
        title: '',
        image: '',
        description: '',
        tech: '',
        link: ''
      });
      setShowForm(false);
      setError(null);
    } catch (err) {
      const errorMsg = err.response?.data?.error || err.message;
      setError('Failed to create project: ' + errorMsg);
      console.error('Create Project Error:', {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status
      });
    }
  };

  // Delete project
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await axios.delete(`/api/projects/${id}`);
        setProjects(prev => prev.filter(project => project._id !== id));
      } catch (err) {
        setError('Failed to delete project: ' + err.message);
      }
    }
  };

  // Handle create project click
  const handleCreateClick = () => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      sessionStorage.setItem("openFormAfterLogin", "true");
      navigate("/signin", { state: { from: location.pathname } });
    } else {
      setShowForm(!showForm);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <PuffLoader color="#693def" size={80} />
        <span>Loading projects...</span>
      </div>

    );
  }

  return (
    <div className="admin-projects-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Manage Projects</h1>
        <button 
          onClick={handleLogout} 
          style={{
            background: '#ff4d4d',
            color: 'white',
            border: 'none',
            padding: '8px 14px',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>

      {error && (
        <div className="error-container">
          <div className="error-icon">!</div>
          <div className="error-content">
            <h3>Error</h3>
            <p>{error}</p>
          </div>
        </div>
      )}
      
      <div className="form-toggle">
        <button 
          className="create-button" 
          onClick={handleCreateClick}
        >
          {showForm ? 'Cancel' : 'Create New Project'}
        </button>
      </div>
      
      {showForm && (
        <form onSubmit={handleSubmit} className="project-form">
          <h2>Create New Project</h2>
          
          <div className="form-group">
            <label htmlFor="title">Project Title*</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newProject.title}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="image">Image URL*</label>
            <input
              type="url"
              id="image"
              name="image"
              value={newProject.image}
              onChange={handleInputChange}
              required
              placeholder="https://example.com/image.jpg"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description*</label>
            <textarea
              id="description"
              name="description"
              value={newProject.description}
              onChange={handleInputChange}
              required
              rows="4"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="tech">Technologies*</label>
            <input
              type="text"
              id="tech"
              name="tech"
              value={newProject.tech}
              onChange={handleInputChange}
              required
              placeholder="React, Node.js, MongoDB"
            />
            <p className="input-hint">Separate technologies with commas</p>
          </div>
          
          <div className="form-group">
            <label htmlFor="link">Project Link*</label>
            <input
              type="url"
              id="link"
              name="link"
              value={newProject.link}
              onChange={handleInputChange}
              required
              placeholder="https://project.com"
            />
          </div>
          
          <button type="submit" className="submit-button">
            Create Project
          </button>
        </form>
      )}
      
      {projects.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📁</div>
          <h3>No projects found</h3>
          <p>Get started by creating a new project</p>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project._id} className="project-card">
              <div className="project-image-container">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                  />
                ) : (
                  <div className="image-placeholder">No Image</div>
                )}
              </div>
              
              <div className="card-content">
                <h2 className="project-title">{project.title}</h2>
                
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-tech">
                  {project.tech && project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-link">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
                
                <div className="project-actions">
                  <button 
                    className="delete-button"
                    onClick={() => handleDelete(project._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminProjectPage;
