import { useLocalization } from '../lib/localization/useLocalization';

interface LocalizableTextProps {
  text: string;
  params?: Record<string, any>;
  lang?: string;
  translations?: Record<string, any>;
}

export function LocalizableText({
  text,
  params,
  translations = {},
  lang,
}: LocalizableTextProps) {
  const { translate } = useLocalization(lang, translations);
  console.log('browser lang', navigator.language);

  return <>{translate(text, params)}</>;
}
