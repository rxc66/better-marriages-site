import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './MegResources.css';

const MegResources = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
    <section className="meg-resources" ref={ref}>
      <div className="container">
        <motion.div
          className="meg-intro"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Marriage Enrichment Groups (MEG)</h1>
          <div className="meg-definition">
            <h2>What is a MEG?</h2>
            <div className="definition-content">
              <p className="highlight">It's the core of Better Marriages!</p>
              <p>
                A Marriage Enrichment Group (MEG) is an ongoing small group that provides a safe 
                place for couples to explore their relationship among supportive peers. MEGs are 
                designed for couples, led by couples, and provide opportunities for couple dialogue 
                and ongoing relational growth. Each MEG is as unique as the couples in them.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="virtual-meg-info"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="info-card">
            <h3>Virtual MEG Available!</h3>
            <p>
              Don't see a group near you? Attend a Virtual MEG! Join us live on the 1st Tuesday 
              of every month at 8pm EST. Our very own Eddie and Sylvia Robertson are the Eastern 
              Time Zone Facilitators.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="meg-groups"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Georgia Marriage Enrichment Groups</h2>
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
                  <p><strong>Location:</strong> {group.location}</p>
                  <p><strong>When:</strong> {group.day} at {group.time}</p>
                  <p><strong>Active:</strong> {group.yearsActive} years | {group.couplesActive} couples</p>
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
  );
};

export default MegResources; 