
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "./HeroBanner";
import { useEffect, useRef } from "react";
import { fetchProducts } from "../../store/actions";
import ProductCard from "../shared/ProductCard";
import Loader from "../shared/Loader";
import { FaExclamationTriangle, FaTruck, FaUndo, FaShieldAlt, FaHeadset, FaArrowRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { categoryShowcase, trustFeatures } from "../../utils";

/* ─── Animation Helpers ─── */
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const trustIcons = {
    truck: FaTruck,
    refresh: FaUndo,
    shield: FaShieldAlt,
    headset: FaHeadset,
};

/* ─── Animated Section Wrapper ─── */
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/* ─── Trust Strip ─── */
const TrustStrip = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8"
        >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {trustFeatures.map((feature, i) => {
                    const IconComp = trustIcons[feature.icon];
                    return (
                        <motion.div
                            key={feature.id}
                            custom={i}
                            variants={fadeInUp}
                            className="flex items-center gap-4 group"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 
                                flex items-center justify-center group-hover:from-purple-200 group-hover:to-pink-200 
                                transition-colors duration-300">
                                <IconComp className="text-purple-600 text-lg" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-slate-800 text-sm">{feature.title}</h4>
                                <p className="text-xs text-gray-500">{feature.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

/* ─── Category Showcase ─── */
const CategoryShowcase = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <AnimatedSection>
            <div className="text-center mb-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-extrabold text-slate-800"
                >
                    Shop by Category
                </motion.h2>
                <div className="section-divider mx-auto mt-3" />
                <p className="text-gray-500 mt-3 max-w-md mx-auto">
                    Explore our curated collections tailored to your style
                </p>
            </div>

            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={staggerContainer}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {categoryShowcase.map((cat, i) => (
                    <motion.div key={cat.id} custom={i} variants={fadeInUp}>
                        <Link
                            to="/products"
                            className="category-card relative block h-64 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-400"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-gray-200">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-400`} />
                            {/* Text */}
                            <div className="relative z-10 flex flex-col justify-end h-full p-6">
                                <h3 className="text-white text-2xl font-bold mb-1 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                                    {cat.name}
                                </h3>
                                <p className="text-white/80 text-sm mb-3">
                                    {cat.description}
                                </p>
                                <span className="inline-flex items-center gap-1 text-white text-xs font-semibold 
                                    opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                                    transition-all duration-300">
                                    Explore
                                    <FaArrowRight className="text-[10px]" />
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </AnimatedSection>
    );
};

/* ─── Section Header ─── */
const SectionHeader = ({ title, subtitle }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center items-center space-y-3"
        >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
                {title}
            </h2>
            <div className="section-divider" />
            <p className="text-gray-500 max-w-lg text-center">
                {subtitle}
            </p>
        </motion.div>
    );
};

/* ─── Newsletter CTA ─── */
const NewsletterCTA = () => {
    return (
        <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-700 via-purple-600 to-pink-500 p-8 sm:p-12">
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="text-center lg:text-left">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                            Get 20% Off Your First Order
                        </h3>
                        <p className="text-purple-100 mt-2 text-sm sm:text-base">
                            Subscribe to our newsletter and unlock exclusive deals, early access & more.
                        </p>
                    </div>

                    <div className="flex w-full lg:w-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="newsletter-input flex-1 lg:w-72 px-5 py-3 rounded-l-full bg-white/15 
                                backdrop-blur-sm text-white placeholder-purple-200 border border-white/20 
                                outline-none text-sm transition-all duration-300"
                        />
                        <button className="px-6 py-3 rounded-r-full bg-white text-purple-700 font-bold text-sm 
                            hover:bg-purple-50 transition-colors duration-300 whitespace-nowrap shadow-lg">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

/* ─── Main Home Component ─── */
const Home = () => {
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products);
    const { isLoading, errorMessage } = useSelector(
        (state) => state.errors
    );
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="lg:px-14 sm:px-8 px-4 bg-gray-50/50">
            {/* Hero Banner */}
            <div className="py-6">
                <HeroBanner />
            </div>

            {/* Trust Strip */}
            <div className="py-6">
                <TrustStrip />
            </div>
            
            {/* Category Showcase */}
            <div className="py-10">
                <CategoryShowcase />
            </div>

            {/* Products Section */}
            <div className="py-10">
                <SectionHeader
                    title="Featured Products"
                    subtitle="Discover our handpicked selection of top-rated items just for you!"
                />

                {isLoading ? (
                    <Loader />
                ) : errorMessage ? (
                    <div className="flex justify-center items-center h-[200px]">
                        <FaExclamationTriangle className="text-slate-800 text-3xl mr-2"/>
                        <span className="text-slate-800 text-lg font-medium">
                            {errorMessage}
                        </span>
                    </div>
                ) : (
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={staggerContainer}
                        className="pb-6 pt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6"
                    >
                        {products && 
                        products
                                .map((item, i) => (
                                    <motion.div key={i} custom={i} variants={fadeInUp}>
                                        <ProductCard {...item} />
                                    </motion.div>
                                )
                        )}
                    </motion.div>
                )}
            </div>

            {/* Newsletter CTA */}
            <div className="py-10 pb-16">
                <NewsletterCTA />
            </div>
        </div>
    )
}

export default Home;