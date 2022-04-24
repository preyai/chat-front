import {Box, Button, TextField} from "@mui/material";
import {ChangeEvent, SyntheticEvent, useState} from "react";
import {createMessage} from "../helpers/messages";
import {useAuthContext} from "../hooks/useAuth";

interface NewMessageProps {
    chat:string
}

const NewMessage = ({chat}:NewMessageProps) => {
    const [text,setText] = useState('')

    const changeText = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>setText(e.target.value)
    const send = () => {
        if (text !== '')
            createMessage(chat, text).then(() => setText(''))
    }

    return (
        <Box sx={{display: 'flex'}}>
            <TextField value={text} onChange={changeText} label="Сообщение" variant="standard" fullWidth={true}/>
            <Button onClick={send} variant="outlined">Отправить</Button>
        </Box>
    )
}
export default NewMessage