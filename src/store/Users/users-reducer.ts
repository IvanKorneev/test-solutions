import {GetUsersAction, GetUsersActionTypes, UsersState} from "./types";

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null,
    page: 1,
    limit: 5
};

export const usersReducer = (state = initialState, action: GetUsersAction): UsersState => {
    switch (action.type) {
        case GetUsersActionTypes.GET_USERS_REQUEST:
            return {...state, loading: true, error: null, users: []}
        case GetUsersActionTypes.GET_USERS_SUCCESS:
            return {...state, loading: false, error: null, users: action.payload}
        case GetUsersActionTypes.GET_USERS_ERROR:
            return {...state, loading: false, error: action.payload, users: []}
        case GetUsersActionTypes.SET_CURRENT_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
};
