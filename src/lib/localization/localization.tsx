import { LanguageCode, Translations } from './localization.types';

async function getTranslations(lang: LanguageCode): Promise<Translations> {
  const response = await fetch(`/locales/${lang}/globals.json`);
  const translations = await response.json();
  return translations;
}

export async function translate(
  key: string,
  language: string
): Promise<string> {
  const translations = await getTranslations(language as LanguageCode);
  return translations[key] || key;
}
