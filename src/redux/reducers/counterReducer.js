import COUNTER from "../actions/counter";

const initialState = {
    count: 0,
    message: ""
};
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER.INCREMENT: {
            return {
                ...state,
                count: state.count + 1
            };
        }
        case COUNTER.DECREMENT: {
            return {
                ...state,
                count: state.count - 1
            };
        }
        case COUNTER.UPDATE_MESSAGE:
            return {
                ...state,
                message: action.messageValue
            };
        default:
            return state;
    }
};

export default counterReducer;