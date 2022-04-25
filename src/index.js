import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,applyMiddleware,compose } from 'redux';
import { allReducers } from './reducers/allReducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { logActions } from './middleware/logActions';
//import reportWebVitals from './reportWebVitals';
//import { Button } from 'semantic-ui-react';

//const root = ReactDOM.createRoot(document.getElementById('root'));
const composedEnhacers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk,logActions));
const store = createStore(allReducers,composedEnhacers);
ReactDOM.render(
    
        <Provider store={store}>
            <App />
        </Provider>
        
    
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
