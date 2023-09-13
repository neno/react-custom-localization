import en from '../../locales/en.json';
import de from '../../locales/de.json';

console.log('en', en);
console.log('de', de);

const translationMap = new Map();
translationMap.set('en', en);
translationMap.set('de', de);

function createMap(lang: string, translations: Record<string, string | Record<string, string>>) {
  for (const props in translations) {
    const {key, value} = props;
    if (typeof value === 'string') {
      translationMap.set(`${lang}.${key}`, value);
    }
    createMap(`${lang}.${key}`, value);
  }
}

function flattenTranslations() {
  'contact.form.firstName': 'First Name',
}

export function translate(key: string, language: string): string {
  const translations = translationMap.get(language);
  return translations[key] ?? key;
}
