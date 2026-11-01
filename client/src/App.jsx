import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { EnquiryModalProvider } from './context/EnquiryModalContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { EnquiryModal } from './components/common/EnquiryModal';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { GymPlannerPage } from './pages/GymPlannerPage';
import { DealershipPage } from './pages/DealershipPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top on navigation helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ToastProvider>
      <EnquiryModalProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-athletic-50 text-athletic-900 selection:bg-asf-gold selection:text-athletic-950">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/gym-planner" element={<GymPlannerPage />} />
                <Route path="/dealership" element={<DealershipPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                {/* Fallback */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
            <Footer />
            <EnquiryModal />
          </div>
        </Router>
      </EnquiryModalProvider>
    </ToastProvider>
  );
}
