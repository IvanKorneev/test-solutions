import {User} from "../../types/user";

export interface UsersState {
    users: User[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum GetUsersActionTypes {
    GET_USERS_REQUEST = 'GET_USERS_REQUEST',
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USERS_ERROR = 'GET_USERS_ERROR',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
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

interface SetCurrentPage {
    type: GetUsersActionTypes.SET_CURRENT_PAGE;
    payload: number
}

export type GetUsersAction = GetUsersRequestAction | GetUsersSuccessAction | GetUsersErrorAction | SetCurrentPage;
