import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sumanth Thotamsetty</h3>
          <p>Java Full Stack Developer & UI/UX Designer</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="https://linkedin.com/in/sumanth-thotamsetty" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Sumanth-2002" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>thotamsettysumanth@gmail.com</p>
          <p>Guntur, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Sumanth Thotamsetty. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;