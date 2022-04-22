import AccountCircle from "@mui/icons-material/AccountCircle"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
// import { AccountCircle } from '@mui/icons-material';

interface HeaderProps {
    width: number
}

const Header = ({ width }: HeaderProps) => {
    return (
        <AppBar sx={{ width: `calc(100% - ${width}px)`, ml: `${width}px` }}>
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