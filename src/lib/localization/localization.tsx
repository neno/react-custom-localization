import { LanguageCode, Translations } from './localization.types';

async function getTranslations(lang: LanguageCode): Promise<Translations> {
  return import(`../../locales/${lang}/globals.json`).then(
    ({ default: translations }) => translations
  );
}

export async function translate(
  key: string,
  language: string
): Promise<string> {
  const translations = await getTranslations(language as LanguageCode);
  console.log('translate', translations);

  return translations[key] ?? key;
}

('contact.form.name');
