import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhoneAlt, FaLinkedinIn } from 'react-icons/fa';

const SocialLinks = () => {
  const socials = [
    {
      id: 1,
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Rituraj2018',
      color: 'bg-slate-800 hover:bg-slate-900 shadow-slate-800/20 hover:shadow-slate-800/40',
    },
    {
      id: 2,
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:singhrituraj8077@gmail.com',
      color: 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20 hover:shadow-indigo-600/40',
    },
    {
      id: 3,
      name: 'Phone',
      icon: <FaPhoneAlt />,
      url: 'tel:+918887942294',
      color: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20 hover:shadow-emerald-600/40',
    },
    {
      id: 4,
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      url: 'https://linkedin.com',
      color: 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20 hover:shadow-blue-600/40',
    },
  ];

  return (
    <div className="flex flex-col items-center py-10 px-4">
      <h3 className="text-lg font-bold text-slate-800 font-montserrat uppercase tracking-wider mb-6">
        Connect with us
      </h3>
      <div className="flex justify-center items-center gap-5 sm:gap-6 flex-wrap">
        {socials.map((social, index) => (
          <motion.a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-lg transition-colors duration-200 cursor-pointer ${social.color}`}
            title={social.name}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
