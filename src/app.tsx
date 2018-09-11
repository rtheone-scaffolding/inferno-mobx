import { Component } from 'inferno';
import { inject, observer } from 'inferno-mobx';

import { Button, AlternateButton } from './app.style';
import Store from './store';

@inject('store')
@observer
export default class App extends Component {
  increment(store: Store) {
    store.increment();
  }

  decrement(store: Store) {
    store.decrement();
  }

  render({ store }: { store: Store }) {
    return (
      <div>
        <h1>Here's a text element.</h1>
        <Button
          color="steelblue"
          onClick={() => {
            this.increment(store);
          }}>
          1 + {store.testValue} =
        </Button>
        <AlternateButton
          onClick={() => {
            this.decrement(store);
          }}>
          {store.sum(1)}
        </AlternateButton>
      </div>
    );
  }
}
