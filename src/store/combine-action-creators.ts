import * as getUsers from './Users/action-creators';
import * as postUser from './User/action-creators';

export default {
    ...getUsers,
    ...postUser,
}