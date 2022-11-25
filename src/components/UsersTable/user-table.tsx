import React from "react";
import {useTypedSelector} from "../Hooks/useTypedSelector";

const UserTable: React.FC = () => {
    const {users,error,loading} = useTypedSelector(state => state.users);
    return (
        <div>

        </div>
    )
}
export default UserTable