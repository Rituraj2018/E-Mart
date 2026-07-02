import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJsSquare, FaDatabase, FaServer, FaKey, FaCss3Alt } from 'react-icons/fa';

const TechStack = () => {
  const techs = [
    {
      id: 1,
      name: 'React.js',
      icon: <FaReact className="text-4xl text-cyan-400 animate-[spin_8s_linear_infinite]" />,
      desc: 'Frontend library powering the UI shell, client-side rendering, and responsive routers.',
      color: 'hover:border-cyan-400/50',
    },
    {
      id: 2,
      name: 'Node.js',
      icon: <FaNodeJs className="text-4xl text-emerald-500" />,
      desc: 'Javascript runtime environment executing scalable server-side networking pipelines.',
      color: 'hover:border-emerald-500/50',
    },
    {
      id: 3,
      name: 'Express.js',
      icon: <FaServer className="text-4xl text-slate-500" />,
      desc: 'Minimalist web application framework handling REST API requests, routings, and cookies.',
      color: 'hover:border-slate-500/50',
    },
    {
      id: 4,
      name: 'MongoDB',
      icon: <FaDatabase className="text-4xl text-emerald-600" />,
      desc: 'NoSQL document database storing products, orders, cart tables, and contact inquiries.',
      color: 'hover:border-emerald-600/50',
    },
    {
      id: 5,
      name: 'JavaScript',
      icon: <FaJsSquare className="text-4xl text-amber-400" />,
      desc: 'Core language powering both React frontend interactions and Node backend server tables.',
      color: 'hover:border-amber-400/50',
    },
    {
      id: 6,
      name: 'Tailwind CSS',
      icon: <FaCss3Alt className="text-4xl text-sky-400" />,
      desc: 'Utility-first styling system enabling glassmorphism and modern gradient themes.',
      color: 'hover:border-sky-400/50',
    },
    {
      id: 7,
      name: 'JWT',
      icon: <FaKey className="text-4xl text-purple-500" />,
      desc: 'Secure authentication tokens authorizing request headers and admin dashboards.',
      color: 'hover:border-purple-500/50',
    },
  ];

  return (
    <div className="bg-slate-50 py-20 px-6 sm:px-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 font-montserrat">
            Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-2 font-montserrat">
            Our Tech Stack
          </h2>
          <p className="text-slate-500 mt-3 text-sm sm:text-base">
            E-Mart is engineered utilizing modern, high-performance web development frameworks.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((tech) => (
            <motion.div
              key={tech.id}
              whileHover={{ y: -5 }}
              className={`bg-white p-6 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 flex flex-col items-center text-center group ${tech.color}`}
            >
              {/* Icon Container */}
              <div className="mb-4 p-3 bg-slate-50 rounded-2xl group-hover:bg-slate-100 transition-colors duration-300">
                {tech.icon}
              </div>

              {/* Title */}
              <h4 className="font-bold text-slate-800 text-lg font-montserrat mb-2">
                {tech.name}
              </h4>

              {/* Details */}
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
