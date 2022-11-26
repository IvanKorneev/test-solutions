import {Dispatch} from "redux";
import axios from "axios";
import {BASE_URL} from "../../consts/base-url";
import {GetUsersAction, GetUsersActionTypes} from "./types";


export const getUsers = (page = 1, limit = 5) => {
    return async (dispatch: Dispatch<GetUsersAction>) => {
        try {
            dispatch({type: GetUsersActionTypes.GET_USERS_REQUEST});
            const response = await axios.get(`${BASE_URL}/users`, {
                params: {_page: page, _limit: limit}
            });
            dispatch({type: GetUsersActionTypes.GET_USERS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: GetUsersActionTypes.GET_USERS_ERROR, payload: 'Error loading'});
        }
    }
};

export const setCurrentPage = (page: number): GetUsersAction => {
    return {type: GetUsersActionTypes.SET_CURRENT_PAGE, payload: page}
}