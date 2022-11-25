import React, {useEffect} from "react";
import {useTypedSelector} from "../Hooks/useTypedSelector";
import Loader from "../Loader/loader";
import {useActions} from "../Hooks/useActions";
import Error from "../Error/error";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './users-table.sass';

const UsersTable: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.users);
    const {user} = useTypedSelector(state => state.user);
    const {getUsers} = useActions();

    useEffect(() => {
        getUsers()
    }, [user]);

    if (loading) {
        return <Loader/>
    }
    if (error) {
        return <Error/>
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Website</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.company}</TableCell>
                            <TableCell>{user.website}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};
export default UsersTable;