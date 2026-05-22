'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductMockup from '@/components/ProductMockup';

interface HeroSectionProps {
  onDemoClick: () => void;
}

export default function HeroSection({ onDemoClick }: HeroSectionProps) {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  // Fade-in on mount
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    // Ensure the starting state is applied before triggering animation
    requestAnimationFrame(() => {
      el.classList.remove('opacity-0', 'translate-y-6');
      el.classList.add('opacity-100', 'translate-y-0');
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-green-50/50 via-emerald-50/30 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 opacity-0 translate-y-6 transition-all duration-1000 ease-out"
    >
      {/* ── Dot-grid background pattern ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(37,211,102,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Decorative gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 -z-10 h-[500px] w-[500px] rounded-full bg-[#25D366]/10 dark:bg-[#25D366]/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-[400px] w-[400px] rounded-full bg-emerald-200/30 dark:bg-emerald-900/20 blur-3xl"
      />

      {/* ── Content ── */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 pt-28 pb-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:pt-36 lg:pb-24">
        {/* ── Left: Text ── */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Title */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            <span className="block">
              {t('hero.title.line1')}
            </span>
            <span className="mt-1 block bg-gradient-to-r from-[#25D366] via-emerald-500 to-[#128C7E] bg-clip-text text-transparent">
              {t('hero.title.line2')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl">
            {t('hero.subtitle')}
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {/* Filled CTA – Demo */}
            <button
              type="button"
              onClick={onDemoClick}
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-green-500/25 hover:bg-[#128C7E] active:scale-[0.97] transition-all duration-200"
            >
              {t('hero.cta.demo')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Outline CTA – Trial */}
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366] px-8 py-3.5 text-base font-semibold text-[#25D366] hover:bg-[#25D366]/10 dark:hover:bg-[#25D366]/10 active:scale-[0.97] transition-all duration-200"
            >
              {t('hero.cta.trial')}
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex items-center gap-6 text-sm text-gray-500 dark:text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#25D366]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {t('hero.trust.noCard') ?? 'No credit card required'}
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#25D366]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {t('hero.trust.free') ?? '14-day free trial'}
            </span>
          </div>
        </div>

        {/* ── Right: Product Mockup ── */}
        <div className="relative flex flex-1 items-center justify-center lg:justify-end">
          {/* Glow ring behind mockup */}
          <div
            aria-hidden="true"
            className="absolute inset-0 m-auto h-[85%] w-[85%] rounded-3xl bg-gradient-to-br from-[#25D366]/20 via-emerald-400/10 to-transparent blur-2xl dark:from-[#25D366]/10 dark:via-emerald-600/5"
          />
          <div className="relative w-full max-w-lg lg:max-w-xl">
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
