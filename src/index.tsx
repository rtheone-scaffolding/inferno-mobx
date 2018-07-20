import 'normalize.css';

import { render } from 'inferno';
import { createRenderer } from 'fela';
import { Provider as FelaProvider } from 'inferno-fela';
import { Provider as MobXProvider } from 'inferno-mobx';
const renderer = createRenderer();

import App from './app.tsx';
import Store from './store.ts';
let store = new Store();

console.log(store);

render(
  <FelaProvider renderer={renderer}>
    <MobXProvider store={store}>
      <App />
    </MobXProvider>
  </FelaProvider>,
  document.getElementById('app')
);
