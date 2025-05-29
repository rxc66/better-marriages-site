import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Better Marriages Georgia</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="intro-text">
              At Better Marriages Georgia, we believe that every couple deserves a space to grow, connect, and strengthen their relationship — without pressure, pretense, or commercial hooks.
            </p>
            
            <h3>What makes us unique?</h3>
            
            <div className="unique-features">
              <div className="unique-feature">
                <span className="emoji">❤️</span>
                <div className="feature-content">
                  <h4>Multi-generational wisdom</h4>
                  <p>Our community includes couples who have weathered decades of ups and downs and are eager to share their hard-won insights with others.</p>
                </div>
              </div>

              <div className="unique-feature">
                <span className="emoji">🤝</span>
                <div className="feature-content">
                  <h4>Volunteer-led and community-driven</h4>
                  <p>We're not a polished production. We're built by real couples who care deeply, show up year after year, and walk alongside others on the journey.</p>
                </div>
              </div>

              <div className="unique-feature">
                <span className="emoji">🗣</span>
                <div className="feature-content">
                  <h4>Couple dialogue at the center</h4>
                  <p>We don't just talk at you; we help you talk to each other — really talk. Our retreats create space and structure to practice the kind of meaningful conversations that transform marriages.</p>
                </div>
              </div>

              <div className="unique-feature">
                <span className="emoji">💬</span>
                <div className="feature-content">
                  <h4>Vulnerability without pretense</h4>
                  <p>You'll hear real stories from real people. There's no stage act, no perfection — just honesty, trust, and connection.</p>
                </div>
              </div>

              <div className="unique-feature">
                <span className="emoji">💡</span>
                <div className="feature-content">
                  <h4>We're here for your growth</h4>
                  <p>There's no product to sell, no upsell, no big donation push. We're here simply to help couples thrive.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 