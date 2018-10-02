import { delay } from 'redux-saga' 
import { take, all , put, fork } from 'redux-saga/effects'

function* additionAsync(action){
    yield put({type:'LOADING'});
    yield delay(2000);
    yield put({type:'ADDITION_ASYNC', num1: action.num1, num2:action.num2});
}

function* watchAddition(){
    const action = yield take('ADDITION');
    yield fork(additionAsync, action);
}

function* substractionAsync(action){
    yield put({type:'LOADING'});
    yield delay(2000);
    yield put({type:'SUBSTRACTION_ASYNC', num1: action.num1, num2:action.num2});
}

function* watchSubstraction(){
    const action = yield take('SUBSTRACTION');
    yield fork(substractionAsync, action);
}

export function* rootSaga(){
    yield all(
        [
            watchAddition(),
            watchSubstraction()
        ]
    )
}
