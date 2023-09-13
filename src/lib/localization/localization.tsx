import en from '../../locales/en.json';
import de from '../../locales/de.json';

// setLanguage via props
// setLanguage with context

console.log('en', en);
// console.log('de', de);

function createMap(translations: Record<string, any>) {
  const map = new Map();
  Object.entries(translations).forEach(([key, value]) => {
    if (typeof value === 'string') {
      map.set(key, value);
    } else {
      const nestedMap = createMap(value);
      map.set(key, nestedMap);
    }
  });
  return map;
}

const translationMap = createMap(en);

export function createFlattenedTranslationMap(
  translations: Record<string, any>,
  prevKey: string = '',
  map: Map<string, any> = new Map()
) {
  for (const entry in translations) {
    const newKey = prevKey ? `${prevKey}.${entry}` : entry;
    if (typeof translations[entry] === 'string') {
      map.set(newKey, translations[entry]);
    } else {
      createFlattenedTranslationMap(translations[entry], newKey, map);
    }
  }
  return map;
}

const translationMapFlattened = createFlattenedTranslationMap(en);

export function translate(key: string, language: string): string {
  // console.log('translationMap', translationMap);
  console.log('translationMapFlattened', translationMapFlattened);
  return translationMapFlattened.get(key) ?? key;
}
