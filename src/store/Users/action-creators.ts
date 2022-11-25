import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";
import {BASE_URL} from "../../consts/base-url";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS});
            const response = await axios.get(`${BASE_URL}/users`);
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Error loading'});
        }
    }
};