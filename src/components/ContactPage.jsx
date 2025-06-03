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
        image: "/images/board/cheese23.jpeg",
        bio: "Lee and Jean have been strengthening marriages in Georgia for over 15 years. Their passion for helping couples grow together shines through in everything they do."
      },
      {
        role: "Past President Couple",
        names: "Greg & Lydia Meadows",
        image: "/images/board/placeholder-couple.jpg",
        bio: "The Meadows bring years of experience in marriage enrichment and a deep commitment to building stronger relationships throughout our community."
      },
      {
        role: "Treasurer Couple",
        names: "Bob & Christine Crutchfield",
        image: "/images/board/placeholder-couple.jpg",
        bio: "Bob and Christine combine their financial expertise with a heart for helping couples thrive. They ensure our organization remains strong and sustainable."
      },
      {
        role: "Secretary Couple",
        names: "Zack & Leigh Martin",
        image: "/images/board/martin25.jpg",
        bio: "The Martins bring fresh energy and innovative ideas to our leadership team, while maintaining the detailed records that keep our organization running smoothly."
      }
    ],
    communicationAndEvents: [
      {
        role: "Communication Couple",
        names: "Nathan & Kim Heinlein",
        image: "/images/board/placeholder-couple.jpg",
        bio: "Nathan and Kim lead our outreach efforts with creativity and dedication, ensuring our message reaches couples who need it most."
      }
    ],
    classOf2026: [
      {
        names: "Jerry & Pitty Lewallen",
        image: "/images/board/placeholder-couple.jpg",
        bio: "The Lewallens bring warmth and wisdom to our board, sharing their experiences to help other couples grow."
      },
      {
        names: "Jack & Carol Head",
        image: "/images/board/placeholder-couple.jpg",
        bio: "Jack and Carol's dedication to marriage enrichment shows in their thoughtful contributions to our programs and events."
      },
      {
        names: "Jack & Lana Snellgrove",
        image: "/images/board/Snellgroves.jpg",
        bio: "The Snellgroves share their passion for strengthening marriages through their active involvement in our programs."
      }
    ],
    classOf2027: [
      {
        names: "Tremayne & Recharda Graydon",
        image: "/images/board/graydon25.jpg",
        bio: "Tremayne and Recharda bring fresh perspectives and energy to our marriage enrichment programs."
      },
      {
        names: "Josh & Erin Bruce",
        image: "/images/board/placeholder-couple.jpg",
        bio: "The Bruces contribute their enthusiasm and creative ideas to help couples build stronger relationships."
      }
    ],
    classOf2028: [
      {
        names: "Eddie & Sylvia Robertson",
        role: "Program 2025",
        image: "/images/board/robertson25.jpg",
        bio: "Eddie and Sylvia lead our program development with heart and expertise, creating meaningful experiences for couples."
      }
    ]
  };

  const BoardMemberCard = ({ member }) => (
    <motion.div 
      className="board-member-card"
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="member-photo">
        <img src={member.image} alt={member.names} />
      </div>
      <div className="member-info">
        <h3>{member.names}</h3>
        {member.role && <h4>{member.role}</h4>}
        <p className="member-bio">{member.bio}</p>
      </div>
    </motion.div>
  );

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
            Meet Our Team
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Looking to connect with our leadership? Meet the dedicated couples who make it all happen.
          </motion.p>
        </div>
      </section>

      <section className="leadership-content" ref={ref}>
        <div className="container">
          <div className="board-section">
            <h2>Executive Team</h2>
            <div className="board-grid">
              {leadershipTeam.executiveBoard.map((member, index) => (
                <BoardMemberCard key={index} member={member} />
              ))}
            </div>
          </div>

          <div className="board-section">
            <h2>Communication & Events</h2>
            <div className="board-grid">
              {leadershipTeam.communicationAndEvents.map((member, index) => (
                <BoardMemberCard key={index} member={member} />
              ))}
            </div>
          </div>

          {[
            { year: "2026", members: leadershipTeam.classOf2026 },
            { year: "2027", members: leadershipTeam.classOf2027 },
            { year: "2028", members: leadershipTeam.classOf2028 }
          ].map((classGroup) => (
            <div key={classGroup.year} className="board-section">
              <h2>Class of {classGroup.year}</h2>
              <div className="board-grid">
                {classGroup.members.map((member, index) => (
                  <BoardMemberCard key={index} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Connect?</h2>
            <p>
              Whether you're interested in joining a Marriage Enrichment Group, attending an event,
              or learning more about our mission, we'd love to hear from you.
            </p>
            <div className="contact-options">
              <a href="mailto:info@bettermarriagesga.org" className="contact-btn">
                <i className="fas fa-envelope"></i> Email Us
              </a>
              <a href="https://www.facebook.com/BetterMarriagesGA" target="_blank" rel="noopener noreferrer" className="contact-btn">
                <i className="fab fa-facebook"></i> Follow Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 