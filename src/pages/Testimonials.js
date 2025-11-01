import { motion } from 'framer-motion';
import '../styles/Testimonials.css';

function Testimonials() {
  const testimonialsList = [
    {
      name: 'Client Name',
      company: 'Company Name',
      text: 'Exceptional work! Delivered a flawless React dashboard that exceeded our expectations. Communication was clear and professional throughout the project.',
      rating: 5,
      project: 'React Dashboard Development'
    },
    {
      name: 'Client Name',
      company: 'Company Name',
      text: 'The backend API was robust, secure, and well-documented. Sumanth demonstrated deep expertise in Spring Boot and delivered ahead of schedule.',
      rating: 5,
      project: 'Java Spring Boot API'
    },
    {
      name: 'Client Name',
      company: 'Company Name',
      text: 'Outstanding UI/UX design in Figma. The prototype was intuitive, modern, and perfectly captured our brand identity. Highly recommended!',
      rating: 5,
      project: 'Figma UI/UX Design'
    }
  ];

  return (
    <div className="testimonials">
      <motion.div 
        className="testimonials-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Client Testimonials</h1>
        <p className="subtitle">What clients say about working with me</p>
      </motion.div>

      <section className="testimonials-note">
        <p className="info-text">
          🚀 Currently building my freelance portfolio. As I complete projects and receive client feedback, 
          testimonials will be displayed here. Check back soon for verified reviews!
        </p>
      </section>

      <div className="testimonials-grid">
        {testimonialsList.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card placeholder"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>

            <p className="testimonial-text">"{testimonial.text}"</p>

            <div className="testimonial-author">
              <h4>{testimonial.name}</h4>
              <p className="company">{testimonial.company}</p>
              <p className="project-type">{testimonial.project}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="trust-section">
        <h2>Why Clients Choose Me</h2>
        <div className="trust-grid">
          <div className="trust-item">
            <h3>🎯 Quality First</h3>
            <p>Premium quality deliverables with attention to detail</p>
          </div>
          <div className="trust-item">
            <h3>⚡ Fast Delivery</h3>
            <p>Quick turnaround without compromising quality</p>
          </div>
          <div className="trust-item">
            <h3>💬 Clear Communication</h3>
            <p>Regular updates and transparent process</p>
          </div>
          <div className="trust-item">
            <h3>🔄 Revisions Included</h3>
            <p>Unlimited revisions until you're satisfied</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Work Together?</h2>
        <p>Let's create something amazing for your business</p>
        <a href="/contact" className="btn btn-primary">Start Your Project</a>
      </section>
    </div>
  );
}

export default Testimonials;