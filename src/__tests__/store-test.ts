import Store from '../store';

describe('Store', () => {
  it('defaults a number', () => {
    const store = new Store();
    expect(typeof store.testValue).toBe('number');
  });

  it('increments', () => {
    const store = new Store();
    let x = store.testValue;
    store.increment();
    expect(store.testValue).toBe(x + 1);
  });

  it('decrements', () => {
    const store = new Store();
    let x = store.testValue;
    store.decrement();
    expect(store.testValue).toBe(x - 1);
  });

  it('sums two numbers', () => {
    const store = new Store();
    let x = store.testValue;
    expect(store.sum(2)).toBe(x + 2);
  });
});
