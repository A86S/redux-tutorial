
export const actionAdditionAsync = (num1, num2) => {
    return {
        type : 'ADDITION',
        payload : {
            num1,
            num2
        }    
    }
}

export const actionSubstrationAsync = (num1, num2) => {
    return {
        type : 'SUBSTRACTION',
        payload : {
            num1,
            num2
        }    
    }
}

export const laoding = () => {
    return {
        type : 'LOADING'
    }
}
    
export const actionAddition = (num1, num2) => {
    
    return dispatch => {
        dispatch(laoding());
        setTimeout(() => {
            dispatch(actionAdditionAsync(num1, num2))
        }, 2000);
    }
}

export const actionSubstration = (num1, num2) => {
    return dispatch => {
        dispatch(laoding());
        setTimeout(() => {
            dispatch(actionSubstrationAsync(num1, num2))
        }, 2000);
    }
}