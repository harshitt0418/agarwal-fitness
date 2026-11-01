import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { useEnquiryModal } from '../../context/EnquiryModalContext';

export const Footer = () => {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <footer className="bg-athletic-950 text-athletic-300 border-t border-athletic-800">
      {/* Pre-footer Call to Action Banner */}
      <div className="bg-gradient-to-r from-athletic-900 via-athletic-950 to-athletic-900 border-b border-athletic-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-xs font-bold text-asf-gold uppercase tracking-wider">
              Turnkey Sports & Gym Infrastructure
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1 uppercase tracking-tight">
              Planning a gym, sports court, or institutional facility?
            </h3>
            <p className="text-sm text-athletic-400 mt-2 leading-relaxed">
              Leverage over 45 years of domain experience. Get custom layout blueprints, verified commercial equipment specs, and nationwide delivery & installation directly from ASF Bhilai.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => openEnquiryModal({
                title: 'Start Your Facility Consultation',
                subtitle: 'Direct pricing & space layout support from Agrawal Sports & Fitness team.'
              })}
              className="btn-primary text-xs w-full sm:w-auto"
            >
              Consult Our Specialists
            </button>
            <a
              href="tel:+918878790000"
              className="px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider border border-athletic-700 text-white hover:bg-athletic-800 transition w-full sm:w-auto text-center"
            >
              Call +91 88787 90000
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Heritage & Story */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded p-1 border border-athletic-700 flex items-center justify-center">
                <img 
                  src="/assets/source_images/images_sportslogo.jpg" 
                  alt="Agrawal Sports and Fitness" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div>
                <span className="font-display font-black text-lg tracking-tight text-white uppercase block leading-none">
                  Agrawal Sports and Fitness
                </span>
                <span className="text-[11px] font-bold text-asf-gold uppercase tracking-wider">
                  Established in 1979 • Bhilai, India
                </span>
              </div>
            </div>

            <p className="text-xs text-athletic-400 leading-relaxed max-w-md">
              Founded by Late Shri Subhash Chandra Agrawal with a capital of six thousand rupees, Agrawal Sports and Fitness has grown over 45+ years into one of India's premier suppliers, retailers, and turnkey contractors for indoor & outdoor fitness equipment, sports gear, court surfacing, and institutional installations.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-athletic-400">
              <ShieldCheck className="w-4 h-4 text-asf-gold flex-shrink-0" />
              <span>Authorized primary distributor & institutional contractor.</span>
            </div>
          </div>

          {/* Col 3: Product Verticals */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-asf-gold pl-2">
              Equipment Categories
            </h4>
            <ul className="space-y-2 text-xs text-athletic-400">
              <li>
                <Link to="/products?category=fitness-equipment" className="hover:text-white transition">Fitness Equipment</Link>
              </li>
              <li>
                <Link to="/products?category=sports-equipment" className="hover:text-white transition">Sports Equipment</Link>
              </li>
              <li>
                <Link to="/products?category=gym-flooring" className="hover:text-white transition">Sports Mats & Gym Flooring</Link>
              </li>
              <li>
                <Link to="/products?category=play-ground-courts" className="hover:text-white transition">Playground Courts</Link>
              </li>
              <li>
                <Link to="/products?category=play-ground-equipment" className="hover:text-white transition">Playground Equipment</Link>
              </li>
              <li>
                <Link to="/products?category=sports-wear" className="hover:text-white transition">Sports Wears & Uniforms</Link>
              </li>
              <li>
                <Link to="/products?category=sports-shoe" className="hover:text-white transition">Sports Shoes</Link>
              </li>
              <li>
                <Link to="/products?category=prizes-mementos" className="hover:text-white transition">Prizes & Mementos</Link>
              </li>
              <li>
                <Link to="/products?category=billiards" className="hover:text-white transition">Billiards & Accessories</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Solutions & Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-asf-gold pl-2">
              Turnkey Solutions
            </h4>
            <ul className="space-y-2 text-xs text-athletic-400">
              <li>
                <Link to="/services#gym-setups" className="hover:text-white transition">Turnkey Gym Setups</Link>
              </li>
              <li>
                <Link to="/gym-planner" className="hover:text-white transition">Interactive Space Estimator</Link>
              </li>
              <li>
                <Link to="/services#government-supply" className="hover:text-white transition">Government & GeM Supply</Link>
              </li>
              <li>
                <Link to="/services#courts-infrastructure" className="hover:text-white transition">Court Infrastructure & Surfacing</Link>
              </li>
              <li>
                <Link to="/dealership" className="hover:text-white transition">Dealership & Franchise Network</Link>
              </li>
              <li>
                <Link to="/services#bulk-custom-orders" className="hover:text-white transition">Bulk Uniforms & Custom Orders</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">45-Year Company Heritage</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">Showroom Locations</Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Showrooms & Direct Reach */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-asf-gold pl-2">
              Verified Showrooms
            </h4>
            <div className="space-y-4 text-xs">
              <div className="border border-athletic-800 rounded p-2.5 bg-athletic-900/50">
                <span className="font-semibold text-white block">Sector-6 Main Showroom</span>
                <p className="text-athletic-400 mt-1 leading-relaxed text-[11px]">
                  168, “A” Market, Sector – 6, Bhilai Nagar, District–Durg, CG 490006
                </p>
                <div className="mt-2 text-asf-gold flex items-center space-x-1">
                  <Phone className="w-3 h-3" />
                  <a href="tel:+918878790000" className="hover:underline font-mono">+91 88787 90000</a>
                </div>
              </div>

              <div className="border border-athletic-800 rounded p-2.5 bg-athletic-900/50">
                <span className="font-semibold text-white block">Risali Branch Showroom</span>
                <p className="text-athletic-400 mt-1 leading-relaxed text-[11px]">
                  In front of SBI, Krishna Talkies Road, Ashish Nagar (West), Risali, Bhilai 490006
                </p>
                <div className="mt-2 text-asf-gold flex items-center space-x-1">
                  <Phone className="w-3 h-3" />
                  <a href="tel:+919669655517" className="hover:underline font-mono">+91 96696 55517</a>
                </div>
              </div>

              <div className="space-y-1 text-athletic-400 pt-1 text-[11px]">
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-athletic-500" />
                  <a href="mailto:info@agrawalsports.com" className="hover:text-white">info@agrawalsports.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-athletic-500" />
                  <a href="mailto:asfbhilai@gmail.com" className="hover:text-white">asfbhilai@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-12 pt-6 border-t border-athletic-850 flex flex-col sm:flex-row items-center justify-between text-xs text-athletic-500 gap-4">
          <p>© {new Date().getFullYear()} Agrawal Sports and Fitness. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Primary Wholesaler & Government Project Contractor</span>
            <span>•</span>
            <span>Pan-India Supply & Setup</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
