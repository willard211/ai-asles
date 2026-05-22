'use client';

import { ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useStaggerAnimation } from '@/lib/animations';

interface PainPoint {
  icon: ReactNode;
  labelKey: string;
  statusKey: string;
  descKey: string;
}

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TranslateIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 11.37 7.37 16.5 2.41 19M19.5 21h-6" />
  </svg>
);

const KnowledgeIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const UserFlowIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>
);

const painPoints: PainPoint[] = [
  {
    icon: <ClockIcon />,
    labelKey: 'why.pain1.label',
    statusKey: 'why.pain1.status',
    descKey: 'why.pain1.desc',
  },
  {
    icon: <TranslateIcon />,
    labelKey: 'why.pain2.label',
    statusKey: 'why.pain2.status',
    descKey: 'why.pain2.desc',
  },
  {
    icon: <KnowledgeIcon />,
    labelKey: 'why.pain3.label',
    statusKey: 'why.pain3.status',
    descKey: 'why.pain3.desc',
  },
  {
    icon: <UserFlowIcon />,
    labelKey: 'why.pain4.label',
    statusKey: 'why.pain4.status',
    descKey: 'why.pain4.desc',
  },
];

export default function WhySection() {
  const { t } = useLanguage();
  const { ref, getItemStyle } = useStaggerAnimation(painPoints.length, 0.1, 150);

  return (
    <section
      id="why"
      className="relative py-20 md:py-28 bg-gray-50/50 dark:bg-gray-900/50 overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 rounded-full bg-green-200/30 blur-3xl dark:bg-green-900/20" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-emerald-200/20 blur-3xl dark:bg-emerald-900/15" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent dark:from-green-400 dark:via-emerald-400 dark:to-teal-400">
              {t('why.title')}
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
            {t('why.subtitle')}
          </p>
        </div>

        {/* Pain Point Cards */}
        <div ref={ref} className="grid gap-6 sm:grid-cols-2">
          {painPoints.map((point, index) => (
            <div
              key={point.labelKey}
              style={getItemStyle(index)}
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700/60 dark:bg-gray-800 dark:hover:shadow-green-900/10"
            >
              {/* Header: Icon + Label */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#00b368] text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  {point.icon}
                </div>
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 tracking-wide">
                  {t(point.labelKey)}
                </span>
              </div>

              {/* Status Highlight */}
              <div className="text-3xl font-extrabold text-[#00b368] dark:text-[#25D366] mb-3 tracking-tight">
                {t(point.statusKey)}
              </div>

              {/* Description */}
              <p className="relative z-10 text-sm leading-relaxed text-gray-500 dark:text-gray-300">
                {t(point.descKey)}
              </p>

              {/* Hover effect styling */}
              <div className="absolute inset-0 rounded-2xl border-l-4 border-transparent group-hover:border-[#00b368] transition-all duration-300 pointer-events-none" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-green-50/50 to-transparent dark:from-green-900/10 dark:to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
