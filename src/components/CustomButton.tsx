'use client';

import { extendVariants, Button as HeroButton } from '@heroui/react';

export const Button = extendVariants(HeroButton, {
  variants: {
    // Color variants based on design system
    color: {
      // Primary - نارنجی برای دکمه مشاهده همه
      primary:
        'bg-interactive-primary text-text-on-orange hover:bg-interactive-primary-hover active:bg-interactive-primary-active transition-colors duration-200',
      // Secondary - آبی برای دسته‌بندی انتخاب شده
      secondary:
        'bg-interactive-secondary text-text-on-blue hover:bg-interactive-secondary-hover active:bg-interactive-secondary-active transition-colors duration-200',
      // Category selected - آبی روشن
      'category-selected':
        'bg-category-selected-bg text-category-selected-text hover:bg-blue-200 transition-colors duration-200',
      // Category default
      'category-default':
        'bg-category-default-bg text-category-default-text hover:bg-gray-50 transition-colors duration-200',
      // Neutral variants
      white:
        'bg-white text-text-primary hover:bg-gray-50 transition-colors duration-200',
      black:
        'bg-black text-text-inverse hover:bg-gray-900 transition-colors duration-200',
      gray: 'bg-gray-300 text-text-primary hover:bg-gray-400 transition-colors duration-200',
      // Transparent variants
      'primary-transparent':
        'bg-interactive-primary/80 text-text-on-orange hover:bg-interactive-primary transition-colors duration-200',
      'secondary-transparent':
        'bg-interactive-secondary/80 text-text-on-blue hover:bg-interactive-secondary transition-colors duration-200',
    },
    // Size variants
    size: {
      sm: 'px-3 py-1.5 text-sm rounded-button',
      md: 'px-4 py-2 text-base rounded-button',
      lg: 'px-6 py-3 text-lg rounded-button',
      xl: 'px-8 py-4 text-xl rounded-button',
    },
    // Variant styles
    variant: {
      solid: '',
      outline:
        'bg-transparent border-2 border-current hover:bg-current/10 transition-colors duration-200',
      ghost:
        'bg-transparent hover:bg-current/10 transition-colors duration-200',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    variant: 'solid',
  },
});
