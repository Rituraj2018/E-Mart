import { motion } from 'framer-motion';
import { FaRocket, FaEye, FaAward } from 'react-icons/fa';

const MissionVision = () => {
  const cards = [
    {
      id: 1,
      title: 'Our Mission',
      icon: <FaRocket className="text-2xl" />,
      description: 'To empower consumers across India by providing instant access to high-quality, authentic products at wholesale rates. We commit to transparency, customer integrity, and creating opportunities for sellers.',
      gradient: 'from-blue-600 to-indigo-700',
    },
    {
      id: 2,
      title: 'Our Vision',
      icon: <FaEye className="text-2xl" />,
      description: 'To become India’s most customer-centric digital marketplace where shoppers can find, discover, and securely acquire anything they desire, backed by robust shipping networks and premium user care.',
      gradient: 'from-purple-600 to-indigo-700',
    },
    {
      id: 3,
      title: 'Core Values',
      icon: <FaAward className="text-2xl" />,
      description: 'Integrity, quality compliance, and total user security guide our operations. We believe in continuous system innovation, seller empowerment, and holding our logistics to strict speed standards.',
      gradient: 'from-pink-600 to-rose-700',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70 } },
  };

  return (
    <div className="bg-slate-50 py-20 px-6 sm:px-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 font-montserrat">
            Purpose Driven
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-2 font-montserrat">
            Pillars of E-Mart
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base">
            Our foundations are built on solid values, a clear vision for ecommerce excellence, and a customer-first mission.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl border border-slate-100 flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden group"
            >
              {/* Colored Glow behind icon */}
              <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${card.gradient}`}></div>

              {/* Icon Container */}
              <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-md group-hover:rotate-6 transition-transform duration-300`}>
                {card.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold text-slate-800 font-montserrat mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MissionVision;
