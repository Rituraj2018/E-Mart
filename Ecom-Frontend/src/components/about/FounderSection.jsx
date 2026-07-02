import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const FounderSection = () => {
  const skills = [
    'MERN Stack',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Tailwind CSS',
    'Redux',
  ];

  return (
    <section className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 font-montserrat">
          Leadership & Development
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-2 font-montserrat">
          Meet the Founder
        </h2>
        <div className="w-12 h-1 bg-indigo-600 rounded-full mt-4"></div>
      </div>

      {/* Profile Wrapper Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md border border-slate-100 rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row items-stretch group"
      >
        {/* Left Side: Avatar Container */}
        <div className="md:w-2/5 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden">
          {/* Animated decorative patterns */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent opacity-60"></div>

          <div className="relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl group-hover:scale-102 transition-transform duration-300">
            <img
              src="/Rituraj.jpg"
              alt="Rituraj Singh Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 text-center mt-6">
            <h3 className="text-2xl font-bold font-montserrat">Rituraj Singh</h3>
            <p className="text-indigo-200/80 text-sm mt-1 font-light">Founder & Lead Architect</p>
          </div>
        </div>

        {/* Right Side: Bio & Skills */}
        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Bio */}
            <div>
              <h4 className="text-lg font-bold text-slate-800 font-montserrat mb-3 flex items-center gap-2">
                Executive Profile
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Rituraj Singh is a full-stack engineer and entrepreneur with a passion for designing scalable e-commerce infrastructures. Guided by a customer-first philosophy, he created E-Mart to deliver high-quality shopping opportunities with absolute transactional transparency.
              </p>
            </div>

            {/* Location & Details list */}
            <div className="space-y-2 text-sm text-slate-600 border-t border-slate-100 pt-4">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-indigo-500" />
                <span>Khandari, Agra, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-500" />
                <a href="mailto:singhrituraj8077@gmail.com" className="hover:underline hover:text-indigo-600">
                  singhrituraj8077@gmail.com
                </a>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Stack & Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-lg hover:bg-indigo-100 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Social connections */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
            <a
              href="https://github.com/Rituraj2018"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 text-sm font-semibold flex items-center gap-2 transition duration-200"
            >
              <FaGithub className="text-base" /> GitHub
            </a>
            <a
              href="mailto:singhrituraj8077@gmail.com"
              className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl hover:bg-indigo-100 text-sm font-semibold flex items-center gap-2 transition duration-200"
            >
              <FaEnvelope className="text-base" /> Send Email
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FounderSection;
