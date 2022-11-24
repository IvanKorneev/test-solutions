import {GET_USERS} from "./get-users-action";
import {User} from "../../types/user";

const initialState = {
    users: []
};


export const usersReducer = (state = initialState, {type, payload}: { type: string, payload: User[] }) => {
    switch (type) {
        case GET_USERS: {
            return {
                ...state,
                users: payload
            }
        }
        default:
            return state
    }
};