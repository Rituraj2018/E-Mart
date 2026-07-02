import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left font-bold text-slate-800 hover:text-indigo-600 transition-colors duration-200 focus:outline-hidden group cursor-pointer"
      >
        <span className="font-montserrat text-sm sm:text-base">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-slate-400 group-hover:text-indigo-600 transition-colors"
        >
          <FaChevronDown className="text-xs sm:text-sm" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-600 text-sm sm:text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: 'How long does E-Mart delivery take?',
      answer: 'Standard shipping takes 3-5 business days across major cities in India. Express orders are processed and dispatched within 24 hours, taking 1-2 days to deliver depending on location.',
    },
    {
      id: 2,
      question: 'What is E-Mart return policy?',
      answer: 'We provide an easy 7-day return policy. If you receive a damaged or incorrect product, you can initiate a return directly from your profile dashboard for a full refund.',
    },
    {
      id: 3,
      question: 'Are my online payments secure?',
      answer: 'Yes! We use industry-standard Stripe and Razorpay integrations. No raw card numbers or private credentials are stored on E-Mart servers. Transactions are fully encrypted.',
    },
    {
      id: 4,
      question: 'How do I track my active order?',
      answer: 'Once your order is confirmed, tracking coordinates and logistics links are attached to the order entry. You can view progress under your Account/Orders profile section.',
    },
    {
      id: 5,
      question: 'How can I reach customer support?',
      answer: 'You can submit an inquiry through our newly upgraded Contact Us page, email us directly at support@emart.com, or log in to launch a live helper chat session.',
    },
  ];

  const [openId, setOpenId] = useState(1); // Open the first FAQ by default

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 px-6 sm:px-12 max-w-4xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12">
        <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 font-montserrat">
          Got Questions?
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-2 font-montserrat">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ Accordion container */}
      <div className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-md">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openId === faq.id}
            onClick={() => handleToggle(faq.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
