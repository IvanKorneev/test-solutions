import {User} from "../../types/user";

export const GET_USERS = 'GET_USERS';

export const getUsers = (users: User[]) => ({
    type: GET_USERS,
    payload: users
});