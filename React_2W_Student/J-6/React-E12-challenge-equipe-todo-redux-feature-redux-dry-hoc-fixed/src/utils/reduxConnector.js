import React from 'react';
import store from 'src/store';
import shallowEqual from 'shallow-equal/objects';
/**
 * Curried component wrapper, which is:
 * - connected to the Redux store
 * - delegating its rendering to the wrapped, parameter-specified component
 */

const reduxConnector1 = (
  readStrategy = () => {}, // how to read from global state
  writeStrategy = () => {} // how to edit the global state
) => Component => {
  // return (
  //   <ConnectedComponent
  //     readStrategy={readStrategy}
  //     writeStrategy={writeStrategy}
  //   >
  //     <Component />
  //   </ConnectedComponent>
  // );

  /**
   * A wrapper component. It connects to the global state (using a Redux store).
   */
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.buildLocalState();
    }

    componentDidMount() {
      store.subscribe(this.syncStates);
    }

    syncStates = () => {
      this.setState(this.buildLocalState());
    }

    /**
     * Build a new local state (object filled with keys which values are sync with
     * the global, Redux state).
     */
    buildLocalState = () => {
      const globalState = store.getState();
      return {
        ...readStrategy(globalState),
        ...writeStrategy(store.dispatch)
      };
    }

    render() {
      return <Component { ...this.state } />;
    }
  };
};


function reduxConnector2(mapStateToProps, mapDispatchToProps) {
  return function(WrappedComponent) {
    return class WrapperComponent extends React.Component {
      constructor() {
        super();
        this.state = { storeState: store.getState() };
      }

      shouldComponentUpdate() {
        // If the props to WrapperComponent do not change
        // between setState calls, then we don't need to re-render.
        // On the previous re-render, we cached the results of
        // mapStateToProps. That's what this.oldProps is.
        const newProps = mapStateToProps(this.state.storeState, this.props);
        return !shallowEqual(newProps, this.oldProps);
      }

      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          this.setState({ storeState: store.getState() });
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        // We need to hang onto the previous result of
        // mapStateToProps to use the next time
        // shouldComponentUpdate runs
        this.oldProps = mapStateToProps(this.state.storeState, this.props);
        const newProps = Object.assign({}, this.oldProps, mapDispatchToProps(store.dispatch.bind(this)));
        return <WrappedComponent {...newProps} />;
      }
    };
  };
}
export default reduxConnector1;
// export default reduxConnector2;
