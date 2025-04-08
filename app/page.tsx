import React from 'react';
import HeroSection from '@/components/HeroSection';
import SymptomChecker from '@/components/SymptomChecker';
import Features from '@/components/Features';
import ProductsServices from '@/components/ProductsServices';
import Parameters from '@/components/Parameters';
import Certifications from '@/components/Certifications';
import Testimonials from '@/components/Testimonials';
import NewsSection from '@/components/NewsSection';
import BookDemo from '@/components/BookDemo';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <ProductsServices />
      <SymptomChecker />
      <Features />
      <Parameters />
      <Certifications />
      <Testimonials />
      <NewsSection />
      <BookDemo />
    </div>
  );
}

export default App;