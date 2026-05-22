'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useStaggerAnimation } from '@/lib/animations';

const painPoints = [
  { icon: '🌍', titleKey: 'why.pain1.title', descKey: 'why.pain1.desc' },
  { icon: '⏱️', titleKey: 'why.pain2.title', descKey: 'why.pain2.desc' },
  { icon: '📊', titleKey: 'why.pain3.title', descKey: 'why.pain3.desc' },
  { icon: '📉', titleKey: 'why.pain4.title', descKey: 'why.pain4.desc' },
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
              key={point.titleKey}
              style={getItemStyle(index)}
              className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-l-4 hover:border-l-green-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-l-green-400 dark:hover:shadow-green-900/10"
            >
              {/* Icon */}
              <div className="mb-5 text-4xl" aria-hidden="true">
                {point.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {t(point.titleKey)}
              </h3>

              {/* Description */}
              <p className="leading-relaxed text-gray-500 dark:text-gray-400">
                {t(point.descKey)}
              </p>

              {/* Subtle hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-green-50/50 to-transparent dark:from-green-900/10 dark:to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
