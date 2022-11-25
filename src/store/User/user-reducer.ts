import {PostUserAction, PostUserActionTypes, UserState} from "./types";

const initialState: UserState = {
    user: null,
    loading: false,
    error: null
};

export const userReducer = (state = initialState, action: PostUserAction): UserState => {
    switch (action.type) {
        case PostUserActionTypes.POST_USER_REQUEST:
            return {...state, loading: true, error: null}
        case PostUserActionTypes.POST_USER_SUCCESS:
            return {...state, loading: false, error: null, user: action.payload}
        case PostUserActionTypes.POST_USER_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
};