import {Dispatch} from "redux";
import axios from "axios";
import {BASE_URL} from "../../consts/base-url";
import {GetUsersAction, GetUsersActionTypes} from "./types";


export const getUsers = () => {
    return async (dispatch: Dispatch<GetUsersAction>) => {
        try {
            dispatch({type: GetUsersActionTypes.GET_USERS_REQUEST});
            const response = await axios.get(`${BASE_URL}/users`);
            dispatch({type: GetUsersActionTypes.GET_USERS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: GetUsersActionTypes.GET_USERS_ERROR, payload: 'Error loading'});
        }
    }
};