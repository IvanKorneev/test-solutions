import {Dispatch} from "redux";
import axios from "axios";
import {BASE_URL} from "../../consts/base-url";
import {User} from "../../types/user";
import {PostUserAction, PostUserActionTypes} from "./types";

export const postTableRow = (user: User) => {
    return async (dispatch: Dispatch<PostUserAction>) => {
        try {
            dispatch({type: PostUserActionTypes.POST_USER_REQUEST});
            const response = await axios.post(`${BASE_URL}/users`, user);
            dispatch({type: PostUserActionTypes.POST_USER_SUCCESS, payload: response.data});
        } catch (error) {
            dispatch({type: PostUserActionTypes.POST_USER_ERROR, payload: 'Error loading'});
        }
    }
};