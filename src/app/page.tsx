'use client';

import { CustomLink } from '@/components/CustomLink';
import { Button } from '@/components/CustomButton';

export default function Home() {
  return (
    <div className='p-section bg-bg-primary min-h-screen'>
      <div className='space-y-8'>
        <div>
          <h1 className='text-heading text-3xl mb-4'>سیستم دیزاین کافه منو</h1>
          <CustomLink href='#'>لینک</CustomLink>
        </div>

        {/* Primary Buttons - نارنجی */}
        <div>
          <h2 className='text-heading text-xl mb-4'>دکمه‌های اصلی</h2>
          <div className='flex flex-wrap gap-4'>
            <Button color='primary'>مشاهده همه</Button>
            <Button color='primary' variant='outline'>
              مشاهده همه (Outline)
            </Button>
            <Button color='primary' variant='ghost'>
              مشاهده همه (Ghost)
            </Button>
            <Button color='primary' size='sm'>
              کوچک
            </Button>
            <Button color='primary' size='lg'>
              بزرگ
            </Button>
          </div>
        </div>

        {/* Category Buttons - آبی */}
        <div>
          <h2 className='text-heading text-xl mb-4'>دکمه‌های دسته‌بندی</h2>
          <div className='flex flex-wrap gap-4'>
            <Button color='category-selected'>نوشیدنی گرم</Button>
            <Button color='category-default'>قهوه سرد</Button>
            <Button color='category-default'>شیک</Button>
            <Button color='category-default'>نوشیدنی</Button>
          </div>
        </div>

        {/* Secondary Buttons */}
        <div>
          <h2 className='text-heading text-xl mb-4'>دکمه‌های ثانویه</h2>
          <div className='flex flex-wrap gap-4'>
            <Button color='secondary'>ثانویه</Button>
            <Button color='secondary' variant='outline'>
              ثانویه (Outline)
            </Button>
            <Button color='secondary' variant='ghost'>
              ثانویه (Ghost)
            </Button>
          </div>
        </div>

        {/* Neutral Buttons */}
        <div>
          <h2 className='text-heading text-xl mb-4'>دکمه‌های خنثی</h2>
          <div className='flex flex-wrap gap-4'>
            <Button color='white'>سفید</Button>
            <Button color='black'>سیاه</Button>
            <Button color='gray'>خاکستری</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
