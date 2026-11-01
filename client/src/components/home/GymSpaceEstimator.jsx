import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Shield, Building, Home, GraduationCap, Briefcase, Dumbbell } from 'lucide-react';
import { useEnquiryModal } from '../../context/EnquiryModalContext';
import { ScrollReveal } from '../common/ScrollReveal';

export const GymSpaceEstimator = () => {
  const [sqFt, setSqFt] = useState(2000);
  const [facilityType, setFacilityType] = useState('society');
  const { openEnquiryModal } = useEnquiryModal();

  const facilities = [
    { id: 'society', label: 'Society', icon: Building },
    { id: 'commercial', label: 'Commercial Gym', icon: Dumbbell },
    { id: 'home', label: 'Home Studio', icon: Home },
    { id: 'institution', label: 'School / College', icon: GraduationCap },
    { id: 'corporate', label: 'Corporate', icon: Briefcase }
  ];

  const estimation = useMemo(() => {
    const factor = facilityType === 'commercial' ? 1.2 : facilityType === 'home' ? 0.7 : 1.0;
    
    const cardioUnits = Math.max(2, Math.round((sqFt * 0.0035) * factor));
    const strengthStations = Math.max(2, Math.round((sqFt * 0.004) * factor));
    const powerRacks = sqFt < 1000 ? 1 : sqFt < 3000 ? 2 : Math.round(sqFt / 1500);
    const rubberFlooringSqFt = Math.round(sqFt * 0.85);
    const estimatedCapacity = Math.round(sqFt / 45);

    let packageTier = 'Starter Package';
    if (sqFt >= 1500 && sqFt < 4000) packageTier = 'Commercial Tier';
    if (sqFt >= 4000) packageTier = 'Grand Turnkey Facility';

    return {
      cardioUnits,
      strengthStations,
      powerRacks,
      rubberFlooringSqFt,
      estimatedCapacity,
      packageTier
    };
  }, [sqFt, facilityType]);

  const handleConsultation = () => {
    const selectedFacility = facilities.find(f => f.id === facilityType)?.label || 'Gym';
    openEnquiryModal({
      title: `Turnkey Quote: ${sqFt} sq.ft. ${selectedFacility}`,
      subtitle: `Receive itemized equipment pricing and layout blueprint for ${sqFt} sq.ft.`,
      enquiryType: 'gym_setup',
      spaceDetails: {
        facilityType: selectedFacility,
        approxSqFt: sqFt,
        estimatedCapacity: estimation.estimatedCapacity,
        targetAudience: selectedFacility
      }
    });
  };

  return (
    <section id="estimator" className="py-14 sm:py-18 bg-athletic-950 text-white relative overflow-hidden border-b border-athletic-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimal Header */}
        <ScrollReveal direction="up" delay={40}>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-asf-gold block mb-1">
              Space Estimator
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-tight text-white">
              Instant Gym Setup Calculator
            </h2>
            <p className="text-xs sm:text-sm text-athletic-400 mt-1.5 leading-relaxed">
              Estimate equipment counts, rubber flooring, and user capacity for your exact floor space.
            </p>
          </div>
        </ScrollReveal>

        {/* Minimal Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-5xl mx-auto">
          
          {/* Controls (Left) */}
          <div className="lg:col-span-6 bg-athletic-900 rounded-xl border border-athletic-800 p-5 sm:p-6 flex flex-col justify-between space-y-6">
            
            {/* Facility Pills */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-athletic-400 mb-2.5">
                Facility Model
              </label>
              <div className="flex flex-wrap gap-2">
                {facilities.map((fac) => {
                  const Icon = fac.icon;
                  const isSelected = facilityType === fac.id;
                  return (
                    <button
                      key={fac.id}
                      type="button"
                      onClick={() => setFacilityType(fac.id)}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                        isSelected
                          ? 'bg-asf-gold text-athletic-950 font-bold shadow-xs'
                          : 'bg-athletic-950 text-athletic-300 hover:bg-athletic-800 hover:text-white border border-athletic-800'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{fac.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-athletic-400">
                  Floor Area
                </label>
                <div className="text-right">
                  <span className="font-mono font-bold text-xl text-asf-gold">
                    {sqFt.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-athletic-400 ml-1">SQ.FT</span>
                </div>
              </div>

              <input
                type="range"
                min="500"
                max="10000"
                step="250"
                value={sqFt}
                onChange={(e) => setSqFt(Number(e.target.value))}
                className="w-full h-2 bg-athletic-800 rounded-lg appearance-none cursor-pointer accent-asf-gold"
              />

              <div className="flex justify-between text-[10px] font-mono text-athletic-500 mt-1.5">
                <span>500 sq.ft</span>
                <span>2,500 sq.ft</span>
                <span>5,000 sq.ft</span>
                <span>10,000+ sq.ft</span>
              </div>
            </div>

            {/* Note */}
            <div className="p-3 bg-athletic-950 rounded-lg border border-athletic-800 text-[11px] text-athletic-400 flex items-center space-x-2">
              <Shield className="w-3.5 h-3.5 text-asf-gold flex-shrink-0" />
              <span>Includes 2D CAD blueprint, door delivery & certified assembly.</span>
            </div>

          </div>

          {/* Results Card (Right) */}
          <div className="lg:col-span-6 bg-athletic-900 rounded-xl border border-athletic-750 p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-athletic-800 mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-asf-gold block">
                    Calculated Scope
                  </span>
                  <h3 className="font-display font-bold text-lg uppercase text-white">
                    {estimation.packageTier}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-athletic-400 block uppercase">Capacity</span>
                  <span className="font-mono font-bold text-sm text-emerald-400">
                    ~{estimation.estimatedCapacity} Athletes
                  </span>
                </div>
              </div>

              {/* 4 Clean Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-athletic-950 p-3 rounded-lg border border-athletic-850">
                  <span className="text-[10px] font-semibold text-athletic-400 uppercase tracking-wider block">
                    Cardio Machines
                  </span>
                  <span className="font-mono font-bold text-xl text-white block mt-0.5">
                    {estimation.cardioUnits} Units
                  </span>
                </div>

                <div className="bg-athletic-950 p-3 rounded-lg border border-athletic-850">
                  <span className="text-[10px] font-semibold text-athletic-400 uppercase tracking-wider block">
                    Strength Stations
                  </span>
                  <span className="font-mono font-bold text-xl text-white block mt-0.5">
                    {estimation.strengthStations} Stations
                  </span>
                </div>

                <div className="bg-athletic-950 p-3 rounded-lg border border-athletic-850">
                  <span className="text-[10px] font-semibold text-athletic-400 uppercase tracking-wider block">
                    Power Racks
                  </span>
                  <span className="font-mono font-bold text-xl text-white block mt-0.5">
                    {estimation.powerRacks} Cages
                  </span>
                </div>

                <div className="bg-athletic-950 p-3 rounded-lg border border-athletic-850">
                  <span className="text-[10px] font-semibold text-athletic-400 uppercase tracking-wider block">
                    Rubber Flooring
                  </span>
                  <span className="font-mono font-bold text-xl text-white block mt-0.5">
                    {estimation.rubberFlooringSqFt} sq.ft
                  </span>
                </div>
              </div>
            </div>

            {/* Action */}
            <button
              type="button"
              onClick={handleConsultation}
              className="w-full btn-primary text-xs py-2.5 flex items-center justify-center font-bold tracking-wider"
            >
              <span>Request Layout Plan & Wholesale Quote</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
