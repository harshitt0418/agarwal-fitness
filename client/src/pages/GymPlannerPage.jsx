import React, { useState, useMemo } from 'react';
import { Calculator, CheckCircle2, ArrowRight, ShieldCheck, Building, Dumbbell, Home, GraduationCap, Briefcase, FileSpreadsheet, Phone } from 'lucide-react';
import { useEnquiryModal } from '../context/EnquiryModalContext';

export const GymPlannerPage = () => {
  const [sqFt, setSqFt] = useState(2500);
  const [facilityType, setFacilityType] = useState('commercial');
  const [budgetTier, setBudgetTier] = useState('standard');
  const [includeTurf, setIncludeTurf] = useState(true);
  const [includeLockers, setIncludeLockers] = useState(false);

  const { openEnquiryModal } = useEnquiryModal();

  const facilities = [
    { id: 'commercial', label: 'Commercial Gym Club', icon: Dumbbell, desc: 'High-traffic commercial fitness center' },
    { id: 'society', label: 'Society Clubhouse', icon: Building, desc: 'Apartment complexes & gated residential societies' },
    { id: 'institution', label: 'College / School Gym', icon: GraduationCap, desc: 'Universities, sports colleges & academies' },
    { id: 'corporate', label: 'Corporate Wellness', icon: Briefcase, desc: 'Executive office gym & staff wellness' },
    { id: 'home', label: 'Luxury Home Gym', icon: Home, desc: 'Bespoke residential private studio' }
  ];

  const calculation = useMemo(() => {
    const factor = facilityType === 'commercial' ? 1.25 : facilityType === 'home' ? 0.65 : 1.0;
    
    const cardioUnits = Math.max(2, Math.round((sqFt * 0.0036) * factor));
    const selectorizedStations = Math.max(2, Math.round((sqFt * 0.0038) * factor));
    const powerRacks = sqFt < 1200 ? 1 : sqFt < 3500 ? 2 : Math.round(sqFt / 1400);
    const benches = Math.max(2, Math.round(powerRacks * 1.5));
    const rubberFlooringSqFt = Math.round(sqFt * 0.82);
    const turfLength = includeTurf ? (sqFt > 2000 ? '15m x 2m Agility Sled Track' : '10m x 1.5m Sprint Strip') : 'None';
    const estimatedDumbbellSets = sqFt < 1500 ? '2.5kg - 35kg (Rubber Hex)' : '2.5kg - 50kg (Commercial Urethane)';
    const maxAthletes = Math.round(sqFt / 45);

    return {
      cardioUnits,
      selectorizedStations,
      powerRacks,
      benches,
      rubberFlooringSqFt,
      turfLength,
      estimatedDumbbellSets,
      maxAthletes
    };
  }, [sqFt, facilityType, includeTurf]);

  const handleRequestQuote = () => {
    const facName = facilities.find(f => f.id === facilityType)?.label || 'Gym';
    openEnquiryModal({
      title: `Turnkey Layout & Quote: ${sqFt} sq.ft. ${facName}`,
      subtitle: `Itemized pricing, 2D floorplan, and equipment proposal for ${sqFt} sq.ft. (${budgetTier.toUpperCase()} tier).`,
      enquiryType: 'gym_setup',
      spaceDetails: {
        facilityType: facName,
        approxSqFt: sqFt,
        budgetTier: budgetTier,
        estimatedCapacity: calculation.maxAthletes,
        includeTurf: includeTurf ? 'Yes' : 'No'
      }
    });
  };

  return (
    <div className="bg-athletic-50 min-h-screen py-10">
      
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-athletic-950 text-white rounded-2xl p-8 sm:p-12 border border-athletic-800 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-asf-gold block mb-2">
              Interactive Facility Engineering
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
              Interactive Gym Setup & Space Planner
            </h1>
            <p className="text-sm text-athletic-300 mt-3 leading-relaxed">
              Design your dream fitness facility with verified equipment counts, safety clearances, and flooring coverage based on ASF's 45-year turnkey contracting methodology.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-athletic-200 shadow-subtle space-y-8">
            
            {/* Facility Model */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-athletic-800 mb-3">
                1. Select Target Environment
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {facilities.map((fac) => {
                  const Icon = fac.icon;
                  const isSelected = facilityType === fac.id;
                  return (
                    <button
                      key={fac.id}
                      onClick={() => setFacilityType(fac.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all flex items-start space-x-3 ${
                        isSelected
                          ? 'border-asf-gold bg-athletic-50 ring-2 ring-asf-gold/30 shadow-sm'
                          : 'border-athletic-200 hover:border-athletic-300 bg-white'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-asf-gold text-athletic-950' : 'bg-athletic-100 text-athletic-600'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-athletic-950 block">{fac.label}</span>
                        <span className="text-[10px] text-athletic-500 block leading-tight mt-0.5">{fac.desc}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold uppercase tracking-wider text-athletic-800">
                  2. Floor Space Available (Square Feet)
                </label>
                <div className="text-right">
                  <span className="font-mono font-extrabold text-2xl text-athletic-950">
                    {sqFt.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-bold text-asf-gold-dark ml-1">SQ.FT</span>
                </div>
              </div>

              <input
                type="range"
                min="500"
                max="10000"
                step="250"
                value={sqFt}
                onChange={(e) => setSqFt(Number(e.target.value))}
                className="w-full h-3 bg-athletic-200 rounded-lg appearance-none cursor-pointer accent-asf-gold"
              />

              <div className="flex justify-between text-[11px] font-mono text-athletic-500 mt-2">
                <span>500 sq.ft (Studio)</span>
                <span>2,500 sq.ft (Standard)</span>
                <span>5,000 sq.ft (Large)</span>
                <span>10,000+ sq.ft (Club)</span>
              </div>
            </div>

            {/* Inclusions Checkboxes */}
            <div className="pt-4 border-t border-athletic-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-athletic-800 mb-3">
                3. Optional Functional Zones
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center space-x-3 p-3 rounded-lg border border-athletic-200 cursor-pointer hover:bg-athletic-50 transition">
                  <input
                    type="checkbox"
                    checked={includeTurf}
                    onChange={(e) => setIncludeTurf(e.target.checked)}
                    className="w-4 h-4 text-asf-gold rounded border-athletic-300 focus:ring-asf-gold"
                  />
                  <div>
                    <span className="text-xs font-semibold text-athletic-900 block">Agility Sled Turf Track</span>
                    <span className="text-[10px] text-athletic-500 block">High-density monofilament sprint lane</span>
                  </div>
                </label>

                <label className="flex items-center space-x-3 p-3 rounded-lg border border-athletic-200 cursor-pointer hover:bg-athletic-50 transition">
                  <input
                    type="checkbox"
                    checked={includeLockers}
                    onChange={(e) => setIncludeLockers(e.target.checked)}
                    className="w-4 h-4 text-asf-gold rounded border-athletic-300 focus:ring-asf-gold"
                  />
                  <div>
                    <span className="text-xs font-semibold text-athletic-900 block">Locker & Changing Zone</span>
                    <span className="text-[10px] text-athletic-500 block">Durable metal/wooden locker integration</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Blueprint Scope Breakdown */}
          <div className="lg:col-span-5 bg-athletic-950 text-white rounded-2xl p-6 sm:p-8 border border-athletic-800 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-athletic-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-asf-gold block">
                  Blueprint Equipment Spec
                </span>
                <h3 className="text-xl font-display font-extrabold uppercase text-white mt-0.5">
                  Recommended Equipment Mix
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-athletic-400 block uppercase">Peak Load</span>
                <span className="font-mono font-bold text-lg text-emerald-400">
                  {calculation.maxAthletes} Members
                </span>
              </div>
            </div>

            {/* Spec Items */}
            <div className="space-y-3 text-xs">
              <div className="bg-athletic-900 p-3.5 rounded-lg border border-athletic-800 flex items-center justify-between">
                <div>
                  <strong className="text-white block">Commercial Cardio Stations</strong>
                  <span className="text-[11px] text-athletic-400">AC Treadmills, Ellipticals, Rowers & Bikes</span>
                </div>
                <span className="font-mono font-bold text-lg text-asf-gold">
                  {calculation.cardioUnits} Units
                </span>
              </div>

              <div className="bg-athletic-900 p-3.5 rounded-lg border border-athletic-800 flex items-center justify-between">
                <div>
                  <strong className="text-white block">Selectorized Strength Stations</strong>
                  <span className="text-[11px] text-athletic-400">Lat pulldowns, chest press & dual cables</span>
                </div>
                <span className="font-mono font-bold text-lg text-asf-gold">
                  {calculation.selectorizedStations} Units
                </span>
              </div>

              <div className="bg-athletic-900 p-3.5 rounded-lg border border-athletic-800 flex items-center justify-between">
                <div>
                  <strong className="text-white block">Olympic Power Racks & Cages</strong>
                  <span className="text-[11px] text-athletic-400">Heavy 11-gauge steel with spotter arms</span>
                </div>
                <span className="font-mono font-bold text-lg text-asf-gold">
                  {calculation.powerRacks} Cages
                </span>
              </div>

              <div className="bg-athletic-900 p-3.5 rounded-lg border border-athletic-800 flex items-center justify-between">
                <div>
                  <strong className="text-white block">High-Impact Rubber Flooring</strong>
                  <span className="text-[11px] text-athletic-400">15-25mm vulcanized acoustic tiles</span>
                </div>
                <span className="font-mono font-bold text-lg text-asf-gold">
                  {calculation.rubberFlooringSqFt} SQ.FT
                </span>
              </div>

              <div className="bg-athletic-900 p-3.5 rounded-lg border border-athletic-800 flex items-center justify-between">
                <div>
                  <strong className="text-white block">Commercial Free Weights Package</strong>
                  <span className="text-[11px] text-athletic-400">{calculation.estimatedDumbbellSets}</span>
                </div>
                <span className="font-mono font-bold text-xs text-emerald-400">
                  Included
                </span>
              </div>

              {includeTurf && (
                <div className="bg-athletic-900 p-3.5 rounded-lg border border-athletic-800 flex items-center justify-between">
                  <div>
                    <strong className="text-white block">Functional Agility Turf</strong>
                    <span className="text-[11px] text-athletic-400">{calculation.turfLength}</span>
                  </div>
                  <span className="font-mono font-bold text-xs text-emerald-400">
                    Included
                  </span>
                </div>
              )}
            </div>

            {/* Inclusions */}
            <div className="pt-2 border-t border-athletic-800 space-y-1.5 text-xs text-athletic-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-asf-gold flex-shrink-0" />
                <span>Complimentary 2D CAD blueprint & 3D space flow analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-asf-gold flex-shrink-0" />
                <span>Pan-India container delivery & technician assembly</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-asf-gold flex-shrink-0" />
                <span>Comprehensive AMC & genuine spare parts backup from Bhilai</span>
              </div>
            </div>

            {/* Action */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleRequestQuote}
                className="w-full btn-primary text-xs py-3.5 flex items-center justify-center font-bold tracking-wider"
              >
                <span>Request Detailed 3D Blueprint & Itemized Quote</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
