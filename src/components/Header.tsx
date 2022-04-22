import { AccountCircle } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
// import { AccountCircle } from '@mui/icons-material';

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }}>Чат</Typography>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
export default Header