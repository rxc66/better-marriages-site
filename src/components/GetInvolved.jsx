import './GetInvolved.css';

const GetInvolved = () => {
  const ways = [
    {
      id: 1,
      icon: "❤️",
      title: "Join a Group",
      description: "Connect with other couples in your area through our marriage enrichment groups."
    },
    {
      id: 2,
      icon: "🎓",
      title: "Attend Workshops",
      description: "Participate in our educational workshops and annual retreats."
    },
    {
      id: 3,
      icon: "🤝",
      title: "Volunteer",
      description: "Help us organize events and support other couples in their journey."
    },
    {
      id: 4,
      icon: "💝",
      title: "Donate",
      description: "Support our mission to strengthen marriages across Georgia."
    }
  ];

  return (
    <section id="get-involved" className="get-involved">
      <div className="container">
        <h2>Get Involved</h2>
        <p className="section-description">
          Join our community and help build stronger marriages in Georgia.
        </p>

        <div className="ways-grid">
          {ways.map(way => (
            <div key={way.id} className="way-card">
              <div className="way-icon">{way.icon}</div>
              <h3>{way.title}</h3>
              <p>{way.description}</p>
              <a href="#contact" className="way-btn">Learn More</a>
            </div>
          ))}
        </div>

        <div className="involvement-cta">
          <h3>Ready to Make a Difference?</h3>
          <p>Take the first step towards strengthening marriages in your community.</p>
          <div className="cta-buttons">
            <a href="#contact" className="primary-btn">Get Started</a>
            <a href="#about" className="secondary-btn">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved; 