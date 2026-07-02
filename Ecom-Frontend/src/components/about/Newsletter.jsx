import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelopeOpenText } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);

    // Simulate API request timeout
    setTimeout(() => {
      toast.success('Successfully subscribed to E-Mart Newsletter!');
      setEmail('');
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-12 shadow-xl text-center flex flex-col items-center"
      >
        {/* Glow backdrop decorative bubbles */}
        <div className="absolute -left-16 -top-16 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl"></div>
        <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>

        {/* Animated Icon */}
        <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-full text-2xl text-indigo-300 backdrop-blur-xs shadow-md">
          <FaEnvelopeOpenText className="animate-bounce" />
        </div>

        {/* Title & Sub */}
        <h3 className="text-2xl sm:text-3xl font-extrabold font-montserrat tracking-tight">
          Subscribe to our Newsletter
        </h3>
        <p className="text-indigo-200/80 max-w-lg mt-2 text-sm sm:text-base leading-relaxed">
          Stay updated on the latest seasonal arrivals, exclusive flash sales, and platform upgrades. No spam, unsubscribe anytime.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-md relative z-10">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitting}
            className="w-full px-5 py-3.5 bg-white/5 border border-white/15 focus:border-indigo-400 rounded-xl text-white placeholder-slate-400 focus:outline-hidden focus:ring-4 focus:ring-indigo-500/20 transition-all duration-200 text-sm"
          />
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition duration-200 text-sm disabled:opacity-75 cursor-pointer shrink-0"
          >
            <FaPaperPlane className="text-xs" /> {submitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Newsletter;
