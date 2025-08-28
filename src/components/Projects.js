import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Kumo, Travel Ai",
      category: "Web Development",
      description: "A modern AI assisted triip planner built with React and Node.js, featuring user authentication, product management, and secure payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe","Google Cloud","OpenAI"],
      image: "🛩️",
      link: "https://kuro1.onrender.com/",

    },
    {
      id: 2,
      title: "Mobile App Design",
      category: "UI/UX Design",
      description: "Complete mobile app design system with custom components, user flows, and interactive prototypes for a fitness tracking application.",
      technologies: ["Figma", "Adobe XD", "Prototyping", "Design Systems","React Native","OpenAI"],
      image: "📱",
      link: "https://superice-website1.onrender.com/",
    
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Frontend Development",
      description: "A responsive portfolio website showcasing creative work with smooth animations, modern design, and optimized performance.",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      image: "💼",
      link: "#",
    
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="projects-content">
          <div className="projects-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Explore some of our recent work that showcases our expertise in design and development
            </p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <div className="project-icon">
                    <span>{project.image}</span>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-demo-link">
                    <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      <span>🌐</span> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
