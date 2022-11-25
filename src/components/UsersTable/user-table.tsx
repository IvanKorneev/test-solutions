import React, {useEffect} from "react";
import {useTypedSelector} from "../Hooks/useTypedSelector";
import {fetchUsers} from "../../store/Users/action-creators";
import Loader from "../Loader/loader";
import {useActions} from "../Hooks/useActions";

const UserTable: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.users);
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, []);
    if (loading) {
        return <Loader/>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user => <div>
                {user.name}
            </div>)}
        </div>
    )
}
export default UserTable;