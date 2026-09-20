'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Building2, Users, Calendar, MapPin, Wallet, Factory, 
  Warehouse, TrendingUp, CheckCircle2, Award, ShieldCheck, 
  Clock, Truck, HeadphonesIcon, ArrowRight, Quote, Sparkles
} from 'lucide-react';

const AboutPage = () => {
  // Ultra-Smooth Cubic Bezier Easing Variants
  const smoothEase = [0.22, 1, 0.36, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.12, delayChildren: 0.1 } 
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: smoothEase } 
    }
  };

  const scaleUpVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.7, ease: smoothEase } 
    }
  };

  return (
    <div className="min-h-screen pt-[72px] xl:pt-[112px] bg-[#F9FAFB] font-sans text-gray-800 overflow-x-hidden selection:bg-[#DAA520] selection:text-[#8B0000]">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#4a0000]">
        {/* Background Image: Replaced with a modern Container Home/Cabin */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed scale-105 opacity-30 mix-blend-overlay transition-transform duration-1000"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>

        {/* Dynamic Glow Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000]/95 via-[#5e0000]/90 to-[#330000] z-0"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#DAA520]/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#8B0000]/50 rounded-full blur-[120px] pointer-events-none"></div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-12 pb-20"
        >
          <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-[#DAA520]/40 text-[#DAA520] text-xs md:text-sm font-semibold tracking-wider uppercase backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4" /> Established in 2017
          </motion.div>

          <motion.h1 variants={fadeUpVariant} className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.15]">
            Building Spaces, <br />
            Delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#DAA520] to-[#B8860B]">Excellence.</span>
          </motion.h1>

          <motion.p variants={fadeUpVariant} className="text-red-100/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Hindustan Cabin is your trusted partner for high-grade portable cabins, modular container houses, and custom prefabricated structures across India.
          </motion.p>
        </motion.div>
      </section>

      {/* --- FLOATING STATS BAR --- */}
      <section className="relative z-20 -mt-14 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: smoothEase }}
          className="bg-[#8B0000] rounded-2xl shadow-2xl shadow-red-950/20 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white border border-[#DAA520]/30 backdrop-blur-xl"
        >
          {[
            { num: "7+", label: "Years Experience", icon: Calendar },
            { num: "20+", label: "Expert Employees", icon: Users },
            { num: "8 Cr+", label: "Annual Turnover", icon: TrendingUp },
            { num: "100%", label: "Client Satisfaction", icon: Award },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 group cursor-default p-2 rounded-xl transition-all duration-300 hover:bg-white/5">
              <div className="p-3 rounded-xl bg-white/10 text-[#DAA520] group-hover:bg-[#DAA520] group-hover:text-[#8B0000] transition-colors duration-300">
                <stat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-1">{stat.num}</h3>
              <p className="text-xs md:text-sm text-red-200 uppercase font-medium tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* --- MAIN CONTENT WRAPPER --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-28">

        {/* ABOUT & LEADERSHIP GRID */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left: About Details */}
          <motion.div variants={fadeUpVariant} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-sm font-bold text-[#8B0000] tracking-widest uppercase">
              <span className="w-8 h-0.5 bg-[#DAA520]"></span> About Hindustan Cabin
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Pioneering prefabricated structure <span className="text-[#8B0000]">innovation since 2017.</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg font-normal">
              Hindustan Cabin takes pride in introducing itself as a premium manufacturer of portable cabins, cargo containers, and security cabins. Founded in 2017, we have earned a solid reputation for delivering robust prefabricated solutions that stand the test of time.
            </p>

            <p className="text-gray-600 leading-relaxed text-base">
              Our expansive range includes Portable Office Cabins, FRP Toilets, Pantry Cabins, Modular Cabins, Luxurious Container Houses, and Shipping Cargo Containers. We combine engineering precision with custom architecture to match your precise layout requirements.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              {['ISO Compliant Quality', 'High-Grade MS/GI Material', 'Pan India Dispatch'].map((tag) => (
                <div key={tag} className="px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-semibold border border-gray-200/80 shadow-sm flex items-center gap-2 hover:border-[#DAA520] transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#8B0000]" /> {tag}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Leadership Card */}
          <motion.div variants={scaleUpVariant} className="lg:col-span-5 bg-gradient-to-br from-[#8B0000] to-[#500000] p-8 md:p-10 rounded-3xl shadow-2xl text-white relative overflow-hidden border border-[#DAA520]/20">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Quote className="w-36 h-36 text-white rotate-180" />
            </div>
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#DAA520]/20 rounded-full blur-2xl"></div>

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg text-[#DAA520] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                Visionary Leadership
              </div>

              <blockquote className="text-red-100 text-lg md:text-xl font-light italic leading-relaxed">
                "Under the guidance of Mr. Vikas Shukla, we operate with maximum method and efficiency. He inspires our team to deliver absolute perfection on every project."
              </blockquote>

              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#DAA520] text-[#8B0000] font-extrabold text-xl flex items-center justify-center border-2 border-white shadow-md">
                  VS
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Mr. Vikas Shukla</h4>
                  <p className="text-xs text-[#DAA520] font-semibold tracking-wider uppercase">Founder & Director</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* WHY CHOOSE US SECTION */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#8B0000] tracking-widest uppercase bg-red-50 px-3 py-1 rounded-full border border-red-100">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Why Partner With <span className="text-[#8B0000]">Hindustan Cabin?</span></h2>
            <p className="text-gray-500 text-base">Engineering excellence, structural longevity, and customer satisfaction drive every build.</p>
          </div>

          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: ShieldCheck, title: "Unmatched Quality", desc: "Crafted from heavy-duty steel and GI sheets for superior weather resistance." },
              { icon: Clock, title: "Timely Delivery", desc: "Streamlined production workflows guarantee strictly punctual site dispatch." },
              { icon: Truck, title: "Custom Architecture", desc: "Tailor-made floorplans, insulation options, and sanitary setups." },
              { icon: HeadphonesIcon, title: "Dedicated Support", desc: "End-to-end assistance from initial consultation to post-installation." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={fadeUpVariant}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#8B0000] flex items-center justify-center mb-6 group-hover:bg-[#8B0000] group-hover:text-[#DAA520] transition-colors duration-300">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                <div className="w-full h-1 bg-transparent group-hover:bg-[#DAA520] absolute bottom-0 left-0 transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* PRODUCT SHOWCASE BANNER */}
        <motion.div 
          variants={scaleUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#8B0000] via-[#700000] to-[#500000] rounded-3xl p-8 md:p-14 text-white relative overflow-hidden shadow-2xl border border-[#DAA520]/20"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#DAA520]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 bg-white/10 rounded-full text-[#DAA520] text-xs font-bold uppercase tracking-wider">Product Showcase</span>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Explore Our Full Range Of Prefab Structures</h2>
              <p className="text-red-100/90 text-base md:text-lg font-light leading-relaxed">
                From luxury container homes to site office cabins and FRP toilets, explore our engineered modular setups built for fast deployment.
              </p>
              <div className="pt-2">
                <Link href="/products/portable-cabin" className="inline-flex items-center gap-3 bg-[#DAA520] text-[#8B0000] px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#8B0000] transition-all duration-300 shadow-lg shadow-black/20 group">
                  <span>View All Products</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* Construction/Site Office Container Image */}
                <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 object-cover w-full h-36" alt="Office Cabin" />
                {/* Modern Container Home Image */}
                <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 object-cover w-full h-48" alt="Container House" />
              </div>
              <div className="space-y-4 pt-6">
                {/* Industrial Shipping Containers Image */}
                <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 object-cover w-full h-48" alt="Industrial Factory Unit" />
                {/* Wooden/Modular Prefab Cabin Image */}
                <img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 object-cover w-full h-36" alt="Modular Prefab Cabin" />
              </div>
            </div>
          </div>

        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;