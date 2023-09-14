import { useLocalization } from '../lib/localization/useLocalization';

interface LocalizableTextProps {
  text: string;
  params?: Record<string, any>;
  lang?: string;
  userTranslations?: Record<string, any>;
}

export function LocalizableText({
  text,
  params,
  userTranslations = {},
  lang,
}: LocalizableTextProps) {
  const { translate } = useLocalization(lang, userTranslations);
  console.log('browser lang', navigator.language);

  return <>{translate(text, params)}</>;
}
