import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhoneAlt, FaTag, FaCommentAlt, FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';
import api from '../../api/api';
import Spinners from '../shared/Spinners';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        tempErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fix the validation errors before submitting.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await api.post('/contact', formData);
      if (response.data?.success) {
        toast.success(response.data.message || 'Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setErrors({});
      } else {
        toast.error(response.data?.message || 'Failed to submit. Please try again.');
      }
    } catch (err) {
      console.error('Contact Form Submission Error:', err);
      const serverErrors = err.response?.data?.errors;
      if (serverErrors) {
        setErrors(serverErrors);
        toast.error('Please correct the highlighted fields.');
      } else {
        toast.error(err.response?.data?.message || 'Something went wrong. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-lg max-w-2xl mx-auto"
    >
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 font-montserrat flex items-center gap-2">
          Send a Message
        </h2>
        <p className="text-slate-500 mt-2 text-sm sm:text-base">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email Group */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <FaUser className="text-sm" />
              </span>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className={`w-full pl-11 pr-4 py-3 bg-slate-50 border ${
                  errors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'
                } rounded-xl text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-4 transition duration-200`}
              />
            </div>
            {errors.name && <span className="text-red-500 text-xs mt-1 font-medium">{errors.name}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <FaEnvelope className="text-sm" />
              </span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-11 pr-4 py-3 bg-slate-50 border ${
                  errors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'
                } rounded-xl text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-4 transition duration-200`}
              />
            </div>
            {errors.email && <span className="text-red-500 text-xs mt-1 font-medium">{errors.email}</span>}
          </div>
        </div>

        {/* Phone & Subject Group */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone (Optional) */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-semibold text-slate-700 mb-1.5">
              Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <FaPhoneAlt className="text-sm" />
              </span>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition duration-200"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                <FaTag className="text-sm" />
              </span>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Product Inquiry / Feedback"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full pl-11 pr-4 py-3 bg-slate-50 border ${
                  errors.subject ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'
                } rounded-xl text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-4 transition duration-200`}
              />
            </div>
            {errors.subject && <span className="text-red-500 text-xs mt-1 font-medium">{errors.subject}</span>}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-2">
            Your Message <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute top-3.5 left-4 text-slate-400">
              <FaCommentAlt className="text-sm" />
            </span>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Hi E-Mart, I would like to ask about..."
              value={formData.message}
              onChange={handleChange}
              className={`w-full pl-11 pr-4 py-3 bg-slate-50 border ${
                errors.message ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'
              } rounded-xl text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-4 transition duration-200 resize-none`}
            />
          </div>
          {errors.message && <span className="text-red-500 text-xs mt-1 font-medium">{errors.message}</span>}
        </div>

        {/* Submit Button */}
        <motion.button
          disabled={submitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 text-white font-semibold py-3.5 px-6 rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 active:shadow-none focus:outline-hidden focus:ring-4 focus:ring-indigo-200 transition-all duration-200 disabled:opacity-75 disabled:pointer-events-none flex items-center justify-center gap-2 cursor-pointer"
        >
          {submitting ? (
            <>
              <Spinners /> Sending Message...
            </>
          ) : (
            <>
              <FaPaperPlane className="text-sm" /> Send Message
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
