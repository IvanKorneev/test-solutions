import {User} from "../../types/user";

export interface UsersState {
    users: User[];
    loading: boolean;
    error: null | string;
}

export enum GetUsersActionTypes {
    GET_USERS_REQUEST = 'GET_USERS_REQUEST',
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USERS_ERROR = 'GET_USERS_ERROR'
}

interface GetUsersRequestAction {
    type: GetUsersActionTypes.GET_USERS_REQUEST;
}

interface GetUsersSuccessAction {
    type: GetUsersActionTypes.GET_USERS_SUCCESS;
    payload: User[];
}

interface GetUsersErrorAction {
    type: GetUsersActionTypes.GET_USERS_ERROR;
    payload: string;
}

export type GetUsersAction = GetUsersRequestAction | GetUsersSuccessAction | GetUsersErrorAction;
