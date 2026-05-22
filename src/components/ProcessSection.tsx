'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useStaggerAnimation } from '@/lib/animations';

const steps = [
  {
    code: '01',
    titleKey: 'process.step1.title',
    descKey: 'process.step1.desc',
    actionKey: 'process.step1.action',
  },
  {
    code: '02',
    titleKey: 'process.step2.title',
    descKey: 'process.step2.desc',
    actionKey: 'process.step2.action',
  },
  {
    code: '03',
    titleKey: 'process.step3.title',
    descKey: 'process.step3.desc',
    actionKey: 'process.step3.action',
  },
  {
    code: '04',
    titleKey: 'process.step4.title',
    descKey: 'process.step4.desc',
    actionKey: 'process.step4.action',
  },
  {
    code: '05',
    titleKey: 'process.step5.title',
    descKey: 'process.step5.desc',
    actionKey: 'process.step5.action',
  },
];

const traceKeys = [
  'process.trace.1',
  'process.trace.2',
  'process.trace.3',
  'process.trace.4',
];

function StreamText({ text, delay = 0 }: { text: string; delay?: number }) {
  const tokens = text.includes(' ') ? text.split(/(\s+)/) : Array.from(text);

  return (
    <span aria-label={text}>
      {tokens.map((token, index) => (
        <span
          aria-hidden="true"
          className="inline-block opacity-0"
          key={`${token}-${index}`}
          style={{
            animation: `process-stream 0.22s ease-out ${delay + index * 34}ms forwards`,
          }}
        >
          {token.trim() === '' ? '\u00A0' : token}
        </span>
      ))}
    </span>
  );
}

export default function ProcessSection() {
  const { t } = useLanguage();
  const { ref, getItemStyle } = useStaggerAnimation(steps.length, 0.1, 120);

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white py-20 dark:bg-gray-950 md:py-28"
    >
      <style>{`
        @keyframes process-stream {
          0% { opacity: 0; transform: translateY(7px); filter: blur(3px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @keyframes process-scan {
          0% { transform: translateX(-120%); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateX(120%); opacity: 0; }
        }

        @keyframes process-pulse {
          0%, 100% { transform: scale(1); opacity: .55; }
          50% { transform: scale(1.45); opacity: 1; }
        }

        @keyframes process-line {
          0% { transform: scaleY(0); transform-origin: top; }
          100% { transform: scaleY(1); transform-origin: top; }
        }
      `}</style>

      <div className="pointer-events-none absolute left-1/2 top-24 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.14),transparent_68%)] blur-2xl dark:bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_68%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            {t('process.title')}
          </h2>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div
            ref={ref}
            className="relative rounded-[28px] border border-gray-200 bg-white/88 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur dark:border-gray-800 dark:bg-gray-900/70 sm:p-6"
          >
            <div className="absolute bottom-10 left-10 top-10 hidden w-px bg-green-100 dark:bg-green-900/40 sm:block">
              <div className="h-full w-px origin-top bg-gradient-to-b from-green-500 via-emerald-400 to-green-100 dark:to-green-900/40 [animation:process-line_3.8s_ease-out_infinite]" />
            </div>

            <div className="space-y-3">
              {steps.map((step, index) => (
                <div
                  key={step.code}
                  style={getItemStyle(index)}
                  className="group relative grid gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/10 dark:border-gray-800 dark:bg-gray-950/70 dark:hover:border-green-800 sm:grid-cols-[64px_1fr]"
                >
                  <div className="relative flex items-start justify-between sm:block">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-950 text-sm font-bold text-white shadow-lg shadow-gray-950/10 transition group-hover:bg-green-600 dark:bg-white dark:text-gray-950">
                      {step.code}
                      <span
                        className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-green-400 ring-4 ring-white dark:ring-gray-950"
                        style={{ animation: `process-pulse 1.8s ease-in-out ${index * 0.24}s infinite` }}
                      />
                    </div>
                    <span className="mt-2 hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-green-600 dark:text-green-400 sm:block">
                      RUNNING
                    </span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                        {t(step.titleKey)}
                      </h3>
                      <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 dark:bg-green-950/50 dark:text-green-300">
                        {t(step.actionKey)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      <StreamText text={t(step.descKey)} delay={index * 210} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-green-200/80 bg-gradient-to-br from-gray-950 via-gray-900 to-green-950 p-5 text-white shadow-[0_28px_90px_rgba(21,128,61,0.24)] sm:p-6">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent [animation:process-scan_3s_ease-in-out_infinite]" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-400/20 blur-3xl" />
            <div className="absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-emerald-300/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-green-300">
                    AI AGENT LIVE
                  </p>
                  <h3 className="mt-1 text-xl font-semibold">{t('process.panel.title')}</h3>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-green-300/30 bg-green-400/10 px-3 py-1.5 text-xs text-green-200">
                  <span className="h-2 w-2 rounded-full bg-green-300 [animation:process-pulse_1.4s_ease-in-out_infinite]" />
                  {t('process.panel.status')}
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{t('process.panel.inquiry')}</span>
                  <span>10:24</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-100">
                  <StreamText text={t('process.panel.message')} delay={200} />
                </p>
              </div>

              <div className="mt-5 space-y-3">
                {traceKeys.map((key, index) => (
                  <div
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                    key={key}
                  >
                    <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-green-300 shadow-[0_0_18px_rgba(134,239,172,0.9)]" />
                    <p className="text-sm leading-relaxed text-gray-200">
                      <StreamText text={t(key)} delay={650 + index * 420} />
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-green-300/30 bg-green-400/10 p-4">
                <div className="mb-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-green-200">{t('process.panel.reply')}</span>
                  <span className="text-green-200/70">{t('process.panel.ready')}</span>
                </div>
                <p className="text-sm leading-relaxed text-white">
                  <StreamText text={t('process.panel.replyText')} delay={2500} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
