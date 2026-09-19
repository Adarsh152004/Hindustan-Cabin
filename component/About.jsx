import React from 'react';
import { CheckCircle, Factory, Users, ShieldCheck, Truck, Wrench, Award, Clock } from 'lucide-react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 px-6 md:px-16 bg-[#fdf8f8] border-b border-[#e8dada]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#4a0404] font-bold tracking-wider uppercase text-sm mb-2 block flex items-center gap-2">
              <Award className="w-4 h-4" /> Premium Manufacturer Since 2017
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#4a0404] mb-6 leading-tight">
              Hindustan Cabin: Engineering Excellence in Prefab
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Hindustan Cabin takes pride in introducing itself as a premium manufacturer of portable cabins, cargo containers, and security cabins. Since our founding in 2017, we have gained a reputation for offering high-quality prefabricated goods that stand the test of time.
            </p>
            
            <div className="bg-white p-6 rounded-xl border border-[#e8dada] shadow-sm mb-6">
              <h3 className="font-bold text-[#4a0404] mb-3 flex items-center gap-2">
                <Factory className="w-5 h-5" /> Our Showroom Range
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Portable Office Cabins, FRP Portable Toilets, Pantry Cabins, Modular Units, Luxurious Container Houses, and Shipping Cargo Containers.
              </p>
            </div>


          </div>
          
          {/* Image Section */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1000&auto=format&fit=crop" 
              alt="Hindustan Cabin Manufacturing Unit" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4a0404]/90 to-transparent flex items-end p-8">
              <p className="text-white font-medium text-lg italic">"Consistent diligence, commitment, and confidence."</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP SECTION (New Addition) --- */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#4a0404] mb-4">Leadership & Vision</h2>
            <div className="w-20 h-1 bg-[#4a0404] mx-auto rounded-full"></div>
          </div>

          <div className="bg-[#fdf8f8] border border-[#e8dada] rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            {/* Decorative Quote Icon */}
            <div className="absolute top-4 right-8 text-[#4a0404]/10">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#4a0404] mb-2">Mr. Vikas Shukla</h3>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">Founder & Director</p>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  We have performed all operations of our prefabricated products manufacturing company under the leadership of Mr. Vikas Shukla. He has worked incredibly hard to get us to this position in the market.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In addition to being able to oversee business operations, he has always ensured that our tasks get finished within the allotted time. Because of his extensive market expertise, we are able to operate our firm methodically and efficiently.
                </p>
                <p className="text-[#4a0404] font-medium italic border-l-4 border-[#4a0404] pl-4 py-2 bg-white/50 rounded-r-lg">
                  "He inspires and encourages everyone in our team to give their best efforts."
                </p>
              </div>
              
              {/* Placeholder for Leader Image - Replace src with actual photo */}
              <div className="w-full md:w-64 h-64 rounded-xl overflow-hidden shadow-md border-4 border-white shrink-0">
                 <img 
                   src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" 
                   alt="Mr. Vikas Shukla" 
                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES & EXPERTISE GRID --- */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#4a0404] mb-4">Beyond Just Manufacturing</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We provide end-to-end facilities ensuring total satisfaction for our high-value clients across automotive and electrical industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Wrench className="w-8 h-8" />, title: "Fabrication & Erection", desc: "Precision engineering for prefab product erection and light gauge steel framing." },
            { icon: <Truck className="w-8 h-8" />, title: "Logistics & Procurement", desc: "Seamless delivery and material procurement across India." },
            { icon: <Users className="w-8 h-8" />, title: "Electrical Work", desc: "Complete electrical installations and chemical earthing services." },
            { icon: <Factory className="w-8 h-8" />, title: "PEB Construction", desc: "Leading Pre-Engineered Building solutions for industrial needs." },
            { icon: <CheckCircle className="w-8 h-8" />, title: "Quality Assurance", desc: "Dedicated quality checking labs for thermally insulated panels." },
            { icon: <ShieldCheck className="w-8 h-8" />, title: "Client Satisfaction", desc: "Upholding corporate ethics to fulfill requirements with high accuracy." }
          ].map((service, idx) => (
            <div key={idx} className="p-8 rounded-xl bg-white border border-[#e8dada] hover:border-[#4a0404]/50 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-[#fdf8f8] text-[#4a0404] flex items-center justify-center mb-6 group-hover:bg-[#4a0404] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#4a0404] mb-3 group-hover:text-[#330303]">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- INFRASTRUCTURE DEEP DIVE --- */}
      <section className="py-20 px-6 md:px-16 bg-[#4a0404] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Cutting-Edge Infrastructure</h2>
              <p className="text-red-100 text-lg mb-8 leading-relaxed">
                Our company has maintained a state-of-the-art setup that helps in efficiently completing tasks of PEB constructions and thermally insulated panel manufacturing.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 mt-3 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-white">Production Unit</h4>
                    <p className="text-red-200 text-sm">Equipped with all machines needed for wide-scale portable cabin production.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 mt-3 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-white">Quality Checking Lab</h4>
                    <p className="text-red-200 text-sm">Rigorous testing for accuracy and durability of every unit.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 mt-3 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-white">Warehousing Unit</h4>
                    <p className="text-red-200 text-sm">Streamlined operations for safe storage and quick dispatch.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
  <div className="relative h-64 transform translate-y-8"> {/* Parent ko relative de aur height set karein */}
    <Image 
      src="/MS-Old-Cargo-Container.jpg" 
      fill
      className="rounded-lg shadow-2xl border-4 border-[#330303] object-cover" 
      alt="Technicians" 
    />
  </div>
  <div className="relative h-64">
    <Image 
      src="/GI-Portable-Cabin.jpg" 
      fill
      className="rounded-lg shadow-2xl border-4 border-[#330303] object-cover" 
      alt="Factory Floor" 
    />
  </div>
</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;