'use client';

import { useState } from 'react';
import HeroSection from '@/components/hero-section/hero-section';
import CategorySwiper from '@/components/menu/CategorySwiper';
import CategoryButtons from '@/components/menu/CategoryButtons';

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>('hot-drinks');

  return (
    <div className='bg-bg-primary min-h-screen'>
      <HeroSection />
      <CategoryButtons
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <CategorySwiper />
    </div>
  );
}
