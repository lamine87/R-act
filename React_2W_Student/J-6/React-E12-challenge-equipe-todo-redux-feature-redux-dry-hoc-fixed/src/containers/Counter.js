import connect from 'src/utils/reduxConnector';

import Counter from 'src/components/Counter';

// Read from state.
const mapStateToProps = state => ({
  count: state.tasks.filter(t => !t.done).length
});

const CounterContainer = connect(
  mapStateToProps,()=>{})
(Counter);

export default CounterContainer;
