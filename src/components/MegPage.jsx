import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './MegPage.css';

const MegPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: "❤️",
      title: "Real Conversations That Matter",
      description: "No lectures, just authentic dialogue between couples. Share experiences, challenges, and victories in a supportive environment."
    },
    {
      icon: "🤝",
      title: "Built on Trust",
      description: "Our groups create a safe space where couples can be vulnerable, honest, and grow together without judgment."
    },
    {
      icon: "🌱",
      title: "Growth Over Perfection",
      description: "Every couple's journey is unique. We celebrate progress, not perfection, as we learn and grow together."
    },
    {
      icon: "👥",
      title: "Multi-Generational Wisdom",
      description: "Benefit from the experience of couples who've navigated decades of marriage while sharing your own fresh perspectives."
    }
  ];

  const megGroups = [
    {
      city: "Augusta",
      location: "The Sanctuary, Evans, GA",
      day: "Sunday",
      time: "TBD - resuming in Spring",
      yearsActive: "NEW",
      couplesActive: "NEW",
      contactCouple: "Charles & Jenny Whaley",
      phone: "706-373-7684",
      email: ["cbwhaley@comcast.net", "uhav2believe@comcast.net"]
    },
    {
      city: "Jasper",
      location: "Jasper United Methodist Church",
      day: "2nd Saturday of each month",
      time: "6pm",
      yearsActive: "NEW",
      couplesActive: "NEW",
      contactCouple: "Greg Meadows",
      phone: "706-253-2100",
      email: ["greg.meadows@ngumc.net"],
      notes: "dinner and childcare provided"
    },
    {
      city: "Macon",
      location: "Homes of members",
      day: "2nd Saturday",
      time: "6-7:30pm",
      yearsActive: "NEW",
      couplesActive: "5",
      contactCouple: "Bonnie & Creede Hinshaw",
      phone: "912-713-5190",
      email: ["bonniebj@cox.net", "hinnie@cox.net"]
    },
    {
      city: "McCormick, SC",
      location: "Lutheran Church by the Lake",
      day: "Monthly",
      time: "Varies",
      yearsActive: "6",
      couplesActive: "8",
      contactCouple: "Lana & Jack Snellgrove",
      phone: "864-391-0026",
      email: ["lanasnel@wctel.net", "jsnellgrove@wctel.net"],
      notes: "Savannah Lakes Village"
    },
    {
      city: "Smyrna",
      location: "Bethany UMC",
      day: "4th Monday",
      time: "7-9pm",
      yearsActive: "10+",
      couplesActive: "6",
      contactCouple: "Kim and Nathan Heinlein",
      phone: "404-429-8931",
      email: ["nathan.heinlein@yahoo.com", "kim.heinlein@yahoo.com"],
      notes: "childcare available"
    },
    {
      city: "Waleska",
      location: "Waleska United Methodist Church",
      day: "2nd Saturday",
      time: "7-8:30pm",
      yearsActive: "2",
      couplesActive: "8",
      contactCouple: "Eddie & Sylvia Robertson",
      phone: "770-479-8575",
      email: ["robertson.waleska@gmail.com"],
      notes: "childcare by reservation"
    }
  ];

  return (
    <div className="meg-page">
      <section className="meg-hero">
        <div className="hero-background">
          <motion.div 
            className="hero-image"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img src="/images/anderson-w-rangel-3XXxhOMkOMY-unsplash.jpg" alt="Couples connecting" />
          </motion.div>
          <div className="hero-overlay" />
        </div>
        <div className="container">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Marriage Enrichment Groups
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Strengthening marriages through real conversations and meaningful connection
          </motion.p>
        </div>
      </section>

      <section className="meg-intro" ref={ref}>
        <div className="container">
          <motion.div
            className="intro-content"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>What is a Marriage Enrichment Group?</h2>
            <p>
              A Marriage Enrichment Group (MEG) is more than just a small group — it's a safe, welcoming space where couples come together to explore, strengthen, and deepen their relationship alongside supportive peers.
            </p>
            <p>
              Designed by couples, for couples, MEGs offer meaningful opportunities for honest dialogue, shared learning, and ongoing growth. No two groups are alike, because each one is shaped by the unique stories, experiences, and wisdom of the couples who gather there.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="meg-features">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="meg-locations">
        <div className="container">
          <motion.div
            className="locations-content"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Find a MEG Near You</h2>
            
            <div className="virtual-meg-info">
              <div className="info-card">
                <h3>Virtual MEG Available!</h3>
                <p>
                  Don't see a group near you? Attend a Virtual MEG! Join us live on the 1st Tuesday 
                  of every month at 8pm EST. Our very own Eddie and Sylvia Robertson are the Eastern 
                  Time Zone Facilitators.
                </p>
              </div>
            </div>

            <div className="groups-grid">
              {megGroups.map((group, index) => (
                <motion.div
                  key={index}
                  className="group-card"
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                >
                  <div className="group-header">
                    <h3>{group.city}</h3>
                    {group.notes && <span className="group-tag">{group.notes}</span>}
                  </div>
                  <div className="group-details">
                    <div className="group-info">
                      <p className="location"><strong>Location:</strong> {group.location}</p>
                      <p className="timing"><strong>When:</strong> {group.day} at {group.time}</p>
                      <p className="active-status"><strong>Active:</strong> {group.yearsActive} years | {group.couplesActive} couples</p>
                    </div>
                    <div className="contact-info">
                      <p><strong>Contact:</strong> {group.contactCouple}</p>
                      <p><i className="fas fa-phone"></i> {group.phone}</p>
                      <p>
                        <i className="fas fa-envelope"></i>{' '}
                        {group.email.map((email, i) => (
                          <a key={i} href={`mailto:${email}`}>
                            {email}{i < group.email.length - 1 ? '; ' : ''}
                          </a>
                        ))}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="meg-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Join?</h2>
            <p>
              Take the first step toward strengthening your marriage in a supportive, 
              growth-focused environment. Contact us to learn more about joining a MEG 
              or starting one in your area.
            </p>
            <a href="#contact" className="cta-button">Contact Us to Learn More</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MegPage; 