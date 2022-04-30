import { Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemText, Popover, TextField, Typography } from "@mui/material";
import { useStoreContext } from "../hooks/useStore";
import { useChat } from "../hooks/chats";
import { useMessages } from "../hooks/messages";
import NewMessage from "./NewMessage";
import { IMessage } from "../interfaces/services";
import { MouseEvent, useEffect, useRef, useState,UIEvent } from "react";
import moment from "moment";
import 'moment/locale/ru';


interface ChatProps {
    chatId: string
}
interface MessageProps {
    message: IMessage
}

const Chat = ({ chatId }: ChatProps) => {
    const {messages, loadMessages, isLoad} = useMessages(chatId)
    const scrollRef = useRef<HTMLUListElement>(null)
    const [height,setHeight] = useState<number|undefined>(undefined)

    useEffect(() => {
        if (scrollRef.current) {
            if (!height)
                scrollRef.current.scrollTo({top:scrollRef.current.scrollHeight});
            else {
                scrollRef.current.scrollTo({top: scrollRef.current.scrollHeight - height})
                setHeight(undefined)
            }
        }
    }, [messages]);

    const scrollHandler = (e: UIEvent<HTMLUListElement>) => {
        if (e.currentTarget.scrollTop === 0 && !height) {
            setHeight(e.currentTarget.scrollHeight)
            loadMessages()
        }
    }

    return (
        <Box sx={{
            flex: 1,
            backgroundColor: '#d2d2d2',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
        }}>
            <List
                onScroll={scrollHandler}
                ref={scrollRef}
                sx={{ flex: 1, overflow: 'auto' }}
            >
                {messages.map((message) => (
                    <Message message={message} key={message._id} />
                ))}
            </List>
            <NewMessage chat={chatId} />
        </Box>
    )
}

const Message = ({ message }: MessageProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <ListItem>
            <ListItemAvatar
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <Avatar

                    alt={message.user.nickname}
                    src={message.user.avatar}
                />

            </ListItemAvatar>
            <Popover
                id="mouse-over-popover"
                sx={{

                    pointerEvents: 'none',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                // disableRestoreFocus
            >
                <Typography sx={{p: 1}}>{message.user.nickname}</Typography>
            </Popover>
            <ListItemText
                primary={message.text}
                secondary={moment(message.createdAt).locale('ru').calendar()}
            />

        </ListItem>
    );
}

export default Chat