import { Component } from 'inferno';
import { inject, observer } from 'inferno-mobx';

import { Button, AlternateButton } from './app.style.ts';

@inject('store')
@observer
export default class App extends Component {
  increment(store) {
    store.increment();
  }

  decrement(store) {
    store.decrement();
  }

  render({ store }) {
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
