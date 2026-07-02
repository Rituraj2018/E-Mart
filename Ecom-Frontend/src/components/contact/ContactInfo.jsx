import { motion } from 'framer-motion';
import { FaBuilding, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaUserTie } from 'react-icons/fa';

const ContactInfo = () => {
  const infoCards = [
    {
      id: 1,
      title: 'Company & Owner',
      icon: <FaBuilding className="text-xl" />,
      details: [
        { label: 'Company', value: 'E-Mart' },
        { label: 'Owner', value: 'Rituraj Singh' },
      ],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 2,
      title: 'Contact Details',
      icon: <FaEnvelope className="text-xl" />,
      details: [
        { label: 'Email', value: 'singhrituraj8077@gmail.com', href: 'mailto:singhrituraj8077@gmail.com' },
        { label: 'Phone', value: '+91 8887942294', href: 'tel:+918887942294' },
      ],
      color: 'from-purple-500 to-indigo-600',
    },
    {
      id: 3,
      title: 'Office Address',
      icon: <FaMapMarkerAlt className="text-xl" />,
      details: [
        { label: 'Address', value: 'Khandari, Agra, Uttar Pradesh, India' }
      ],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 4,
      title: 'GitHub Profile',
      icon: <FaGithub className="text-xl" />,
      details: [
        { label: 'GitHub', value: 'github.com/Rituraj2018', href: 'https://github.com/Rituraj2018' }
      ],
      color: 'from-slate-700 to-slate-900',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8 max-w-7xl mx-auto"
    >
      {infoCards.map((card) => (
        <motion.div
          key={card.id}
          variants={itemVariants}
          whileHover={{ y: -8, transition: { duration: 0.2 } }}
          className="relative bg-white/70 backdrop-blur-md border border-slate-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
        >
          {/* Top card accent */}
          <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${card.color}`}></div>

          <div>
            {/* Header Icon + Title */}
            <div className="flex items-center gap-4 mb-5">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              <h3 className="font-semibold text-slate-800 text-lg font-montserrat">
                {card.title}
              </h3>
            </div>

            {/* Content lines */}
            <div className="space-y-4">
              {card.details.map((detail, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
                    {detail.label}
                  </span>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-indigo-600 font-medium break-all transition-colors duration-200"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <span className="text-slate-600 font-medium">
                      {detail.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Decorative light reflection on hover */}
          <div className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ContactInfo;
