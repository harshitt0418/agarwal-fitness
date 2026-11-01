import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categoriesData } from '../../data/siteData.js';
import { useEnquiryModal } from '../../context/EnquiryModalContext';
import { ScrollReveal } from '../common/ScrollReveal';
import { LazyImage } from '../common/LazyImage';

export const CategoryExplorer = () => {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <section className="py-14 sm:py-18 bg-athletic-50 border-b border-athletic-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Section Header */}
        <ScrollReveal direction="up" delay={50}>
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-asf-gold-dark block">
                Equipment Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-tight text-athletic-950 mt-0.5">
                9 Specialized Verticals
              </h2>
            </div>

            <Link
              to="/products"
              className="text-xs font-semibold text-athletic-800 hover:text-asf-gold-dark transition flex items-center group"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Minimal 9-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categoriesData.map((category, idx) => (
            <ScrollReveal 
              key={category.id}
              direction="up"
              delay={(idx % 3) * 60}
              className="h-full"
            >
              <div className="group h-full bg-white rounded-lg border border-athletic-200 overflow-hidden shadow-xs hover:shadow-md hover:border-asf-gold transition-all duration-200 flex flex-col justify-between">
                
                {/* Photo Header */}
                <div className="relative h-44 bg-athletic-100 overflow-hidden">
                  <LazyImage
                    src={category.image}
                    alt={category.name}
                    wrapperClassName="w-full h-full"
                    className="group-hover:scale-105 transition-transform duration-500"
                    fallbackSrc="/assets/source_images/images_about-2-446x608.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-athletic-950/80 via-athletic-950/15 to-transparent pointer-events-none"></div>
                  
                  {/* Subtle item count badge */}
                  <div className="absolute top-2.5 right-2.5 bg-athletic-950/80 backdrop-blur text-white text-[9px] font-bold px-2 py-0.5 rounded tracking-wider uppercase border border-athletic-700">
                    {category.itemsCount} Items
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 pointer-events-none">
                    <h3 className="font-display font-bold text-base text-white uppercase tracking-tight leading-tight">
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Minimal Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-athletic-600 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="pt-2 border-t border-athletic-100 flex items-center justify-between text-xs">
                    <Link
                      to={`/products?category=${category.slug}`}
                      className="font-semibold text-athletic-900 group-hover:text-asf-gold-dark transition uppercase tracking-wider text-[11px]"
                    >
                      Browse Gear →
                    </Link>

                    <button
                      onClick={() => openEnquiryModal({
                        title: `Quote for ${category.name}`,
                        subtitle: 'Direct pricing from Agrawal Sports & Fitness Bhilai.',
                        enquiryType: 'equipment_quote',
                        product: { name: category.name, categoryName: category.name, image: category.image }
                      })}
                      className="text-[11px] font-medium text-athletic-400 hover:text-athletic-900 uppercase tracking-wider"
                    >
                      Quote
                    </button>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
