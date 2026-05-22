'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useStaggerAnimation } from '@/lib/animations';

const steps = [
  { icon: '📥', titleKey: 'process.step1.title', descKey: 'process.step1.desc' },
  { icon: '🔍', titleKey: 'process.step2.title', descKey: 'process.step2.desc' },
  { icon: '💬', titleKey: 'process.step3.title', descKey: 'process.step3.desc' },
  { icon: '📋', titleKey: 'process.step4.title', descKey: 'process.step4.desc' },
  { icon: '👤', titleKey: 'process.step5.title', descKey: 'process.step5.desc' },
];

export default function ProcessSection() {
  const { t } = useLanguage();
  const { ref, getItemStyle } = useStaggerAnimation(steps.length, 0.1, 200);

  return (
    <section
      id="process"
      className="relative py-20 md:py-28 bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-green-100/40 blur-3xl dark:bg-green-900/10" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent dark:from-green-400 dark:via-emerald-400 dark:to-teal-400">
              {t('process.title')}
            </span>
          </h2>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref}>
          {/* ── Desktop: Horizontal layout (lg+) ── */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-5 gap-0">
              {steps.map((step, index) => (
                <div
                  key={step.titleKey}
                  style={getItemStyle(index)}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Connector line — placed BEFORE each icon except the first */}
                  {index > 0 && (
                    <div className="absolute top-8 right-1/2 w-full -translate-y-1/2 pointer-events-none">
                      <div className="mx-auto h-0 w-full border-t-2 border-dashed border-green-400 dark:border-green-600" />
                    </div>
                  )}

                  {/* Icon circle */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600 text-2xl shadow-lg shadow-green-500/20 ring-4 ring-white dark:ring-gray-950 dark:shadow-green-800/20">
                    <span aria-hidden="true">{step.icon}</span>
                  </div>

                  {/* Step number badge */}
                  <span className="mt-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700 dark:bg-green-900/40 dark:text-green-300">
                    {index + 1}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 text-base font-semibold text-gray-900 dark:text-white">
                    {t(step.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="mt-1 max-w-[160px] text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {t(step.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Mobile / Tablet: Vertical layout ── */}
          <div className="lg:hidden">
            <div className="relative ml-8">
              {/* Continuous vertical dashed line */}
              <div className="absolute left-0 top-0 bottom-0 w-px border-l-2 border-dashed border-green-400 dark:border-green-600" />

              <div className="space-y-10">
                {steps.map((step, index) => (
                  <div
                    key={step.titleKey}
                    style={getItemStyle(index)}
                    className="relative flex items-start gap-5"
                  >
                    {/* Icon circle — overlaps the vertical line */}
                    <div className="relative z-10 -ml-8 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-600 text-xl shadow-lg shadow-green-500/20 ring-4 ring-white dark:ring-gray-950 dark:shadow-green-800/20">
                      <span aria-hidden="true">{step.icon}</span>
                    </div>

                    {/* Text content */}
                    <div className="pt-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-[10px] font-bold text-green-700 dark:bg-green-900/40 dark:text-green-300">
                          {index + 1}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {t(step.titleKey)}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                        {t(step.descKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
