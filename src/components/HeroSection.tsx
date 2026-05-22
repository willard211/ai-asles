'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductMockup from '@/components/ProductMockup';

interface HeroSectionProps {
  onDemoClick: () => void;
}

export default function HeroSection({ onDemoClick }: HeroSectionProps) {
  const { t, locale } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isEnglish = locale === 'en';

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
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-12 px-4 pt-28 pb-16 sm:px-6 lg:flex-row lg:gap-6 lg:px-8 lg:pt-36 lg:pb-24 xl:gap-10">
        {/* ── Left: Text ── */}
        <div
          className={`flex min-w-0 flex-1 flex-col items-center text-center lg:items-start lg:text-left ${
            isEnglish ? 'lg:flex-[0.92]' : 'lg:flex-[1.08]'
          }`}
        >
          {/* Title */}
          <h1
            className={`text-4xl font-extrabold leading-[1.12] tracking-[-0.01em] text-gray-900 dark:text-white sm:text-5xl ${
              isEnglish
                ? 'lg:text-[42px] xl:text-[48px] 2xl:text-[54px]'
                : 'lg:text-[40px] xl:text-[42px] 2xl:text-[52px]'
            }`}
          >
            <span className={`block ${isEnglish ? '' : 'lg:whitespace-nowrap'}`}>
              {t('hero.title.line1')}
            </span>
            <span
              className={`mt-3 block bg-gradient-to-r from-[#25D366] via-emerald-500 to-[#128C7E] bg-clip-text text-transparent ${
                isEnglish ? '' : 'lg:whitespace-nowrap'
              }`}
            >
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

            {/* Outline CTA – Trial (now View Features) */}
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('features');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366] px-8 py-3.5 text-base font-semibold text-[#25D366] hover:bg-[#25D366]/10 dark:hover:bg-[#25D366]/10 active:scale-[0.97] transition-all duration-200"
            >
              {t('hero.cta.trial')}
            </button>
          </div>

        </div>

        {/* ── Right: Product Mockup ── */}
        <div
          className={`relative flex min-w-0 flex-1 items-center justify-center lg:justify-end ${
            isEnglish ? 'lg:flex-[1.28]' : 'lg:flex-[1.12]'
          }`}
        >
          {/* Glow ring behind mockup */}
          <div
            aria-hidden="true"
            className="absolute inset-0 m-auto h-[85%] w-[85%] rounded-3xl bg-gradient-to-br from-[#25D366]/20 via-emerald-400/10 to-transparent blur-2xl dark:from-[#25D366]/10 dark:via-emerald-600/5"
          />
          <div className="relative w-full max-w-lg lg:max-w-[720px] xl:max-w-[800px] 2xl:max-w-[860px]">
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
