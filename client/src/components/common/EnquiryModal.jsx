import React, { useState, useEffect } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle, ShieldCheck } from 'lucide-react';
import { useEnquiryModal } from '../../context/EnquiryModalContext';
import { useToast } from '../../context/ToastContext';
import { api } from '../../services/api';

export const EnquiryModal = () => {
  const { isOpen, modalConfig, closeEnquiryModal } = useEnquiryModal();
  const { addToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    enquiryType: 'general',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync modalConfig into form
  useEffect(() => {
    if (isOpen) {
      setSubmittedData(null);
      setErrorMsg('');
      setFormData(prev => ({
        ...prev,
        enquiryType: modalConfig.enquiryType || 'general',
        message: modalConfig.product 
          ? `I am interested in receiving specifications and bulk/institutional quote for: ${modalConfig.product.name} (Category: ${modalConfig.product.categoryName}).`
          : modalConfig.spaceDetails
          ? `I would like a turnkey layout plan and quote for a ${modalConfig.spaceDetails.approxSqFt || 1500} sq.ft. ${modalConfig.spaceDetails.facilityType || 'Gym'} setup.`
          : modalConfig.service
          ? `I would like more information and consultation regarding: ${modalConfig.service.title}.`
          : ''
      }));
    }
  }, [isOpen, modalConfig]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setErrorMsg('Please enter a valid phone number (at least 8 digits).');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        state: formData.state,
        enquiryType: modalConfig.enquiryType || formData.enquiryType,
        interestedCategory: modalConfig.product?.categoryName || '',
        productId: modalConfig.product?.id || '',
        productName: modalConfig.product?.name || '',
        spaceDetails: modalConfig.spaceDetails || null,
        message: formData.message
      };

      const res = await api.submitEnquiry(payload);
      if (res.success) {
        setSubmittedData(res.data);
        addToast({
          type: 'success',
          title: 'Enquiry Received',
          message: 'Our Bhilai specialist will get in touch with you shortly.'
        });
      } else {
        throw new Error(res.message || 'Submission failed');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Failed to submit enquiry. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Agrawal Sports and Fitness, my name is ${formData.name || 'a visitor'}. ${formData.message || 'I would like to inquire about sports and gym equipment.'}`
    );
    window.open(`https://wa.me/918878790000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-athletic-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-xl shadow-2xl max-w-xl w-full border border-athletic-200 overflow-hidden transform transition-all duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Header bar */}
        <div className="bg-athletic-950 px-6 py-5 text-white flex items-start justify-between border-b border-athletic-800">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-asf-gold animate-pulse"></span>
              <span className="text-[11px] font-semibold tracking-wider text-asf-gold uppercase">Direct ASF Consultation</span>
            </div>
            <h3 id="modal-headline" className="text-xl font-bold font-display tracking-tight text-white mt-1">
              {modalConfig.title}
            </h3>
            <p className="text-xs text-athletic-400 mt-1">
              {modalConfig.subtitle}
            </p>
          </div>
          <button
            onClick={closeEnquiryModal}
            className="text-athletic-400 hover:text-white rounded-lg p-1.5 transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6">
          {submittedData ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/50">
                <CheckCircle className="w-9 h-9" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-athletic-900 font-display">Enquiry Successfully Logged!</h4>
                <p className="text-sm text-athletic-600 max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <span className="font-semibold text-athletic-900">{formData.name}</span>. Your enquiry reference ID is:
                </p>
                <div className="inline-block bg-athletic-100 text-athletic-900 font-mono text-sm px-4 py-1.5 rounded-md mt-2 font-bold tracking-wider">
                  {submittedData.referenceNumber || 'ASF-VERIFIED'}
                </div>
                <p className="text-xs text-athletic-500 mt-3">
                  Our regional setup and procurement team in Bhilai has received your specifications and will reach out via <span className="font-semibold">{formData.phone}</span>.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="inline-flex items-center justify-center px-4 py-2.5 bg-emerald-600 text-white rounded-md text-xs font-semibold uppercase tracking-wider hover:bg-emerald-700 transition"
                >
                  <MessageSquare className="w-4 h-4 mr-2" /> Connect on WhatsApp Now
                </button>
                <button
                  type="button"
                  onClick={closeEnquiryModal}
                  className="inline-flex items-center justify-center px-4 py-2.5 bg-athletic-100 text-athletic-800 rounded-md text-xs font-semibold uppercase tracking-wider hover:bg-athletic-200 transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product context banner if quote on specific item */}
              {modalConfig.product && (
                <div className="bg-athletic-50 border border-athletic-200 rounded-lg p-3 flex items-center space-x-3">
                  <img
                    src={modalConfig.product.image}
                    alt={modalConfig.product.name}
                    className="w-12 h-12 object-cover rounded bg-white border border-athletic-200 flex-shrink-0"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold text-asf-gold-dark uppercase tracking-wider block">Quotation Item</span>
                    <h5 className="text-xs font-semibold text-athletic-900 truncate">{modalConfig.product.name}</h5>
                    <span className="text-[11px] text-athletic-500">{modalConfig.product.categoryName}</span>
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="p-3 text-xs bg-red-50 border border-red-200 text-red-700 rounded-md">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Sharma"
                    required
                    className="w-full px-3 py-2 text-sm border border-athletic-300 rounded-md focus:border-asf-gold focus:ring-1 focus:ring-asf-gold outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                    Contact Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    required
                    className="w-full px-3 py-2 text-sm border border-athletic-300 rounded-md focus:border-asf-gold focus:ring-1 focus:ring-asf-gold outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. rajesh@example.com"
                    className="w-full px-3 py-2 text-sm border border-athletic-300 rounded-md focus:border-asf-gold focus:ring-1 focus:ring-asf-gold outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                    City / State
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Bhilai / Raipur / Pan-India"
                    className="w-full px-3 py-2 text-sm border border-athletic-300 rounded-md focus:border-asf-gold focus:ring-1 focus:ring-asf-gold outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                  Enquiry Details & Requirements
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your space size, equipment needs, or timeline..."
                  className="w-full px-3 py-2 text-sm border border-athletic-300 rounded-md focus:border-asf-gold focus:ring-1 focus:ring-asf-gold outline-none transition resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-athletic-100">
                <div className="flex items-center text-[11px] text-athletic-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1.5 flex-shrink-0" />
                  <span>100% Genuine ASF equipment & support. No spam.</span>
                </div>

                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    title="Send via WhatsApp directly"
                    className="p-2 border border-emerald-300 text-emerald-700 hover:bg-emerald-50 rounded-md transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex-1 sm:flex-none text-xs"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-athletic-950" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-3.5 h-3.5 mr-1.5" />
                        Submit Enquiry
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer showroom contact bar */}
        <div className="bg-athletic-50 px-6 py-3 border-t border-athletic-200 text-xs text-athletic-600 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <Phone className="w-3.5 h-3.5 text-asf-gold-dark" />
            <span>Direct Phone Helpline: <strong>+91 88787 90000</strong></span>
          </div>
          <span className="text-athletic-400 hidden sm:inline">|</span>
          <span>Showrooms in Sector-6 & Risali, Bhilai</span>
        </div>
      </div>
    </div>
  );
};
