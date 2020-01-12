/*
 * Npm local
 */
import _ from 'lodash';


/*
 * Import
 */
import test from 'src/test';


/*
 * Export default
 */
export default (createStore, reducer) => {
  const store = createStore(reducer);
  if (!(store && store.getState && store.dispatch)) {
    test(false);
    return;
  }

  const state = store.getState();
  store.dispatch('SWITCH_ON');
  store.dispatch('SWITCH_OFF');
  store.dispatch('SWITCH_OFF');
  store.dispatch('SWITCH_ON');
  const state2 = store.getState();

  const store2 = createStore(reducer);
  store2.dispatch('SWITCH_OFF');
  store2.dispatch('SWITCH_ON');
  store2.dispatch('CHANGE_NAME');
  const state3 = store2.getState();
  store2.dispatch('SWITCH_OFF');
  const state4 = store2.getState();

  test((
    _.isEqual(state, {})
    && _.isEqual(state2, { light: true })
    && _.isEqual(state3, { light: true })
    && _.isEqual(state4, { light: false })
  ));
};
