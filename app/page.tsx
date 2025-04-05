"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from '@/components/HeroSection';
import SymptomChecker from '@/components/SymptomChecker';
import Features from '@/components/Features';
import Parameters from '@/components/Parameters';
import Testimonials from '@/components/Testimonials';
import NewsSection from '@/components/NewsSection';
import BookDemo from '@/components/BookDemo';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <SymptomChecker />
      <Features />
      <Parameters />
      <Testimonials />
      <NewsSection />
      <BookDemo />
    </div>
  );
}