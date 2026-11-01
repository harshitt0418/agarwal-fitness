import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';
import { companyData } from '../../data/siteData.js';
import { ScrollReveal } from '../common/ScrollReveal';

export const ShowroomsSection = () => {
  const [activeShowroom, setActiveShowroom] = useState(0);
  const showrooms = companyData.showrooms;
  const current = showrooms[activeShowroom];

  return (
    <section className="py-14 sm:py-18 bg-white border-b border-athletic-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Header */}
        <ScrollReveal direction="up" delay={40}>
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-asf-gold-dark block mb-0.5">
                Physical Experience Centers
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-tight text-athletic-950">
                Visit Our Bhilai Showrooms
              </h2>
            </div>

            {/* Toggle */}
            <div className="flex items-center bg-athletic-100 p-1 rounded-md border border-athletic-200">
              {showrooms.map((sh, idx) => (
                <button
                  key={sh.id}
                  onClick={() => setActiveShowroom(idx)}
                  className={`px-3 py-1.5 text-xs font-bold rounded uppercase tracking-wider transition-all ${
                    activeShowroom === idx
                      ? 'bg-athletic-950 text-white shadow-xs'
                      : 'text-athletic-600 hover:text-athletic-950'
                  }`}
                >
                  {sh.id === 'bhilai-sec6' ? 'Sector-6' : 'Risali'}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Minimal Card */}
        <div className="bg-athletic-50 rounded-xl border border-athletic-200 p-6 sm:p-8 max-w-4xl mx-auto shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-athletic-200">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-asf-gold-dark block">
                {current.isPrimary ? 'Main Showroom' : 'Branch Center'}
              </span>
              <h3 className="font-display font-bold text-xl uppercase tracking-tight text-athletic-950 mt-0.5">
                {current.name}
              </h3>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href={`tel:${current.phone.replace(/\s+/g, '')}`}
                className="btn-primary text-xs py-1.5 px-3.5"
              >
                <Phone className="w-3 h-3 mr-1.5" />
                Call Showroom
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(current.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-1.5 px-3"
              >
                <Navigation className="w-3 h-3 mr-1 text-asf-gold-dark" />
                Directions
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 text-xs text-athletic-700">
            <div>
              <strong className="block text-athletic-950 font-semibold mb-1">Address:</strong>
              <p className="text-athletic-600 leading-relaxed text-[11px]">{current.address}</p>
            </div>

            <div>
              <strong className="block text-athletic-950 font-semibold mb-1">Contact:</strong>
              <div className="space-y-0.5 font-mono text-[11px]">
                <a href={`tel:${current.phone.replace(/\s+/g, '')}`} className="text-asf-gold-dark font-semibold block hover:underline">
                  {current.phone}
                </a>
                <a href={`mailto:${current.email}`} className="text-athletic-500 block hover:underline">
                  {current.email}
                </a>
              </div>
            </div>

            <div>
              <strong className="block text-athletic-950 font-semibold mb-1">Hours:</strong>
              <p className="text-athletic-600 text-[11px] leading-relaxed">{current.hours}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
