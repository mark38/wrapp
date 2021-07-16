import { GET_STATISTICS_LIST } from "../actions/types";

const initialState = {
    statistics: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_STATISTICS_LIST:
            return {
                ...state,
                statistics: action.payload
            }

        default:
            return state;
    }
}