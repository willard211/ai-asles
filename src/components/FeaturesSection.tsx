'use client';

import { ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useStaggerAnimation } from '@/lib/animations';

interface Feature {
  icon: ReactNode;
  titleKey: string;
  descKey: string;
  highlight?: boolean;
}

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TrendIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const CRMIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const features: Feature[] = [
  {
    icon: <ClockIcon />,
    titleKey: 'features.f1.title',
    descKey: 'features.f1.desc',
    highlight: true,
  },
  {
    icon: <TrendIcon />,
    titleKey: 'features.f2.title',
    descKey: 'features.f2.desc',
  },
  {
    icon: <CRMIcon />,
    titleKey: 'features.f3.title',
    descKey: 'features.f3.desc',
  },
  {
    icon: <GlobeIcon />,
    titleKey: 'features.f4.title',
    descKey: 'features.f4.desc',
  },
  {
    icon: <UsersIcon />,
    titleKey: 'features.f5.title',
    descKey: 'features.f5.desc',
  },
];

export default function FeaturesSection() {
  const { t } = useLanguage();
  const { ref, getItemStyle } = useStaggerAnimation(features.length, 0.1, 150);

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/35 to-white py-20 dark:from-gray-950 dark:via-emerald-950/10 dark:to-gray-950 md:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[880px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/18 blur-3xl dark:bg-emerald-900/10" />
      <div className="pointer-events-none absolute right-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-[#25D366]/10 blur-3xl dark:bg-[#25D366]/5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent dark:from-green-400 dark:via-emerald-400 dark:to-teal-400">
              {t('features.title')}
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
            {t('features.subtitle')}
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const isHighlighted = feature.highlight;
            return (
              <article
                key={feature.titleKey}
                style={getItemStyle(index)}
                className={`group rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isHighlighted
                    ? 'border-emerald-500/80 bg-gradient-to-br from-emerald-500 via-[#16b978] to-[#0f9f6e] text-white shadow-xl shadow-emerald-500/18 dark:border-emerald-400/50 dark:from-emerald-600 dark:via-emerald-700 dark:to-teal-800'
                    : 'border-emerald-100/80 bg-white/92 text-gray-900 shadow-sm shadow-emerald-900/5 hover:border-emerald-200 hover:shadow-emerald-600/10 dark:border-gray-800 dark:bg-gray-900/82 dark:text-white dark:hover:border-emerald-800'
                }`}
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
                    isHighlighted
                      ? 'bg-white/18 text-white shadow-sm ring-1 ring-white/20'
                      : 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 dark:bg-emerald-950/40 dark:text-[#25D366] dark:ring-emerald-900/50'
                  }`}
                >
                  {feature.icon}
                </div>

                <h3
                  className={`text-xl font-bold tracking-tight ${
                    isHighlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {t(feature.titleKey)}
                </h3>

                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    isHighlighted
                      ? 'text-emerald-50/95 dark:text-emerald-100/95'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {t(feature.descKey)}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
