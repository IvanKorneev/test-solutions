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
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Company</TableCell>
                        <TableCell align="right">Website</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="right">{user.name}</TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            <TableCell align="right">{user.phone}</TableCell>
                            <TableCell align="right">{user.company}</TableCell>
                            <TableCell align="right">{user.website}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};
export default UsersTable;