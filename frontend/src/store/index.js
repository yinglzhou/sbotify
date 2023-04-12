import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import albumReducer from './album';
import artistReducer from './artist';
import songReducer from './song';
import playbarReducer from './playbar';
import playlistReducer from './playlist';

const rootReducer = combineReducers({
    session,
    albums: albumReducer,
    artists: artistReducer,
    songs: songReducer,
    playbar: playbarReducer,
    playlists: playlistReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers = 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer)
};



export default configureStore;