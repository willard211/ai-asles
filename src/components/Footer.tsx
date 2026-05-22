'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ChatIcon from '@/components/icons/ChatIcon';

export default function Footer() {
  const { t } = useLanguage();

  const linkClasses =
    'text-gray-400 transition-colors duration-200 hover:text-green-400';

  const columnTitleClasses =
    'mb-4 text-sm font-semibold uppercase tracking-wider text-gray-200';

  const columns = [
    {
      title: t('footer.product'),
      links: [
        { label: t('footer.product.features'), href: '#features' },
        { label: t('footer.product.pricing'), href: '#pricing' },
        { label: t('footer.product.changelog'), href: '#changelog' },
      ],
    },
    {
      title: t('footer.company'),
      links: [
        { label: t('footer.company.about'), href: '#about' },
        { label: t('footer.company.careers'), href: '#careers' },
        { label: t('footer.company.partners'), href: '#partners' },
      ],
    },
    {
      title: t('footer.support'),
      links: [
        { label: t('footer.support.help'), href: '#help' },
        { label: t('footer.support.contact'), href: '#contact' },
        { label: t('footer.support.privacy'), href: '#privacy' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & description – spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <ChatIcon size={36} />
              <span className="text-xl font-bold text-white">外贸智联</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              {t('footer.description')}
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className={columnTitleClasses}>{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={linkClasses}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom divider + copyright */}
        <div className="mt-16 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
