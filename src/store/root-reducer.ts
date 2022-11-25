import {combineReducers} from "redux";
import {usersReducer} from "./Users/users-reducer";
import {userReducer} from "./User/user-reducer";

export const rootReducer = combineReducers(
    {
        users: usersReducer,
        user: userReducer
    }
);
export type RootState = ReturnType<typeof rootReducer>;