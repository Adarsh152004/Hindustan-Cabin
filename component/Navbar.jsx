'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  User, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown, 
  CheckCircle, 
  Calculator,
  Box,
  Info
} from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // State for Desktop Mega Menu
  const [activeCategory, setActiveCategory] = useState(null);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  
  // State for Company Profile Dropdown
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- COMPLETE DATA STRUCTURE FROM YOUR HTML ---
  const productCategories = [
    {
      id: 'portable-cabin',
      name: 'Portable Cabin',
      href: '/products/portable-cabin',
      items: [
        { name: 'Color Coated Portable Cabins', href: '/products/color-coated-portable-cabins' },
        { name: 'Designed Portable Cabin', href: '/products/designed-portable-cabin' },
        { name: 'Luxury Portable Cabin', href: '/products/luxury-portable-cabin' },
        { name: 'MS Bunk House Cabin', href: '/products/ms-bunk-house-cabin' },
        { name: 'Steel Portable Cabin', href: '/products/steel-portable-cabin' },
        { name: 'GI Portable Cabin', href: '/products/gi-portable-cabin' },
        { name: 'MS Portable Cabin', href: '/products/ms-portable-cabin' },
        { name: 'Modular Portable Cabin', href: '/products/modular-portable-cabin' },
        { name: 'Mild Steel Portable Cabin', href: '/products/mild-steel-portable-cabin' },
        { name: 'Double Storey Portable Cabin', href: '/products/double-storey-portable-cabin' },
        { name: 'MS Portable House Cabin', href: '/products/ms-portable-house-cabin' },
        { name: 'Rectangular Mild Steel Portable Cabin', href: '/products/rectangular-mild-steel-portable-cabin' },
        { name: 'Stainless Steel Portable Cabin', href: '/products/stainless-steel-portable-cabin' },
        { name: 'Prefabricated MS Portable Cabin', href: '/products/prefabricated-ms-portable-cabin' },
        { name: 'Prefabricated Portable Cabin', href: '/products/prefabricated-portable-cabin' },
        { name: 'Modular GI Portable Cabin', href: '/products/modular-gi-portable-cabin' },
        { name: 'Modular Portable Shop Cabin', href: '/products/modular-portable-shop-cabin' },
      ]
    },
    {
      id: 'security-cabin',
      name: 'Portable Security Cabin',
      href: '/products/portable-security-cabin',
      items: [
        { name: 'MS Prefabricated Security Cabin', href: '/products/ms-prefabricated-security-cabin' },
        { name: 'Square Portable Security Cabin', href: '/products/square-portable-security-cabin' },
        { name: 'MS Portable Security Cabin', href: '/products/ms-portable-security-cabin' },
        { name: 'Industrial MS Portable Security Cabin', href: '/products/industrial-ms-portable-security-cabin' },
        { name: 'Portable Security Guard Cabin', href: '/products/portable-security-guard-cabin' },
        { name: 'MS Portable Security Guard Cabin', href: '/products/ms-portable-security-guard-cabin' },
      ]
    },
    {
      id: 'pantry-cabin',
      name: 'Pantry Cabin',
      href: '/products/pantry-cabin',
      items: [
        { name: 'Portable Pantry Cabin', href: '/products/portable-pantry-cabin' },
        { name: 'Portable Kitchen Cabin', href: '/products/portable-kitchen-cabin' },
        { name: 'Portable Kitchen Pantry Cabin', href: '/products/portable-kitchen-pantry-cabin' },
      ]
    },
    {
      id: 'cargo-container',
      name: 'Cargo Container',
      href: '/products/cargo-container',
      items: [
        { name: 'Stainless Steel Cargo Container', href: '/products/stainless-steel-cargo-container' },
        { name: 'Shipping Container', href: '/products/shipping-container' },
        { name: 'MS Cargo Shipping Container', href: '/products/ms-cargo-shipping-container' },
        { name: 'Portable Cargo Container', href: '/products/portable-cargo-container' },
      ]
    },
    {
      id: 'office-container',
      name: 'Office Container',
      href: '/products/office-container',
      items: [
        { name: 'MS Office Container', href: '/products/ms-office-container' },
        { name: 'Portable Office Container', href: '/products/portable-office-container' },
        { name: 'Portable Interior Office Container', href: '/products/portable-interior-office-container' },
        { name: 'Steel Portable Office Container', href: '/products/steel-portable-office-container' },
      ]
    },
    {
      id: 'old-cargo-office',
      name: 'Old Cargo Office Cabin',
      href: '/products/old-cargo-office-cabin',
      items: [
        { name: 'Old Portable Office Cabin', href: '/products/old-portable-office-cabin' },
        { name: 'Industrial Office Portable Cabin', href: '/products/industrial-office-portable-cabin' },
        { name: 'Industrial Old Cargo Office Cabin', href: '/products/industrial-old-cargo-office-cabin' },
      ]
    },
    {
      id: 'gi-office',
      name: 'GI Office Cabin',
      href: '/products/gi-office-cabin',
      items: [
        { name: 'GI Furnished Office Cabin', href: '/products/gi-furnished-office-cabin' },
        { name: 'Industrial GI Office Cabin', href: '/products/industrial-gi-office-cabin' },
        { name: 'GI Portable Office Cabin', href: '/products/gi-portable-office-cabin' },
        { name: 'Prefabricated GI Portable Cabin', href: '/products/prefabricated-gi-portable-cabin' },
      ]
    },
    {
      id: 'store-cabin',
      name: 'Store Cabin',
      href: '/products/store-cabin',
      items: [
        { name: 'Industrial Portable Store Cabin', href: '/products/industrial-portable-store-cabin' },
        { name: 'Portable Interior Store Room Cabin', href: '/products/portable-interior-store-room-cabin' },
      ]
    },
    {
      id: 'container-office',
      name: 'Portable Container Office Cabin',
      href: '/products/portable-container-office-cabin',
      items: [
        { name: 'Prefabricated Office Cabin', href: '/products/prefabricated-office-cabin' },
        { name: 'Industrial Portable Container Office Cabin', href: '/products/industrial-portable-container-office-cabin' },
      ]
    },
    {
      id: 'isolation-ward',
      name: 'Portable Isolation Ward Cabin',
      href: '/products/industrial-portable-isolation-ward-cabin',
      items: [
        { name: 'Industrial Portable Isolation Ward Cabin', href: '/products/industrial-portable-isolation-ward-cabin' },
      ]
    },
    {
      id: 'house-cabin',
      name: 'Portable House Cabin',
      href: '/products/portable-house-cabin',
      items: [
        { name: 'Commercial Portable House Cabin', href: '/products/commercial-portable-house-cabin' },
        { name: 'Prefabricated Portable House Cabin', href: '/products/prefabricated-portable-house-cabin' },
      ]
    },
    {
      id: 'old-cargo',
      name: 'Old Cargo Container',
      href: '/products/old-cargo-container',
      items: [
        { name: 'Industrial Old Cargo Container', href: '/products/industrial-old-cargo-container' },
        { name: 'Old Shipping Container', href: '/products/old-shipping-container' },
        { name: 'MS Old Cargo Container', href: '/products/ms-old-cargo-container' },
      ]
    },
    {
      id: 'mobile-toilet',
      name: 'Portable Mobile Toilet',
      href: '/products/portable-mobile-toilet',
      items: [
        { name: 'Industrial Portable Mobile Toilet Cabin', href: '/products/industrial-portable-mobile-toilet-cabin' },
        { name: 'Portable Mobile Toilet Interior Cabin', href: '/products/portable-mobile-toilet-interior-cabin' },
      ]
    },
    {
      id: 'storage-container',
      name: 'Fabricated Storage Container',
      href: '/products/prefabricated-storage-container',
      items: [
        { name: 'Prefabricated Storage Container', href: '/products/prefabricated-storage-container' },
      ]
    },
    {
      id: 'office-cabin',
      name: 'Portable Office Cabin',
      href: '/products/portable-office-cabin',
      items: [
        { name: 'Furnished Portable Office Cabin', href: '/products/furnished-portable-office-cabin' },
        { name: 'GI Site Office Cabin', href: '/products/gi-site-office-cabin' },
        { name: 'MS Portable Office Cabin', href: '/products/ms-portable-office-cabin' },
        { name: 'Office Conference Room Cabin', href: '/products/office-conference-room-cabin' },
        { name: 'Portable Office Container Cabin', href: '/products/portable-office-container-cabin' },
        { name: 'Modular Portable Office Cabin', href: '/products/modular-portable-office-cabin' },
        { name: 'Portable Site Office Cabin', href: '/products/portable-site-office-cabin' },
        { name: 'Stainless Steel Portable Office Cabin', href: '/products/stainless-steel-portable-office-cabin' },
        { name: 'Industrial GI Site Office Cabin', href: '/products/industrial-gi-site-office-cabin' },
      ]
    },
  ];

  const pathname = usePathname();

  // Updated Nav Links
  const navLinks = [
    { name: 'Home', href: '/', active: pathname === '/' },
    { name: 'Company Profile', href: '/company-profile', hasDropdown: true, active: pathname === '/company-profile' || pathname === '/about' },
    { name: 'Products', href: '/products', hasDropdown: true, active: pathname.startsWith('/products') },
    { name: 'Contact Us', href: '/contact', active: pathname === '/contact' },
  ];

  const isHomePage = pathname === '/';
  const isTransparent = isHomePage && !scrolled && !isMobileMenuOpen;

  return (
    <header 
      className={`w-full font-sans fixed top-0 left-0 z-50 transition-all duration-300 ease-out ${
        isTransparent ? 'bg-transparent text-white border-b border-white/10' : 'bg-white text-gray-800 shadow-md'
      }`}
    >
      {/* --- TOP BAR (Desktop Only - Crimson Maroon Theme) --- */}
      <div className={`hidden xl:flex bg-[#4a0d0d] text-white px-6 lg:px-12 py-2.5 items-center justify-between text-xs sm:text-[13px] transition-all duration-300 ease-out overflow-hidden ${
        scrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-20 opacity-100'
      }`}>
        <div className="flex items-center space-x-4">
          <div className="text-gray-200">
            Contact: <a href="tel:+918692943939" className="text-amber-300 hover:text-white font-semibold transition-colors">+91-8692943939</a> 
            <span className="text-red-300/40 px-2">·</span> 
            <a href="mailto:hindustanCabin@gmail.com" className="text-amber-300 hover:text-white font-semibold transition-colors">hindustanCabin@gmail.com</a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-1.5 border border-amber-500/40 rounded-full px-3 py-0.5 bg-[#330808]">
            <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-medium text-amber-200 tracking-wide text-xs">GST Registered</span>
          </div>
          <span className="text-red-300/30 text-lg leading-none">|</span>
          <span className="text-gray-200">Fixed-price quote in 48 hours</span>
        </div>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <div className="px-4 sm:px-6 lg:px-12 flex items-center justify-between h-[72px]">
        
        {/* Left: Logo & Brand Name */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
          <img 
            src="/logo.png" 
            alt="Hindustan Cabin Logo" 
            className={`h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
              isTransparent ? 'brightness-0 invert' : ''
            }`}
          />  
          <h1 className={`text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight leading-none ${
            isTransparent ? 'text-white' : 'text-[#4a0d0d]'
          }`}>
            Hindustan Cabin
          </h1>
        </Link>

        {/* Center: Desktop Nav Links */}
        <nav className={`hidden xl:flex items-center space-x-8 font-medium text-[15px] h-full ${
          isTransparent ? 'text-white' : 'text-gray-700'
        }`}>
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative h-full group"
              onMouseEnter={() => {
                if (link.name === 'Products') setIsProductsHovered(true);
                if (link.name === 'Company Profile') setIsProfileHovered(true);
              }}
              onMouseLeave={() => {
                if (link.name === 'Products') setIsProductsHovered(false);
                if (link.name === 'Company Profile') setIsProfileHovered(false);
              }}
            >
              <Link 
                href={link.href} 
                className={`flex items-center gap-1 h-full relative transition-colors duration-200 ${
                  link.active 
                    ? (isTransparent ? 'text-amber-400 font-semibold' : 'text-[#8b1e1e] font-semibold')
                    : (isTransparent ? 'hover:text-amber-200' : 'hover:text-[#8b1e1e]')
                }`}
              >
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  !isTransparent && ((link.name === 'Products' && isProductsHovered) || (link.name === 'Company Profile' && isProfileHovered))
                    ? 'rotate-180 text-[#8b1e1e]' 
                    : (isTransparent ? 'text-white/70' : 'text-gray-400')
                }`} />}
                
                {/* Active / Hover Line */}
                <span className={`absolute bottom-0 left-0 w-full h-[3px] rounded-t-md transition-all duration-300 ${
                  link.active 
                    ? (isTransparent ? 'bg-amber-400' : 'bg-[#8b1e1e]') 
                    : 'bg-[#d97706] opacity-0 group-hover:opacity-100'
                }`}></span>
              </Link>

              {/* --- COMPANY PROFILE DROPDOWN --- */}
              {link.name === 'Company Profile' && link.hasDropdown && (
                <div className={`absolute top-full left-0 mt-0 w-56 bg-white shadow-xl rounded-b-xl border-t-4 border-[#8b1e1e] overflow-hidden transition-all duration-300 origin-top ${
                  isProfileHovered ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
                }`}>
                  <div className="py-2">
                    <Link 
                      href="/about" 
                      className="block px-5 py-3 text-sm text-gray-600 hover:bg-amber-50 hover:text-[#8b1e1e] hover:pl-7 transition-all duration-200 flex items-center gap-2"
                    >
                      <Info className="w-4 h-4" />
                      About Us
                    </Link>
                    <Link 
                      href="/company-profile" 
                      className="block px-5 py-3 text-sm text-gray-600 hover:bg-amber-50 hover:text-[#8b1e1e] hover:pl-7 transition-all duration-200 flex items-center gap-2"
                    >
                      <Box className="w-4 h-4" />
                      Our Profile
                    </Link>
                  </div>
                </div>
              )}

              {/* --- PRODUCTS MEGA MENU DROPDOWN (FIXED CENTERING) --- */}
              {link.name === 'Products' && link.hasDropdown && (
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[900px] max-w-[95vw] bg-white shadow-2xl rounded-b-xl border-t-4 border-[#8b1e1e] overflow-hidden transition-all duration-300 origin-top ${
                  isProductsHovered ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
                }`}>
                  <div className="flex h-[450px]">
                    {/* Left Side: Categories List */}
                    <div className="w-1/3 bg-gray-50 border-r border-gray-100 overflow-y-auto custom-scrollbar py-2">
                      {productCategories.map((category) => (
                        <button
                          key={category.id}
                          onMouseEnter={() => setActiveCategory(category.id)}
                          className={`w-full text-left px-5 py-3 text-sm font-medium transition-all duration-200 border-l-4 ${
                            activeCategory === category.id || (!activeCategory && category.id === productCategories[0].id)
                              ? 'bg-white text-[#8b1e1e] border-[#8b1e1e] shadow-sm' 
                              : 'text-gray-600 border-transparent hover:bg-white hover:text-[#8b1e1e]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            {category.name}
                            <ChevronRight className={`w-3 h-3 transition-transform ${activeCategory === category.id || (!activeCategory && category.id === productCategories[0].id) ? 'translate-x-1' : ''}`} />
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Right Side: Sub-Items Grid */}
                    <div className="w-2/3 p-6 overflow-y-auto custom-scrollbar bg-white">
                      {productCategories.map((category) => (
                        <div 
                          key={category.id}
                          className={`transition-all duration-300 ${
                            activeCategory === category.id || (!activeCategory && category.id === productCategories[0].id)
                              ? 'block animate-in fade-in slide-in-from-right-4 duration-300' 
                              : 'hidden'
                          }`}
                        >
                          <h3 className="text-lg font-bold text-[#8b1e1e] mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                            <Box className="w-5 h-5" />
                            {category.name}
                          </h3>
                          <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                            {category.items.map((item, idx) => (
                              <Link 
                                key={idx}
                                href={item.href}
                                className="text-sm text-gray-600 hover:text-[#8b1e1e] hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group/item"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/item:bg-[#d97706] transition-colors"></span>
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Footer of Mega Menu */}
                  <div className="bg-[#fdfbf7] px-6 py-3 border-t border-gray-100 flex justify-between items-center">
                     <span className="text-xs text-gray-500">Explore our full range of modular solutions</span>
                     <Link href="/products" className="text-sm font-bold text-[#8b1e1e] hover:underline uppercase tracking-wide">
                       View All Products &rarr;
                     </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right: Action Buttons */}
        <div className="hidden xl:flex items-center gap-3">
          <a 
            href="tel:+918692943939" 
            className={`flex items-center justify-center border rounded-full w-10 h-10 transition-all ${
              isTransparent 
                ? 'border-white/30 text-white hover:bg-white/10 hover:border-white' 
                : 'border-gray-300 text-gray-600 hover:bg-amber-50 hover:border-amber-500 hover:text-[#8b1e1e]'
            }`}
            title="Call Us"
          >
            <Phone className="w-[18px] h-[18px]" />
          </a>
          
          <button 
            className={`flex items-center justify-center border rounded-full w-10 h-10 transition-all ${
              isTransparent 
                ? 'border-white/30 text-white hover:bg-white/10 hover:border-white' 
                : 'border-gray-300 text-gray-600 hover:bg-amber-50 hover:border-amber-500 hover:text-[#8b1e1e]'
            }`}
            title="Cost Calculator"
          >
            <Calculator className="w-[18px] h-[18px]" />
          </button>
          
          <Link 
            href="/contact"
            className="bg-[#8b1e1e] hover:bg-[#6e1717] text-white px-6 py-2.5 rounded-full font-semibold shadow-sm hover:shadow transition-all duration-300 inline-block text-center"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`xl:hidden p-2 rounded-full transition-all duration-300 ${
            isTransparent ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      <div 
        className={`xl:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isMobileMenuOpen ? 'max-h-[85vh] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
        }`}
      >
        <div className="flex flex-col p-4 space-y-1 max-h-[calc(100vh-72px)] overflow-y-auto pb-20">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link 
                href={link.href} 
                onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-amber-50/50 transition-all duration-300 group"
              >
                <span className={`text-base font-medium ${link.active ? 'text-[#8b1e1e] font-semibold' : 'text-gray-700 group-hover:text-[#8b1e1e]'}`}>
                  {link.name}
                </span>
                {link.hasDropdown ? (
                   <ChevronDown className={`w-4 h-4 ${link.active ? 'text-[#8b1e1e]' : 'text-gray-300 group-hover:text-[#8b1e1e]'}`} />
                ) : (
                   <ChevronRight className={`w-4 h-4 ${link.active ? 'text-[#8b1e1e]' : 'text-gray-300 group-hover:text-[#8b1e1e]'}`} />
                )}
              </Link>
              
              {/* Mobile Nested Submenu for Company Profile */}
              {link.name === 'Company Profile' && (
                 <div className="pl-4 mt-1 space-y-1 border-l-2 border-gray-100 ml-4">
                    <Link 
                      href="/about" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-3 text-sm text-gray-500 hover:text-[#8b1e1e] hover:bg-gray-50 rounded-lg"
                    >
                      About Us
                    </Link>
                    <Link 
                      href="/company-profile" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-3 text-sm text-gray-500 hover:text-[#8b1e1e] hover:bg-gray-50 rounded-lg"
                    >
                      Our Profile
                    </Link>
                 </div>
              )}

              {/* Mobile Nested Submenu for Products */}
              {link.name === 'Products' && (
                <div className="pl-2 mt-1 space-y-2">
                  {productCategories.map((category) => (
                    <div key={category.id} className="border-l-2 border-gray-100">
                      <div className="py-2 px-4 text-sm font-semibold text-gray-800 bg-gray-50/50">
                        {category.name}
                      </div>
                      <div className="pl-4 space-y-1">
                        {category.items.slice(0, 5).map((item, idx) => ( 
                           <Link 
                             key={idx}
                             href={item.href}
                             onClick={() => setIsMobileMenuOpen(false)}
                             className="block py-1.5 px-3 text-sm text-gray-500 hover:text-[#8b1e1e] hover:bg-gray-50 rounded-lg"
                           >
                             {item.name}
                           </Link>
                        ))}
                        {category.items.length > 5 && (
                          <Link 
                            href={category.href} 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-1.5 px-3 text-xs font-bold text-[#8b1e1e]"
                          >
                            View all {category.name}...
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
             <Link 
               href="/contact"
               onClick={() => setIsMobileMenuOpen(false)}
               className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#8b1e1e] text-white rounded-full font-medium hover:bg-[#6e1717] transition-all shadow-md text-center"
             >
                Get Quote
             </Link>
             <Link 
               href="/login" 
               onClick={() => setIsMobileMenuOpen(false)}
               className="flex items-center justify-center gap-2 w-full py-3.5 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 transition-all"
             >
                <User className="w-4 h-4" />
                <span>Login / Sign Up</span>
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
}