import { motion } from 'framer-motion';
import '../styles/Services.css';

function Services() {
  const servicesList = [
    {
      icon: '⚙️',
      title: 'Java Backend Development',
      description: 'Enterprise-grade REST APIs, microservices architecture, Spring Boot applications with security implementations and database integrations.',
      features: ['Spring Boot', 'REST APIs', 'Microservices', 'Database Design', 'Security Implementation'],
      pricing: 'Starting from ₹15,000'
    },
    {
      icon: '💻',
      title: 'React Frontend Development',
      description: 'Modern, responsive web applications with React. Component-based architecture, state management, API integration, and smooth animations.',
      features: ['React Components', 'Redux/State Management', 'API Integration', 'Responsive Design', 'Performance Optimization'],
      pricing: 'Starting from ₹12,000'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design (Figma)',
      description: 'Premium UI/UX designs for mobile and web applications. Wireframes, prototypes, user flows, and design systems tailored to your brand.',
      features: ['Wireframing', 'Prototyping', 'User Flows', 'Design Systems', 'Mobile & Web Design'],
      pricing: 'Starting from ₹8,000'
    },
    {
      icon: '🚀',
      title: 'Full-Stack Solutions',
      description: 'End-to-end product development from concept to deployment. Complete solutions with frontend, backend, database, and UI/UX design.',
      features: ['Complete Product Development', 'Architecture Design', 'Deployment', 'Testing', 'Documentation'],
      pricing: 'Starting from ₹25,000'
    },
    {
      icon: '🔍',
      title: 'Code Review & Consulting',
      description: 'Expert analysis of your existing codebase, architectural recommendations, performance optimization, and best practices implementation.',
      features: ['Code Quality Analysis', 'Performance Audit', 'Security Review', 'Best Practices', 'Optimization Suggestions'],
      pricing: 'Starting from ₹5,000'
    },
    {
      icon: '📱',
      title: 'Angular Development',
      description: 'Enterprise Angular applications with TypeScript, component-based architecture, and seamless backend integration.',
      features: ['Angular Components', 'TypeScript', 'RxJS', 'Enterprise Architecture', 'API Integration'],
      pricing: 'Starting from ₹15,000'
    }
  ];

  return (
    <div className="services">
      <motion.div 
        className="services-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Services I Offer</h1>
        <p className="subtitle">Professional freelance services tailored to your business needs</p>
      </motion.div>

      <div className="services-grid">
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p className="service-description">{service.description}</p>

            <div className="service-features">
              <h4>What You Get:</h4>
              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <div className="service-pricing">{service.pricing}</div>
          </motion.div>
        ))}
      </div>

      <section className="packages-section">
        <h2>Custom Packages Available</h2>
        <p>Need something specific? I offer customized packages combining multiple services to fit your exact requirements.</p>

        <div className="package-benefits">
          <div className="benefit">
            <h3>✓ Fast Turnaround</h3>
            <p>24-48 hour delivery for small tasks</p>
          </div>
          <div className="benefit">
            <h3>✓ Quality Guaranteed</h3>
            <p>Premium quality with revisions included</p>
          </div>
          <div className="benefit">
            <h3>✓ Clear Communication</h3>
            <p>Regular updates and quick responses</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Let's discuss your project requirements</p>
        <a href="/contact" className="btn btn-primary">Request a Quote</a>
      </section>
    </div>
  );
}

export default Services;