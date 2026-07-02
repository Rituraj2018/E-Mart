import { motion } from 'framer-motion';
import { FaLaptop, FaShippingFast, FaLock, FaHeadset, FaGift, FaRoute } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Online Shopping',
      icon: <FaLaptop className="text-xl" />,
      description: 'Browse thousands of products seamlessly on our optimized react-powered catalog. Enjoy smart sorting, filters, and dynamic carts.',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      id: 2,
      title: 'Express Delivery',
      icon: <FaShippingFast className="text-xl" />,
      description: 'Orders are immediately dispatched through localized fulfillment warehouses. Track your package updates in near real-time.',
      gradient: 'from-purple-600 to-indigo-500',
    },
    {
      id: 3,
      title: 'Secure Payment',
      icon: <FaLock className="text-xl" />,
      description: 'Your transactions are encrypted utilizing safe tokenized gateways. We accept credit cards, debit cards, and UPI transfers.',
      gradient: 'from-emerald-600 to-teal-500',
    },
    {
      id: 4,
      title: 'Customer Support',
      icon: <FaHeadset className="text-xl" />,
      description: 'Reach our dedicated help desks anytime. We assist with checkout questions, shipping details, or technical inquiries.',
      gradient: 'from-indigo-600 to-violet-500',
    },
    {
      id: 5,
      title: 'Gift Services',
      icon: <FaGift className="text-xl" />,
      description: 'Add personalized gift-wrapping, customized greetings, and custom delivery timings to make packages extra special for loved ones.',
      gradient: 'from-pink-600 to-rose-500',
    },
    {
      id: 6,
      title: 'Order Tracking',
      icon: <FaRoute className="text-xl" />,
      description: 'Review complete historical shipping pathways, live fulfillment coordinates, and precise estimated dates inside your dashboard.',
      gradient: 'from-amber-500 to-orange-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 85 } },
  };

  return (
    <div className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 font-montserrat">
          Offerings
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-2 font-montserrat">
          Our Services
        </h2>
        <p className="text-slate-500 mt-3 text-sm sm:text-base">
          E-Mart is more than an online catalog. We provide end-to-end shopping services tailored to consumer convenience.
        </p>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
          >
            {/* Top accent glow */}
            <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${service.gradient}`}></div>

            <div>
              {/* Header Icon + Title */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-md`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-lg font-montserrat">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            {/* Sub decoration */}
            <div className="text-indigo-600 font-bold text-xs uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-1 cursor-pointer">
              Read More <span>&rarr;</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
