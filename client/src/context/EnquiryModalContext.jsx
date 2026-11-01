import React, { createContext, useContext, useState, useCallback } from 'react';

const EnquiryModalContext = createContext(null);

export const EnquiryModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    title: 'Request a Quote / Consultation',
    subtitle: 'Connect directly with our equipment and gym planning specialists in Bhilai.',
    enquiryType: 'general',
    product: null,
    spaceDetails: null,
    service: null
  });

  const openEnquiryModal = useCallback((config = {}) => {
    setModalConfig({
      title: config.title || 'Request a Quote / Consultation',
      subtitle: config.subtitle || 'Connect directly with our equipment and gym planning specialists in Bhilai.',
      enquiryType: config.enquiryType || 'general',
      product: config.product || null,
      spaceDetails: config.spaceDetails || null,
      service: config.service || null
    });
    setIsOpen(true);
  }, []);

  const closeEnquiryModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <EnquiryModalContext.Provider value={{ isOpen, modalConfig, openEnquiryModal, closeEnquiryModal }}>
      {children}
    </EnquiryModalContext.Provider>
  );
};

export const useEnquiryModal = () => {
  const context = useContext(EnquiryModalContext);
  if (!context) {
    throw new Error('useEnquiryModal must be used within an EnquiryModalProvider');
  }
  return context;
};
