import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, browserHistory, Route, IndexRoute, Switch } from 'react-router-dom';
import configureStore from './store/configureStore.js';

import IndexPage from './pages/IndexPage';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('body'));
