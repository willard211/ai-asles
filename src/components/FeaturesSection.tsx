'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useStaggerAnimation } from '@/lib/animations';

const features = [
  { icon: '💬', titleKey: 'features.f1.title', descKey: 'features.f1.desc' },
  { icon: '🧠', titleKey: 'features.f2.title', descKey: 'features.f2.desc' },
  { icon: '📋', titleKey: 'features.f3.title', descKey: 'features.f3.desc' },
  { icon: '👤', titleKey: 'features.f4.title', descKey: 'features.f4.desc' },
  { icon: '🌐', titleKey: 'features.f5.title', descKey: 'features.f5.desc' },
  { icon: '📊', titleKey: 'features.f6.title', descKey: 'features.f6.desc' },
];

export default function FeaturesSection() {
  const { t } = useLanguage();
  const { ref, getItemStyle } = useStaggerAnimation(features.length, 0.1, 150);

  return (
    <section
      id="features"
      className="relative py-20 md:py-28 bg-gray-50/50 dark:bg-gray-900/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            {t('features.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Feature cards grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <article
              key={feature.titleKey}
              style={getItemStyle(index)}
              className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon container */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-100 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/20 text-2xl transition-transform duration-300 group-hover:scale-110">
                <span role="img" aria-hidden="true">
                  {feature.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {t(feature.titleKey)}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {t(feature.descKey)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
