'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useStaggerAnimation } from '@/lib/animations';

const targets = [
  { icon: '🏭', titleKey: 'target.t1.title', descKey: 'target.t1.desc' },
  { icon: '🏢', titleKey: 'target.t2.title', descKey: 'target.t2.desc' },
  { icon: '🛒', titleKey: 'target.t3.title', descKey: 'target.t3.desc' },
  { icon: '💻', titleKey: 'target.t4.title', descKey: 'target.t4.desc' },
];

export default function TargetSection() {
  const { t } = useLanguage();
  const { ref, getItemStyle } = useStaggerAnimation(targets.length, 0.1, 150);

  return (
    <section
      id="customers"
      className="relative py-20 md:py-28 bg-white dark:bg-gray-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            {t('target.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            {t('target.subtitle')}
          </p>
        </div>

        {/* Target cards grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {targets.map((target, index) => (
            <article
              key={target.titleKey}
              style={getItemStyle(index)}
              className="group rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-4 border-t-transparent hover:border-t-green-500"
            >
              {/* Icon */}
              <div className="mb-5 text-5xl transition-transform duration-300 group-hover:scale-110">
                <span role="img" aria-hidden="true">
                  {target.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {t(target.titleKey)}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {t(target.descKey)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
