'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProcessSection from '@/components/ProcessSection';
import FeaturesSection from '@/components/FeaturesSection';
import TargetSection from '@/components/TargetSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => setIsDemoModalOpen(true);
  const handleCloseDemo = () => setIsDemoModalOpen(false);

  return (
    <>
      <Navbar onDemoClick={handleOpenDemo} />
      <main className="min-h-screen overflow-x-hidden pt-16">
        <HeroSection onDemoClick={handleOpenDemo} />
        <FeaturesSection />
        <ProcessSection />
        <TargetSection />
        <CTASection onDemoClick={handleOpenDemo} />
      </main>
      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </>
  );
}
