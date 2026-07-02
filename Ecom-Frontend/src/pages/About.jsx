import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';

import HeroSection from '../components/about/HeroSection';
import MissionVision from '../components/about/MissionVision';
import FounderSection from '../components/about/FounderSection';
import WhyChooseUs from '../components/about/WhyChooseUs';
import Statistics from '../components/about/Statistics';
import Services from '../components/about/Services';
import Testimonials from '../components/about/Testimonials';
import Timeline from '../components/about/Timeline';
import TechStack from '../components/about/TechStack';
import FAQ from '../components/about/FAQ';
import CTA from '../components/about/CTA';

const About = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">
      <div>
        {/* SECTION 1: Premium Hero */}
        <HeroSection />

        {/* SECTION 3: Mission Vision Values */}
        <MissionVision />

        {/* SECTION 4: Founder Section */}
        <FounderSection />

        {/* SECTION 5: Why Choose Us */}
        <WhyChooseUs />

        {/* SECTION 6: Statistics (Counters) */}
        <Statistics />

        {/* SECTION 7: Our Services */}
        <Services />

        {/* SECTION 9: Testimonials Slider */}
        <Testimonials />

        {/* SECTION 10: Our Journey Timeline */}
        <Timeline />

        {/* SECTION 11: Technology Stack */}
        <TechStack />

        {/* SECTION 12: FAQ Accordions */}
        <FAQ />

        {/* SECTION 13: Call to Action */}
        <CTA />
      </div>

      {/* SECTION 15: Footer Information */}
      <footer className="bg-slate-950 text-slate-400 text-sm py-16 px-6 sm:px-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Brief */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-bold font-montserrat">E-Mart</h4>
            <p className="text-slate-500 leading-relaxed text-xs sm:text-sm">
              India's trusted online shopping destination for high-quality electronics, verified apparel, and daily utilities at low prices.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Rituraj2018"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="GitHub Link"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:singhrituraj8077@gmail.com"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Email Link"
              >
                <FaEnvelope />
              </a>
              <a
                href="tel:+918887942294"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Phone Link"
              >
                <FaPhoneAlt />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn Link"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold font-montserrat">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-white transition duration-200">
                  Home Catalog
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition duration-200">
                  Explore Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition duration-200">
                  About E-Mart
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition duration-200">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold font-montserrat">Policies</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <span className="hover:text-white transition duration-200 cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-white transition duration-200 cursor-pointer">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="hover:text-white transition duration-200 cursor-pointer">
                  Shipping Policy
                </span>
              </li>
              <li>
                <span className="hover:text-white transition duration-200 cursor-pointer">
                  Return & Refund Policy
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 text-xs sm:text-sm">
            <h4 className="text-white text-base font-bold font-montserrat">Contact Details</h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-indigo-400 mt-1 shrink-0" />
                <span>Khandari, Agra, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-indigo-400 shrink-0" />
                <a href="mailto:singhrituraj8077@gmail.com" className="hover:text-white transition break-all">
                  singhrituraj8077@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-indigo-400 shrink-0" />
                <a href="tel:+918887942294" className="hover:text-white transition">
                  +91 8887942294
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright banner */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} E-Mart E-Commerce. All rights reserved. Created by Rituraj Singh.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
