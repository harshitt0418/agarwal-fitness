import React from 'react';
import { Link } from 'react-router-dom';
import { History, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { LazyImage } from '../common/LazyImage';
import { AnimatedCounter } from '../common/AnimatedCounter';

export const HeritageStory = () => {
  return (
    <section className="py-14 sm:py-18 bg-athletic-950 text-white relative overflow-hidden border-b border-athletic-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Clean Visual */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={50}>
              <div className="relative rounded-xl overflow-hidden border border-athletic-800 bg-athletic-900 shadow-xl group">
                <LazyImage
                  src="/assets/source_images/images_about-2-446x608.png"
                  alt="Agrawal Sports Founder Era"
                  wrapperClassName="w-full h-80 sm:h-96"
                  className="filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                  fallbackSrc="/assets/source_images/images_sportslogo.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-athletic-950 via-athletic-950/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-3 left-3 right-3 bg-athletic-900/90 backdrop-blur p-3 rounded border border-athletic-750">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-asf-gold block">
                    Founded in 1979
                  </span>
                  <span className="text-xs font-semibold text-white block mt-0.5">
                    Late Shri Subhash Chandra Agrawal
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Minimal Story */}
          <div className="lg:col-span-7 space-y-4">
            <ScrollReveal direction="right" delay={100}>
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-athletic-900 border border-athletic-800 text-[11px] text-asf-gold uppercase font-semibold">
                <History className="w-3 h-3" />
                <span>Our Heritage</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
                45+ Years of Sports & Fitness Leadership
              </h2>

              <p className="text-xs sm:text-sm text-athletic-300 leading-relaxed">
                Founded in 1979 in Bhilai by Late Shri Subhash Chandra Agrawal with a capital of ₹6,000, Agrawal Sports and Fitness grew through dedication and trust. In 1997, Mr. Ashish Kumar Agrawal expanded into modern fitness equipment under the <em>Delhi Fitness World</em> brand.
              </p>

              <p className="text-xs sm:text-sm text-athletic-300 leading-relaxed">
                Today, ASF is a primary distributor and government contractor outfitting commercial gyms, defense academies, and sports facilities across India.
              </p>

              {/* Milestones Strip */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-athletic-850">
                <div>
                  <span className="font-display font-black text-2xl text-asf-gold block">
                    <AnimatedCounter endValue={1979} />
                  </span>
                  <span className="text-[11px] text-athletic-400 block mt-0.5">Founded in Bhilai</span>
                </div>
                <div>
                  <span className="font-display font-black text-2xl text-asf-gold block">
                    <AnimatedCounter endValue={1997} />
                  </span>
                  <span className="text-[11px] text-athletic-400 block mt-0.5">Fitness Expansion</span>
                </div>
                <div>
                  <span className="font-display font-black text-2xl text-asf-gold block">
                    <AnimatedCounter endValue={45} suffix="+" />
                  </span>
                  <span className="text-[11px] text-athletic-400 block mt-0.5">Years Experience</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-asf-gold hover:text-white transition group"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
