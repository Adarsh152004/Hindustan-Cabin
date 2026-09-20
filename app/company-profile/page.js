'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Users, Calendar, MapPin, Wallet, Factory, 
  Warehouse, TrendingUp, CheckCircle2, Award, ShieldCheck, 
  Truck, Headphones, ArrowRight 
} from 'lucide-react';

const AboutPage = () => {
  
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen pt-[72px] xl:pt-[112px] bg-gray-50 font-sans text-gray-800 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000]/90 to-[#8B0000]/70"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#DAA520]/20 border border-[#DAA520] text-[#DAA520] text-sm font-bold mb-4 backdrop-blur-sm">
            ESTABLISHED IN 2017
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Building Spaces, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-yellow-200">
              Delivering Trust
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Hindustan Cabin is a premium manufacturer of portable cabins and prefabricated solutions, setting new benchmarks in quality and durability.
          </p>
        </motion.div>
      </section>

      {/* --- STATS COUNTER STRIP --- */}
      <div className="relative z-20 -mt-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-xl shadow-2xl p-6 border-b-4 border-[#DAA520]">
          {[
            { label: "Years Experience", value: "7+", icon: Calendar },
            { label: "Annual Turnover", value: "₹8 Cr", icon: TrendingUp },
            { label: "Happy Clients", value: "500+", icon: Users },
            { label: "Projects Done", value: "1200+", icon: Building2 },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 border-r last:border-r-0 border-gray-100">
              <stat.icon className="w-8 h-8 text-[#8B0000] mx-auto mb-2" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        
        {/* INTRO & LEADERSHIP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left: Who We Are */}
          <motion.div 
            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-[#8B0000] relative inline-block">
              Company Profile
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#DAA520] rounded-full"></span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed text-lg">
              Hindustan Cabin takes pride in introducing itself as a premium manufacturer of portable cabins, cargo containers, portable security cabins, and other products. We were founded in 2017 and since then have gained a reputation for offering high-quality prefabricated goods.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-600 leading-relaxed">
              Our showroom comprises Portable Office Cabin, FRP Portable Toilet, Portable Pantry Cabin, Modular Portable Cabin, Luxurious Container House, Shipping Cargo Container, etc.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
               {['ISO Certified', 'Premium Quality', 'On-Time Delivery'].map((tag) => (
                 <span key={tag} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm">
                   <CheckCircle2 className="w-4 h-4 text-[#DAA520]" /> {tag}
                 </span>
               ))}
            </motion.div>
          </motion.div>

          {/* Right: Leadership Card */}
          <motion.div 
            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="bg-[#8B0000] text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
              {/* Decorative Background Elements */}
              <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-[#DAA520]/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mb-6 text-[#8B0000]">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Leadership</h3>
                <p className="text-[#DAA520] font-semibold mb-4">Mr. Vikas Shukla</p>
                <p className="text-red-100 leading-relaxed text-sm mb-6">
                  Under his leadership, we have achieved methodical and efficient operations. He ensures tasks are finished within allotted time and inspires the team to give their best efforts through extensive market expertise.
                </p>
                <button className="flex items-center gap-2 text-sm font-bold hover:text-[#DAA520] transition-colors group">
                  Read More About Our Vision <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- WHY CHOOSE US --- */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose <span className="text-[#8B0000]">Hindustan Cabin?</span></h2>
            <div className="w-20 h-1 bg-[#DAA520] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Unmatched Quality", desc: "We use premium MS/GI materials ensuring longevity and durability in harsh weather conditions." },
              { icon: Truck, title: "Pan India Delivery", desc: "Our logistics network ensures your cabin reaches any site in India safely and on time." },
              { icon: Headphones, title: "24/7 Support", desc: "Post-installation support and maintenance services to keep your operations running smooth." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-transparent hover:border-[#DAA520] group"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#8B0000] transition-colors">
                  <feature.icon className="w-7 h-7 text-[#8B0000] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

       {/* --- KEY FACTS TABLE SECTION --- */}
<motion.div 
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
>
  <div className="p-8 md:p-10 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
    <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold text-gray-800">
      Key <span className="text-[#8B0000]">Facts</span>
    </motion.h2>
    <div className="h-1 w-20 bg-[#DAA520] rounded-full hidden md:block"></div>
  </div>
  
  <div className="overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <tbody className="divide-y divide-gray-200">
        {[
          { label: "Business Type", value: "Manufacturer and Supplier" },
          { label: "Location of Company", value: "Taloja, Maharashtra, India" },
          { label: "No. of Employees", value: "20" },
          { label: "Year of Establishment", value: "2017" },
          { label: "GST No.", value: "27AAKFH1020R1Z6" },
          { label: "Banker", value: "Axis Bank" },
          { label: "Monthly Production Capacity", value: "As per the requirements" },
          { label: "Annual Turnover", value: "INR 8 crore" },
          { label: "No. of Production Units", value: "01" },
          { label: "Warehousing Facility", value: "Yes" },
        ].map((fact, index) => (
          <motion.tr 
            key={index}
            variants={itemVariants}
            className="group hover:bg-red-50/50 transition-colors duration-200"
          >
            {/* Label Column */}
            <td className="px-8 py-5 font-bold text-gray-800 w-1/3 md:w-1/4 border-r border-gray-100 bg-gray-50/50 group-hover:bg-red-100/30 transition-colors">
              {fact.label}
            </td>
            
            {/* Value Column */}
            <td className="px-8 py-5 text-gray-600 font-medium">
              {fact.value}
            </td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  </div>
</motion.div>
      </section>
    </div>
  );
};

export default AboutPage;