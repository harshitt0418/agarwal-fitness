# Agrawal Sports & Fitness (ASF) — Premium MERN Stack Web Platform

A complete, responsive, full-stack MERN application for **Agrawal Sports and Fitness (ASF)**, built using [agrawalsportsandfitness.com](https://www.agrawalsportsandfitness.com) as the strict source of truth.

> **Heritage & Company Identity**: Established in 1979 by Late Shri Subhash Chandra Agrawal in Bhilai, Chhattisgarh with a modest capital of ₹6,000. Expanded in 1997 by Managing Director Ashish Kumar Agrawal (introducing *Delhi Fitness World* to Chhattisgarh). Over 45+ years of verified industry leadership serving commercial gym owners, housing societies, schools, universities, defense/police academies, and government sports directorates nationwide.

---

## 🚀 Key Features

### 1. Interactive Gym Setup & Space Planner
- **Live Dynamic Engine**: Adjust floor area from 500 sq.ft. to 10,000+ sq.ft.
- **Facility Modes**: Commercial Gym Club, Residential Society Clubhouse, School/College Gym, Corporate Wellness, and Luxury Home Studio.
- **Instant Engineering Breakdown**: Calculates recommended commercial cardio units, selectorized strength stations, Olympic power cages, high-impact rubber flooring (sq.ft.), and functional turf sprint tracks.
- **1-Click 3D Blueprint & Turnkey Quote Request**: Directly transfers space parameters into the enquiry modal.

### 2. 9 Verified Equipment & Infrastructure Categories
Organized catalog with authentic photography, technical specifications, target audience tags, and quote request actions:
1. **Fitness Equipment (Indoor & Outdoor)** — Commercial AC treadmills, open-air park fitness machines, Olympic power racks, and custom gym setups.
2. **Sports Equipment (Indoor & Outdoor)** — Certified match cricket gear, football goalposts, ITTF table tennis kits, badminton sets, and IAAF athletics gear.
3. **Sports Mats & Gym Flooring** — High-impact vulcanized rubber rolls, interlocking EVA foam puzzle mats, and sprint turf tracks.
4. **Playground Courts (Indoor & Outdoor)** — Turnkey synthetic acrylic multi-layer courts for basketball, tennis, volleyball, and pickleball.
5. **Playground Equipment** — Child-safe multi-activity play stations, spiral slides, climbers, and heavy-duty swings.
6. **Sports Wears & Uniforms** — Custom sublimated team jerseys, warm-up tracksuits, and school PE kits.
7. **Sports Shoes** — Non-marking gum rubber court shoes, cricket/football studs, and weightlifting shoes.
8. **Prizes & Mementos** — Championship victory cups, cast metal medals, custom laser-engraved trophies, and corporate plaques.
9. **Billiards & Accessories** — Tournament slate snooker/pool tables, North American ash cues, Aramith balls, and leveling services.

### 3. Turnkey Solutions & GeM / Government Supply
- **4-Stage Project Workflow**: 01. Space Audit & Feasibility → 02. 2D/3D CAD Layout → 03. Direct Pan-India Freight & Installation → 04. Handover & AMC.
- **Government & Institutional Procurement**: Registered contractor for municipal corporations, defense bases, police academies, and educational institutions complying with tender benchmarks.

### 4. Verified Bhilai Showroom Centers
Interactive showroom directory with real operational information:
- **Sector-6 Main Showroom**: 168, “A” Market, Sector – 6, Bhilai Nagar, District–Durg, Chhattisgarh 490006
  - Phone: `+91 88787 90000` / `+91 96696 55517`
- **Risali Branch Showroom**: In front of SBI, Krishna Talkies Road, Ashish Nagar (West), Risali, Bhilai 490006
  - Phone: `+91 96696 55517` / `+91 88787 90000`
- Direct Google Maps routing links, 1-click phone dialers, and instant WhatsApp support.

### 5. Multi-Channel Enquiry & Quotation System
- Universal Modal & on-page consultation forms with client-side and server-side validation.
- Generates a unique tracking reference (e.g. `ENQ-...` / `ASF-...`).
- Dual storage engine: automatically saves to MongoDB when connected, and maintains resilient zero-dependency JSON persistence (`server/data/enquiries.json`) when operating in local/offline development.

---

## 🛠️ Architecture & Tech Stack

```
agarwal sports/
├── package.json              # Root scripts for running client & server concurrently
├── .env.example              # Master environment configuration template
├── README.md                 # Complete documentation and setup manual
│
├── server/                   # Node.js + Express Backend
│   ├── package.json
│   ├── .env.example
│   ├── data/                 # File persistence storage (enquiries.json)
│   └── src/
│       ├── config/           # Database connection & seed data
│       ├── models/           # Mongoose schemas (Enquiry, Product, Service)
│       ├── routes/           # REST endpoints (products, services, company, enquiry)
│       └── server.js         # Express app, Helmet, CORS, and static SPA delivery
│
└── client/                   # Vite + React 18 Frontend
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js    # Custom athletic palette & typography tokens
    ├── index.html
    ├── public/
    │   └── assets/           # Downloaded authentic source images & brand assets
    └── src/
        ├── components/       # Common, Home, and Navigation components
        ├── context/          # EnquiryModalContext & ToastContext
        ├── data/             # Self-contained verified site catalog
        ├── pages/            # Home, Products, Services, GymPlanner, Dealership, About, Contact
        └── services/         # API client with automatic fallback
```

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide React, React Router DOM v6.
- **Backend**: Node.js, Express, Helmet, CORS, Morgan, Mongoose / MongoDB with resilient fallback.
- **Design System**: Athletic precision theme with deep slate graphite (`#0B0F14`), stadium gold accents (`#F59E0B`), and crystal-clear editorial typography (`Plus Jakarta Sans` + `Barlow Condensed`).

---

## ⚡ Quick Start Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- *(Optional)* Local or MongoDB Atlas URI (if omitted, the system seamlessly uses embedded storage).

### 1. Install Dependencies
Run the install command from the root directory:
```bash
npm run install:all
```
*(Or install individually: `npm install`, `cd server && npm install`, `cd client && npm install`)*

### 2. Configure Environment Variables
Copy `.env.example` to `server/.env`:
```bash
cp .env.example server/.env
```
Default contents:
```env
PORT=5050
MONGODB_URI=mongodb://127.0.0.1:27017/agrawal_sports
NODE_ENV=development
```

### 3. Run in Development Mode
To launch both the Express backend and the Vite React frontend with hot reloading:
```bash
npm run dev
```
- **Frontend**: `http://localhost:5173`
- **Backend API**: `http://localhost:5050/api`

### 4. Run in Full-Stack Production Mode
To build the optimized client bundle and serve both the frontend and API through Express:
```bash
npm run build
npm start
```
- **Unified Full-Stack App**: `http://localhost:5050`

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health status and uptime |
| `GET` | `/api/company` | Complete company history, founder details, stats, showrooms |
| `GET` | `/api/company/showrooms` | Both Bhilai showroom locations, addresses, phone numbers |
| `GET` | `/api/categories` | 9 verified equipment categories with meta and item counts |
| `GET` | `/api/products` | Equipment catalog with query filters (`category`, `search`, `audience`) |
| `GET` | `/api/products/:id` | Single product specifications and related items |
| `GET` | `/api/services` | Turnkey services list, benefits, and execution workflows |
| `GET` | `/api/services/:slug` | Specific turnkey service details |
| `POST` | `/api/enquiry` | Validated lead capture for general, gym setup, quotes & dealership |
| `GET` | `/api/enquiry` | Administrative endpoint to view submitted enquiries |

---

## 🛡️ Content Integrity Notice
In accordance with design specifications:
- All founder information (Late Shri Subhash Chandra Agrawal, 1979, Dinod Haryana to Bhilai), executive leadership (Mr. Ashish Kumar Agrawal, 1997), and brand history (*Delhi Fitness World*) are verified facts from the original company records.
- Physical showroom addresses and phone numbers (`+91 88787 90000`, `+91 96696 55517`) are authentic.
- No client logos, certifications, or statistics have been fabricated.
