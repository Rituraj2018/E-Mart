import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Aarav Mehta',
      role: 'Verified Buyer',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      review: 'E-Mart has completely changed how I shop online. The product quality matches what is shown in the catalog, and delivery was incredibly fast! Highly recommended.',
    },
    {
      id: 2,
      name: 'Priya Nair',
      role: 'Fashion Designer',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      review: 'I bought home decor items and some apparel. The prices are unbelievably low compared to other portals, but the items feel extremely premium. Easy returns as well!',
    },
    {
      id: 3,
      name: 'Rohan Joshi',
      role: 'Tech Enthusiast',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
      review: 'Bought a smartphone and accessories. Stripe payment was smooth, and order tracking let me see exactly when the package cleared the hub. Zero hassle.',
    },
    {
      id: 4,
      name: 'Meera Desai',
      role: 'Digital Marketer',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      review: 'The customer service team is exceptional! They answered my checkout queries late at night and resolved my shipping request within minutes. Super support!',
    },
    {
      id: 5,
      name: 'Aditya Sen',
      role: 'Corporate Manager',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
      review: 'Ordering products in bulk for corporate gifting was a breeze. Rituraj and his team guided us through custom logistics. Great platform.',
    },
    {
      id: 6,
      name: 'Divya Rao',
      role: 'Home Maker',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      review: 'E-Mart is definitely my go-to shopping platform now. The site is clean, checkout is secure, and their product vetting gives me complete peace of mind.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef(null);

  const slideNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const resetAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(slideNext, 5000); // Auto slide every 5s
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, idx) => (
      <FaStar
        key={idx}
        className={`text-sm ${idx < rating ? 'text-amber-400' : 'text-slate-200'}`}
      />
    ));
  };

  return (
    <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden relative">
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="text-center mb-12">
        <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 font-montserrat">
          Reviews
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-2 font-montserrat">
          What Customers Say
        </h2>
      </div>

      {/* Testimonials Slider Area */}
      <div className="relative max-w-3xl mx-auto px-4 min-h-[340px] sm:min-h-[280px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="bg-white/80 backdrop-blur-md border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-lg relative flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8"
          >
            {/* Large quotation mark */}
            <FaQuoteLeft className="absolute right-8 top-8 text-slate-100 text-6xl pointer-events-none" />

            {/* Customer Avatar */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 border-indigo-100 shrink-0 shadow-md">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Testimonial info text */}
            <div className="space-y-4 text-center sm:text-left flex-grow">
              <div className="flex flex-col items-center sm:items-start gap-1">
                <div className="flex items-center gap-1">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
                <h4 className="text-lg font-bold text-slate-800 font-montserrat mt-2">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  {testimonials[activeIndex].role}
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic">
                "{testimonials[activeIndex].review}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Control Dots & Arrows */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={() => {
            slidePrev();
            resetAutoplay();
          }}
          className="p-3 bg-slate-100 hover:bg-indigo-600 hover:text-white rounded-full text-slate-600 transition-colors duration-200 cursor-pointer shadow-sm active:scale-95"
          aria-label="Previous Testimonial"
        >
          <FaChevronLeft className="text-xs" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
                resetAutoplay();
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'w-6 bg-indigo-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>

        <button
          onClick={() => {
            slideNext();
            resetAutoplay();
          }}
          className="p-3 bg-slate-100 hover:bg-indigo-600 hover:text-white rounded-full text-slate-600 transition-colors duration-200 cursor-pointer shadow-sm active:scale-95"
          aria-label="Next Testimonial"
        >
          <FaChevronRight className="text-xs" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
