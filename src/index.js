import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { store } from './createStore'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// husky is used in this project (check package.json for husky config)
// it is used to run the tests before a git action

// CI=true will make sure that it comes out of the "npm run test" command
// otherwise it stay in that terminal forever