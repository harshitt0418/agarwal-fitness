import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { companyData, categoriesData, productsData, servicesData } from './seedData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '..', '..', 'data');
const enquiriesFilePath = path.join(dataDir, 'enquiries.json');

// Ensure data folder exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// In-memory runtime data cache
let enquiries = [];
if (fs.existsSync(enquiriesFilePath)) {
  try {
    const raw = fs.readFileSync(enquiriesFilePath, 'utf8');
    enquiries = JSON.parse(raw);
  } catch (err) {
    enquiries = [];
  }
}

export const Store = {
  getCompany: () => companyData,
  getCategories: () => categoriesData,
  getCategoryBySlug: (slug) => categoriesData.find(c => c.slug === slug || c.id === slug),
  
  getProducts: (filter = {}) => {
    let result = [...productsData];
    if (filter.category && filter.category !== 'all') {
      result = result.filter(p => p.category === filter.category);
    }
    if (filter.search) {
      const q = filter.search.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.shortDesc.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        (p.targetAudience && p.targetAudience.some(a => a.toLowerCase().includes(q)))
      );
    }
    if (filter.featured === 'true' || filter.featured === true) {
      result = result.filter(p => p.isFeatured);
    }
    if (filter.audience) {
      result = result.filter(p => p.targetAudience && p.targetAudience.includes(filter.audience));
    }
    return result;
  },

  getProductById: (id) => productsData.find(p => p.id === id),

  getServices: () => servicesData,
  getServiceBySlug: (slug) => servicesData.find(s => s.slug === slug || s.id === slug),

  createEnquiry: (enquiryData) => {
    const newEnquiry = {
      id: 'ENQ-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
      createdAt: new Date().toISOString(),
      status: 'pending',
      ...enquiryData
    };
    enquiries.unshift(newEnquiry);
    try {
      fs.writeFileSync(enquiriesFilePath, JSON.stringify(enquiries, null, 2), 'utf8');
    } catch (err) {
      console.error('Failed to write enquiries to disk:', err.message);
    }
    return newEnquiry;
  },

  getEnquiries: () => enquiries
};
