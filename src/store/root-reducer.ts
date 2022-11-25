import {combineReducers} from "redux";
import {usersReducer} from "./Users/users-reducer";

export const rootReducer = combineReducers(
    {
        users: usersReducer
    }
);
export type RootState = ReturnType<typeof rootReducer>;