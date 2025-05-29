import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ContactPage.css';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const leadershipTeam = {
    executiveBoard: [
      {
        role: "President Couple",
        names: "Lee & Jean Cheese",
        address: "2851 Duke of Windsor, East Point, GA 30344",
        phone: ["404.295.8284"],
        email: ["lcheese417@gmail.com", "jtcheese4@gmail.com"]
      },
      {
        role: "Past President Couple",
        names: "Greg & Lydia Meadows",
        address: "PO Box 1986, Jasper, GA 30143",
        phone: ["770.851.8305", "770.851.8306"],
        email: ["gmeadows85@gmail.com", "lmeadows1130@gmail.com"]
      },
      {
        role: "Treasurer Couple",
        names: "Bob & Christine Crutchfield",
        address: "5711 Clinchfield Tr, Peachtree Corners, GA 30092",
        phone: ["770.364.8079"],
        email: ["rwcrutchfield@gmail.com", "crutchfieldchristine@gmail.com"]
      },
      {
        role: "Secretary Couple",
        names: "Zack & Leigh Martin",
        address: "1684 Four Lakes Dr, Madison, GA 30650",
        phone: ["404.403.6272", "678.360.8935"],
        email: ["pastorzack@gmail.com", "leighsmartin@gmail.com"]
      },
      {
        role: "Communication Couple",
        names: "Nathan & Kim Heinlein",
        address: "4675 Westhampton Dr, Tucker, GA 30084",
        phone: ["404.429.8931", "404.944.2568"],
        email: ["nathan.heinlein@yahoo.com", "kim.heinlein@yahoo.com"]
      }
    ],
    classOf2026: [
      {
        names: "Jerry & Pitty Lewallen",
        address: "340 Steward Cove Rd, Clarkesville, GA 30523",
        phone: ["512.590.2733", "512.689.3486"],
        email: ["jerryalewallen@gmail.com", "pittylewallen@gmail.com"]
      },
      {
        names: "Jack & Carol Head",
        address: "2270 Littlebrooke Dr, Dunwoody, GA 30338",
        phone: ["478.719.7455", "478.731.5860"],
        email: ["ajacksonhead@gmail.com", "carolc.head@gmail.com"]
      },
      {
        names: "Jack & Lana Snellgrove",
        address: "210 Chaussette Tr, McCormick, SC 29835",
        phone: ["770.856.1680", "770.314.1357"],
        email: ["jsnellgrove@wctel.net", "lanasnel@wctel.net"]
      }
    ],
    classOf2027: [
      {
        names: "Tremayne & Recharda Graydon",
        address: "107 Beaverbrook Ln, Fayetteville, GA 30215",
        phone: ["678.492.8899", "770.328.3075"],
        email: ["tremayne_graydon@yahoo.com", "rmgraydon@hotmail.com"]
      },
      {
        names: "Josh & Erin Bruce",
        address: "1150 Hunters Creek Ct, Lawrenceville, GA 30043",
        phone: ["404.353.7947"],
        email: ["obibig78@gmail.com", "erinktank@gmail.com"]
      }
    ],
    classOf2028: [
      {
        names: "Eddie & Sylvia Robertson",
        role: "Program 2025",
        address: "336 Grady St, Waleska, GA 30183",
        phone: ["770.479.8575", "770.634.3806"],
        email: ["robertson.waleska@gmail.com"]
      }
    ]
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-background">
          <motion.div 
            className="hero-image"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="Couple holding hands"
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
            Contact Us
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real couples. Real connection. Real support.<br />
            Reach out — we'd love to help you strengthen and enrich your marriage.
          </motion.p>
        </div>
      </section>

      <section className="contact-content" ref={ref}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-left">
              <motion.div 
                className="contact-info"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2>Get in Touch</h2>
                <p className="welcome-text">
                  Whether you're interested in attending an event, joining a Marriage Enrichment Group, 
                  or simply want to learn more about Better Marriages Georgia, we'd love to hear from you.
                </p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-building"></i>
                    <div>
                      <h3>Organization</h3>
                      <p>Better Marriages Georgia</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h3>Email</h3>
                      <a href="mailto:info@bettermarriagesga.org">info@bettermarriagesga.org</a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h3>Location</h3>
                      <p>Georgia, United States</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <i className="fab fa-facebook"></i>
                    <div>
                      <h3>Social Media</h3>
                      <a href="https://www.facebook.com/BetterMarriagesGA" target="_blank" rel="noopener noreferrer">
                        Follow us on Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="leadership-team"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2>Leadership Team</h2>
                <p className="team-intro">Our dedicated couples serving Better Marriages Georgia</p>
                
                <div className="team-section">
                  <h3>Executive Board</h3>
                  <div className="team-grid">
                    {leadershipTeam.executiveBoard.map((member, index) => (
                      <div key={index} className="team-member-card">
                        <h4>{member.role}</h4>
                        <p className="member-name">{member.names}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {[
                  { year: "2026", members: leadershipTeam.classOf2026 },
                  { year: "2027", members: leadershipTeam.classOf2027 },
                  { year: "2028", members: leadershipTeam.classOf2028 }
                ].map((classGroup) => (
                  <div key={classGroup.year} className="team-section">
                    <h3>Class of {classGroup.year}</h3>
                    <div className="team-grid">
                      {classGroup.members.map((member, index) => (
                        <div key={index} className="team-member-card">
                          {member.role && <h4>{member.role}</h4>}
                          <p className="member-name">{member.names}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="contact-note">
                  <p>For contact information, please email <a href="mailto:info@bettermarriagesga.org">info@bettermarriagesga.org</a></p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="contact-form"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>Send Us a Message</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" placeholder="John & Jane Doe" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="you@example.com" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="How can we help?" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Tell us more about what you're looking for..." required></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 