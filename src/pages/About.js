import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  const skills = [
    { category: 'Backend', items: ['Java', 'Spring Boot', 'REST APIs', 'SQL Server', 'Apache Camel'] },
    { category: 'Frontend', items: ['React', 'Angular', 'HTML/CSS', 'JavaScript', 'Figma'] },
    { category: 'Tools & Others', items: ['Git', 'Docker', 'Oracle Cloud', 'Oops in Java', 'Android Studio'] }
  ];

  return (
    <div className="about">
      <motion.div 
        className="about-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>About Me</h1>
        <p className="subtitle">Passionate Developer | Problem Solver | Award Winner</p>
      </motion.div>

      <motion.section 
        className="about-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="about-text">
          <h2>Who I Am</h2>
          <p>
            I'm a Java Full Stack Developer and UI/UX Designer with expertise in building 
            enterprise-grade web applications and premium user interfaces. My background includes 
            working with data management tools at Markit EDM and completing an AICTE internship 
            in Web Development & Design.
          </p>
          <p>
            I specialize in Spring Boot, React, Angular, and Figma, with a strong foundation in 
            database design and cloud technologies. My work has earned recognition including the 
            AGNITO award for academic excellence and multiple student awards.
          </p>

          <div className="certifications">
            <h3>Certifications</h3>
            <ul>
              <li>Oracle Cloud Infrastructure 2024 Certified Foundations Associate</li>
              <li>Introduction to Programming in C - NPTEL</li>
              <li>Oops in Java - Great Learning</li>
              <li>SQL - HackerRank</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <section className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <h3>{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="education-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>BE Computer Science and Engineering</h3>
          <p>Sharada School of Engineering | 2022-2026 | 8.8 CGPA</p>
        </div>
        <div className="education-item">
          <h3>Board of Intermediate Education</h3>
          <p>Sri Nalanda Junior College | 2020-2022 | 9.34 CGPA</p>
        </div>
      </section>

      <section className="achievements-section">
        <h2>Achievements</h2>
        <ul className="achievements-list">
          <li>🏆 AGNITO Award for academic topper (November 2023)</li>
          <li>🏆 Best Student award for academic year 2018-19</li>
          <li>🏆 Runner up in Quiz contest at Ravindra Bharathi School - 2018</li>
        </ul>
      </section>
    </div>
  );
}

export default About;