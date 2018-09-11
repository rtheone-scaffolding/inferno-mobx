import { observable, action, computed } from 'mobx';
import { createTransformer } from 'mobx-utils';

import { ITransformer } from 'mobx-utils';

export default class Store {

  @observable public testValue: number = 5;

  @action
  increment = (): void => {
    this.testValue++;
  }

  @action
  decrement = (): void => {
    this.testValue--;
  }

  @computed
  get sum(): ITransformer<number, number> {
    return createTransformer((a: number) => a + this.testValue);
  }

}
