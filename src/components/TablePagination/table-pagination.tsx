import * as React from 'react';
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack';
import {useActions} from "../Hooks/useActions";
import {ChangeEvent, useCallback} from "react";
import {useTypedSelector} from "../Hooks/useTypedSelector";
import './table-pagination.sass'


const TablePagination = () => {
    const {setCurrentPage} = useActions();
    const {page} = useTypedSelector(state => state.users);

     const setCurrentPageCallback = useCallback((event: ChangeEvent<unknown>, value: number) => {
         setCurrentPage(value);
     }, [setCurrentPage]);

    return (
        <div className='pagination-container'>
            <Stack spacing={1}>
                <Pagination count={3} shape="rounded" page={page} onChange={setCurrentPageCallback} size='large'/>
            </Stack>
        </div>

    );
};
export default TablePagination;