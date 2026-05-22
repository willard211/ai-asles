'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Trigger entrance animation when modal opens
  useEffect(() => {
    if (isOpen) {
      // Small delay so CSS transition can kick in from initial state
      const raf = requestAnimationFrame(() => setAnimateIn(true));
      return () => cancelAnimationFrame(raf);
    } else {
      setAnimateIn(false);
      // Reset form when closed
      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setNotes('');
      setSubmitted(false);
    }
  }, [isOpen]);

  // Close on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll while modal is open
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen, handleKeyDown]);

  // Cleanup auto-close timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    closeTimerRef.current = setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  const inputClasses =
    'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors duration-200 focus:border-[#25D366] focus:outline-none focus:ring-2 focus:ring-[#25D366]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:border-[#25D366] dark:focus:ring-[#25D366]/20';

  const labelClasses =
    'mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: animateIn ? 1 : 0 }}
        onClick={onClose}
      />

      {/* Modal panel */}
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl dark:bg-gray-900"
        style={{
          opacity: animateIn ? 1 : 0,
          transform: animateIn ? 'scale(1)' : 'scale(0.95)',
          transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          aria-label={t('modal.close')}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {submitted ? (
          /* ── Success State ── */
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <svg
                className="h-8 w-8 text-[#25D366]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('modal.success')}
            </p>
          </div>
        ) : (
          /* ── Form State ── */
          <>
            {/* Header */}
            <div className="mb-6 pr-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {t('modal.title')}
              </h3>
              <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
                {t('modal.subtitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="demo-name" className={labelClasses}>
                  {t('modal.name')}
                </label>
                <input
                  id="demo-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('modal.name.placeholder')}
                  className={inputClasses}
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="demo-company" className={labelClasses}>
                  {t('modal.company')}
                </label>
                <input
                  id="demo-company"
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder={t('modal.company.placeholder')}
                  className={inputClasses}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="demo-email" className={labelClasses}>
                  {t('modal.email')}
                </label>
                <input
                  id="demo-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('modal.email.placeholder')}
                  className={inputClasses}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="demo-phone" className={labelClasses}>
                  {t('modal.phone')}
                </label>
                <input
                  id="demo-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t('modal.phone.placeholder')}
                  className={inputClasses}
                />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="demo-notes" className={labelClasses}>
                  {t('modal.note')}
                </label>
                <textarea
                  id="demo-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t('modal.note.placeholder')}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#25D366] py-3.5 text-base font-semibold text-white shadow-md shadow-green-500/20 transition-all duration-300 hover:bg-[#128C7E] hover:shadow-lg hover:shadow-green-500/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] active:scale-[0.98]"
              >
                {t('modal.submit')}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
