import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, ArrowRight, FileText, CheckCircle2, X, Eye, ShieldCheck, Tag } from 'lucide-react';
import { productsData, categoriesData } from '../data/siteData.js';
import { useEnquiryModal } from '../context/EnquiryModalContext';
import { LazyImage } from '../components/common/LazyImage';
import { ScrollReveal } from '../components/common/ScrollReveal';

export const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAudience, setSelectedAudience] = useState('all');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const { openEnquiryModal } = useEnquiryModal();

  // Sync state if query param changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug);
    if (slug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);
  };

  // Audiences set
  const audiences = [
    'Commercial Gyms',
    'Schools & Colleges',
    'Housing Societies',
    'Public Parks',
    'Athletes',
    'Clubs & Resorts'
  ];

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return productsData.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.shortDesc.toLowerCase().includes(q) || item.description?.toLowerCase().includes(q);
        const matchesCat = item.categoryName.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }
      // Audience filter
      if (selectedAudience !== 'all') {
        if (!item.targetAudience || !item.targetAudience.includes(selectedAudience)) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery, selectedAudience]);

  const activeCategoryMeta = categoriesData.find(c => c.slug === selectedCategory);

  return (
    <div className="bg-athletic-50 min-h-screen py-10">
      
      {/* Top Banner / Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-athletic-950 text-white rounded-2xl p-8 sm:p-12 border border-athletic-800 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-asf-gold block mb-2">
              Pan-India Supply & Setup
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
              Equipment & Sports Hardware Catalog
            </h1>
            <p className="text-sm text-athletic-300 mt-3 leading-relaxed">
              Explore 9 certified verticals from commercial cardio and power racks to synthetic sports courts and championship billiards tables. Direct wholesale and institutional pricing from Bhilai headquarters.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl p-4 sm:p-6 border border-athletic-200 shadow-subtle mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-athletic-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search equipment, flooring, courts..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm border border-athletic-300 rounded-lg focus:border-asf-gold focus:ring-1 focus:ring-asf-gold outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-athletic-400 hover:text-athletic-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Audience Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
              <span className="text-xs font-bold uppercase text-athletic-500 whitespace-nowrap mr-1">
                For:
              </span>
              <button
                onClick={() => setSelectedAudience('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition ${
                  selectedAudience === 'all'
                    ? 'bg-athletic-900 text-white'
                    : 'bg-athletic-100 text-athletic-600 hover:bg-athletic-200'
                }`}
              >
                All Sectors
              </button>
              {audiences.map((aud) => (
                <button
                  key={aud}
                  onClick={() => setSelectedAudience(aud)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition ${
                    selectedAudience === aud
                      ? 'bg-athletic-900 text-white'
                      : 'bg-athletic-100 text-athletic-600 hover:bg-athletic-200'
                  }`}
                >
                  {aud}
                </button>
              ))}
            </div>

          </div>

          {/* Category Tabs Ribbon */}
          <div className="pt-2 border-t border-athletic-100 flex items-center space-x-2 overflow-x-auto pb-2">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-3.5 py-2 rounded-md text-xs font-bold uppercase tracking-wider whitespace-nowrap transition ${
                selectedCategory === 'all'
                  ? 'bg-asf-gold text-athletic-950 shadow-sm'
                  : 'bg-athletic-50 text-athletic-700 hover:bg-athletic-100'
              }`}
            >
              All Categories ({productsData.length})
            </button>
            {categoriesData.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-3.5 py-2 rounded-md text-xs font-bold uppercase tracking-wider whitespace-nowrap transition ${
                  selectedCategory === cat.slug
                    ? 'bg-asf-gold text-athletic-950 shadow-sm'
                    : 'bg-athletic-50 text-athletic-700 hover:bg-athletic-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category Description Banner if single category selected */}
        {activeCategoryMeta && (
          <div className="bg-white rounded-xl p-5 border border-athletic-200 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-subtle">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-asf-gold-dark block">
                Category Overview
              </span>
              <h2 className="font-display font-bold text-xl uppercase tracking-tight text-athletic-950">
                {activeCategoryMeta.name}
              </h2>
              <p className="text-xs text-athletic-600 mt-1 max-w-3xl">
                {activeCategoryMeta.description}
              </p>
            </div>
            <button
              onClick={() => openEnquiryModal({
                title: `Institutional Quote: ${activeCategoryMeta.name}`,
                subtitle: 'Direct pricing & volume order terms from Bhilai headquarters.',
                enquiryType: 'equipment_quote',
                product: { name: activeCategoryMeta.name, categoryName: activeCategoryMeta.name, image: activeCategoryMeta.image }
              })}
              className="btn-primary text-xs whitespace-nowrap flex-shrink-0"
            >
              Request Category Price Sheet
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-athletic-200">
            <h3 className="text-lg font-bold uppercase font-display text-athletic-800">No equipment found matching criteria</h3>
            <p className="text-xs text-athletic-500 mt-1">Try clearing your search query or selecting 'All Categories'.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setSelectedAudience('all'); }}
              className="btn-outline text-xs mt-4"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, idx) => (
              <ScrollReveal 
                key={product.id} 
                direction="up" 
                delay={(idx % 3) * 80}
                className="h-full"
              >
                <div className="h-full bg-white rounded-xl border border-athletic-200 overflow-hidden shadow-subtle hover:shadow-elevated hover:border-asf-gold transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1">
                  {/* Photo container with LazyImage */}
                  <div className="relative h-56 bg-athletic-100 overflow-hidden">
                    <LazyImage
                      src={product.image}
                      alt={product.name}
                      wrapperClassName="w-full h-full"
                      className="group-hover:scale-108 transition-transform duration-700 ease-out"
                      fallbackSrc="/assets/source_images/images_about-2-446x608.png"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-athletic-950/75 via-transparent to-transparent pointer-events-none"></div>

                    {/* Category Pill */}
                    <div className="absolute top-3 left-3 bg-athletic-950/80 backdrop-blur text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider border border-athletic-700">
                      {product.categoryName}
                    </div>

                    {product.isFeatured && (
                      <div className="absolute top-3 right-3 bg-asf-gold text-athletic-950 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                        Featured
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                      <h3 className="font-display font-bold text-lg text-white uppercase leading-tight drop-shadow-sm">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                {/* Content body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-athletic-600 leading-relaxed mb-4">
                      {product.shortDesc}
                    </p>

                    {/* Features list */}
                    {product.features && (
                      <ul className="space-y-1.5 mb-4 text-xs text-athletic-700">
                        {product.features.slice(0, 3).map((feat, idx) => (
                          <li key={idx} className="flex items-start space-x-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-asf-gold-dark flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Audience pills */}
                    {product.targetAudience && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.targetAudience.map((aud, i) => (
                          <span key={i} className="text-[10px] bg-athletic-100 text-athletic-600 px-2 py-0.5 rounded">
                            {aud}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="pt-3 border-t border-athletic-100 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalProduct(product)}
                      className="inline-flex items-center text-xs font-semibold text-athletic-700 hover:text-athletic-950 transition uppercase tracking-wider"
                    >
                      <Eye className="w-3.5 h-3.5 mr-1 text-athletic-500" />
                      <span>Details</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => openEnquiryModal({
                        title: `Quote for ${product.name}`,
                        subtitle: 'Direct pricing from Agrawal Sports & Fitness Bhilai.',
                        enquiryType: 'equipment_quote',
                        product: product
                      })}
                      className="btn-primary text-xs py-1.5 px-3"
                    >
                      <FileText className="w-3.5 h-3.5 mr-1" />
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
          </div>
        )}

      </div>

      {/* Product Details Quick View Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-athletic-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full border border-athletic-200 overflow-hidden transform transition-all">
            
            {/* Modal header */}
            <div className="bg-athletic-950 text-white px-6 py-4 flex items-center justify-between border-b border-athletic-800">
              <div>
                <span className="text-[10px] font-bold text-asf-gold uppercase tracking-wider">
                  {activeModalProduct.categoryName}
                </span>
                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mt-0.5">
                  {activeModalProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="text-athletic-400 hover:text-white rounded p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <div className="relative h-64 bg-athletic-100 rounded-lg overflow-hidden border border-athletic-200">
                <LazyImage
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  wrapperClassName="w-full h-full"
                />
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-athletic-400 mb-1">
                  Product Overview & Engineering Specifications
                </h4>
                <p className="text-sm text-athletic-700 leading-relaxed">
                  {activeModalProduct.description || activeModalProduct.shortDesc}
                </p>
              </div>

              {activeModalProduct.features && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-athletic-400 mb-2">
                    Verified Key Highlights
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-athletic-700">
                    {activeModalProduct.features.map((f, i) => (
                      <li key={i} className="flex items-start space-x-2 bg-athletic-50 p-2 rounded border border-athletic-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-asf-gold-dark flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-athletic-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center text-xs text-athletic-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1.5 flex-shrink-0" />
                  <span>Pan-India logistics, assembly & warranty support included.</span>
                </div>

                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveModalProduct(null)}
                    className="btn-outline text-xs flex-1 sm:flex-none"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const p = activeModalProduct;
                      setActiveModalProduct(null);
                      openEnquiryModal({
                        title: `Quote for ${p.name}`,
                        subtitle: 'Direct pricing from Agrawal Sports & Fitness Bhilai.',
                        enquiryType: 'equipment_quote',
                        product: p
                      });
                    }}
                    className="btn-primary text-xs flex-1 sm:flex-none"
                  >
                    Request Quote for this Item
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
