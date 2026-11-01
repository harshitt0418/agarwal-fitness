import React, { useState } from 'react';
import { Award, TrendingUp, ShieldCheck, Truck, Users, CheckCircle2, ArrowRight, Send, Phone } from 'lucide-react';
import { api } from '../services/api';
import { useToast } from '../context/ToastContext';

export const DealershipPage = () => {
  const { addToast } = useToast();
  const [partnerType, setPartnerType] = useState('dealership');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    existingBusiness: '',
    commercialSpaceSqFt: '',
    investmentBudget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await api.submitEnquiry({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: `${formData.city}, ${formData.state}`,
        enquiryType: partnerType,
        message: `Partner Model: ${partnerType.toUpperCase()} | Existing Business: ${formData.existingBusiness || 'None'} | Showroom Space: ${formData.commercialSpaceSqFt || 'N/A'} sq.ft. | Investment: ${formData.investmentBudget || 'N/A'} | Notes: ${formData.message}`
      });

      if (res.success) {
        setSubmittedRef(res.data?.referenceNumber || 'ASF-PARTNER');
        addToast({
          type: 'success',
          title: 'Partner Application Received',
          message: 'Our corporate expansion team in Bhilai will evaluate your territory.'
        });
      }
    } catch (err) {
      setErrorMsg(err.message || 'Submission failed. Please call +91 88787 90000.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      title: "Extensive 9-Vertical Product Range",
      desc: "Instant access to commercial fitness machines, turf flooring, sports kits, court surfacing, trophies, and billiards gear under one wholesale umbrella."
    },
    {
      title: "High-Margin Business Model",
      desc: "Primary distributor wholesale pricing ensuring robust margins on equipment sales, turnkey setups, and institutional government supplies."
    },
    {
      title: "Territorial Exclusivity Options",
      desc: "Protected territorial rights for qualified franchise partners in emerging Tier-1, Tier-2, and district sporting hubs across India."
    },
    {
      title: "End-to-End Setup & Showroom Design",
      desc: "Our architectural team provides showroom layouts, display racks, merchandising guidelines, and staff product training."
    },
    {
      title: "Fast Pan-India Logistics",
      desc: "Streamlined dispatch from central warehousing in Bhilai with containerized transit, insurance, and transit safety protocols."
    },
    {
      title: "Marketing & Institutional Tender Leads",
      desc: "ASF shares regional institutional tender leads and school procurement opportunities with authorized regional partners."
    }
  ];

  return (
    <div className="bg-athletic-50 min-h-screen py-10">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-athletic-950 text-white rounded-2xl p-8 sm:p-12 border border-athletic-800 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-asf-gold block mb-2">
              Pan-India Network Expansion
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
              Dealership & Franchise Opportunities
            </h1>
            <p className="text-sm text-athletic-300 mt-3 leading-relaxed">
              Partner with Agrawal Sports and Fitness—an established 45-year market leader. Grow a profitable sports equipment and turnkey gym setup business backed by trusted inventory and nationwide reputation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Value Proposition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((b, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-athletic-200 shadow-subtle hover:border-athletic-400 transition">
              <div className="w-9 h-9 rounded-lg bg-athletic-950 text-asf-gold flex items-center justify-center font-bold text-sm mb-4">
                0{idx + 1}
              </div>
              <h3 className="font-display font-bold text-lg uppercase text-athletic-950 tracking-tight">
                {b.title}
              </h3>
              <p className="text-xs text-athletic-600 leading-relaxed mt-2">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Application Form & Details */}
        <div className="bg-white rounded-2xl border border-athletic-200 shadow-elevated p-8 sm:p-12 max-w-4xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-asf-gold-dark">
              Partner Onboarding Application
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-tight text-athletic-950 mt-1">
              Apply to Become an Authorized ASF Partner
            </h2>
            <p className="text-xs sm:text-sm text-athletic-600 mt-2">
              Select whether you are interested in a Dealership distribution model or an exclusive ASF Retail Franchise.
            </p>
          </div>

          {/* Model Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-athletic-100 p-1 rounded-lg border border-athletic-200">
              <button
                type="button"
                onClick={() => setPartnerType('dealership')}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition ${
                  partnerType === 'dealership'
                    ? 'bg-athletic-950 text-white shadow-sm'
                    : 'text-athletic-600 hover:text-athletic-950'
                }`}
              >
                Dealership / Wholesale Supply
              </button>
              <button
                type="button"
                onClick={() => setPartnerType('franchise')}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition ${
                  partnerType === 'franchise'
                    ? 'bg-athletic-950 text-white shadow-sm'
                    : 'text-athletic-600 hover:text-athletic-950'
                }`}
              >
                Exclusive Retail Franchise
              </button>
            </div>
          </div>

          {submittedRef ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-4 ring-emerald-50">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display uppercase text-athletic-950">
                Partner Application Submitted!
              </h3>
              <p className="text-sm text-athletic-600 max-w-md mx-auto">
                Thank you, <strong className="text-athletic-950">{formData.name}</strong>. Application Reference: <span className="font-mono font-bold text-athletic-900 bg-athletic-100 px-2 py-0.5 rounded">{submittedRef}</span>. Our corporate business development director in Bhilai will review your territory and contact you at <strong className="text-athletic-950">{formData.phone}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 text-xs bg-red-50 text-red-700 rounded-md border border-red-200">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                    Applicant Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name / Proprietor"
                    required
                    className="w-full px-3 py-2.5 text-sm border border-athletic-300 rounded-md focus:border-asf-gold outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 Contact Number"
                    required
                    className="w-full px-3 py-2.5 text-sm border border-athletic-300 rounded-md focus:border-asf-gold outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@business.com"
                    className="w-full px-3 py-2.5 text-sm border border-athletic-300 rounded-md focus:border-asf-gold outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                    Proposed City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Raipur / Nagpur"
                    className="w-full px-3 py-2.5 text-sm border border-athletic-300 rounded-md focus:border-asf-gold outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="e.g. Chhattisgarh / MP"
                    className="w-full px-3 py-2.5 text-sm border border-athletic-300 rounded-md focus:border-asf-gold outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                    Commercial Space (Sq.Ft)
                  </label>
                  <input
                    type="text"
                    name="commercialSpaceSqFt"
                    value={formData.commercialSpaceSqFt}
                    onChange={handleChange}
                    placeholder="e.g. 1000 - 2500 sqft"
                    className="w-full px-3 py-2.5 text-sm border border-athletic-300 rounded-md focus:border-asf-gold outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                    Existing Business (if any)
                  </label>
                  <input
                    type="text"
                    name="existingBusiness"
                    value={formData.existingBusiness}
                    onChange={handleChange}
                    placeholder="e.g. Retail, Fitness, New Venture"
                    className="w-full px-3 py-2.5 text-sm border border-athletic-300 rounded-md focus:border-asf-gold outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                    Investment Capital Range
                  </label>
                  <select
                    name="investmentBudget"
                    value={formData.investmentBudget}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-sm border border-athletic-300 rounded-md focus:border-asf-gold outline-none bg-white"
                  >
                    <option value="">Select Range</option>
                    <option value="10L - 25L">₹10 Lakhs - ₹25 Lakhs</option>
                    <option value="25L - 50L">₹25 Lakhs - ₹50 Lakhs</option>
                    <option value="50L - 1Cr">₹50 Lakhs - ₹1 Crore</option>
                    <option value="1Cr+">₹1 Crore +</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                  Additional Background or Territory Information
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Provide any details about your location, local sports market, or questions..."
                  className="w-full px-3 py-2.5 text-sm border border-athletic-300 rounded-md focus:border-asf-gold outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-athletic-100">
                <div className="flex items-center text-xs text-athletic-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1.5 flex-shrink-0" />
                  <span>Confidential territory evaluation from ASF Bhilai executive office.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary text-xs w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    'Submitting Application...'
                  ) : (
                    <span className="flex items-center">
                      <Send className="w-3.5 h-3.5 mr-1.5" />
                      Submit Partnership Application
                    </span>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>

      </div>

    </div>
  );
};
