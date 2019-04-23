import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Login from './components/auth/login';
import Register from './components/auth/register';
import PrivateRoute from './components/auth/privateroute';
import store from './redux/store';
import Dashboard from './components/dashboard/dashboard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
              <Route exact path="/" component={Login} />
              <Route path="/register" component={Register} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
          </Router>
      </Provider>
    );
  }
}

export default App;
