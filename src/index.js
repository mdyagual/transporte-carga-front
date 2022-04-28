import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,applyMiddleware,compose } from 'redux';
import { allReducers } from './reducers/allReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { logActions } from './middleware/logActions';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

//const composedEnhacers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk,logActions));
const composedEnhacers = compose(applyMiddleware(thunk,logActions));
const persistConfig = {
    key: 'primary',
    storage,
    version: 1
}

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore( persistedReducer,{},composedEnhacers);
const persistor = persistStore(store);
ReactDOM.render(
    
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <App />
            </PersistGate>
        </Provider>
        
    
    ,
    document.getElementById('root')
);
