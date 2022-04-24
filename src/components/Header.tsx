import AccountCircle from "@mui/icons-material/AccountCircle"
import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material"
import { useParams } from "react-router-dom";
import { useChat } from "../hooks/chats";
import { useAuthContext } from "../hooks/useAuth";

interface HeaderProps {
    width: number
}

interface ChatTitleProps {
    chatId: string
}

const Header = ({ width }: HeaderProps) => {
    const { chatId } = useParams()
    const { user } = useAuthContext()

    return (
        <AppBar
            position={'relative'}
            sx={{ m: 0 }}
        // sx={{width: `calc(100% - ${width}px)`, ml: `${width}px`}}
        >
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }}>{chatId ? <ChatTitle chatId={chatId} /> : 'Чат'}</Typography>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >
                    {user ?
                        <Avatar alt={user.nickname} src={user.avatar} />
                        :
                        <AccountCircle />
                    }
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

const ChatTitle = ({ chatId }: ChatTitleProps) => {
    const chat = useChat(chatId)

    if (chat)
        return <>{chat.theme}</>
    else
        return null
}

export default Header