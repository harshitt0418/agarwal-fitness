import React from 'react';
import { Award, ShieldCheck, History, Users, Target, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { companyData } from '../data/siteData.js';
import { useEnquiryModal } from '../context/EnquiryModalContext';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <div className="bg-athletic-50 min-h-screen py-10">
      
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-athletic-950 text-white rounded-2xl p-8 sm:p-12 border border-athletic-800 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-asf-gold block mb-2">
              Serving India Since 1979
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
              Four Decades of Sports & Fitness Heritage
            </h1>
            <p className="text-sm text-athletic-300 mt-3 leading-relaxed">
              Discover the journey of Agrawal Sports and Fitness—from a modest Bhilai start with six thousand rupees to one of India’s premier suppliers, turnkey gym contractors, and government project handlers.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Core Heritage Timeline & Founders */}
        <div className="bg-white rounded-2xl border border-athletic-200 p-8 sm:p-12 shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Photo */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-athletic-300 shadow-elevated bg-athletic-100">
                <img
                  src="/assets/source_images/images_about-2-446x608.png"
                  alt="Agrawal Sports and Fitness Founder Era"
                  className="w-full h-96 sm:h-[460px] object-cover object-top filter grayscale contrast-125"
                  onError={(e) => {
                    e.target.src = '/assets/source_images/images_sportslogo.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-athletic-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-athletic-900/90 backdrop-blur p-4 rounded-lg border border-athletic-700 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-asf-gold block">
                    Historical Foundation
                  </span>
                  <h4 className="font-display font-bold text-base uppercase text-white mt-0.5">
                    Late Shri Subhash Chandra Agrawal
                  </h4>
                  <p className="text-xs text-athletic-300 mt-1">
                    Born in Dinod, Haryana. Founded ASF in Bhilai in 1979 on principles of hard work and honest customer relationships.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-asf-gold-dark block">
                  The ASF Story
                </span>
                <h2 className="text-3xl font-display font-extrabold uppercase tracking-tight text-athletic-950 mt-1">
                  Built on Dedication, Mannerism & Deep Client Trust
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-athletic-700 leading-relaxed">
                <p>
                  The foundation of <strong className="text-athletic-950">Agrawal Sports and Fitness</strong> was laid in 1979 by <strong className="text-athletic-950">Late Shri Subhash Chandra Agrawal</strong>. Born in Dinod, a small village in Haryana, he later settled in Bhilai in Madhya Pradesh (now converted to Chhattisgarh).
                </p>
                <p>
                  The company, an authentic family-owned business, started modestly with a working capital of just six thousand rupees and a small initial turnover. Through his untiring efforts, good mannerism, and genuine commitment to customers, the enterprise grew steadily and earned a reputation as a dependable provider of sports goods.
                </p>
                <p>
                  With the passing of time and under the founder's steady guidance, M/s Agrawal Sports and Fitness developed into a well-established supplier catering to Government sports directorates, educational institutions, universities, sports clubs, and private athletes across central and northern India.
                </p>
                <p>
                  In 1997, his son, <strong className="text-athletic-950">Mr. Ashish Kumar Agrawal</strong>, joined the business, smoothly directing the company towards modern expansion. Recognizing the growing demand for fitness equipment, Mr. Ashish introduced commercial and residential fitness equipment to Chhattisgarh for the first time under the brand of <strong className="text-asf-gold-dark">Delhi Fitness World</strong>—making world-class machines accessible at affordable prices, supported by reliable after-sales maintenance.
                </p>
              </div>

              {/* Milestones grid */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-athletic-100">
                <div className="bg-athletic-50 p-3 rounded-lg border border-athletic-100">
                  <span className="font-display font-black text-2xl text-asf-gold-dark block">1979</span>
                  <span className="text-[11px] text-athletic-600 block mt-0.5">Founded in Bhilai</span>
                </div>
                <div className="bg-athletic-50 p-3 rounded-lg border border-athletic-100">
                  <span className="font-display font-black text-2xl text-asf-gold-dark block">1997</span>
                  <span className="text-[11px] text-athletic-600 block mt-0.5">Fitness Equipment Expansion</span>
                </div>
                <div className="bg-athletic-50 p-3 rounded-lg border border-athletic-100">
                  <span className="font-display font-black text-2xl text-asf-gold-dark block">45+ Yrs</span>
                  <span className="text-[11px] text-athletic-600 block mt-0.5">Nationwide Service</span>
                </div>
                <div className="bg-athletic-50 p-3 rounded-lg border border-athletic-100">
                  <span className="font-display font-black text-2xl text-asf-gold-dark block">2 Centers</span>
                  <span className="text-[11px] text-athletic-600 block mt-0.5">Sector-6 & Risali</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-athletic-200 shadow-subtle space-y-3">
            <div className="p-3 rounded-lg bg-athletic-950 text-asf-gold w-fit">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg uppercase text-athletic-950">Our Mission</h3>
            <p className="text-xs text-athletic-600 leading-relaxed">
              “To offer everything an athlete or fitness enthusiast may need in their journey to fitness. ASF aims to empower individuals and institutions with the best resources to reach their fitness goals—through quality products, expert guidance, and customer-first service.”
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-athletic-200 shadow-subtle space-y-3">
            <div className="p-3 rounded-lg bg-athletic-950 text-asf-gold w-fit">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg uppercase text-athletic-950">Customer Satisfaction</h3>
            <p className="text-xs text-athletic-600 leading-relaxed">
              Customer satisfaction and strong client relationships remain at the absolute top of our priority. We continue to serve clients with prompt and efficient after-sales service, genuine spare parts, and transparent business ethics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-athletic-200 shadow-subtle space-y-3">
            <div className="p-3 rounded-lg bg-athletic-950 text-asf-gold w-fit">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg uppercase text-athletic-950">Fitness for Everyone</h3>
            <p className="text-xs text-athletic-600 leading-relaxed">
              We strongly believe that fitness is for everyone. That’s why our sports and fitness supplies are varied in nature and cater perfectly to diverse age groups, genders, schools, housing societies, and public recreational zones.
            </p>
          </div>
        </div>

        {/* Verified Capability Stats */}
        <div className="bg-athletic-950 text-white rounded-2xl p-8 sm:p-12 border border-athletic-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-asf-gold block mb-1">
              Verified Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white">
              Primary Distributor & Turnkey Project Handler
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {companyData.stats.map((st, i) => (
              <div key={i} className="p-4 bg-athletic-900 rounded-xl border border-athletic-800">
                <span className="font-display font-black text-3xl sm:text-4xl text-asf-gold block">
                  {st.value}
                </span>
                <span className="text-xs font-bold uppercase text-white block mt-1 tracking-wider">
                  {st.label}
                </span>
                <span className="text-[11px] text-athletic-400 mt-1 block">
                  {st.description}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-athletic-850 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-athletic-400">
              Operating out of Bhilai, Chhattisgarh with pan-India supply and installation logistics.
            </p>
            <button
              onClick={() => openEnquiryModal({
                title: 'Connect with ASF Leadership & Sales',
                subtitle: 'Direct consultation with our executive team in Bhilai.'
              })}
              className="btn-primary text-xs"
            >
              Get in Touch with Our Team
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
