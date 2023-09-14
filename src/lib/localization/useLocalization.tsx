import { useEffect, useState } from 'react';
import { createFlattenedTranslationMap } from './localization';

export function useLocalization(
  lang = import.meta.env.VITE_LANG.toLowerCase(),
  userTranslations = {}
) {
  const [translationMap, setTranslationMap] = useState<Map<string, any> | null>(
    null
  );

  useEffect(() => {
    if (!lang) return;

    import(`../../locales/${lang}.json`).then((translations) => {
      const translationObj = {
        ...translations.default,
        ...userTranslations,
      };
      const map = createFlattenedTranslationMap(translationObj);
      setTranslationMap(map);
    });
  }, [lang]);

  function replaceWithParams(text: string, params: Record<string, string>) {
    return text.replace(/\${([^}]+)}/g, (_, key) => params[key] || '');
  }

  function translate(key: string, params?: Record<string, string>): string {
    const translatedText = translationMap?.get(key);

    if (translatedText && params && Object.keys(params).length > 0) {
      return replaceWithParams(translatedText, params);
    }

    return translationMap?.get(key) ?? key;
  }

  return {
    translate,
  };
}
