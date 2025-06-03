import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Testimonials.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      id: 1,
      quote: "(Example) The marriage enrichment program transformed our relationship. We learned valuable communication skills that we use every day.",
      couple: "Example Couple",
      years: "Example: Married 15 years"
    },
    {
      id: 2,
      quote: "(Example) The support groups provided us with a community of couples who understand and encourage each other. It's been invaluable.",
      couple: "Example Couple",
      years: "Example: Married 8 years"
    },
    {
      id: 3,
      quote: "(Example) The annual retreat was a game-changer for us. We reconnected and learned new ways to strengthen our marriage.",
      couple: "Example Couple",
      years: "Example: Married 20 years"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: {
      x: 1000,
      opacity: 0
    },
    center: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: -1000,
      opacity: 0
    }
  };

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Success Stories
        </motion.h2>
        <motion.p
          className="section-description"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hear from couples who have strengthened their marriages through our programs.
        </motion.p>

        <div className="testimonials-slider">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              className="testimonial-slide"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              <div className="testimonial-content">
                <div className="quote-content">
                  <div className="quote-icon">"</div>
                  <p className="quote">{testimonials[currentSlide].quote}</p>
                  <div className="testimonial-couple-info">
                    <h3>{testimonials[currentSlide].couple}</h3>
                    <span>{testimonials[currentSlide].years}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 