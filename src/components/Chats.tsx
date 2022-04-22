import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { chatsService, createChat, getChatsId, } from "../helpers/chats"
import { useChat, useChats } from "../hooks/chats"
import { IChat } from "../interfaces/services"
import NewChat from "./NewChat"

interface ChatListItemProps {
    chatId: string
}

const Chats = () => {

    const chats = useChats()
    // const [chats, setChats] = useState<IChat[]>([])

    // useEffect(() => {
    //     getChatsId().then(r => setChats(r.data))
    //     chatsService.on('created', (chat) => console.log(chat))
    // }, [])

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
    const chat = useChat(chatId)
    return (
        <ListItem>
            <ListItemButton>
                {chat &&
                    <ListItemText primary={chat.theme} />
                }
            </ListItemButton>
        </ListItem>
    )
}

export default Chats