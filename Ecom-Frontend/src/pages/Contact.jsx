import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';
import SocialLinks from '../components/contact/SocialLinks';

const Contact = () => {
  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white pb-16">
      {/* 1. Hero Section */}
      <ContactHero />

      {/* 2. Company Information Cards */}
      <div className="-mt-12 relative z-20">
        <ContactInfo />
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 3. Contact Form (Spans 7 columns on large screens) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* 4. Social Links & Office Card (Spans 5 columns on large screens) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-3xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-slate-800 font-montserrat mb-3">
              Why Contact Us?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Whether you are looking to purchase wholesale products, need help with your active order, or have technical suggestions for the E-Mart application, we are ready to assist.
            </p>
            <div className="border-t border-slate-100 pt-4">
              <h4 className="text-sm font-semibold text-slate-700 mb-2">Support Hours</h4>
              <ul className="text-slate-600 text-xs space-y-1">
                <li className="flex justify-between"><span>Monday - Friday:</span> <span className="font-semibold">9:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span className="font-semibold">10:00 AM - 4:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span className="text-indigo-600 font-semibold">Closed</span></li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md border border-slate-100 rounded-3xl shadow-lg">
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* 5. Google Map Location Section */}
      <div className="mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 font-montserrat mb-2 px-2 text-center lg:text-left">
            Find Us on Google Maps
          </h3>
          <p className="text-slate-500 text-sm mb-6 text-center lg:text-left px-2">
            Visit our headquarters in Khandari, Agra, Uttar Pradesh, India.
          </p>
        </div>
        <MapSection />
      </div>
    </div>
  );
};

export default Contact;
