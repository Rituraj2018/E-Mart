import { motion } from 'framer-motion';

const MapSection = () => {
  // Query-based Google Map embed URL for: Khandari, Agra, Uttar Pradesh, India
  const mapSrc = "https://maps.google.com/maps?q=Khandari,%20Agra,%20Uttar%20Pradesh,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 py-8"
    >
      <div className="bg-white border border-slate-100 p-3 sm:p-4 rounded-3xl shadow-lg overflow-hidden group">
        <div className="relative w-full h-80 sm:h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-inner border border-slate-200">
          <iframe
            title="E-Mart Location Map"
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter hover:grayscale-0 grayscale-sm transition-all duration-500 ease-in-out"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default MapSection;
