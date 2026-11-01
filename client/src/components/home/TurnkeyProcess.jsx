import React from 'react';
import { Compass, Layout, Truck, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../common/ScrollReveal';

export const TurnkeyProcess = () => {
  const steps = [
    {
      num: "01",
      icon: Compass,
      title: "Space Audit",
      description: "Room dimensions, floor load, and member flow analysis."
    },
    {
      num: "02",
      icon: Layout,
      title: "3D CAD Layout",
      description: "Clearance blueprints and equipment package spec."
    },
    {
      num: "03",
      icon: Truck,
      title: "Setup & Transit",
      description: "Direct freight from Bhilai and on-site technician assembly."
    },
    {
      num: "04",
      icon: Wrench,
      title: "Handover & AMC",
      description: "Staff orientation, safety sign-off, and warranty maintenance."
    }
  ];

  return (
    <section className="py-14 sm:py-18 bg-white border-b border-athletic-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Header */}
        <ScrollReveal direction="up" delay={40}>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-asf-gold-dark block mb-1">
              Turnkey Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-tight text-athletic-950">
              4-Stage Installation Workflow
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 Clean Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 60}
                className="h-full"
              >
                <div className="h-full bg-athletic-50 rounded-lg p-5 border border-athletic-200 hover:border-asf-gold/70 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-8 h-8 rounded bg-athletic-950 text-asf-gold flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-display font-black text-2xl text-athletic-300">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base uppercase text-athletic-950">
                      {step.title}
                    </h3>
                    <p className="text-xs text-athletic-600 mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-athletic-200/60 text-[10px] font-semibold text-athletic-400 uppercase tracking-wider">
                    Phase {step.num}
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
