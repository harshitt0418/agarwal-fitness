import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Calculator, 
  FileText,
  Award,
  Building2
} from 'lucide-react';
import { useEnquiryModal } from '../../context/EnquiryModalContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [equipmentDropdownOpen, setEquipmentDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const location = useLocation();
  const { openEnquiryModal } = useEnquiryModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setEquipmentDropdownOpen(false);
    setCompanyDropdownOpen(false);
  }, [location.pathname]);

  const equipmentCategories = [
    { name: 'Fitness Equipment', slug: 'fitness-equipment', desc: 'Cardio & strength machines' },
    { name: 'Sports Equipment', slug: 'sports-equipment', desc: 'Cricket, football, racquets' },
    { name: 'Mats & Gym Flooring', slug: 'gym-flooring', desc: 'Rubber rolls & puzzle tiles' },
    { name: 'Playground Courts', slug: 'play-ground-courts', desc: 'Synthetic acrylic surfaces' },
    { name: 'Playground Equipment', slug: 'play-ground-equipment', desc: 'Activity towers & swings' },
    { name: 'Sports Wears', slug: 'sports-wear', desc: 'Custom jerseys & tracksuits' },
    { name: 'Sports Shoes', slug: 'sports-shoe', desc: 'Court shoes & studs' },
    { name: 'Prizes & Mementos', slug: 'prizes-mementos', desc: 'Trophies & medals' },
    { name: 'Billiards & Tables', slug: 'billiards', desc: 'Slate tables & cues' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-all duration-200">
      
      {/* 1. Minimal Top Ribbon */}
      <div className="bg-athletic-950 text-athletic-400 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-athletic-850">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-asf-gold animate-pulse"></span>
            <span className="text-athletic-200 font-semibold tracking-wider uppercase">Est. 1979 Bhilai</span>
            <span className="text-athletic-700 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-athletic-300">Sector-6 & Risali Showrooms</span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="hidden md:inline text-athletic-400">Pan-India Setup</span>
            <span className="text-athletic-700 hidden md:inline">|</span>
            <a 
              href="tel:+918878790000" 
              className="flex items-center space-x-1.5 text-white hover:text-asf-gold font-mono font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-asf-gold" />
              <span>+91 88787 90000</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar with Increased Readable Font & Balanced Spacing */}
      <div className={`transition-all duration-200 ${isScrolled ? 'py-3 shadow-sm bg-white/95 backdrop-blur-md' : 'py-4 bg-white'} border-b border-athletic-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="w-9 h-9 rounded-md border border-athletic-200 p-1 flex items-center justify-center bg-white shadow-xs group-hover:border-asf-gold transition-colors">
              <img 
                src="/assets/source_images/images_sportslogo.jpg" 
                alt="Agrawal Sports" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="font-display font-black text-sm text-athletic-900 hidden">ASF</span>
            </div>
            
            <div className="flex items-baseline space-x-1.5">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-athletic-950 uppercase leading-none">
                Agrawal Sports
              </span>
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-asf-gold-dark uppercase leading-none">
                & Fitness
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links - Increased font size (13.5px / 14px equivalent) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            
            <Link 
              to="/" 
              className={`text-[13.5px] font-semibold uppercase tracking-wider transition-colors py-1 ${
                isActive('/') ? 'text-asf-gold-dark font-bold' : 'text-athletic-700 hover:text-athletic-950'
              }`}
            >
              Home
            </Link>

            {/* Equipment Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setEquipmentDropdownOpen(true)}
              onMouseLeave={() => setEquipmentDropdownOpen(false)}
            >
              <Link 
                to="/products" 
                className={`text-[13.5px] font-semibold uppercase tracking-wider transition-colors py-1 flex items-center space-x-1 ${
                  isActive('/products') ? 'text-asf-gold-dark font-bold' : 'text-athletic-700 hover:text-athletic-950'
                }`}
              >
                <span>Equipment</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </Link>

              {equipmentDropdownOpen && (
                <div className="absolute top-full -left-12 w-[460px] bg-white rounded-xl shadow-elevated border border-athletic-200 p-3.5 grid grid-cols-2 gap-2 transform transition-all duration-150 animate-in fade-in slide-in-from-top-1 z-50">
                  <div className="col-span-2 pb-2 mb-1 border-b border-athletic-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-athletic-400 uppercase tracking-wider">
                      Categories
                    </span>
                    <Link to="/products" className="text-xs text-asf-gold-dark font-semibold hover:underline">
                      View All →
                    </Link>
                  </div>
                  {equipmentCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/products?category=${cat.slug}`}
                      className="p-2 rounded-lg hover:bg-athletic-50 transition-colors group"
                    >
                      <span className="text-[13px] font-semibold text-athletic-900 group-hover:text-asf-gold-dark transition-colors block">
                        {cat.name}
                      </span>
                      <span className="text-[11px] text-athletic-500 line-clamp-1 mt-0.5">
                        {cat.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/services" 
              className={`text-[13.5px] font-semibold uppercase tracking-wider transition-colors py-1 ${
                isActive('/services') ? 'text-asf-gold-dark font-bold' : 'text-athletic-700 hover:text-athletic-950'
              }`}
            >
              Turnkey Setups
            </Link>

            <Link 
              to="/gym-planner" 
              className={`text-[13.5px] font-semibold uppercase tracking-wider transition-colors py-1 flex items-center space-x-1.5 ${
                isActive('/gym-planner') ? 'text-asf-gold-dark font-bold' : 'text-athletic-700 hover:text-athletic-950'
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-asf-gold" />
              <span>Gym Planner</span>
            </Link>

            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCompanyDropdownOpen(true)}
              onMouseLeave={() => setCompanyDropdownOpen(false)}
            >
              <button 
                type="button"
                className={`text-[13.5px] font-semibold uppercase tracking-wider transition-colors py-1 flex items-center space-x-1 ${
                  isActive('/about') || isActive('/dealership') ? 'text-asf-gold-dark font-bold' : 'text-athletic-700 hover:text-athletic-950'
                }`}
              >
                <span>Company</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {companyDropdownOpen && (
                <div className="absolute top-full right-0 w-56 bg-white rounded-xl shadow-elevated border border-athletic-200 p-2 space-y-1 transform transition-all duration-150 animate-in fade-in slide-in-from-top-1 z-50">
                  <Link
                    to="/about"
                    className="p-2.5 rounded-lg hover:bg-athletic-50 transition-colors flex items-center space-x-2.5 group"
                  >
                    <Award className="w-4 h-4 text-asf-gold" />
                    <div>
                      <span className="text-xs font-semibold text-athletic-900 group-hover:text-asf-gold-dark block">
                        Our Heritage
                      </span>
                      <span className="text-[11px] text-athletic-500 block">Since 1979 in Bhilai</span>
                    </div>
                  </Link>
                  <Link
                    to="/dealership"
                    className="p-2.5 rounded-lg hover:bg-athletic-50 transition-colors flex items-center space-x-2.5 group"
                  >
                    <Building2 className="w-4 h-4 text-asf-gold" />
                    <div>
                      <span className="text-xs font-semibold text-athletic-900 group-hover:text-asf-gold-dark block">
                        Dealership / Franchise
                      </span>
                      <span className="text-[11px] text-athletic-500 block">Wholesale network</span>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className={`text-[13.5px] font-semibold uppercase tracking-wider transition-colors py-1 ${
                isActive('/contact') ? 'text-asf-gold-dark font-bold' : 'text-athletic-700 hover:text-athletic-950'
              }`}
            >
              Contact
            </Link>

          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => openEnquiryModal({
                title: 'Request Equipment Quote',
                subtitle: 'Direct pricing from Agrawal Sports & Fitness Bhilai.'
              })}
              className="btn-primary text-xs py-2 px-4 shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5" />
              Request Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => openEnquiryModal()}
              className="sm:hidden px-2.5 py-1 bg-asf-gold text-athletic-950 text-[10px] font-bold rounded uppercase tracking-wider"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-athletic-700 hover:text-athletic-950 rounded hover:bg-athletic-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-athletic-200 px-4 pt-3 pb-6 space-y-3.5 animate-in fade-in">
          <div className="space-y-1 text-sm font-semibold uppercase tracking-wider">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md ${
                isActive('/') ? 'bg-athletic-100 text-asf-gold-dark font-bold' : 'text-athletic-800 hover:bg-athletic-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`block px-3 py-2 rounded-md ${
                isActive('/products') ? 'bg-athletic-100 text-asf-gold-dark font-bold' : 'text-athletic-800 hover:bg-athletic-50'
              }`}
            >
              Equipment (9 Verticals)
            </Link>
            <Link 
              to="/services" 
              className={`block px-3 py-2 rounded-md ${
                isActive('/services') ? 'bg-athletic-100 text-asf-gold-dark font-bold' : 'text-athletic-800 hover:bg-athletic-50'
              }`}
            >
              Turnkey Setups
            </Link>
            <Link 
              to="/gym-planner" 
              className={`block px-3 py-2 rounded-md ${
                isActive('/gym-planner') ? 'bg-athletic-100 text-asf-gold-dark font-bold' : 'text-athletic-800 hover:bg-athletic-50'
              }`}
            >
              Gym Planner
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md ${
                isActive('/about') ? 'bg-athletic-100 text-asf-gold-dark font-bold' : 'text-athletic-800 hover:bg-athletic-50'
              }`}
            >
              Our Heritage (1979)
            </Link>
            <Link 
              to="/dealership" 
              className={`block px-3 py-2 rounded-md ${
                isActive('/dealership') ? 'bg-athletic-100 text-asf-gold-dark font-bold' : 'text-athletic-800 hover:bg-athletic-50'
              }`}
            >
              Dealership / Franchise
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md ${
                isActive('/contact') ? 'bg-athletic-100 text-asf-gold-dark font-bold' : 'text-athletic-800 hover:bg-athletic-50'
              }`}
            >
              Contact & Showrooms
            </Link>
          </div>

          <div className="pt-2 border-t border-athletic-200 space-y-2">
            <button
              onClick={() => openEnquiryModal()}
              className="w-full btn-primary text-xs py-2"
            >
              Request Custom Quote
            </button>
            <a
              href="tel:+918878790000"
              className="w-full btn-outline text-xs py-2 flex items-center justify-center font-mono"
            >
              <Phone className="w-3 h-3 mr-1.5 text-asf-gold" />
              Call +91 88787 90000
            </a>
          </div>
        </div>
      )}

    </header>
  );
};
