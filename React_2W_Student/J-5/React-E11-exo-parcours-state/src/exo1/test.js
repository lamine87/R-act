/*
 * Npm local
 */
import _ from 'lodash';


/*
 * Import
 */
import test from 'src/test';


/*
 * Code
 */
const tests = [
  {
    data: {
      firstname: 'Bart',
      lastname: 'Simpson',
      color: 'yellow',
      object: 'Slingshot',
    },
    payload: {
      firstname: 'Lisa',
      object: 'Saxophone',
    },
    expected: {
      firstname: 'Lisa',
      lastname: 'Simpson',
      color: 'yellow',
      object: 'Saxophone',
    },
  },
  {
    data: {
      firstname: 'Bart',
      lastname: 'Simpson',
      color: 'yellow',
      object: 'Slingshot',
    },
    payload: {},
    expected: {
      firstname: 'Bart',
      lastname: 'Simpson',
      color: 'yellow',
      object: 'Slingshot',
    },
  },
  {
    data: {
      firstname: 'Bart',
      lastname: 'Simpson',
      color: 'yellow',
      object: 'Slingshot',
    },
    payload: {
      firstname: 'Maggie',
      object: 'pacifier',
      baby: true,
    },
    expected: {
      firstname: 'Maggie',
      lastname: 'Simpson',
      color: 'yellow',
      object: 'pacifier',
      baby: true,
    },
  },
];


/*
 * Export default
 */
export default (setState) => {
  test(
    tests.every(({ data, payload, expected }) => {
      const state = setState(data, payload);
      return _.isEqual(state, expected);
    }),
  );
};
