import { motion } from 'framer-motion';
import '../styles/Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Real-Time Sales Performance Platform',
      tech: 'Java, Spring Boot, React, SQL, Angular',
      description: 'Designed and developed a multi-role dashboard with live analytics, reporting features, and comprehensive data visualization. Built secure REST APIs with role-based access control and optimized database queries for enterprise performance.',
      date: 'January 2025',
      highlights: ['Multi-role dashboards', 'Real-time analytics', 'REST API security', 'Database optimization']
    },
    {
      title: 'Android Discharge Monitoring App',
      tech: 'Java, React Native, Figma, SQL',
      description: 'Created patient monitoring system with real-time notifications and event triggers. Designed comprehensive UI/UX in Figma with focus on healthcare accessibility. Implemented backend modules for data processing and alert management.',
      date: 'December 2023',
      highlights: ['Healthcare dashboard', 'Real-time notifications', 'Figma prototyping', 'Patient data management']
    },
    {
      title: 'Bar Service Management Application',
      tech: 'React, Figma, Java Spring Boot, SQL Server',
      description: 'Built comprehensive order and transaction tracking system with visually appealing web interfaces. Implemented secure user authentication, payment processing integration, and analytics dashboard for business insights.',
      date: 'November 2023',
      highlights: ['Order tracking', 'Payment integration', 'Analytics dashboard', 'User authentication']
    },
    {
      title: 'AI Image Guessing Game',
      tech: 'React, Perplexity API, JavaScript',
      description: 'Developed interactive game with AI-powered image generation and guessing mechanics. Implemented team vs individual gameplay modes, carousel functionality, and responsive premium UI design.',
      date: 'August 2025',
      highlights: ['AI integration', 'Team gameplay', 'Premium UI', 'Interactive carousel']
    }
  ];

  return (
    <div className="projects">
      <motion.div 
        className="projects-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>My Projects</h1>
        <p className="subtitle">A showcase of my best work in full-stack development and UI/UX design</p>
      </motion.div>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="project-header">
              <h2>{project.title}</h2>
              <span className="project-date">{project.date}</span>
            </div>

            <p className="project-tech">{project.tech}</p>
            <p className="project-description">{project.description}</p>

            <div className="project-highlights">
              <h4>Key Features:</h4>
              <ul>
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="github-section">
        <h2>Want to See More?</h2>
        <p>Check out my GitHub for more projects and code samples</p>
        <a 
          href="https://github.com/Sumanth-2002" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Visit My GitHub
        </a>
      </section>
    </div>
  );
}

export default Projects;