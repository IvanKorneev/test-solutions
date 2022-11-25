import {GetUsersAction, GetUsersActionTypes, UsersState} from "./types";

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
};

export const usersReducer = (state = initialState, action: GetUsersAction): UsersState => {
    switch (action.type) {
        case GetUsersActionTypes.GET_USERS_REQUEST:
            return {loading: true, error: null, users: []}
        case GetUsersActionTypes.GET_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case GetUsersActionTypes.GET_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state
    }
};
