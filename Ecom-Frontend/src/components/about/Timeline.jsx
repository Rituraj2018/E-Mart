import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUserLock, FaShoppingBasket, FaCreditCard, FaTruckLoading, FaGlobeAsia } from 'react-icons/fa';

const Timeline = () => {
  const milestones = [
    {
      year: 'Jan 2026',
      title: 'Project Started',
      icon: <FaCalendarAlt />,
      description: 'The foundation for E-Mart is laid. The architecture is planned around the MERN stack with the focus on building a robust, responsive system.',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      year: 'Feb 2026',
      title: 'Authentication & Profile Systems',
      icon: <FaUserLock />,
      description: 'Developed JWT token systems, local authentication states, secure cookies, seller checkups, and user addresses logic.',
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      year: 'Mar 2026',
      title: 'Product & Admin Cataloging Modules',
      icon: <FaShoppingBasket />,
      description: 'Created dynamic inventory filters, categorization schemas, and interactive admin dashboards to list and manage products.',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      year: 'Apr 2026',
      title: 'Orders & Shopping Carts',
      icon: <FaTruckLoading />,
      description: 'Constructed synchronized MongoDB cart tables, order history endpoints, checkouts, and custom tracking codes.',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      year: 'May 2026',
      title: 'Stripe & Razorpay Payments',
      icon: <FaCreditCard />,
      description: 'Integrated Stripe credit card handlers and Razorpay webhook services to finalize order confirmations securely.',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      year: 'Future',
      title: 'Global Expansion & AI Agents',
      icon: <FaGlobeAsia />,
      description: 'Expanding delivery lanes across Southeast Asia, integrating smart product recommendation algorithms, and launching vendor apps.',
      gradient: 'from-slate-700 to-slate-900',
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 font-montserrat">
          History
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-2 font-montserrat">
          Our Journey
        </h2>
        <p className="text-slate-500 mt-3 text-sm sm:text-base">
          From a blank canvas in 2026 to a premium production-ready shopping hub, explore the milestones that defined E-Mart.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative">
        {/* Center line for desktop */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

        <div className="space-y-12">
          {milestones.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-stretch ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-4 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${milestone.gradient} text-white flex items-center justify-center text-xs shadow-md border-4 border-white`}
                  >
                    {milestone.icon}
                  </motion.div>
                </div>

                {/* Left block wrapper (Spans 1/2 of screen) */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative"
                  >
                    {/* Tiny connector triangle */}
                    <div
                      className={`absolute top-5 border-y-8 border-y-transparent hidden md:block ${
                        isEven
                          ? 'right-full border-r-8 border-r-white border-l-0 filter drop-shadow-[-2px_0_1px_rgba(0,0,0,0.015)]'
                          : 'left-full border-l-8 border-l-white border-r-0 filter drop-shadow-[2px_0_1px_rgba(0,0,0,0.015)]'
                      }`}
                    ></div>

                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 mt-1 mb-2 font-montserrat">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty block for layout alignment */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
