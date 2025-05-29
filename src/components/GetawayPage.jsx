import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './GetawayPage.css';

const GetawayPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schedule = [
    {
      day: "Friday",
      title: "Welcome & Connection",
      activities: [
        "4:00 PM - Check-in and Registration",
        "6:00 PM - Welcome Reception",
        "7:00 PM - Opening Session: Setting the Foundation",
        "8:30 PM - Couple Time & Social Hour"
      ]
    },
    {
      day: "Saturday",
      title: "Growth & Discovery",
      activities: [
        "9:00 AM - Morning Session: Deep Dialogue Workshop",
        "12:00 PM - Lunch Break",
        "2:00 PM - Breakout Sessions",
        "4:00 PM - Free Time for Couples",
        "6:00 PM - Dinner & Entertainment",
        "8:00 PM - Evening Activity: Starlit Connection"
      ]
    },
    {
      day: "Sunday",
      title: "Integration & Future Vision",
      activities: [
        "9:00 AM - Closing Session: Taking It Home",
        "10:30 AM - Couple Planning Time",
        "11:30 AM - Farewell Brunch",
        "1:00 PM - Departure"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "This weekend transformed our marriage. We learned to truly listen and connect in ways we never knew possible.",
      couple: "Sarah & James",
      years: "Married 12 years"
    },
    {
      quote: "The perfect blend of structured learning and free time to practice. We've made lifelong friends here.",
      couple: "Michael & Lisa",
      years: "Married 8 years"
    },
    {
      quote: "Every couple should experience this. It's like a reset button for your relationship.",
      couple: "David & Rachel",
      years: "Married 15 years"
    }
  ];

  return (
    <div className="getaway-page">
      <section className="getaway-hero">
        <div className="hero-background">
          <motion.div 
            className="hero-image"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Couple at sunset"
            />
          </motion.div>
          <div className="hero-overlay" />
        </div>
        <div className="container">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Annual Marriage Getaway Weekend
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A transformative weekend of connection, growth, and renewal
          </motion.p>
        </div>
      </section>

      <section className="getaway-intro">
        <div className="container">
          <motion.div
            className="intro-content"
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Rediscover Your Connection</h2>
            <p className="lead-text">
              Join us for an unforgettable weekend designed to strengthen your marriage through 
              meaningful dialogue, shared experiences, and proven relationship-building techniques.
            </p>
            <div className="highlights-grid">
              <motion.div 
                className="highlight-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="highlight-icon">💝</span>
                <h3>Deep Connection</h3>
                <p>Create lasting bonds through structured dialogue and shared experiences</p>
              </motion.div>
              <motion.div 
                className="highlight-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="highlight-icon">🌟</span>
                <h3>Expert Guidance</h3>
                <p>Learn from experienced couples and relationship experts</p>
              </motion.div>
              <motion.div 
                className="highlight-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="highlight-icon">🎯</span>
                <h3>Practical Tools</h3>
                <p>Take home actionable strategies to strengthen your relationship</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="schedule-section">
        <div className="container">
          <h2>Your Journey Together</h2>
          <div className="schedule-grid">
            {schedule.map((day, index) => (
              <motion.div
                key={day.day}
                className="schedule-card"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="schedule-header">
                  <h3>{day.day}</h3>
                  <p className="day-title">{day.title}</p>
                </div>
                <ul className="schedule-activities">
                  {day.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>What Couples Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="testimonial-card"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="quote-mark">"</div>
                <p className="quote-text">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <p className="couple-name">{testimonial.couple}</p>
                  <p className="couple-years">{testimonial.years}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="getaway-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Transform Your Marriage?</h2>
            <p>
              Join us for this year's Getaway Weekend and invest in your relationship's future. 
              Early bird registration is now open!
            </p>
            <div className="cta-buttons">
              <a href="#register" className="primary-btn">Register Now</a>
              <Link to="/contact" className="secondary-btn">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetawayPage; 