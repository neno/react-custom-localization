import { LocalizableText } from './components/LocalizableText';
import { Stack } from './components/Stack';

interface AppProps {
  lang?: string;
  userTranslations?: Record<string, any>;
}

function App() {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <h1>
        <LocalizableText text='appTitle' />
      </h1>
      <main>
        <Stack>
          <section>
            <h2>
              <LocalizableText text='simpleTranslation' />
            </h2>
            <pre className='p-4 bg-neutral-200'>
              <code>{`<LocalizableText text='greeting' />`}</code>
            </pre>
            <p className='p-4 border-2'>
              <LocalizableText text='greeting' />
            </p>
          </section>
          <section>
            <h2>
              <LocalizableText text='translationsWithParams' />
            </h2>
            <pre className='p-4 bg-neutral-200'>
              <code>{`<LocalizableText text='greetingWithNameAge' params={{ name: 'Andreas', age: 25 }} />`}</code>
            </pre>
            <p className='p-4 border-2'>
              <LocalizableText
                text='greetingWithNameAge'
                params={{ name: 'Andreas', age: 25 }}
              />
            </p>
          </section>
        </Stack>
      </main>
    </div>
  );
}

export default App;
