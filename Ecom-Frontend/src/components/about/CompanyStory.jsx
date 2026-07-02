import { motion } from 'framer-motion';

const CompanyStory = () => {
  return (
    <section id="company-story" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Large Premium Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-video lg:aspect-square">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="E-Mart Team Collaboration"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Soft decorative visual overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 via-transparent to-transparent"></div>
          </div>
        </motion.div>

        {/* Right Side: Our Story Narrative */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600 mb-2 font-montserrat">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 font-montserrat">
              Our Story
            </h2>
          </div>

          <div className="w-16 h-1 bg-indigo-600 rounded-full"></div>

          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            E-Mart was founded with a singular, clear vision: to redefine the digital shopping landscape in India by bridging the gap between premium product quality and affordable accessibility. We realized that finding dependable, top-tier goods online shouldn't require paying astronomical premiums or risking product quality.
          </p>

          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            At the heart of E-Mart is our unwavering <strong>Customer-First Philosophy</strong>. Every feature, service option, and backend system is optimized to support you. We enforce rigorous <strong>Quality Assurance</strong> checking, ensuring that every vendor and item added matches international reliability benchmarks before dispatch.
          </p>

          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            We understand that speed and security define the trust in an e-commerce ecosystem. Through our custom logistics integrations, we offer ultra-reliable <strong>Fast Delivery</strong> options. Combined with top-grade <strong>Secure Shopping</strong> gateways, E-Mart provides a truly unified, safe, and transparent marketplace for millions of shoppers.
          </p>

          {/* Key pillars */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div>
              <h4 className="font-bold text-slate-800 text-sm font-montserrat">100% Genuine</h4>
              <p className="text-slate-500 text-xs mt-1">Verified Brands & Partners</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm font-montserrat">Secure Checkout</h4>
              <p className="text-slate-500 text-xs mt-1">256-Bit SSL Encryption</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStory;
