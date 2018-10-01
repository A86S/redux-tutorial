import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducerA from './reducers/reducerA'
import reducerB from './reducers/reducerB'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
    rA : reducerA,
    rB: reducerB
});


const logAction = store => {
    return next => {
        return action  => {
            const result = next(action);
            console.log("Caught in the middleware : "+JSON.stringify(result));
        }
    }
}

const store = createStore(rootReducer, applyMiddleware(logAction));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
