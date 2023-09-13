import { useEffect, useState } from 'react';
import './App.css';
import { translate } from './lib/localization/localization';

function App() {
  // const [greetingEn, setGreetingEn] = useState('');
  // const [greetingDe, setGreetingDe] = useState('');

  // useEffect(() => {
  //   translate('greeting', 'en').then((translation) => {
  //     console.log('greeting - en', translation);

  //     setGreetingEn(translation);
  //   });
  //   translate('greeting', 'de').then((translation) =>
  //     setGreetingDe(translation)
  //   );
  // }, []);

  return (
    <div className='App'>
      <h1>Localizations</h1>
      <section>
        {/* <h2>Simple Translations</h2>
        <table>
          <thead>
            <tr>
              <td>Key</td>
              <td>English</td>
              <td>German</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>greeting</th>
              <td>{greetingEn}</td>
              <td>{greetingDe}</td>
            </tr>
          </tbody>
        </table> */}
      </section>
      <section>
        <h2>Nested translations</h2>
        <form action=''>
          <p>
            <label>
              {JSON.stringify(translate('contact', 'en'))}
              <input type='text' name='firstName' id='firstName' />
            </label>
          </p>
        </form>
      </section>
    </div>
  );
}

export default App;
