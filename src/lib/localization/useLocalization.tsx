import { useEffect, useState } from 'react';
import { createFlattenedTranslationMap } from './localization';
import {useAtomValue} from "jotai";
import {languageAtom} from "../../store/language";

function getBrowserLang() {
  const lang = navigator.languages?.[0] ?? navigator.language;
  return lang.split('-')[0].toLocaleLowerCase();
}

export function useLocalization(
  lang = getBrowserLang(),
  userTranslations = {}
) {
  const fallbackLang = useAtomValue(languageAtom)

  const [currentLang, setCurrentLang] = useState<string>(lang);
  const [translationMap, setTranslationMap] = useState<Map<string, any> | null>(
    null
  );

  useEffect(() => {
    if (!currentLang) return;

    import(`../../locales/${currentLang}.json`).then((translations) => {
      const translationObj = {
        ...translations.default,
        ...userTranslations,
      };
      const map = createFlattenedTranslationMap(translationObj);
      setTranslationMap(map);
    }).catch(() => {
        setCurrentLang(fallbackLang);
    });
  }, [currentLang]);

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
