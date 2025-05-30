export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section main-section">
            <div className="footer-branding">
              <img src="/assets/icon-full.png" alt="Ensolite Logo" className="footer-logo" />
            </div>
            <p className="footer-tagline">Innovating Today for a Smarter Tomorrow.</p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/tyagiharshit/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://x.com/dswharshit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <img src="/assets/x.png" alt="X" style={{ width: 16, height: 16 }} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCH-xwLTKQaABNs2QmGxK2bQ/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://highsignalai.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Newsletter"
              >
                <i className="fas fa-newspaper"></i>
              </a>
            </div>
          </div>
          <div className="footer-section links-section">
            <h3>Navigation</h3>
            <div className="footer-links-grid">
              <div className="links-column">
                <h4>Company</h4>
                <ul>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#how-it-works">How It Works</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </div>
              <div className="links-column">
                <h4>Resources</h4>
                <ul>
                  <li><a href="/products">Products</a></li>
                  <li><a href="/about" target="_blank" rel="noopener noreferrer">About Us</a></li>
                  <li><a href="mailto:support@enolite.in">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Ensolite Technologies PVT LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
