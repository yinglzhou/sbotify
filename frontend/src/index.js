import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import configureStore from './store';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import csrfFetch, { restoreCSRF } from './store/csrf';
import * as sessionActions from './store/session';
import App from './App';


const store = configureStore();
if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;

}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

const renderApp = () => {ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
}

if (
  sessionStorage.getItem("currentUser") === null ||
  sessionStorage.getItem("X-CSRF-Token") === null 
) {
  store.dispatch(sessionActions.restoreSession()).then(renderApp);
} else {
  renderApp();
}
