import { useState } from 'react';
import './App.css';
import { translate } from './lib/localization/localization';
import { useLocalization } from './lib/localization/useLocalization';

interface AppProps {
  lang?: string;
}

function App({ lang = 'de' }: AppProps) {
  const [currentLanguage, setCurrentLanguage] = useState(lang);
  const [translatableKeys, setTranslatableKeys] = useState<{
    [key: string]: string;
  }>({});
  const { translate: translateFromHook } = useLocalization(currentLanguage);

  async function goAndTranslate(key: string) {
    const translation = await translate(key, currentLanguage);
    setTranslatableKeys((prev) => ({
      ...prev,
      [key]: translation,
    }));
  }

  function getTranslation(key: string) {
    const translation = translatableKeys[key];
    if (!translation) {
      goAndTranslate(key);
      return key;
    }
    return translation;
  }

  return (
    <div className='App'>
      <h1>Localizations</h1>
      <section></section>
      <section>
        <h2>Nested translations</h2>
        <form action=''>
          <p>
            <label>
              {translate('contact.firstName', currentLanguage)}
              <input type='text' name='firstName' id='firstName' />
            </label>
            <label>
              {getTranslation('contact.lastName')}
              <input type='text' name='lastName' id='lastName' />
            </label>
            <label>
              {translateFromHook('contact.address.city')}
              <input type='text' name='city' id='city' />
            </label>
          </p>
        </form>
      </section>
    </div>
  );
}

export default App;
