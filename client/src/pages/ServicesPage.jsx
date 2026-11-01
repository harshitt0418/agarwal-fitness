import React from 'react';
import { servicesData } from '../data/siteData.js';
import { CheckCircle2, ArrowRight, Shield, Award, Wrench, FileText } from 'lucide-react';
import { useEnquiryModal } from '../context/EnquiryModalContext';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { LazyImage } from '../components/common/LazyImage';

export const ServicesPage = () => {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <div className="bg-athletic-50 min-h-screen py-10 overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal direction="up" delay={50}>
          <div className="bg-athletic-950 text-white rounded-2xl p-8 sm:p-12 border border-athletic-800 relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-asf-gold block mb-2">
                Turnkey Contracting & Project Execution
              </span>
              <h1 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
                End-to-End Sports & Fitness Solutions
              </h1>
              <p className="text-sm text-athletic-300 mt-3 leading-relaxed">
                From raw blueprints to fully commissioned commercial gyms, acrylic courts, government tenders, and nationwide retail dealership. Backed by 45+ years of verified execution excellence.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Services List with Scroll Animations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <ScrollReveal
              key={service.id}
              direction={isEven ? "left" : "right"}
              delay={100}
            >
              <div
                id={service.id}
                className="bg-white rounded-2xl border border-athletic-200 overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 p-6 sm:p-10"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Left: Copy & Benefits */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? '' : 'lg:order-2'}`}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-asf-gold-dark block">
                        Turnkey Solution {index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-tight text-athletic-950 mt-1">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-athletic-600 mt-2 font-medium">
                        {service.shortDesc}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-athletic-700 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-athletic-400 mb-2">
                        Key Client Advantages
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-athletic-800">
                        {service.benefits.map((b, i) => (
                          <div key={i} className="flex items-start space-x-2 bg-athletic-50 p-2.5 rounded-lg border border-athletic-100">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => openEnquiryModal({
                          title: `Consultation: ${service.title}`,
                          subtitle: 'Direct pricing & execution planning from ASF Bhilai.',
                          enquiryType: service.id === 'gym-setups' ? 'gym_setup' : 'general',
                          service: service
                        })}
                        className="btn-primary text-xs"
                      >
                        <FileText className="w-3.5 h-3.5 mr-1.5" />
                        Request Project Consultation
                      </button>

                      {service.id === 'gym-setups' && (
                        <Link
                          to="/gym-planner"
                          className="btn-outline text-xs group"
                        >
                          <span>Use Space Calculator</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Right: Visual Card & Process Steps */}
                  <div className={`lg:col-span-5 space-y-4 ${isEven ? '' : 'lg:order-1'}`}>
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-athletic-200 shadow-md group">
                      <LazyImage
                        src={service.image}
                        alt={service.title}
                        wrapperClassName="w-full h-full"
                        className="group-hover:scale-105 transition-transform duration-700"
                        fallbackSrc="/assets/source_images/images_about-2-446x608.png"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-athletic-950/60 via-transparent to-transparent pointer-events-none"></div>
                    </div>

                    {/* Process Milestones preview */}
                    {service.process && (
                      <div className="bg-athletic-50 rounded-xl p-4 border border-athletic-200">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-athletic-500 block mb-2">
                          Standard Execution Timeline
                        </span>
                        <div className="space-y-2">
                          {service.process.slice(0, 3).map((p, i) => (
                            <div key={i} className="flex items-start space-x-2 text-xs">
                              <span className="font-mono font-bold text-asf-gold-dark">{p.step}.</span>
                              <div>
                                <strong className="text-athletic-950">{p.title}:</strong>{' '}
                                <span className="text-athletic-600">{p.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

    </div>
  );
};
