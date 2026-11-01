import React from 'react';
import { Hero } from '../components/home/Hero';
import { TrustBanner } from '../components/home/TrustBanner';
import { CategoryExplorer } from '../components/home/CategoryExplorer';
import { GymSpaceEstimator } from '../components/home/GymSpaceEstimator';
import { TurnkeyProcess } from '../components/home/TurnkeyProcess';
import { HeritageStory } from '../components/home/HeritageStory';
import { ShowroomsSection } from '../components/home/ShowroomsSection';
import { QuickEnquirySection } from '../components/home/QuickEnquirySection';

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <TrustBanner />
      <CategoryExplorer />
      <GymSpaceEstimator />
      <TurnkeyProcess />
      <HeritageStory />
      <ShowroomsSection />
      <QuickEnquirySection />
    </div>
  );
};
