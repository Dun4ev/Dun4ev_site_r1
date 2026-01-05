import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 hover:border-teal-400/50 transition-all duration-300 text-xs font-medium text-slate-400 hover:text-teal-300 active:scale-95"
            aria-label="Switch Language"
        >
            <Globe className={`w-3.5 h-3.5 transition-transform duration-500 ${i18n.language === 'ru' ? 'rotate-180' : ''}`} />
            <span className="uppercase tracking-widest">
                {i18n.language === 'en' ? 'RU' : 'EN'}
            </span>
        </button>
    );
};
