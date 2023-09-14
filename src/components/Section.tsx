import {LocalizableText} from "./LocalizableText";
import {useLocalization} from "../lib/localization/useLocalization";

export const Section = () => {
  const { translate } = useLocalization(lang, translations);
  return <section>
    <h2>
      <LocalizableText text='localization.simple' />
    </h2>
    <pre className='p-4 bg-neutral-200'>
      <code>{`<LocalizableText text='greeting' />`}</code>
    </pre>
    <p className='p-4 border-2'>
      <LocalizableText text='greeting' />
    </p>
  </section>
}
