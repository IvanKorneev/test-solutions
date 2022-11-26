import * as getUsers from './Users/action-creators';
import * as postUser from './User/action-creators';
import * as setCurrentPage from "./Users/action-creators";

export default {
    ...getUsers,
    ...postUser,
    ...setCurrentPage
}