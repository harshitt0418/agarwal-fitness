import React, { useState } from 'react';
import { Send, Phone, CheckCircle, ShieldCheck } from 'lucide-react';
import { api } from '../../services/api';
import { useToast } from '../../context/ToastContext';
import { ScrollReveal } from '../common/ScrollReveal';

export const QuickEnquirySection = () => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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
      setErrorMsg('Please enter a valid phone number.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await api.submitEnquiry({
        name: formData.name,
        phone: formData.phone,
        city: formData.city,
        enquiryType: formData.enquiryType,
        message: formData.message
      });

      if (res.success) {
        setSubmittedRef(res.data?.referenceNumber || 'ASF-LOGGED');
        addToast({
          type: 'success',
          title: 'Consultation Request Sent',
          message: 'Our Bhilai engineering team will call you within 24 hours.'
        });
      }
    } catch (err) {
      setErrorMsg(err.message || 'Submission failed. Please call +91 88787 90000.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-14 sm:py-18 bg-athletic-100/70 border-b border-athletic-200 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal direction="zoom" delay={60}>
          <div className="bg-white rounded-xl shadow-sm border border-athletic-200 p-6 sm:p-8">
            
            <div className="text-center max-w-md mx-auto mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-asf-gold-dark block mb-0.5">
                Quick Enquiry
              </span>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold uppercase tracking-tight text-athletic-950">
                Start Your Equipment or Setup Enquiry
              </h2>
              <p className="text-xs text-athletic-500 mt-1">
                Leave your requirements and our Bhilai team will respond within 24 hours.
              </p>
            </div>

            {submittedRef ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display uppercase text-athletic-950">
                  Enquiry Logged!
                </h3>
                <p className="text-xs text-athletic-600 max-w-sm mx-auto">
                  Thank you, <strong className="text-athletic-950">{formData.name}</strong>. Reference ID: <span className="font-mono font-bold text-athletic-900 bg-athletic-100 px-1.5 py-0.5 rounded">{submittedRef}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedRef(null);
                    setFormData({ name: '', phone: '', city: '', enquiryType: 'general', message: '' });
                  }}
                  className="btn-outline text-xs mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {errorMsg && (
                  <div className="p-2.5 text-xs bg-red-50 text-red-700 rounded border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-3 py-2 text-xs border border-athletic-300 rounded focus:border-asf-gold outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 Phone"
                      required
                      className="w-full px-3 py-2 text-xs border border-athletic-300 rounded focus:border-asf-gold outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Bhilai, Raipur"
                      className="w-full px-3 py-2 text-xs border border-athletic-300 rounded focus:border-asf-gold outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                      Requirement
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs border border-athletic-300 rounded focus:border-asf-gold outline-none bg-white"
                    >
                      <option value="general">Sports & Fitness Equipment</option>
                      <option value="gym_setup">Turnkey Gym Setup</option>
                      <option value="equipment_quote">Bulk / Institutional Order</option>
                      <option value="court_infrastructure">Court Surfacing & Flooring</option>
                      <option value="dealership">Dealership / Franchise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-athletic-700 mb-1">
                      Space / Notes
                    </label>
                    <input
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Brief notes (e.g. 2000 sq ft society gym)"
                      className="w-full px-3 py-2 text-xs border border-athletic-300 rounded focus:border-asf-gold outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] text-athletic-400">
                    Direct response from ASF Bhilai. No spam.
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-xs py-2 px-4"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-3 h-3 mr-1" />
                        Submit
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
