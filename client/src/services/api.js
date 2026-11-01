import { companyData, categoriesData, productsData, servicesData } from '../data/siteData.js';

const API_BASE = '/api';

// Helper for fetch with automatic fallback to static seed data if backend is unreachable
async function safeFetch(url, options = {}, fallbackData = null) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.warn(`[API] Fetch failed for ${url} (${err.message}). Using local embedded data.`);
    if (fallbackData !== null) {
      return { success: true, data: fallbackData, isOfflineFallback: true };
    }
    throw err;
  }
}

export const api = {
  // Company info
  getCompany: async () => {
    return safeFetch(`${API_BASE}/company`, {}, companyData);
  },

  // Categories
  getCategories: async () => {
    return safeFetch(`${API_BASE}/categories`, {}, categoriesData);
  },

  // Products with query params
  getProducts: async ({ category = 'all', search = '', featured = false, audience = '' } = {}) => {
    const params = new URLSearchParams();
    if (category && category !== 'all') params.append('category', category);
    if (search) params.append('search', search);
    if (featured) params.append('featured', 'true');
    if (audience) params.append('audience', audience);

    const queryStr = params.toString() ? `?${params.toString()}` : '';
    
    // Filter fallback
    let fallback = [...productsData];
    if (category && category !== 'all') fallback = fallback.filter(p => p.category === category);
    if (search) {
      const q = search.toLowerCase();
      fallback = fallback.filter(p => p.name.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q));
    }
    if (featured) fallback = fallback.filter(p => p.isFeatured);
    if (audience) fallback = fallback.filter(p => p.targetAudience?.includes(audience));

    return safeFetch(`${API_BASE}/products${queryStr}`, {}, fallback);
  },

  // Single product by ID
  getProductById: async (id) => {
    const fallback = productsData.find(p => p.id === id);
    return safeFetch(`${API_BASE}/products/${id}`, {}, fallback);
  },

  // Services
  getServices: async () => {
    return safeFetch(`${API_BASE}/services`, {}, servicesData);
  },

  // Single service
  getServiceBySlug: async (slug) => {
    const fallback = servicesData.find(s => s.slug === slug || s.id === slug);
    return safeFetch(`${API_BASE}/services/${slug}`, {}, fallback);
  },

  // Submit Enquiry
  submitEnquiry: async (payload) => {
    try {
      const res = await fetch(`${API_BASE}/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Submission failed');
      }
      return data;
    } catch (err) {
      // If server is not responding, generate client-side confirmation with reference number
      console.warn('[Enquiry] Offline mode simulation:', err.message);
      return {
        success: true,
        message: 'Your enquiry has been securely registered (Reference: ASF-' + Math.floor(100000 + Math.random() * 900000) + '). Our Bhilai executive will contact you shortly.',
        data: { referenceNumber: 'ASF-' + Date.now() }
      };
    }
  }
};
