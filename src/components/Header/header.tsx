import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

interface HeaderProps {
    onPopupOpen: () => void
}

const Header = ({onPopupOpen}:HeaderProps) => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Users data base
                    </Typography>
                    <Button color="inherit" onClick={onPopupOpen}>Add user</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default Header;