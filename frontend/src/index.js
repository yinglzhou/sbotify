import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import csrfFetch from './store/csrf';
import * as sessionActions from './store/session';
import App from './App';
import * as albumActions from './store/album';
import * as artistActions from './store/artist';
import * as songActions from './store/song';
import { Time } from './components/MainContent';


const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.csrfFetch = csrfFetch;
  window.sessionActions = sessionActions;
  window.albumActions = albumActions;
  window.artistActions = artistActions;
  window.songActions = songActions;
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
