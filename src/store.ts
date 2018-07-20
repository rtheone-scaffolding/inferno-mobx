import { observable, action, computed } from 'mobx';
import { createTransformer } from 'mobx-utils';

export default class Store {

  @observable testValue = 5;

  @action
  increment = () => {
    this.testValue++;
  }

  @action
  decrement = () => {
    this.testValue--;
  }

  @computed
  get sum(): number {
    return createTransformer(a => a + this.testValue);
  }

}
