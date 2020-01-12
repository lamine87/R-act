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
export default (reducer) => {
  let state = {};
  state = reducer(state, 'SWITCH_ON');
  state = reducer(state, 'SWITCH_OFF');
  state = reducer(state, 'SWITCH_OFF');
  state = reducer(state, 'SWITCH');

  let state2 = reducer();
  state2 = reducer(state2, 'SWITCH_ON');

  let state3 = reducer(state2, 'SWITCH_OFF');
  state3 = reducer(state3, 'SWITCH_ON');
  state3 = reducer(state3, 'SWITCH_OFF');
  state3 = reducer(state3);

  const state4 = reducer({ fake: 'value' }, 'UNKNOWN_ACTION');
  const state5 = reducer({ fake: 'value' }, 'SWITCH_OFF');
  const state6 = reducer({ fake: 'value' }, 'SWITCH_ON');

  test((
    _.isEqual(state, { light: false })
    && _.isEqual(state2, { light: true })
    && _.isEqual(state3, { light: false })
    && _.isEqual(state4, { fake: 'value' })
    && _.isEqual(state5, { fake: 'value', light: false })
    && _.isEqual(state6, { fake: 'value', light: true })
  ));
};
