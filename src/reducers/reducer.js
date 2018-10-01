const initialState = {
    age : 21,
    history : []
}

const reducer = (state=initialState, action) => {
    const newState = { ...state };
    switch(action.type){
        case 'AGE_UP':
            return{
                ...state,
                age : state.age + action.value,
                history : state.history.concat({id: Math.random(), age : state.age + action.value})
            }
        case 'AGE_DOWN':
            return{
                ...state,
                age : state.age - action.value,
                history : state.history.concat({id: Math.random(), age : state.age - action.value})
            }
        case 'DEL_ITEM':
            return{
                ...state, 
                history : newState.history.filter( item => item.id !== action.id)
            }
        default:
            return state;
    }
}

export default reducer;