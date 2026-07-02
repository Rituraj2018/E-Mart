import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaShoppingBag, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  const handleScrollDown = () => {
    const storySection = document.getElementById('company-story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax/Zoom */}
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      
      {/* Gradients and Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/70 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-950/20 z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        {/* Animated Badge */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-semibold text-xs tracking-widest uppercase mb-6 backdrop-blur-xs"
        >
          Discover E-Mart
        </motion.span>

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-montserrat"
        >
          Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">E-Mart</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-lg sm:text-2xl text-slate-200/90 max-w-3xl font-light leading-relaxed"
        >
          India's trusted online shopping destination for quality products at affordable prices.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-4 w-full sm:w-auto"
        >
          <Link
            to="/products"
            className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaShoppingBag className="text-sm" /> Explore Products
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-4 px-8 rounded-xl backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaEnvelope className="text-sm text-indigo-300" /> Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Floating Scroll Down Arrow */}
      <motion.button
        onClick={handleScrollDown}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 p-2 text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer hidden sm:block"
        aria-label="Scroll to company story"
      >
        <FaChevronDown className="text-2xl" />
      </motion.button>
    </div>
  );
};

export default HeroSection;
