import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import type { InitOptions } from 'i18next';

// Локалізації
import en from './locales/en.json';
import uk from './locales/uk.json';

const resources = {
    en: { translation: en },
    uk: { translation: uk },
};

const options: InitOptions = {
    resources,
    lng: Localization.getLocales()[0]?.languageCode || 'uk',
    fallbackLng: 'uk',
    interpolation: { escapeValue: false },
    compatibilityJSON: 'v4',
};

i18n.use(initReactI18next).init(options);

export default i18n;
