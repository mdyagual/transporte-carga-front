import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,applyMiddleware,compose } from 'redux';
import { allReducers } from './reducers/allReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { logActions } from './middleware/logActions';

//const composedEnhacers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk,logActions));
const composedEnhacers = compose(applyMiddleware(thunk,logActions));
const store = createStore(allReducers,composedEnhacers);
ReactDOM.render(
    
        <Provider store={store}>
            <App />
        </Provider>
        
    
    ,
    document.getElementById('root')
);
