'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Clock, User, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace with your Web3Forms Access Key
    const accessKey = "YOUR_WEB3FORMS_ACCESS_KEY"; 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')" }}
        >
          {/* Overlay changed to dark red/black mix for brand consistency */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/90 to-black/70"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Get In <span className="text-[#DAA520]">Touch</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Have a question about our Portable Cabins? We are here to help you build your space.
          </p>
        </motion.div>
      </section>

      {/* --- MAIN CONTENT GRID --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 -mt-20 relative z-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          
          {/* LEFT COLUMN: CONTACT INFO (BRAND RED BACKGROUND) */}
          <motion.div variants={itemVariants} className="lg:col-span-1 bg-[#8B0000] text-white p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative Circle in Gold */}
            <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-[#DAA520]/20 rounded-full blur-2xl"></div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 border-b border-[#DAA520]/50 pb-4 inline-block">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#600000] flex items-center justify-center group-hover:bg-[#DAA520] transition-colors duration-300">
                    <Phone className="w-5 h-5 text-[#DAA520] group-hover:text-[#8B0000]" />
                  </div>
                  <div>
                    <p className="text-sm text-red-200">Call Us</p>
                    <p className="font-semibold">(+91) 9967463733</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#600000] flex items-center justify-center group-hover:bg-[#DAA520] transition-colors duration-300">
                    <Mail className="w-5 h-5 text-[#DAA520] group-hover:text-[#8B0000]" />
                  </div>
                  <div>
                    <p className="text-sm text-red-200">Email Us</p>
                    <p className="font-semibold">info@hindustancabin.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#600000] flex items-center justify-center group-hover:bg-[#DAA520] transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-[#DAA520] group-hover:text-[#8B0000]" />
                  </div>
                  <div>
                    <p className="text-sm text-red-200">Visit Us</p>
                    <p className="font-semibold text-sm leading-relaxed">A/02, Dream Height, Sonaji Nagar, Mumbra, Thane 400612</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#600000] flex items-center justify-center group-hover:bg-[#DAA520] transition-colors duration-300">
                    <Clock className="w-5 h-5 text-[#DAA520] group-hover:text-[#8B0000]" />
                  </div>
                  <div>
                    <p className="text-sm text-red-200">Working Hours</p>
                    <p className="font-semibold">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Image at bottom */}
            <div className="mt-8 rounded-lg overflow-hidden h-40 relative group border-2 border-[#DAA520]/30">
               <img 
                 src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                 alt="Office Interior" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/90 to-transparent"></div>
               <p className="absolute bottom-2 left-4 text-xs font-bold text-[#DAA520]">Our Factory Setup</p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: FORM */}
          <motion.div variants={itemVariants} className="lg:col-span-2 p-8 md:p-10 bg-white">
            <h3 className="text-2xl font-bold text-[#8B0000] mb-2">Send us a Message</h3>
            <p className="text-gray-500 mb-8 text-sm">Fill out the form below and we will get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative group">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" />
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-all"
                    required
                  />
                </div>

                {/* Email */}
                <div className="relative group">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="relative group">
                  <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-all"
                  />
                </div>

                {/* Subject */}
                <div className="relative group">
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-all text-gray-600"
                  >
                    <option value="">Select Subject</option>
                    <option value="Office Cabin">Office Cabin Inquiry</option>
                    <option value="Toilet Cabin">Toilet Cabin Inquiry</option>
                    <option value="Custom Order">Custom Order</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="relative group">
                <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 group-focus-within:text-[#8B0000] transition-colors" />
                <textarea 
                  name="message"
                  rows="4" 
                  placeholder="Tell us about your requirements..." 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm border border-green-200">
                  Thank you! Your message has been sent successfully. We will contact you shortly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm border border-red-200">
                  Something went wrong. Please try again or contact us directly via phone.
                </div>
              )}

              {/* Submit Button - RED & GOLD */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-[#8B0000] text-white font-bold rounded-lg hover:bg-[#DAA520] hover:text-[#8B0000] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-900/20 disabled:opacity-70"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>

        </motion.div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg border-4 border-white"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.734567890123!2d73.0169!3d19.1569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c00000000001%3A0x0!2zMumbra,+Thane,+Maharashtra!5e0!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Hindustan Cabin Location"
          ></iframe>
        </motion.div>
      </section>

    </div>
  );
};

export default ContactPage;