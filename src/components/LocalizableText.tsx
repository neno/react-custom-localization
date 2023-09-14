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
  lang = import.meta.env.VITE_LANG.toLowerCase(),
}: LocalizableTextProps) {
  const { translate } = useLocalization(lang, userTranslations);
  return <>{translate(text, params)}</>;
}
