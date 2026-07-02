import { motion } from 'framer-motion';
import { FaEnvelope, FaRegComments } from 'react-icons/fa';

const ContactHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 py-20 px-6 sm:px-12 text-center text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400 via-indigo-500 to-purple-600"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Floating Icon animation */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 inline-flex p-4 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 backdrop-blur-xs text-3xl shadow-lg shadow-indigo-500/20"
        >
          <FaRegComments className="animate-pulse" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-100 font-montserrat"
        >
          Contact E-Mart
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-lg sm:text-xl text-indigo-200/80 max-w-2xl font-light leading-relaxed"
        >
          We'd love to hear from you. Send us your questions, feedback, or business inquiries.
        </motion.p>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-indigo-200"
        >
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            24/7 Support
          </span>
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-2">
            <FaEnvelope className="text-indigo-400" />
            Quick Response
          </span>
        </motion.div>
      </div>

      {/* Modern Wave bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </div>
  );
};

export default ContactHero;
