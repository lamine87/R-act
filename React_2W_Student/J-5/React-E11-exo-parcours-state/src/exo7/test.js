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
  store.dispatch({ type: 'SWITCH_ON' });
  store.dispatch({ type: 'SWITCH_OFF' });
  store.dispatch({ type: 'SWITCH_OFF' });
  store.dispatch({ type: 'SWITCH_ON' });
  const state2 = store.getState();

  const store2 = createStore(reducer);
  store2.dispatch({ type: 'SWITCH_OFF' });
  store2.dispatch({ type: 'SWITCH_ON' });
  store2.dispatch({ type: 'CHANGE_NAME', name: 'Cuisine' });
  store2.dispatch({ type: 'RENAME_ALL', name: 'Chambre' });
  const state3 = store2.getState();
  store2.dispatch({ type: 'CHANGE_NAME', name: 'Bureau' });
  store2.dispatch({ type: 'SWITCH_OFF' });
  const state4 = store2.getState();
  store2.dispatch({ type: 'RESET' });
  store2.dispatch({ type: 'SWITCH_ON' });
  const state5 = store2.getState();

  test((
    _.isEqual(state, { light: false, name: 'Light' })
    && _.isEqual(state2, { light: true, name: 'Light' })
    && _.isEqual(state3, { light: true, name: 'Cuisine' })
    && _.isEqual(state4, { light: false, name: 'Bureau' })
    && _.isEqual(state5, { light: true, name: 'Light' })
  ));
};
