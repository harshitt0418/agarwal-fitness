import React from 'react';
import { Award, Truck, ShieldCheck, Wrench } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export const TrustBanner = () => {
  const pillars = [
    {
      icon: Award,
      title: "45+ Years Heritage",
      description: "Serving athletes & institutions since 1979."
    },
    {
      icon: ShieldCheck,
      title: "Primary Distributor",
      description: "Direct wholesale pricing & genuine warranty."
    },
    {
      icon: Truck,
      title: "Pan-India Logistics",
      description: "Nationwide freight, assembly & testing."
    },
    {
      icon: Wrench,
      title: "Certified AMC",
      description: "On-site servicing & genuine spare parts."
    }
  ];

  return (
    <section className="bg-white border-b border-athletic-200 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal 
                key={idx} 
                direction="up" 
                delay={idx * 60}
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-athletic-50/60 border border-athletic-100 hover:border-asf-gold/60 transition-colors">
                  <div className="p-2 bg-athletic-950 text-asf-gold rounded flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs uppercase text-athletic-950 tracking-tight leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-athletic-500 leading-tight mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
