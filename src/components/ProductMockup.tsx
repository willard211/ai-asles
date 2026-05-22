'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ChatIcon from '@/components/icons/ChatIcon';

/* ─────────────────────────────── keyframe styles (injected once) ── */
const keyframes = `
@keyframes mockup-float {
  0%, 100% { transform: perspective(1200px) rotateY(-2deg) translateY(0); }
  50%      { transform: perspective(1200px) rotateY(-2deg) translateY(-10px); }
}
@keyframes msg-appear {
  0%   { opacity: 0; transform: translateY(12px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0)   scale(1); }
}
@keyframes step-appear {
  0%   { opacity: 0; transform: translateX(-16px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes dot-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,.5); }
  50%      { box-shadow: 0 0 0 6px rgba(37,211,102,0); }
}
`;

/* ─────────────────────────── sub‑components ─────────────────────── */

/** Fake macOS-style window title bar */
function WindowTitleBar({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-800/80 rounded-t-2xl select-none">
      <span className="inline-block w-3 h-3 rounded-full bg-[#FF5F57]" />
      <span className="inline-block w-3 h-3 rounded-full bg-[#FEBC2E]" />
      <span className="inline-block w-3 h-3 rounded-full bg-[#28C840]" />
      <span className="ml-3 text-xs font-medium text-gray-500 dark:text-gray-400 truncate">
        {title}
      </span>
    </div>
  );
}

/** Incoming (left‑aligned) chat bubble */
function IncomingBubble({
  text,
  time,
  delayMs,
}: {
  text: string;
  time: string;
  delayMs: number;
}) {
  return (
    <div
      className="flex justify-start"
      style={{
        opacity: 0,
        animation: `msg-appear 0.5s ease-out ${delayMs}ms forwards`,
      }}
    >
      <div className="max-w-[80%] rounded-2xl rounded-tl-sm px-4 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm leading-relaxed shadow-sm">
        <p>{text}</p>
        <span className="block mt-1 text-[10px] text-gray-400 dark:text-gray-500 text-right">
          {time}
        </span>
      </div>
    </div>
  );
}

/** Outgoing / system reply bubble (green) */
function ReplyBubble({
  text,
  time,
  delayMs,
}: {
  text: string;
  time: string;
  delayMs: number;
}) {
  return (
    <div
      className="flex justify-end"
      style={{
        opacity: 0,
        animation: `msg-appear 0.5s ease-out ${delayMs}ms forwards`,
      }}
    >
      <div className="max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-2.5 bg-[#DCF8C6] dark:bg-[#025c4c] text-gray-800 dark:text-gray-100 text-sm leading-relaxed shadow-sm">
        <p>{text}</p>
        <span className="block mt-1 text-[10px] text-gray-500 dark:text-gray-400 text-right">
          {time}
        </span>
      </div>
    </div>
  );
}

/** Single timeline step for the AI panel */
function TimelineStep({
  icon,
  title,
  description,
  delayMs,
  isLast,
}: {
  icon: string;
  title: string;
  description: string;
  delayMs: number;
  isLast: boolean;
}) {
  return (
    <div
      className="relative flex gap-3"
      style={{
        opacity: 0,
        animation: `step-appear 0.55s ease-out ${delayMs}ms forwards`,
      }}
    >
      {/* Dot + connector */}
      <div className="flex flex-col items-center">
        <span
          className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366]/15 text-base shrink-0"
          style={
            isLast
              ? { animation: 'dot-pulse 2s ease-in-out infinite' }
              : undefined
          }
        >
          {icon}
        </span>
        {!isLast && (
          <span className="w-px flex-1 bg-[#25D366]/25 dark:bg-[#25D366]/20 min-h-[20px]" />
        )}
      </div>

      {/* Content */}
      <div className="pb-5 last:pb-0">
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 leading-tight">
          {title}
        </p>
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400 leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
}

/* ──────────────────────── main component ────────────────────────── */

export default function ProductMockup() {
  const { t } = useLanguage();

  const steps = [
    { icon: '🟢', titleKey: 'mockup.ai.step1.title', descKey: 'mockup.ai.step1.desc', delay: 500 },
    { icon: '📊', titleKey: 'mockup.ai.step2.title', descKey: 'mockup.ai.step2.desc', delay: 1200 },
    { icon: '📄', titleKey: 'mockup.ai.step3.title', descKey: 'mockup.ai.step3.desc', delay: 1900 },
    { icon: '📋', titleKey: 'mockup.ai.step4.title', descKey: 'mockup.ai.step4.desc', delay: 2600 },
  ];

  return (
    <>
      {/* Inject keyframes once */}
      <style>{keyframes}</style>

      <div
        className="w-full max-w-4xl mx-auto"
        style={{ animation: 'mockup-float 5s ease-in-out infinite' }}
      >
        {/* ── Card shell ── */}
        <div className="rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
          {/* Title bar */}
          <WindowTitleBar title="WaiMao ZhiLian — AI CRM" />

          {/* Two‑panel body */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
            {/* ─── Left: Chat Simulation ─── */}
            <div className="flex flex-col">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-4 py-3 bg-[#25D366] text-white">
                <ChatIcon size={28} className="shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate">
                    {t('mockup.chat.contact')}
                  </p>
                  <p className="text-[11px] opacity-80 truncate">
                    {t('mockup.chat.status')}
                  </p>
                </div>
              </div>

              {/* Messages area */}
              <div className="flex flex-col gap-3 p-4 bg-[#f0f0f0]/50 dark:bg-gray-800/50 min-h-[220px]">
                <IncomingBubble
                  text={t('mockup.chat.msg1')}
                  time="10:23"
                  delayMs={600}
                />
                <IncomingBubble
                  text={t('mockup.chat.msg2')}
                  time="10:24"
                  delayMs={1400}
                />
                <ReplyBubble
                  text={t('mockup.chat.reply')}
                  time="10:24"
                  delayMs={2200}
                />
              </div>
            </div>

            {/* ─── Right: AI Activity ─── */}
            <div className="flex flex-col">
              {/* AI header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <span className="text-lg" role="img" aria-label="sparkle">
                  ✨
                </span>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                  {t('mockup.ai.title')}
                </p>
              </div>

              {/* Timeline */}
              <div className="p-4 flex flex-col min-h-[220px]">
                {steps.map((step, i) => (
                  <TimelineStep
                    key={step.titleKey}
                    icon={step.icon}
                    title={t(step.titleKey)}
                    description={t(step.descKey)}
                    delayMs={step.delay}
                    isLast={i === steps.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
