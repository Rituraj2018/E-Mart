import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CounterCard = ({ target, suffix, title, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const step = (end - start) / (totalMiliseconds / incrementTime);
    let currentCount = start;

    const timer = setInterval(() => {
      currentCount += step;
      if (currentCount >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  // Format number with commas
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div ref={ref} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-xl relative overflow-hidden group">
      {/* Glow visual backing */}
      <div className="absolute -inset-10 bg-indigo-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

      <h3 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300 font-montserrat tracking-tight mb-2">
        {formatNumber(count)}
        {suffix}
      </h3>
      <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider">
        {title}
      </p>
    </div>
  );
};

const Statistics = () => {
  const stats = [
    { id: 1, target: '10000', suffix: '+', title: 'Happy Customers' },
    { id: 2, target: '500', suffix: '+', title: 'Products' },
    { id: 3, target: '50', suffix: '+', title: 'Brands' },
    { id: 4, target: '99', suffix: '%', title: 'Customer Satisfaction' },
  ];

  return (
    <section className="bg-slate-950 py-20 px-6 sm:px-12 text-white relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/30 via-transparent to-transparent opacity-60"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <CounterCard
              key={stat.id}
              target={stat.target}
              suffix={stat.suffix}
              title={stat.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
