import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';

import { bannerLists } from '../../utils';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const heroGradients = [
    "bg-hero-gradient1",
    "bg-hero-gradient2",
    "bg-hero-gradient3",
];

const tagColors = [
    "from-amber-500 to-orange-600",
    "from-rose-500 to-pink-600",
    "from-emerald-500 to-teal-600",
];

const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    }),
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 60 },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            delay: 0.3,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

const HeroBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='rounded-2xl overflow-hidden shadow-2xl'>
            <Swiper
                className="hero-swiper"
                grabCursor={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation
                modules={[Pagination, EffectFade, Navigation, Autoplay]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                pagination={{ clickable: true }}
                slidesPerView={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {bannerLists.map((item, i) => (
                    <SwiperSlide key={item.id}>
                        <div className={`relative sm:h-[520px] h-[420px] ${heroGradients[i]} overflow-hidden`}>
                            {/* Decorative background elements */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
                            </div>

                            <div className='relative z-10 flex items-center justify-center h-full'>
                                {/* Text Content */}
                                <div className='w-full lg:w-1/2 p-6 sm:p-10 lg:p-14'>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeIndex}
                                            className='text-center lg:text-left'
                                        >
                                            {/* Tag Badge */}
                                            <motion.div
                                                custom={0}
                                                variants={textVariants}
                                                initial="hidden"
                                                animate="visible"
                                                className="inline-flex items-center gap-1.5 mb-4"
                                            >
                                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${tagColors[i]} shadow-lg`}>
                                                    <FaStar className="inline mr-1 text-[10px] -mt-0.5" />
                                                    {item.tag}
                                                </span>
                                            </motion.div>

                                            {/* Title */}
                                            <motion.h3
                                                custom={1}
                                                variants={textVariants}
                                                initial="hidden"
                                                animate="visible"
                                                className='text-lg sm:text-xl text-purple-300 font-semibold tracking-wide uppercase'
                                            >
                                                {item.title}
                                            </motion.h3>

                                            {/* Subtitle */}
                                            <motion.h1
                                                custom={2}
                                                variants={textVariants}
                                                initial="hidden"
                                                animate="visible"
                                                className='text-3xl sm:text-5xl lg:text-6xl text-white font-extrabold mt-2 leading-tight'
                                            >
                                                {item.subtitle}
                                            </motion.h1>

                                            {/* Description */}
                                            <motion.p
                                                custom={3}
                                                variants={textVariants}
                                                initial="hidden"
                                                animate="visible"
                                                className='text-gray-300 text-sm sm:text-base mt-4 max-w-md mx-auto lg:mx-0 leading-relaxed'
                                            >
                                                {item.description}
                                            </motion.p>

                                            {/* CTA Button */}
                                            <motion.div
                                                custom={4}
                                                variants={textVariants}
                                                initial="hidden"
                                                animate="visible"
                                                className="mt-6 sm:mt-8"
                                            >
                                                <Link
                                                    className='group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white 
                                                        py-3 px-8 rounded-full font-semibold text-sm sm:text-base
                                                        hover:from-purple-500 hover:to-pink-400 
                                                        shadow-lg hover:shadow-purple-500/30 hover:shadow-xl
                                                        transition-all duration-300 transform hover:scale-105'
                                                    to="/products"
                                                >
                                                    Shop Now
                                                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                                                </Link>
                                            </motion.div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Product Image */}
                                <div className='hidden lg:flex w-1/2 justify-center items-center p-8'>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`img-${activeIndex}`}
                                            variants={imageVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className="relative"
                                        >
                                            {/* Glow behind image */}
                                            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl scale-75" />
                                            <img
                                                src={item?.image}
                                                alt={item.subtitle}
                                                className='relative z-10 max-h-[380px] w-auto object-contain drop-shadow-2xl animate-float'
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}


export default HeroBanner;