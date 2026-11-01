export const companyData = {
  name: "Agrawal Sports and Fitness",
  shortName: "ASF",
  tagline: "Premier Sports, Fitness & Turnkey Infrastructure Since 1979",
  foundedYear: 1979,
  founder: "Late Shri Subhash Chandra Agrawal",
  leadership: "Ashish Kumar Agrawal (Managing Director)",
  history: "The foundation of Agrawal Sports and Fitness was laid in 1979 by Late Shri Subhash Chandra Agrawal, who was born in Dinod, Haryana and later settled in Bhilai, Madhya Pradesh (now Chhattisgarh). Starting modestly with a working capital of just six thousand rupees, the business grew through untiring dedication, integrity, and genuine customer care. In 1997, Mr. Ashish Kumar Agrawal joined the enterprise, directing company expansion and introducing modern fitness equipment to Chhattisgarh under the Delhi Fitness World brand. Over four and a half decades, ASF has grown into one of India's most respected retailers, wholesalers, government contractors, and turnkey sports facility partners.",
  stats: [
    { value: "45+", label: "Years of Heritage", description: "Serving athletes & institutions since 1979" },
    { value: "5,000+", label: "Completed Projects", description: "Gyms, schools, courts & academies" },
    { value: "9", label: "Specialized Verticals", description: "From fitness machines to court surfaces" },
    { value: "Pan-India", label: "Nationwide Reach", description: "Turnkey logistics, setup & after-sales service" }
  ],
  showrooms: [
    {
      id: "bhilai-sec6",
      name: "Sector-6 Main Showroom",
      address: "168, 'A' Market, Sector – 6, Bhilai Nagar, District–Durg, Chhattisgarh, India - 490006",
      phone: "+91 88787 90000",
      altPhone: "+91 96696 55517",
      email: "info@agrawalsports.com",
      hours: "Monday – Saturday: 10:00 AM – 9:00 PM | Sunday: 11:00 AM – 6:00 PM",
      mapQuery: "Agrawal Sports and Fitness 168 A Market Sector 6 Bhilai Nagar Chhattisgarh 490006",
      isPrimary: true
    },
    {
      id: "bhilai-risali",
      name: "Risali Branch Showroom",
      address: "In front of SBI, Krishna Talkies Road, Ashish Nagar (West), Risali, Bhilai, District- Durg, Chhattisgarh, India - 490006",
      phone: "+91 96696 55517",
      altPhone: "+91 88787 90000",
      email: "asfbhilai@gmail.com",
      hours: "Monday – Saturday: 10:00 AM – 8:30 PM | Sunday: Closed / By Appointment",
      mapQuery: "Krishna Talkies Road Ashish Nagar Risali Bhilai Chhattisgarh 490006",
      isPrimary: false
    }
  ],
  contact: {
    primaryPhone: "+91 88787 90000",
    secondaryPhone: "+91 96696 55517",
    emails: ["info@agrawalsports.com", "asfbhilai@gmail.com"],
    whatsapp: "+918878790000",
    hqAddress: "168, 'A' Market, Sector – 6, Bhilai Nagar, District–Durg, Chhattisgarh, India - 490006"
  }
};

export const categoriesData = [
  {
    id: "fitness-equipment",
    slug: "fitness-equipment",
    name: "Fitness Equipment (Indoor & Outdoor)",
    headline: "Commercial, Home & Open-Air Training Stations",
    description: "From heavy-duty commercial cardio and plate-loaded strength stations to durable open-air public park equipment and custom home setups.",
    image: "/assets/source_images/images_img_fitness-equipment_Indoor Fitness Equipment.avif",
    itemsCount: 18,
    audiences: ["Commercial Gyms", "Home Users", "Hotels & Clubs", "Public Parks", "Societies"]
  },
  {
    id: "sports-equipment",
    slug: "sports-equipment",
    name: "Sports Equipment (Indoor & Outdoor)",
    headline: "Trusted Gear for Every Game & Competitive Athlete",
    description: "Match-grade equipment for cricket, football, badminton, basketball, volleyball, athletics, and track disciplines certified for school, academy, and professional play.",
    image: "/assets/source_images/images_img_sports-equipment_Cricket Equipment 2.jpg",
    itemsCount: 24,
    audiences: ["Schools & Colleges", "Sports Academies", "Athletes", "Tournaments"]
  },
  {
    id: "gym-flooring",
    slug: "gym-flooring",
    name: "Sports Mats & Gym Flooring",
    headline: "High-Impact Shock Absorption, Grip & Injury Prevention",
    description: "Heavy-duty rubber rolls, interlocking EVA foam puzzle tiles, multi-purpose PVC vinyl sports floors, and UV-resistant sprint turf tracks.",
    image: "/assets/source_images/images_img_Sports-Mats-gym-flooring_Rubber Gym Flooring.jpeg",
    itemsCount: 14,
    audiences: ["Commercial Gyms", "Martial Arts Dojos", "Yoga Studios", "CrossFit Boxes"]
  },
  {
    id: "play-ground-courts",
    slug: "play-ground-courts",
    name: "Playground Courts (Indoor & Outdoor)",
    headline: "Turnkey Court Surfacing, Marking & Maintenance",
    description: "Professional synthetic acrylic courts, polyurethane indoor surfacing, and hardwood systems for basketball, badminton, tennis, volleyball, and pickleball.",
    image: "/assets/source_images/images_img_Play-Ground-Courts_Outdoor Sports Courts.jpeg",
    itemsCount: 12,
    audiences: ["Institutions", "Housing Societies", "Sports Complexes", "Clubs"]
  },
  {
    id: "play-ground-equipment",
    slug: "play-ground-equipment",
    name: "Playground Equipment",
    headline: "Safe, Fun & Built to Last Multi-Activity Stations",
    description: "Weather-resistant outdoor play systems, swings, see-saws, multi-level activity towers, and soft indoor play setups adhering to rigorous child-safety standards.",
    image: "/assets/source_images/images_img_play-ground-equipment_Multi-Activity Stations.jpeg",
    itemsCount: 16,
    audiences: ["Kindergartens", "Townships", "Public Parks", "Schools"]
  },
  {
    id: "sports-wear",
    slug: "sports-wear",
    name: "Sports Wears & Uniforms",
    headline: "Performance Fabric, Moisture Wicking & Team Customization",
    description: "Custom sublimated team jerseys, tracksuits, PE uniforms, dry-fit training tees, and competition swimwear with in-house branding and embroidery.",
    image: "/assets/source_images/images_img_Sports-Wears_Tracksuits & Warm-Ups.jpeg",
    itemsCount: 15,
    audiences: ["Sports Teams", "Schools", "Corporate Leagues", "Fitness Enthusiasts"]
  },
  {
    id: "sports-shoe",
    slug: "sports-shoe",
    name: "Sports Shoes",
    headline: "Engineered Footwear for Traction, Agility & Longevity",
    description: "Non-marking indoor court shoes, football & cricket studs, high-mileage running footwear, and zero-drop gym lifting shoes.",
    image: "/assets/source_images/images_img_sports-shoes_Indoor Court Shoes.jpeg",
    itemsCount: 11,
    audiences: ["Badminton Players", "Runners", "Footballers", "Weightlifters"]
  },
  {
    id: "prizes-mementos",
    slug: "prizes-mementos",
    name: "Prizes & Mementos",
    headline: "Distinctive Trophies, Medals & Corporate Accolades",
    description: "Championship trophies, cast metal medals with custom ribbons, wooden and acrylic plaques, and precision laser engraving for tournaments and annual days.",
    image: "/assets/source_images/images_img_Prizes-Mementos_Trophies for Sports Events.jpeg",
    itemsCount: 19,
    audiences: ["Tournament Organizers", "Corporates", "Schools & Universities"]
  },
  {
    id: "billiards",
    slug: "billiards",
    name: "Billiards & Accessories",
    headline: "Championship Slate Tables, Precision Cues & Maintenance",
    description: "Precision-ground slate snooker and pool tables, North American ash cues, tournament Aramith ball sets, Strachan cloth, and expert leveling services.",
    image: "/assets/source_images/images_img_Billiards-Accessories_Why Choose Agarwal for Billiards & Accessories.avif",
    itemsCount: 10,
    audiences: ["Clubs", "Hotels & Resorts", "Private Game Rooms", "Billiards Parlors"]
  }
];

export const productsData = [
  // FITNESS EQUIPMENT
  {
    id: "fit-001",
    name: "Heavy-Duty Commercial Treadmills & Cardio Series",
    category: "fitness-equipment",
    categoryName: "Fitness Equipment",
    shortDesc: "AC motor commercial treadmills built for continuous 18+ hour daily operations in commercial facilities and elite gyms.",
    description: "Engineered with a heavy-duty reinforced steel chassis, precision incline motors, and multi-layer shock absorption decks to reduce knee strain. Backed by ASF's genuine spare parts and technician support.",
    features: [
      "4.0 HP - 6.0 HP AC peak industrial motor",
      "Multi-window LED & touchscreen console options",
      "0 - 20 km/h speed with up to 18% motorized incline",
      "Double-ply orthopedic running belt with self-lubricating deck"
    ],
    targetAudience: ["Commercial Gyms", "Hotels", "Corporate Wellness"],
    image: "/assets/source_images/images_img_fitness-equipment_Indoor Fitness Equipment.avif",
    requiresQuote: true,
    isFeatured: true
  },
  {
    id: "fit-002",
    name: "Outdoor Fitness & Open-Air Gym Equipment",
    category: "fitness-equipment",
    categoryName: "Fitness Equipment",
    shortDesc: "Weatherproof galvanised steel workout machines designed for public parks, housing societies, and defense installations.",
    description: "ASF supplies and installs certified outdoor fitness stations including air walkers, double chest presses, seated rowers, and multi-user waist twisters built to withstand heavy public use and extreme Indian weather conditions.",
    features: [
      "Hot-dip galvanized heavy-gauge GI pipes with anti-rust powder coating",
      "Sealed industrial bearings requiring zero periodic lubrication",
      "Tamper-proof fasteners and secure concrete sub-surface anchoring",
      "Biomechanical movement suited for all age groups from youth to seniors"
    ],
    targetAudience: ["Public Parks", "Housing Societies", "Municipal Bodies", "Defense Camps"],
    image: "/assets/source_images/images_img_fitness-equipment_Outdoor Fitness Equipment.jpg",
    requiresQuote: true,
    isFeatured: true
  },
  {
    id: "fit-003",
    name: "Strength & Conditioning Power Racks & Plate-Loaded Series",
    category: "fitness-equipment",
    categoryName: "Fitness Equipment",
    shortDesc: "Commercial grade Olympic power cages, Smith machines, dual-action cable cross-overs, and isolation strength units.",
    description: "Heavy structural steel tubing (3mm wall thickness) with laser-cut hole numbering, UHMW plastic j-cups, safety spotter arms, and multi-grip pullup bars.",
    features: [
      "Commercial 11-gauge steel uprights (75mm x 75mm)",
      "Electrostatically applied thermoset powder finish",
      "High-tensile aircraft quality cables (rated 2,000 lbs)",
      "Compatible with band pegs, dip horns, and landmine attachments"
    ],
    targetAudience: ["Commercial Gyms", "Powerlifting Clubs", "Home Studios"],
    image: "/assets/source_images/images_img_fitness-equipment_Strength & Conditioning Tools.jpg",
    requiresQuote: true,
    isFeatured: true
  },
  {
    id: "fit-004",
    name: "Custom Commercial & Society Gym Turnkey Packages",
    category: "fitness-equipment",
    categoryName: "Fitness Equipment",
    shortDesc: "Tailored equipment packages complete with 2D/3D space layout, flooring, mirrors, and equipment balance.",
    description: "ASF analyzes your exact square footage, target member demographics, and budget to design and outfit a balanced gym facility from start to finish.",
    features: [
      "Custom space planning and 3D architectural floorplan",
      "Balanced ratio of cardio, selectorized strength, and functional equipment",
      "Integrated rubber flooring and acoustic dampening",
      "Delivery, installation, staff training, and AMC included"
    ],
    targetAudience: ["Housing Societies", "Commercial Gym Owners", "Schools", "Clubs"],
    image: "/assets/source_images/images_img_fitness-equipment_Custom Gym Setups.webp",
    requiresQuote: true,
    isFeatured: true
  },

  // SPORTS EQUIPMENT
  {
    id: "spt-001",
    name: "Tournament Grade Cricket Equipment & Practice Nets",
    category: "sports-equipment",
    categoryName: "Sports Equipment",
    shortDesc: "Certified English willow & Kashmir willow bats, leather match balls, protective pads, helmets, and full practice net setups.",
    description: "ASF provides professional cricket gear trusted by academies, state tournaments, and district clubs. Includes custom turf pitch net enclosures with heavy-duty UV-treated twine.",
    features: [
      "Handcrafted Grade 1 & Grade 2 English Willow bats",
      "High-density foam protective batting pads and gloves",
      "Four-piece alum-tanned leather balls for multi-day and T20 fixtures",
      "Outdoor practice cage fabrication with GI pipe framing"
    ],
    targetAudience: ["Cricket Academies", "Schools", "Sports Clubs"],
    image: "/assets/source_images/images_img_sports-equipment_Cricket Equipment 2.jpg",
    requiresQuote: true,
    isFeatured: true
  },
  {
    id: "spt-002",
    name: "Football & Futsal Match Gear & Goalpost Systems",
    category: "sports-equipment",
    categoryName: "Sports Equipment",
    shortDesc: "Standard full-size and futsal goalposts, tournament footballs, agility hurdles, speed ladders, and corner flags.",
    description: "Built for competitive match play and training drills. Suitable for grass pitches, artificial turf arenas, and indoor sports complexes.",
    features: [
      "FIFA-standard thermally bonded and hand-stitched balls",
      "Powder-coated tubular steel and aluminum regulation goalposts",
      "Braided knotless polyethylene netting with weather resistance",
      "Agility kits: slalom poles, reaction balls, coaching clipboards"
    ],
    targetAudience: ["Football Academies", "Colleges", "Turf Arena Operators"],
    image: "/assets/source_images/images_img_sports-equipment_Football & Futsal Gear.jpg",
    requiresQuote: true,
    isFeatured: false
  },
  {
    id: "spt-003",
    name: "Badminton & Table Tennis Tournament Kits",
    category: "sports-equipment",
    categoryName: "Sports Equipment",
    shortDesc: "ITTF-approved table tennis tables, high-modulus graphite badminton racquets, synthetic/goose feather shuttles, and court post sets.",
    description: "Complete equipment sets for individual players, tournament hosts, and school recreation centers.",
    features: [
      "25mm tournament TT tables with anti-glare tops and roller chassis",
      "Professional badminton posts with weighted base & tension ratchet",
      "Club and competition grade goose feather and nylon shuttlecocks",
      "Custom racquet stringing tools and tournament accessories"
    ],
    targetAudience: ["Badminton Centers", "Institutions", "Clubs"],
    image: "/assets/source_images/images_img_sports-equipment_Badminton & Table Tennis Kits.jpg",
    requiresQuote: true,
    isFeatured: false
  },
  {
    id: "spt-004",
    name: "Athletics & Track Field Equipment",
    category: "sports-equipment",
    categoryName: "Sports Equipment",
    shortDesc: "Competition-standard javelins, shot puts, discus, relay batons, high-jump landing foam beds, and starting blocks.",
    description: "Meets athletic federation dimensions and weight calibration for inter-school, collegiate, and national athletic meets.",
    features: [
      "IAAF standard aluminum track hurdles with counter-weights",
      "Turned iron and brass shot puts with precision weight tolerances",
      "High-density layered foam landing beds with weatherproof covers",
      "Track starting blocks with adjustable angle pedal settings"
    ],
    targetAudience: ["Schools & Universities", "State Sports Directorates", "Stadiums"],
    image: "/assets/source_images/images_img_sports-equipment_Athletics & Track Equipment.jpeg",
    requiresQuote: true,
    isFeatured: false
  },

  // FLOORING
  {
    id: "flr-001",
    name: "Heavy-Duty High-Impact Rubber Gym Flooring",
    category: "gym-flooring",
    categoryName: "Sports Mats & Gym Flooring",
    shortDesc: "Shock-absorbing vulcanized rubber rolls and 15mm-50mm interlocking acoustic rubber tiles for heavy free-weight zones.",
    description: "Protects concrete subfloors from heavy dumbbell and barbell drops while dampening vibration and acoustic noise in multi-story gym buildings.",
    features: [
      "High-density recycled SBR and EPDM rubber granules",
      "Non-porous, anti-bacterial, easy-to-clean textured surface",
      "Excellent shock absorption and sound deadening ratings",
      "Beveled edge borders and ramp transitions available"
    ],
    targetAudience: ["Commercial Gyms", "CrossFit Boxes", "Weightlifting Centers"],
    image: "/assets/source_images/images_img_Sports-Mats-gym-flooring_Rubber Gym Flooring.jpeg",
    requiresQuote: true,
    isFeatured: true
  },
  {
    id: "flr-002",
    name: "Interlocking EVA Foam Mats (Puzzle Mats)",
    category: "gym-flooring",
    categoryName: "Sports Mats & Gym Flooring",
    shortDesc: "Dual-color reversible EVA foam puzzle tiles in 20mm, 25mm, and 40mm thicknesses for martial arts, MMA, karate, and yoga.",
    description: "Non-slip straw/tatami texture providing optimal traction and fall impact protection. Lightweight, portable, and easily configurable.",
    features: [
      "High-density closed-cell EVA foam (non-toxic & odorless)",
      "Interlocking puzzle borders for rapid seamless installation",
      "Waterproof, moisture-resistant, and easily wipeable",
      "Available in Red/Blue, Black/Grey, and custom team shades"
    ],
    targetAudience: ["Martial Arts Academies", "Kindergartens", "Home Gyms"],
    image: "/assets/source_images/images_img_Sports-Mats-gym-flooring_Interlocking EVA Foam Mats.jpeg",
    requiresQuote: true,
    isFeatured: false
  },
  {
    id: "flr-003",
    name: "Artificial Turf Rolls & Agility Sled Tracks",
    category: "gym-flooring",
    categoryName: "Sports Mats & Gym Flooring",
    shortDesc: "High-density needle-punched synthetic turf rolls with yardage markings for sprint conditioning, sled pushing, and functional zones.",
    description: "Designed for high-friction sled work and athletic conditioning. Suitable for indoor functional gym spaces and outdoor multipurpose sports areas.",
    features: [
      "10mm - 20mm pile height UV-stabilized monofilament yarn",
      "Integrated distance meter numbers and track guide lines",
      "Heavy latex backing preventing turf shifting under sled loads",
      "Low maintenance with zero infill required for indoor setups"
    ],
    targetAudience: ["Functional Fitness Centers", "Athletic Training Facilities"],
    image: "/assets/source_images/images_img_Sports-Mats-gym-flooring_Artificial Turf Rolls.jpeg",
    requiresQuote: true,
    isFeatured: false
  },

  // PLAYGROUND COURTS
  {
    id: "crt-001",
    name: "Synthetic Acrylic Outdoor Sports Courts",
    category: "play-ground-courts",
    categoryName: "Playground Courts",
    shortDesc: "Turnkey multi-layer acrylic sports surfaces for basketball, tennis, pickleball, and volleyball courts.",
    description: "ASF manages the complete court execution: asphalt/concrete base inspection, acrylic resurfacer, cushioned cushion coats, UV color topcoats, and FIBA/ITF regulation line markings.",
    features: [
      "5 to 8 layer all-weather 100% acrylic latex cushion system",
      "High UV resistance ensuring bright color retention under Indian sun",
      "Anti-glare textured finish for uniform ball bounce and player grip",
      "Turnkey civil construction, chain-link perimeter fencing, and LED floodlights"
    ],
    targetAudience: ["Schools", "Townships", "Clubs", "Government Sports Complexes"],
    image: "/assets/source_images/images_img_Play-Ground-Courts_Outdoor Sports Courts.jpeg",
    requiresQuote: true,
    isFeatured: true
  },
  {
    id: "crt-002",
    name: "Multi-Sport Court Infrastructure & Maintenance",
    category: "play-ground-courts",
    categoryName: "Playground Courts",
    shortDesc: "Space-optimized court solutions combining basketball, tennis, futsal, and badminton on a single high-durability surface.",
    description: "Ideal for schools and gated communities looking to maximize sports infrastructure within limited footprints.",
    features: [
      "Distinct multi-color game line layouts for seamless play",
      "Heavy-duty multi-purpose posts with easy height adjustments",
      "Periodic resurfacing, crack sealing, and line re-marking AMC services"
    ],
    targetAudience: ["Housing Societies", "Universities", "Municipal Grounds"],
    image: "/assets/source_images/images_img_Play-Ground-Courts_Multi-Sport Court Solutions.jpeg",
    requiresQuote: true,
    isFeatured: false
  },

  // PLAYGROUND EQUIPMENT
  {
    id: "ply-001",
    name: "Multi-Activity Outdoor Play Stations & Towers",
    category: "play-ground-equipment",
    categoryName: "Playground Equipment",
    shortDesc: "Integrated playground systems with spiral slides, wave slides, rope suspension bridges, and climbing walls.",
    description: "Designed for safe motor-skill development and joyful active recreation in schools, municipal gardens, and housing societies.",
    features: [
      "Food-grade LLDPE rotational molded plastics (UV resistant)",
      "Heavy-gauge GI pipe structural frames with anti-static finish",
      "Zero sharp edges, concealed hardware, and anti-slip platform decks",
      "Conforms to international safety clearance zone standards"
    ],
    targetAudience: ["Primary Schools", "Residential Townships", "Public Parks"],
    image: "/assets/source_images/images_img_play-ground-equipment_Multi-Activity Stations.jpeg",
    requiresQuote: true,
    isFeatured: true
  },
  {
    id: "ply-002",
    name: "Heavy-Duty Swings, See-Saws & Climbers",
    category: "play-ground-equipment",
    categoryName: "Playground Equipment",
    shortDesc: "Traditional playground equipment engineered with commercial-grade safety bearings, stainless steel chains, and cushioned tire stops.",
    description: "Built for decades of safe, high-traffic use by children across varied age groups.",
    features: [
      "Rubber coated anti-pinch swing chains and ergonomic cradle seats",
      "Oil-impregnated bronze bushings for quiet, frictionless swinging",
      "Heavy-duty tubular steel chassis anchored with concrete footing"
    ],
    targetAudience: ["Parks", "Housing Societies", "Daycares"],
    image: "/assets/source_images/images_img_play-ground-equipment_Climbers & Ladders.jpeg",
    requiresQuote: true,
    isFeatured: false
  },

  // SPORTS WEARS
  {
    id: "wer-001",
    name: "Custom Sublimated Team Jerseys & Uniforms",
    category: "sports-wear",
    categoryName: "Sports Wears & Uniforms",
    shortDesc: "Full-coverage sublimation printed team jerseys with numbers, player names, team crests, and sponsor logos.",
    description: "High-grade dry-fit polyester fabric that keeps athletes cool and dry during intense matches. Non-fading, breathable print technology.",
    features: [
      "160 - 220 GSM breathable micro-polyester dry-fit mesh",
      "Vibrant sublimation dyes that never crack, peel, or fade",
      "Custom collars (round neck, polo, V-neck, chinese collar)",
      "Available for cricket, football, basketball, and corporate meets"
    ],
    targetAudience: ["Sports Teams", "Schools", "Corporate Leagues"],
    image: "/assets/source_images/images_img_Sports-Wears_Team Jerseys & Uniforms 2.jpeg",
    requiresQuote: true,
    isFeatured: true
  },
  {
    id: "wer-002",
    name: "Athletic Team Tracksuits & Warm-Up Jackets",
    category: "sports-wear",
    categoryName: "Sports Wears & Uniforms",
    shortDesc: "Premium warm-up tracksuits with zip jackets and tapered track pants for school contingents and traveling athletic squads.",
    description: "Wind-resistant, thermal-regulating sports fabrics tailored with team crest embroidery and durable YKK zippers.",
    features: [
      "Micro-peach and poly-spandex blend fabrics",
      "Moisture-wicking inner mesh lining",
      "Secure zippered pockets and elasticated cuffs",
      "Available in bulk with custom school / club colorways"
    ],
    targetAudience: ["Schools", "State Contingents", "Gym Staff"],
    image: "/assets/source_images/images_img_Sports-Wears_Tracksuits & Warm-Ups.jpeg",
    requiresQuote: true,
    isFeatured: false
  },

  // SPORTS SHOES
  {
    id: "sho-001",
    name: "Non-Marking Indoor Court Sports Shoes",
    category: "sports-shoe",
    categoryName: "Sports Shoes",
    shortDesc: "Gum rubber sole shoes engineered for badminton, squash, and indoor wooden/synthetic court sports.",
    description: "Provides maximum lateral stability and floor grip without leaving scuff marks on premium court surfaces.",
    features: [
      "100% natural gum rubber non-marking tread pattern",
      "Reinforced TPU shank preventing midfoot torsion during rapid lunges",
      "Shock-absorbing EVA midsole reducing heel impact",
      "Breathable engineered mesh upper with protective synthetic overlays"
    ],
    targetAudience: ["Badminton Players", "Squash Athletes", "Institutions"],
    image: "/assets/source_images/images_img_sports-shoes_Indoor Court Shoes.jpeg",
    requiresQuote: true,
    isFeatured: true
  },
  {
    id: "sho-002",
    name: "Cricket & Football Studs (Molded & Spikes)",
    category: "sports-shoe",
    categoryName: "Sports Shoes",
    shortDesc: "High-traction spiked and molded footwear for grass outfields, turf wickets, and firm ground football matches.",
    description: "Built for rigorous match play, offering optimal grip during sprints, bowling deliveries, and quick directional cuts.",
    features: [
      "Durable TPU outsole with strategic stud configuration",
      "Padded collar and tongue for ankle comfort",
      "Reinforced toe cap protecting against ball impact"
    ],
    targetAudience: ["Cricket Players", "Footballers", "Academies"],
    image: "/assets/source_images/images_img_sports-shoes_Cricket & Football Studs.jpeg",
    requiresQuote: true,
    isFeatured: false
  },

  // PRIZES & MEMENTOS
  {
    id: "prz-001",
    name: "Championship Sports Trophies & Victory Cups",
    category: "prizes-mementos",
    categoryName: "Prizes & Mementos",
    shortDesc: "High-finish metal, acrylic, and crystal trophies with custom laser-engraved brass plates for sports tournaments and honors.",
    description: "From grand 4-foot championship rolling cups to individual best batsman/bowler accolades. Complete with personalized branding.",
    features: [
      "Available in gold, silver, bronze, and high-gloss metallic finishes",
      "Weighted solid wooden, marble, or composite pedestal bases",
      "Custom laser-etched metal plates with tournament name & logo",
      "Bulk packaging ensuring zero damage in transit across India"
    ],
    targetAudience: ["Tournament Hosts", "Sports Federations", "Schools"],
    image: "/assets/source_images/images_img_Prizes-Mementos_Trophies for Sports Events.jpeg",
    requiresQuote: true,
    isFeatured: true
  },
  {
    id: "prz-002",
    name: "Die-Cast Custom Medals with Sublimated Lanyards",
    category: "prizes-mementos",
    categoryName: "Prizes & Mementos",
    shortDesc: "Heavyweight zinc alloy medals with 3D embossed event emblems, custom ribbon printing, and antique metal plating.",
    description: "Supplied for marathons, inter-school athletic meets, swimming competitions, and martial arts championships.",
    features: [
      "Custom 2D/3D die-casting with high relief detailing",
      "Plating options: Antique Gold, Antique Silver, Antique Bronze",
      "Full-color custom heat-transfer printed satin neck ribbons",
      "Fast turnaround for volume tournament orders"
    ],
    targetAudience: ["Marathons", "Tournaments", "School Annual Sports"],
    image: "/assets/source_images/images_img_Prizes-Mementos_Custom Medals 2.jpeg",
    requiresQuote: true,
    isFeatured: false
  },

  // BILLIARDS
  {
    id: "bil-001",
    name: "Tournament Slate Billiards & Snooker Tables",
    category: "billiards",
    categoryName: "Billiards & Accessories",
    shortDesc: "English snooker & American pool tables crafted with imported precision-ground slate beds and hand-carved solid hardwood framing.",
    description: "Engineered for tournament ball roll accuracy. ASF provides pan-India on-site slate leveling, cloth stretching, and installation.",
    features: [
      "Precision 5-piece Italian or diamond-honed 45mm slate bed",
      "Strachan 6811 tournament grade 100% pure wool green cloth",
      "Northern rubber cushions providing authentic tournament rebound",
      "Includes complete accessory set: Aramith balls, ash cues, brass rests, triangle"
    ],
    targetAudience: ["Clubs & Resorts", "Billiards Lounges", "Luxury Residences"],
    image: "/assets/source_images/images_img_Billiards-Accessories_Why Choose Agarwal for Billiards & Accessories.avif",
    requiresQuote: true,
    isFeatured: true
  }
];

export const servicesData = [
  {
    id: "gym-setups",
    slug: "gym-setups",
    title: "Turnkey Commercial & Home Gym Setups",
    shortDesc: "End-to-end gym design, layout planning, equipment sourcing, flooring installation, and after-sales maintenance across India.",
    description: "With over 45 years of domain leadership, Agrawal Sports & Fitness transforms raw commercial spaces and residential suites into high-performing fitness facilities. Our experienced team handles everything: space blueprints, bio-mechanically balanced equipment selection, heavy-duty rubber flooring, mirrors, installation, and certified AMC support.",
    benefits: [
      "Free 2D/3D layout design and equipment spacing blueprints",
      "Tiered equipment packages optimized for your specific budget & square footage",
      "Direct manufacturer distributor pricing on commercial cardio & strength lines",
      "Pan-India certified installation technicians & genuine spare parts inventory"
    ],
    process: [
      { step: "01", title: "Space Audit & Blueprint", desc: "We review your room dimensions, electrical layout, floor load capacity, and member demographics." },
      { step: "02", title: "3D Layout & Equipment Spec", desc: "Our designers produce an optimized layout ensuring safe user clearances and equipment flow." },
      { step: "03", title: "Supply & On-Site Installation", desc: "Complete equipment transit, rubber flooring fitment, assembly, and safety testing." },
      { step: "04", title: "Orientation & Ongoing AMC", desc: "Staff training, maintenance documentation, and scheduled preventive servicing." }
    ],
    image: "/assets/source_images/images_img_gym_tailored equipment packages.jpeg"
  },
  {
    id: "government-supply",
    slug: "government-supply",
    title: "Government & Institutional Supply",
    shortDesc: "Authorized vendor and turnkey project handler for defense academies, police forces, universities, municipal corporations, and GeM portals.",
    description: "Agrawal Sports and Fitness is a premier registered supplier for government and institutional sports infrastructure. From outfitting district stadiums and police training academies to supplying university athletic departments and public parks, ASF complies with rigorous tender guidelines, ISI/BIS specifications, and transparent procurement processes.",
    benefits: [
      "Experienced handling of state and central government tender specifications",
      "Strict compliance with institutional safety and durability benchmarks",
      "Direct logistics handling for large-scale multi-location deliveries",
      "Comprehensive warranty coverage and post-handover inspection support"
    ],
    process: [
      { step: "01", title: "Tender / RFQ Review", desc: "Detailed technical specification review and itemized transparent bidding." },
      { step: "02", title: "Sample Verification", desc: "Physical sample testing and compliance documentation submission." },
      { step: "03", title: "Bulk Dispatch", desc: "Carefully packaged containerized transit to institutional depots nationwide." },
      { step: "04", title: "Commissioning & Handover", desc: "On-site handover with institutional sports officers and inspection certificates." }
    ],
    image: "/assets/source_images/images_img_government-supply.jpeg"
  },
  {
    id: "courts-infrastructure",
    slug: "courts-infrastructure",
    title: "Court Construction & Playground Infrastructure",
    shortDesc: "Turnkey acrylic court surfacing, synthetic grass pitches, perimeter chain-link fencing, floodlighting, and multi-activity play zones.",
    description: "We deliver full-scale court infrastructure from bare ground to playable sanction-grade courts. Whether constructing an international-spec basketball court, multi-sport arena, or school playground, ASF combines civil engineering precision with premium sports surfacing materials.",
    benefits: [
      "All-weather 100% acrylic cushion systems with high UV color longevity",
      "Certified line markings compliant with FIBA, ITF, and BWF regulations",
      "Complete civil base preparation, drainage slopes, and LED sports illumination",
      "Safety-certified multi-activity playground towers and shock-absorbent fall surfaces"
    ],
    process: [
      { step: "01", title: "Site & Soil Survey", desc: "Slope assessment, drainage planning, and concrete/asphalt sub-base specification." },
      { step: "02", title: "Sub-Base & Fencing", desc: "Precision civil work, perimeter chain-link barriers, and floodlight masts." },
      { step: "03", title: "Surfacing & Line Marking", desc: "Multi-layer acrylic/PU cushion coatings applied with regulation game striping." },
      { step: "04", title: "Sanction Handover", desc: "Uniform bounce testing, friction verification, and court maintenance handover." }
    ],
    image: "/assets/source_images/images_img_Play-Ground-Courts_Outdoor Sports Courts.jpeg"
  },
  {
    id: "dealership-franchise",
    slug: "dealership-franchise",
    title: "Dealership & Franchise Opportunities",
    shortDesc: "Partner with an established 45-year sports and fitness brand. High-margin retail models, exclusive territory, and full business support.",
    description: "ASF has developed a robust nationwide network of dealers and franchise partners. We invite motivated entrepreneurs and retail businesses across India to leverage our brand reputation, wholesale supply chain, space design expertise, and comprehensive product portfolio.",
    benefits: [
      "Access to extensive product portfolio spanning 9 sports & fitness verticals",
      "Competitive wholesale pricing structures yielding healthy profit margins",
      "Territorial exclusivity options and direct marketing collateral support",
      "In-house technical training on gym setup planning and client consultation"
    ],
    process: [
      { step: "01", title: "Application & Profile", desc: "Submit your city, retail space size, and commercial background." },
      { step: "02", title: "Market Feasibility", desc: "ASF evaluates local demand, catchment area, and exclusive territory bounds." },
      { step: "03", title: "Store Layout & Stocking", desc: "Showroom design guidance, starter inventory curation, and ERP onboarding." },
      { step: "04", title: "Launch & Growth Support", desc: "Official launch, ongoing lead referrals, and regional supply backing." }
    ],
    image: "/assets/source_images/images_img_dealership_Wide Product Range.png"
  },
  {
    id: "bulk-custom-orders",
    slug: "bulk-custom-orders",
    title: "Bulk Supply & Custom Manufacturing",
    shortDesc: "Custom sublimation uniforms, bespoke trophies, institutional PE kits, and custom-branded fitness accessories for academies and corporations.",
    description: "Need customized gear tailored to your academy colors, corporate brand, or sports festival? ASF's in-house customization team produces sublimated sportswear, custom-cast medals, branded gym accessories, and bulk equipment consignments with fast turnaround times.",
    benefits: [
      "In-house graphic design for sublimation jerseys and team crests",
      "Computerized laser engraving on trophies, plaques, and medals",
      "Scalable volume manufacturing with strict batch quality control",
      "Direct logistics handling with pan-India door delivery"
    ],
    process: [
      { step: "01", title: "Design Mockup", desc: "Send your logo, team colors, and quantity requirements for instant digital mockups." },
      { step: "02", title: "Fabric & Finish Approval", desc: "Review material samples, sizing charts, and engraving proofs." },
      { step: "03", title: "Batch Production", desc: "Precision sublimation printing, stitching, die-casting, and quality checks." },
      { step: "04", title: "Secure Dispatch", desc: "Individual team packaging and tracked nationwide freight delivery." }
    ],
    image: "/assets/source_images/images_img_bulk-order.jpeg"
  }
];
