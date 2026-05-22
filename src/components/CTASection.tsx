'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/lib/animations';

interface CTASectionProps {
  onDemoClick: () => void;
}

export default function CTASection({ onDemoClick }: CTASectionProps) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 py-24 sm:py-32"
    >
      {/* Dot grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #25D366 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Floating decorative orbs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-green-400/20 blur-3xl dark:bg-green-500/10" />
      <div className="pointer-events-none absolute top-1/2 -right-24 h-96 w-96 -translate-y-1/2 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />
      <div className="pointer-events-none absolute -bottom-16 left-1/3 h-64 w-64 rounded-full bg-green-300/25 blur-3xl dark:bg-green-400/10" />
      <div className="pointer-events-none absolute top-12 right-1/4 h-48 w-48 rounded-full bg-emerald-400/15 blur-2xl dark:bg-emerald-600/10" />
      <div className="pointer-events-none absolute bottom-1/4 left-16 h-36 w-36 rounded-full bg-green-500/10 blur-2xl dark:bg-green-500/5" />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <h2
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          {t('cta.title')}
        </h2>

        <p
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition:
              'opacity 0.7s ease-out 0.15s, transform 0.7s ease-out 0.15s',
          }}
        >
          {t('cta.subtitle')}
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition:
              'opacity 0.7s ease-out 0.3s, transform 0.7s ease-out 0.3s',
          }}
        >
          {/* Primary CTA – filled green */}
          <button
            onClick={onDemoClick}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-105 hover:bg-[#128C7E] hover:shadow-xl hover:shadow-green-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] active:scale-[0.98] dark:shadow-green-500/15 dark:hover:shadow-green-500/20"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            {t('cta.demo')}
          </button>

          {/* Secondary CTA – outline */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-300 bg-white/60 px-8 py-4 text-lg font-semibold text-gray-700 backdrop-blur-sm transition-all duration-300 hover:border-[#25D366] hover:text-[#25D366] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] active:scale-[0.98] dark:border-gray-600 dark:bg-gray-800/60 dark:text-gray-200 dark:hover:border-[#25D366] dark:hover:text-[#25D366]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            {t('cta.contact')}
          </a>
        </div>
      </div>
    </section>
  );
}
