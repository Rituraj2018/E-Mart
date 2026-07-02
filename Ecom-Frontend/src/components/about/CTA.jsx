import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaPhoneAlt } from 'react-icons/fa';

const CTA = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center flex flex-col items-center justify-center relative overflow-hidden group"
      >
        {/* Glow accent reflection on hover */}
        <div className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

        {/* Heading */}
        <h3 className="text-3xl sm:text-4xl font-extrabold font-montserrat tracking-tight">
          Start Shopping Today
        </h3>
        <p className="text-indigo-100/90 mt-3 max-w-lg text-sm sm:text-base leading-relaxed">
          Explore our wide selection of certified products, electronics, and accessories. Enjoy instant checkout with stripe or razorpay.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            to="/products"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-indigo-700 font-bold rounded-xl shadow-lg hover:shadow-white/20 hover:bg-slate-50 transition duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <FaShoppingBag className="text-xs" /> Shop Now
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-indigo-500/20 border border-white/20 text-white font-bold rounded-xl hover:bg-indigo-500/30 transition duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <FaPhoneAlt className="text-xs text-indigo-200" /> Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
