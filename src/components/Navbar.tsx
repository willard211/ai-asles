'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import ChatIcon from '@/components/icons/ChatIcon';

interface NavbarProps {
  onDemoClick: () => void;
}

const NAV_LINKS = [
  { key: 'nav.features', href: '#features' },
  { key: 'nav.process', href: '#process' },
  { key: 'nav.customers', href: '#customers' },
  { key: 'nav.pricing', href: '#pricing' },
] as const;

export default function Navbar({ onDemoClick }: NavbarProps) {
  const { t, locale, setLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track scroll position for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'zh' ? 'en' : 'zh');
  }, [locale, setLocale]);

  const handleNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [],
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* ── Logo ── */}
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white transition-colors"
          >
            <ChatIcon className="h-7 w-7 text-[#25D366]" />
            <span>外贸雷达</span>
          </a>

          {/* ── Desktop nav links ── */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ key, href }) => (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => handleNavClick(href)}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#25D366] dark:hover:text-[#25D366] hover:bg-green-50/60 dark:hover:bg-green-950/30 transition-colors"
                >
                  {t(key)}
                </button>
              </li>
            ))}
          </ul>

          {/* ── Right-side actions ── */}
          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <button
              type="button"
              onClick={toggleLocale}
              aria-label="Toggle language"
              className="hidden sm:inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#25D366] dark:hover:text-[#25D366] hover:bg-green-50/60 dark:hover:bg-green-950/30 transition-colors"
            >
              {/* Globe icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.6 9h16.8M3.6 15h16.8"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9Z"
                />
              </svg>
              <span>{t('nav.language')}</span>
            </button>

            {/* Dark mode toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="rounded-lg p-2 text-gray-600 dark:text-gray-300 hover:text-[#25D366] dark:hover:text-[#25D366] hover:bg-green-50/60 dark:hover:bg-green-950/30 transition-colors"
            >
              {theme === 'dark' ? (
                /* Sun icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m8.66-13.66-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 7.66-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                  />
                </svg>
              ) : (
                /* Moon icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"
                  />
                </svg>
              )}
            </button>

            {/* CTA – Desktop */}
            <button
              type="button"
              onClick={onDemoClick}
              className="hidden lg:inline-flex items-center rounded-full bg-[#25D366] px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-green-500/25 hover:bg-[#128C7E] active:scale-[0.97] transition-all duration-200"
            >
              {t('nav.demo')}
            </button>

            {/* Hamburger – Mobile */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="lg:hidden rounded-lg p-2 text-gray-600 dark:text-gray-300 hover:bg-green-50/60 dark:hover:bg-green-950/30 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile slide-out drawer ── */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={`fixed top-0 right-0 z-[70] flex h-full w-72 flex-col bg-white dark:bg-gray-950 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex h-16 items-center justify-between px-5">
          <span className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
            <ChatIcon className="h-6 w-6 text-[#25D366]" />
            外贸雷达
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="rounded-lg p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="h-px bg-gray-200 dark:bg-gray-800" />

        {/* Drawer body */}
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {NAV_LINKS.map(({ key, href }) => (
            <button
              key={key}
              type="button"
              onClick={() => handleNavClick(href)}
              className="rounded-lg px-4 py-3 text-left text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-950/30 hover:text-[#25D366] transition-colors"
            >
              {t(key)}
            </button>
          ))}

          <div className="my-2 h-px bg-gray-200 dark:bg-gray-800" />

          {/* Language toggle – mobile */}
          <button
            type="button"
            onClick={toggleLocale}
            className="flex items-center gap-2 rounded-lg px-4 py-3 text-left text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-950/30 hover:text-[#25D366] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.6 9h16.8M3.6 15h16.8"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9Z"
              />
            </svg>
            {t('nav.language')}
          </button>

          {/* Theme toggle – mobile */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-2 rounded-lg px-4 py-3 text-left text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-green-950/30 hover:text-[#25D366] transition-colors"
          >
            {theme === 'dark' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m8.66-13.66-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 7.66-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"
                />
              </svg>
            )}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>

        {/* Drawer footer CTA */}
        <div className="border-t border-gray-200 dark:border-gray-800 p-4">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onDemoClick();
            }}
            className="w-full rounded-full bg-[#25D366] px-5 py-3 text-center text-base font-semibold text-white shadow-sm shadow-green-500/25 hover:bg-[#128C7E] active:scale-[0.97] transition-all duration-200"
          >
            {t('nav.demo')}
          </button>
        </div>
      </aside>
    </>
  );
}
