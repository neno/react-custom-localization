import { useEffect, useState } from 'react';
import { createFlattenedTranslationMap } from './localization';

export function useLocalization(lang: string) {
  const [translationMap, setTranslationMap] = useState<Map<string, any> | null>(
    null
  );

  useEffect(() => {
    import(`../../locales/${lang}.json`).then((translations) => {
      const map = createFlattenedTranslationMap(translations.default);
      setTranslationMap(map);
    });
  }, [lang]);

  function translate(key: string): string {
    // console.log('translationMap', translationMap);
    // console.log('translationMapFlattened', translationMapFlattened);
    console.log('translationMap', translationMap);

    return translationMap?.get(key) ?? key;
  }

  return {
    translate,
  };
}
