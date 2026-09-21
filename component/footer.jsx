'use client'; // Next.js App Router ke liye zaroori hai kyunki yeh client-side animation hai

import React from 'react';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  // Animation variants for smooth entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Columns ek ke baad ek aayenge
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <footer className="bg-[#e2e8f0] text-gray-800 font-sans pt-16 pb-6 relative overflow-hidden">
      
      {/* --- BACKGROUND GLOWING ORBS (Smooth Pulse) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- MAIN GRID SECTION --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Jab footer 20% dikhega tab animate hoga
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          
          {/* COLUMN 1: LOGO & ABOUT */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="inline-block group cursor-pointer">
               <motion.img 
                 whileHover={{ scale: 1.1, rotate: 5 }}
                 src="/logo.png" 
                 alt="Hindustan Cabin Logo" 
                 className="w-16 h-16 object-contain drop-shadow-md"
               />
            </Link>

            <p className="text-sm leading-relaxed text-gray-700 text-justify">
              We, Hindustan Cabin, Are One Of The Foremost Manufacturers Of An Extensive Array Of MS Portable Cabin, GI Portable Cabin, Container Houses And Many More.
            </p>

            <div className="py-2 flex items-center gap-3">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/ISO_9001-2015.svg/1200px-ISO_9001-2015.svg.png" 
                alt="ISO Certified" 
                className="w-20 h-20 object-contain"
              />
              <div className="text-xs font-bold text-gray-600">
                <p>ISO 9001:2015</p>
                <p>Certified Company</p>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              {[
                { color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600", icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/> },
                { color: "bg-[#1877F2]", icon: <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/> },
                { color: "bg-[#0A66C2]", icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/> }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-9 h-9 rounded-full ${social.color} flex items-center justify-center text-white shadow-sm`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{social.icon}</svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 2: OUR PRODUCTS */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-black mb-6 border-b-2 border-gray-400 pb-2 inline-block">Our Products</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                { name: 'Office Cabin', href: '/products/portable-office-cabin' },
                { name: 'Toilet Cabin', href: '/products/portable-mobile-toilet' },
                { name: 'Security Cabin', href: '/products/portable-security-cabin' },
                { name: 'Accommodation Cabin', href: '/products/portable-house-cabin' },
                { name: 'Storage Container', href: '/products/prefabricated-storage-container' },
                { name: 'Customize Portable Cabin', href: '/products/designed-portable-cabin' },
                { name: 'Modular Portable Cabin', href: '/products/modular-portable-cabin' }
              ].map((item) => (
                <motion.li 
                  key={item.name} 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-2 group cursor-pointer text-gray-700 hover:text-[#8B0000] transition-colors duration-300"
                >
                  <ChevronRight className="w-4 h-4 mt-0.5 text-[#DAA520]" />
                  <Link href={item.href} className="flex-1">{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 3: QUICK LINKS */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-black mb-6 border-b-2 border-gray-400 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Products', href: '/products' },
                { name: 'Company Profile', href: '/company-profile' },
                { name: 'Contact Us', href: '/contact' }
              ].map((item) => (
                <motion.li 
                  key={item.name} 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-2 group cursor-pointer text-gray-700 hover:text-[#8B0000] transition-colors duration-300"
                >
                  <ChevronRight className="w-4 h-4 mt-0.5 text-[#DAA520]" />
                  <Link href={item.href} className="flex-1">{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 4: CONTACT US */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-black mb-6 border-b-2 border-gray-400 pb-2 inline-block">Contact Us</h3>
            <div className="space-y-4 text-sm text-gray-700">
              
              <a href="tel:+919967463733" className="flex items-start gap-3 cursor-pointer group">
                <Phone className="w-4 h-4 mt-1 text-[#8B0000] group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-[#8B0000] transition-colors">(+) 91 9967463733</span>
              </a>

              <a href="mailto:info@hindustancabin.in" className="flex items-start gap-3 cursor-pointer group">
                <Mail className="w-4 h-4 mt-1 text-[#8B0000] group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-[#8B0000] transition-colors">info@hindustancabin.in</span>
              </a>

              <div className="mt-4">
                <p className="font-bold text-black flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#8B0000]" /> Postal Address:
                </p>
                <p className="pl-6 text-gray-600">A/02,Dream Height,Sonaji Nagar,<br/>Mumbra, Thane 400612</p>
              </div>

              <div className="mt-4">
                <p className="font-bold text-black flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#8B0000]" /> Factory Address:
                </p>
                <p className="pl-6 text-gray-600">Survey no:87,Plot no:6,Near Khan Coumpound,<br/>Shilphata Thane 400612</p>
              </div>

            </div>
          </motion.div>

        </motion.div>

        {/* --- COPYRIGHT BAR --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-400 pt-6 text-center text-sm text-gray-600"
        >
          <p>
            Copyright © <span suppressHydrationWarning>{new Date().getFullYear()}</span> All rights reserved | Designed by <span className="text-[#8B0000] font-bold cursor-pointer hover:underline transition-opacity duration-300 hover:opacity-80">City Focus Media Group</span>
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;