import React from 'react';

import Login from 'src/components/App/Login';
import ForgottenPassword from 'src/components/App/ForgottenPassword';
import './app.sass';

class App extends React.Component {
  state = {
    view: 'login',
    email: '',
    password: '',
  }

  changeView = newView => () => {
    this.setState({
      view: newView,
    });
  }

  changeInput = (evt) => {
    const { value, name } = evt.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { view, email, password } = this.state;

    return (
      <div className="app">
        { view === 'login' &&
          <Login
            email={email}
            password={password}
            changeInput={this.changeInput}
            onChangeView={this.changeView}
          />
        }
        { view === 'forgottenPassword' &&
          <ForgottenPassword
            email={email}
            changeInput={this.changeInput}
            onChangeView={this.changeView}
          />
        }
      </div>
    );
  }
}

export default App;
