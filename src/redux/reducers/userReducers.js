import USER from "../actions/user";

const initialState = {
    name: "",
    age: ""
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER.UPDATE_NAME: {
            return {
                ...state,
                name: action.nameValue
            };
        }
        case USER.UPDATE_AGE: {
            return {
                ...state,
                age: action.ageValue
            };
        }
        default:
            return state;
    }
};

export default userReducer;