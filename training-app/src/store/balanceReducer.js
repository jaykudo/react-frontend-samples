const initialState = {
    balance: 0,
    loading: false
}

function balanceReducer(state=initialState, action) {
    switch(action.type) {
        case "DEPOSIT": 
            return { balance: state.balance + action.payload };
        case "WITHDRAW":
            return { balance: state.balance - action.payload };
        case "LOADING":
            return { ...state, loading:true}
        default: 
            return state;
    }
}

export default balanceReducer;