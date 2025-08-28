import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-header">
            <h2 className="section-title">About WVT Studio</h2>
            <p className="section-subtitle">
              We specialize in creating innovative digital solutions that bring your vision to life
            </p>
          </div>
          
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">
                <div className="icon-circle">
                  <span>🎨</span>
                </div>
              </div>
              <h3>Creative Design</h3>
              <p>
                We believe in the power of beautiful, functional design that not only looks great 
                but also provides an exceptional user experience.
              </p>
            </div>
            
            <div className="about-card">
              <div className="card-icon">
                <div className="icon-circle">
                  <span>💻</span>
                </div>
              </div>
              <h3>Modern Development</h3>
              <p>
                Using cutting-edge technologies and best practices to build robust, scalable, 
                and maintainable applications.
              </p>
            </div>
            
            <div className="about-card">
              <div className="card-icon">
                <div className="icon-circle">
                  <span>🚀</span>
                </div>
              </div>
              <h3>Performance Focused</h3>
              <p>
                Every project is optimized for speed and efficiency, ensuring your users 
                have the best possible experience.
              </p>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <h3>100+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

