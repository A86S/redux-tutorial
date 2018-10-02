const initialState = {
    num1: 1,
    num2: 1,
    result: 2,
    isLoading : false
}

const reducer = (state = initialState , action) => {
    //console.log('reducer '+ JSON.stringify(action));
    const defaultRedux = 10;
    switch (action.type) {
        
        case 'ADDITION':
            return {
                ...state, 
                result : parseInt(action.payload.num1, defaultRedux) + parseInt(action.payload.num2, defaultRedux),
                isLoading : false
            }
        case 'SUBSTRACTION':
            return {
                ...state,
                result : parseInt(action.payload.num1, defaultRedux) - parseInt(action.payload.num2, defaultRedux),
                isLoading : false
            }
        case 'LOADING' : 
           return {...state, isLoading: true}
        default:
            return {
                ...state
            }
    }


}

export default reducer;