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
export default (createStore) => {
  const store = createStore();
  if (!(store && store.getState)) {
    test(false);
    return;
  }
  const state = store.getState();
  state.hello = 'coucou';
  test(_.isEqual(store.getState(), {}));
};
