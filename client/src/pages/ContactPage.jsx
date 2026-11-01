import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle2, Navigation, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/siteData.js';
import { api } from '../services/api';
import { useToast } from '../context/ToastContext';

export const ContactPage = () => {
  const { addToast } = useToast();
  const showrooms = companyData.showrooms;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    enquiryType: 'general',
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
      setErrorMsg('Please enter a valid phone number (at least 8 digits).');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await api.submitEnquiry(formData);
      if (res.success) {
        setSubmittedRef(res.data?.referenceNumber || 'ASF-CONTACT');
        addToast({
          type: 'success',
          title: 'Message Received',
          message: 'Our Bhilai showroom executive will get back to you shortly.'
        });
      }
    } catch (err) {
      setErrorMsg(err.message || 'Submission failed. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-athletic-50 min-h-screen py-10">
      
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-athletic-950 text-white rounded-2xl p-8 sm:p-12 border border-athletic-800 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-asf-gold block mb-2">
              Bhilai Headquarters & Showrooms
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
              Contact Agrawal Sports and Fitness
            </h1>
            <p className="text-sm text-athletic-300 mt-3 leading-relaxed">
              If you have any questions, just fill in the form or visit one of our physical showrooms in Bhilai. We provide nationwide supply, institutional quotation, and setup guidance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Showrooms Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {showrooms.map((sh) => (
            <div 
              key={sh.id}
              className="bg-white rounded-2xl border border-athletic-200 p-6 sm:p-8 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-asf-gold/20 text-asf-gold-dark border border-asf-gold/30">
                    {sh.isPrimary ? 'Main Showroom' : 'Branch Showroom'}
                  </span>
                  <span className="text-xs text-athletic-500 font-medium">Bhilai, Chhattisgarh</span>
                </div>

                <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight text-athletic-950">
                  {sh.name}
                </h3>

                <div className="mt-6 space-y-4 text-xs sm:text-sm text-athletic-700">
                  
                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded bg-athletic-50 text-asf-gold-dark flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-athletic-950 font-semibold mb-0.5">Physical Address:</strong>
                      <span className="text-athletic-600 leading-relaxed block">{sh.address}</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded bg-athletic-50 text-asf-gold-dark flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-athletic-950 font-semibold mb-0.5">Direct Helpline:</strong>
                      <div className="flex items-center space-x-2 font-mono">
                        <a href={`tel:${sh.phone.replace(/\s+/g, '')}`} className="text-asf-gold-dark font-bold hover:underline">
                          {sh.phone}
                        </a>
                        <span className="text-athletic-400">/</span>
                        <a href={`tel:${sh.altPhone.replace(/\s+/g, '')}`} className="text-athletic-700 hover:underline">
                          {sh.altPhone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded bg-athletic-50 text-asf-gold-dark flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-athletic-950 font-semibold mb-0.5">Email:</strong>
                      <a href={`mailto:${sh.email}`} className="text-athletic-700 hover:underline">
                        {sh.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded bg-athletic-50 text-asf-gold-dark flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-athletic-950 font-semibold mb-0.5">Operating Hours:</strong>
                      <span className="text-athletic-600 block">{sh.hours}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 pt-4 border-t border-athletic-100 flex flex-wrap gap-3">
                <a
                  href={`tel:${sh.phone.replace(/\s+/g, '')}`}
                  className="btn-primary text-xs"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5" />
                  Call Directly
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sh.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs flex items-center"
                >
                  <Navigation className="w-3.5 h-3.5 mr-1.5 text-asf-gold-dark" />
                  Get Google Maps Directions
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Contact & Consultation Form */}
        <div className="bg-white rounded-2xl border border-athletic-200 shadow-elevated p-8 sm:p-12 max-w-3xl mx-auto mb-16">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-asf-gold-dark">
              Online Consultation Form
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-tight text-athletic-950 mt-1">
              Send an Official Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-athletic-600 mt-2">
              Fill in your contact information and requirements. Our central team in Bhilai will review and respond within 24 business hours.
            </p>
          </div>

          {submittedRef ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-4 ring-emerald-50">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display uppercase text-athletic-950">
                Enquiry Successfully Logged!
              </h3>
              <p className="text-sm text-athletic-600 max-w-md mx-auto">
                Thank you, <strong className="text-athletic-950">{formData.name}</strong>. Your reference ID is <span className="font-mono font-bold bg-athletic-100 px-2 py-0.5 rounded">{submittedRef}</span>. Our technical consultant will call you at <strong className="text-athletic-950">{formData.phone}</strong>.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedRef(null);
                    setFormData({ name: '', phone: '', email: '', city: '', enquiryType: 'general', message: '' });
                  }}
                  className="btn-outline text-xs"
                >
                  Submit Another Message
                </button>
              </div>
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
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
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
                    placeholder="+91 Mobile Number"
                    required
                    className="w-full px-3 py-2.5 text-sm border border-athletic-300 rounded-md focus:border-asf-gold outline-none"
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
                    placeholder="name@example.com"
                    className="w-full px-3 py-2.5 text-sm border border-athletic-300 rounded-md focus:border-asf-gold outline-none"
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
                    placeholder="e.g. Raipur, Bhilai, Delhi"
                    className="w-full px-3 py-2.5 text-sm border border-athletic-300 rounded-md focus:border-asf-gold outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                  Enquiry Subject / Category
                </label>
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border border-athletic-300 rounded-md focus:border-asf-gold outline-none bg-white"
                >
                  <option value="general">General Sports & Fitness Inquiry</option>
                  <option value="gym_setup">Commercial / Society Gym Turnkey Planning</option>
                  <option value="equipment_quote">Bulk Equipment & Institutional Supply Quote</option>
                  <option value="court_infrastructure">Court Construction & Surfacing</option>
                  <option value="dealership">Dealership / Franchise Opportunity</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                  Your Message or Project Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your equipment needs, room dimensions, or any specific questions..."
                  className="w-full px-3 py-2.5 text-sm border border-athletic-300 rounded-md focus:border-asf-gold outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-athletic-100">
                <div className="flex items-center text-xs text-athletic-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1.5 flex-shrink-0" />
                  <span>Direct submission to ASF Bhilai central sales queue.</span>
                </div>

                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <a
                    href="https://wa.me/918878790000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 border border-emerald-300 text-emerald-700 hover:bg-emerald-50 rounded-md transition"
                    title="Direct WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-xs flex-1 sm:flex-none"
                  >
                    {isSubmitting ? (
                      'Sending Message...'
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-3.5 h-3.5 mr-1.5" />
                        Send Official Enquiry
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}

        </div>

      </div>

    </div>
  );
};
