import { motion } from 'framer-motion';
import { FaTruck, FaShieldAlt, FaHeadphones, FaGem, FaExchangeAlt, FaTags } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Fast Delivery',
      icon: <FaTruck className="text-xl" />,
      description: 'Expedited processing and shipping logistics ensure your products arrive in pristine condition, right to your doorstep.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Secure Payments',
      icon: <FaShieldAlt className="text-xl" />,
      description: 'All payments are protected using advanced Stripe and Razorpay integrations. 256-bit encryption guards details.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 3,
      title: '24x7 Support',
      icon: <FaHeadphones className="text-xl" />,
      description: 'Our customer success team operates 24/7. Open a ticket or live chat for assistance at any time.',
      gradient: 'from-indigo-500 to-violet-500',
    },
    {
      id: 4,
      title: 'Quality Products',
      icon: <FaGem className="text-xl" />,
      description: 'We run multiple rounds of inventory vetting. Shop verified models, smartphones, and authentic apparel.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 5,
      title: 'Easy Returns',
      icon: <FaExchangeAlt className="text-xl" />,
      description: 'Not satisfied with your order? Send it back within 7 days using our hassle-free return and refund pipeline.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 6,
      title: 'Best Prices',
      icon: <FaTags className="text-xl" />,
      description: 'Get deep wholesale-level discounts. We source directly from top manufacturers to bypass middlemen markups.',
      gradient: 'from-rose-500 to-pink-600',
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
    <div className="bg-slate-50 py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 font-montserrat">
            Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-2 font-montserrat">
            Why Choose E-Mart?
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base">
            We prioritize convenience, affordability, and state-of-the-art security to bring you the best shopping experience in India.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.id}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-4 sm:gap-6 relative overflow-hidden group"
            >
              {/* Highlight accent left border */}
              <div className={`absolute left-0 inset-y-0 w-1.5 bg-gradient-to-b ${feat.gradient}`}></div>

              {/* Icon Container */}
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${feat.gradient} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {feat.icon}
              </div>

              {/* Info text */}
              <div className="space-y-2">
                <h3 className="font-bold text-slate-800 text-lg font-montserrat">
                  {feat.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
