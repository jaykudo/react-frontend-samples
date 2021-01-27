const initialState = {
    balance: 0
}

function loanReducer(state=initialState, action) {
    switch(action.type) {
        case "APPLY": 
            return { loan: true };
        default: 
            return state;
    }
}

export default loanReducer;