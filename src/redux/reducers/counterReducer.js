import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import EmployeeApi from '../../services/EmployeeApi';

const initialState = {
    count: 0,
    message: "",
    data: []
};

export const fetchData = createAsyncThunk(
    'counter/fetchData',
    async () => {
        const response = await EmployeeApi.getEmployee();
        return response.data;
    }
);

const counterReducer = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incremented: (state) => {
            state.count = state.count + 1;
        },
        decremented: (state) => {
            state.count = state.count - 1;
        },
        updateMessage: (state, action) => {
            state.message = action.payload.value2;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {

        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload;
        });
        builder.addCase(fetchData.rejected, (state) => {

        });
    }
});

export const { incremented, decremented, updateMessage } = counterReducer.actions;

export default counterReducer.reducer;
// import COUNTER from "../actions/counter";

// const initialState = {
//     count: 0,
//     message: ""
// };
// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case COUNTER.INCREMENT: {
//             return {
//                 ...state,
//                 count: state.count + 1
//             };
//         }
//         case COUNTER.DECREMENT: {
//             return {
//                 ...state,
//                 count: state.count - 1
//             };
//         }
//         case COUNTER.UPDATE_MESSAGE:
//             return {
//                 ...state,
//                 message: action.messageValue
//             };
//         default:
//             return state;
//     }
// };

// export default counterReducer;