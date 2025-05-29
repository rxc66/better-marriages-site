import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './Events.css';

const Events = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Marriage Getaway 2025",
      date: "Feb 28 - Mar 2, 2025",
      location: "The Chattanoogan Hotel, Chattanooga, TN",
      description: "Join us for a weekend of connection, growth, and relationship enrichment at our signature annual event.",
      image: "/images/ai - couples image.png",
      link: "/getaway"
    },
    {
      id: 2,
      title: "Marriage Enrichment Workshop",
      date: "Scheduled on Demand",
      location: "Various Locations in Georgia",
      description: "No upcoming workshops currently scheduled — check back soon or sign up for updates!",
      image: "/images/anderson-w-rangel-3XXxhOMkOMY-unsplash.jpg",
      contactLink: "#contact",
      isOnDemand: true
    },
    {
      id: 3,
      title: "Couples Connection Groups",
      date: "Weekly",
      location: "Online & In-Person",
      description: "Join our Marriage Enrichment Groups (MEGs) where couples share experiences, grow together, and build lasting connections.",
      image: "/images/giorgio-trovato-6rKkr2fh2-I-unsplash.jpg",
      link: "/meg"
    }
  ];

  return (
    <section id="events" className="events" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Upcoming Events
        </motion.h2>
        <motion.p
          className="section-description"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join us at our upcoming events designed to strengthen and enrich your marriage.
        </motion.p>
        
        <motion.div
          className="events-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {upcomingEvents.map(event => (
            <motion.div
              key={event.id}
              className="event-card"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="event-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={event.image} alt={event.title} />
              </motion.div>
              <div className="event-content">
                <h3>{event.title}</h3>
                <div className="event-details">
                  <span className="event-date">{event.date}</span>
                  <span className="event-location">{event.location}</span>
                </div>
                <p>{event.description}</p>
                {event.isOnDemand ? (
                  <motion.a
                    href={event.contactLink}
                    className="contact-link"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us About Future Workshops
                  </motion.a>
                ) : event.link.startsWith('/') ? (
                  <Link to={event.link} className="event-btn">
                    Learn More
                  </Link>
                ) : (
                  <motion.a
                    href={event.link}
                    className="event-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events; 