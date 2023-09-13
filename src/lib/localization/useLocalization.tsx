import { useEffect, useState } from 'react';
import { createFlattenedTranslationMap } from './localization';

export function useLocalization(
  lang: string,
  userTranslations: Record<string, any>
) {
  const [translationMap, setTranslationMap] = useState<Map<string, any> | null>(
    null
  );

  useEffect(() => {
    import(`../../locales/${lang}.json`).then((translations) => {
      const translationObj = {
        ...translations.default,
        ...userTranslations,
      };
      const map = createFlattenedTranslationMap(translationObj);
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
