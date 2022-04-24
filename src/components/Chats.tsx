import { Badge, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, LinearProgress, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, TextField } from "@mui/material"
import { MouseEvent, useCallback, useEffect, useState } from "react"
import { chatsService, createChat, getChatsId, } from "../helpers/chats"
import { useChat, useChats } from "../hooks/chats"
import { IMessage } from "../interfaces/services"
import NewChat from "./NewChat"
import { messagesService } from "../helpers/messages";
import { useNavigate, useParams } from "react-router-dom"
import EditIcon from '@mui/icons-material/Edit';
import { useAuthContext } from "../hooks/useAuth"

interface ChatListItemProps {
    chatId: string
}

const Chats = () => {

    const chats = useChats()

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <List>
                {chats.map(chat => (
                    <ChatListItem chatId={chat} key={chat} />
                ))}
            </List>
            <NewChat />
        </Box>
    )
}

const ChatListItem = ({ chatId }: ChatListItemProps) => {
    const [newMessage, setNewMessage] = useState(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [isOwner, setIsOwner] = useState(false)
    const chat = useChat(chatId)
    const { user } = useAuthContext()
    const navigate = useNavigate()
    const { chatId: current } = useParams()

    const listener = useCallback((message: IMessage) => {

        if (message.chat === chatId) {
            setNewMessage(true)
            messagesService.removeListener('created', listener)
        }
    }, [chatId]);

    useEffect(() => {
        messagesService.removeListener('created', listener)
        if (chatId !== current)
            messagesService.on('created', listener)

    }, [chatId, current, listener])

    useEffect(() => {
        if (chat && user)
            setIsOwner(chat.owner === user._id)
    }, [chat, user])

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handler = () => {
        setNewMessage(false)
        navigate(`/chat/${chatId}`)
    }

    const editHandler = () => { }
    const deleteHandler = () => {
        chatsService.remove(chatId);
    }
    const leaveHandler = () => { }

    return (
        <ListItem>
            {chat ?
                <>
                    <ListItemButton onClick={handler}>
                        <Badge
                            color="secondary"
                            // badgeContent={' '}
                            variant='dot'
                            invisible={!newMessage}
                        >

                            <ListItemText primary={chat.theme} />

                        </Badge>
                    </ListItemButton>
                    <IconButton onClick={handleClick} edge="end" aria-label="delete">
                        <EditIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        {isOwner &&
                            <MenuItem onClick={editHandler}>Edit</MenuItem>
                        }
                        {isOwner &&
                            <MenuItem onClick={deleteHandler}>Delete</MenuItem>
                        }
                        <MenuItem onClick={leaveHandler}>Leave</MenuItem>
                    </Menu>
                </>
                :
                <CircularProgress />
            }
        </ListItem>
    )
}

export default Chats