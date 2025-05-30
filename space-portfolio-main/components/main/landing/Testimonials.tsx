export function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card reveal reveal-left">
            <p>
              "The amount of value we have received from Top Signal AI is immense.
              We have been able to automate a large chunk of our business processes and scale our operations."
            </p>
            <div className="client-info">
              <h4>Rahul Ramchand</h4>
              <p>Founder, Skyvane</p>
            </div>
          </div>
          <div className="testimonial-card reveal reveal-right">
            <p>
              "Our catering service was in need of a way to automate our order taking process.
              Top Signal AI was able to build a custom AI solution that not only automated our order taking process but also improved the accuracy of our orders."
            </p>
            <div className="client-info">
              <h4>Liz</h4>
              <p>Founder, Food by Fare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
