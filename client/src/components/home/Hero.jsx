import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Calculator, MapPin } from 'lucide-react';
import { useEnquiryModal } from '../../context/EnquiryModalContext';
import { LazyImage } from '../common/LazyImage';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { ScrollReveal } from '../common/ScrollReveal';

export const Hero = () => {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <section className="relative bg-athletic-950 text-white overflow-hidden border-b border-athletic-800">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 -right-16 w-80 h-80 bg-asf-gold/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Clean, Minimal Editorial Copy */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Minimal tag */}
            <ScrollReveal direction="fade" delay={50}>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-athletic-900 border border-athletic-800">
                <span className="w-1.5 h-1.5 rounded-full bg-asf-gold animate-pulse"></span>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-athletic-300">
                  Est. 1979 • Bhilai, India
                </span>
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal direction="up" delay={120}>
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-5xl uppercase tracking-tight leading-[1.08] text-white">
                Precision Sports Gear & <span className="text-asf-gold">Turnkey Gym Setups</span>
              </h1>
            </ScrollReveal>

            {/* Minimal Subtext */}
            <ScrollReveal direction="up" delay={180}>
              <p className="text-sm sm:text-base text-athletic-300 leading-relaxed max-w-xl font-normal">
                Equipping commercial gyms, schools, defense academies, and private residences with certified sports equipment, rubber flooring, and turnkey installation across India.
              </p>
            </ScrollReveal>

            {/* Compact Action Buttons */}
            <ScrollReveal direction="up" delay={240}>
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/products"
                  className="btn-primary text-xs flex items-center justify-center py-2.5 px-5 group"
                >
                  <span>Explore Equipment</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/gym-planner"
                  className="inline-flex items-center justify-center font-semibold rounded-md px-5 py-2.5 text-xs uppercase tracking-wider transition-all duration-200 border border-athletic-700 text-white hover:bg-athletic-900 hover:border-asf-gold active:scale-[0.98]"
                >
                  <Calculator className="w-3.5 h-3.5 mr-1.5 text-asf-gold" />
                  <span>Gym Space Calculator</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Sleek inline trust badges */}
            <ScrollReveal direction="up" delay={300}>
              <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-athletic-900 text-xs text-athletic-400">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-asf-gold flex-shrink-0" />
                  <span>Wholesale Pricing</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-asf-gold flex-shrink-0" />
                  <span>Pan-India Setup</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-asf-gold flex-shrink-0" />
                  <span>2 Bhilai Showrooms</span>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="zoom" delay={150}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Photo Card */}
                <div className="relative rounded-xl overflow-hidden border border-athletic-800 bg-athletic-900 shadow-xl group">
                  <LazyImage
                    src="/assets/source_images/images_img_fitness-equipment_Custom Gym Setups.webp"
                    alt="Custom Gym Setup by ASF"
                    wrapperClassName="w-full h-72 sm:h-80"
                    className="group-hover:scale-105 transition-transform duration-700"
                    fallbackSrc="/assets/source_images/images_img_fitness-equipment_Indoor Fitness Equipment.avif"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-athletic-950 via-athletic-950/30 to-transparent pointer-events-none"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
                    <span className="text-[9px] font-bold tracking-wider uppercase text-asf-gold block">
                      Turnkey Solution
                    </span>
                    <h3 className="font-display font-bold text-base uppercase text-white leading-tight">
                      Commercial & Institutional Facilities
                    </h3>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-3 bg-athletic-900/95 backdrop-blur border border-athletic-750 rounded-lg p-2.5 shadow-xl flex items-center space-x-2.5 animate-float-slow">
                  <div className="w-9 h-9 rounded bg-asf-gold text-athletic-950 flex items-center justify-center font-display font-black text-lg flex-shrink-0">
                    <AnimatedCounter endValue={45} suffix="+" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-white block uppercase tracking-wide leading-tight">
                      Years in Business
                    </span>
                    <span className="text-[10px] text-athletic-400 block">
                      Since 1979
                    </span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
