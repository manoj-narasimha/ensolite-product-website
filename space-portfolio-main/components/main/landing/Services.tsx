export function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>

        <button className="scroll-button scroll-left" aria-label="Scroll left">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="scroll-button scroll-right" aria-label="Scroll right">
          <i className="fas fa-chevron-right"></i>
        </button>

        <div className="service-grid">
          <div className="service-card reveal reveal-left">
            <i className="fas fa-robot"></i>
            <h3>Energy Solutions</h3>
            <p>Streamline your operations with our top-notch Energy Solutions</p>
          </div>

          <div className="service-card reveal reveal-up">
            <i className="fas fa-brain"></i>
            <h3>Solar Solutions</h3>
            <p>Integrate smarter, efficient and cost saving solar solutions</p>
          </div>

          <div className="service-card reveal reveal-right">
            <i className="fas fa-code"></i>
            <h3>IOT Solutions</h3>
            <p>Build tailored IOT solutions that address your specific business needs.</p>
          </div>

          <div className="service-card reveal reveal-up">
            <i className="fas fa-graduation-cap"></i>
            <h3>IT Solutions</h3>
            <p>Empower your workforce with our IT team, enabling them to leverage cutting-edge tools for enhanced productivity and faster delivery.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
