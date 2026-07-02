import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Team = () => {
  const members = [
    {
      id: 1,
      name: 'Rituraj Singh',
      role: 'Founder & Lead Architect',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
      github: 'https://github.com/Rituraj2018',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      id: 2,
      name: 'Ananya Sharma',
      role: 'Frontend Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      id: 3,
      name: 'Kabir Verma',
      role: 'Backend Architect',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      id: 4,
      name: 'Sanya Gupta',
      role: 'Lead UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      id: 5,
      name: 'Vikram Malhotra',
      role: 'Customer Support Lead',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
  };

  return (
    <div className="bg-slate-50 py-20 px-6 sm:px-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 font-montserrat">
            Our Crew
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-2 font-montserrat">
            Meet the E-Mart Team
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base">
            The visionary engineers and customer success experts keeping E-Mart running smoothly and delivering top value.
          </p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {members.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Profile Image container */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-5 border-2 border-indigo-100 group-hover:border-indigo-500 transition-colors duration-300 relative shadow-inner">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text metadata */}
              <div className="space-y-1 mb-4 flex-grow">
                <h4 className="font-bold text-slate-800 text-base sm:text-lg font-montserrat">
                  {member.name}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm font-medium">
                  {member.role}
                </p>
              </div>

              {/* Team Socials */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-50 text-slate-500 hover:bg-slate-800 hover:text-white flex items-center justify-center text-sm transition-all duration-200"
                  aria-label={`${member.name}'s GitHub`}
                >
                  <FaGithub />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-50 text-slate-500 hover:bg-blue-600 hover:text-white flex items-center justify-center text-sm transition-all duration-200"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-50 text-slate-500 hover:bg-sky-500 hover:text-white flex items-center justify-center text-sm transition-all duration-200"
                  aria-label={`${member.name}'s Twitter`}
                >
                  <FaTwitter />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
