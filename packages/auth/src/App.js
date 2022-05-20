import React from 'react';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import { Route, Router, Switch } from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" exact component={Signin} />
            <Route path="/auth/signup" exact component={Signup} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
