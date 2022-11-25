import {User} from "../../types/user";

export interface UserState {
    user: User | null;
    loading: boolean;
    error: null | string;
}

export enum PostUserActionTypes {
    POST_USER_REQUEST = 'POST_USER_REQUEST',
    POST_USER_SUCCESS = 'POST_USER_SUCCESS',
    POST_USER_ERROR = 'POST_USER_ERROR'
}

interface PostUserRequestAction {
    type: PostUserActionTypes.POST_USER_REQUEST;
}

interface PostUserSuccessAction {
    type: PostUserActionTypes.POST_USER_SUCCESS;
    payload: User;
}

interface PostUserErrorAction {
    type: PostUserActionTypes.POST_USER_ERROR;
    payload: string;
}

export type PostUserAction = PostUserRequestAction | PostUserSuccessAction | PostUserErrorAction;