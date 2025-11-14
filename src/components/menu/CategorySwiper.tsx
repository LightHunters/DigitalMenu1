'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { categories } from '@/data/database';
import 'swiper/css';
import 'swiper/css/navigation';

const CategorySwiper = () => {
  // دسته‌بندی‌های اصلی برای نمایش در Swiper
  const categoryImages = categories
    .filter(cat => ['hot-drinks', 'cold-coffee', 'shakes'].includes(cat.id))
    .sort((a, b) => a.order - b.order)
    .map(cat => ({
      id: cat.id,
      image: cat.image || '/images/Background.png',
      alt: cat.name,
    }));

  return (
    <div className='w-full px-4 py-6'>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={12}
        slidesPerView={1.15}
        centeredSlides={false}
        loop={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className='category-swiper'
      >
        {categoryImages.map(item => (
          <SwiperSlide key={item.id}>
            <div className='relative w-full h-40 rounded-xl overflow-hidden'>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
                unoptimized
              />
              <div className='absolute inset-0 bg-black/10' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySwiper;
