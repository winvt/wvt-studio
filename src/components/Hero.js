import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="highlight">WVT Studio</span>
            </h1>
            <p className="hero-subtitle">
              Creating beautiful digital experiences with passion and creativity
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                Learn More
              </button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Get in Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


