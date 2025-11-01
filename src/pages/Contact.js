import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.project}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:thotamsettysumanth@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact">
      <motion.div 
        className="contact-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Let's Work Together</h1>
        <p className="subtitle">Have a project in mind? Get in touch and let's discuss how I can help</p>
      </motion.div>

      <div className="contact-content">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2>Contact Information</h2>

          <div className="info-item">
            <h3>📧 Email</h3>
            <p>thotamsettysumanth@gmail.com</p>
          </div>

          <div className="info-item">
            <h3>📍 Location</h3>
            <p>Guntur, India</p>
          </div>

          <div className="info-item">
            <h3>🔗 Social Links</h3>
            <div className="social-links">
              <a href="https://linkedin.com/in/sumanth-thotamsetty" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/Sumanth-2002" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>

          <div className="availability">
            <h3>⏰ Availability</h3>
            <p><strong>Weekdays:</strong> 3-4 hours daily</p>
            <p><strong>Weekends:</strong> Full day available</p>
            <p><strong>Response Time:</strong> Within 24 hours</p>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2>Send Me a Message</h2>

          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="project">Project Type *</label>
            <select
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="Java Backend">Java Backend Development</option>
              <option value="React Frontend">React Frontend Development</option>
              <option value="UI/UX Design">UI/UX Design (Figma)</option>
              <option value="Full Stack">Full-Stack Solution</option>
              <option value="Angular">Angular Development</option>
              <option value="Code Review">Code Review & Consulting</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="budget">Budget Range *</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            >
              <option value="">Select budget range</option>
              <option value="Under ₹5,000">Under ₹5,000</option>
              <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
              <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
              <option value="₹20,000 - ₹50,000">₹20,000 - ₹50,000</option>
              <option value="Above ₹50,000">Above ₹50,000</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Details *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell me about your project requirements, timeline, and any specific features you need..."
            />
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;