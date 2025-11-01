import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <motion.div 
        className="hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Hi, I'm <span className="highlight">Sumanth Thotamsetty</span></h1>
        <h2>Java Full Stack Developer & UI/UX Designer</h2>
        <p className="hero-description">
          Leveraging enterprise-grade expertise in Spring Boot, React, and Figma to build 
          scalable web solutions and premium user interfaces that drive business growth.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">View My Work</Link>
          <Link to="/contact" className="btn btn-secondary">Hire Me</Link>
        </div>
      </motion.div>

      <motion.section 
        className="home-highlights"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="highlight-card">
          <h3>🚀 Full Stack Development</h3>
          <p>Java Spring Boot, REST APIs, React, Angular, SQL Server</p>
        </div>

        <div className="highlight-card">
          <h3>🎨 UI/UX Design</h3>
          <p>Figma prototypes, premium designs, responsive interfaces</p>
        </div>

        <div className="highlight-card">
          <h3>🏆 Proven Track Record</h3>
          <p>Award-winning developer, certified professional, AICTE internship</p>
        </div>
      </motion.section>

      <section className="cta-section">
        <h2>Ready to Start Your Project?</h2>
        <p>Let's build something amazing together</p>
        <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
      </section>
    </div>
  );
}

export default Home;