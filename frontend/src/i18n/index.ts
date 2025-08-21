import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import type { InitOptions } from 'i18next';

import en from './locales/en.json';
import uk from './locales/uk.json';

const resources = {
    en: { translation: en },
    uk: { translation: uk },
};

const deviceLang = Localization.getLocales()[0]?.languageCode;

const defaultLang = ['en', 'uk'].includes(deviceLang ?? '') ? deviceLang! : 'en';

const options: InitOptions = {
    resources,
    lng: defaultLang,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    compatibilityJSON: 'v4',
};

i18n.use(initReactI18next).init(options);

export default i18n;
