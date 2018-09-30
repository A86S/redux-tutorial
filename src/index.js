import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';

const initialState = 'state';

function reducer(state=initialState, action){
    if(action.type === 'changeState'){
        return action.payload.newState;
    }
    return state; 
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log('State Changed : '+ store.getState());
})


store.getState();

const action = {
    type: 'changeState', 
    payload : {
        newState : 'New State'
    }
};

store.dispatch(action);
store.getState();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
