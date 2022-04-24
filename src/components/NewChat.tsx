import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, List, ListItem, ListItemButton, ListItemText, Switch, TextField } from "@mui/material"
import { ChangeEvent, useEffect, useState } from "react"
import { createChat } from "../helpers/chats"

const NewChat = () => {
    const [open, setOpen] = useState(false)
    const [theme, setTheme] = useState('')
    const [isPrivate, setIsPrivate] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setTheme(event.target.value)
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsPrivate(event.target.checked);
    };

    const handleCreate = () => {
        createChat(theme, isPrivate).then(handleClose)
        setTheme('')
    }

    return (
        <>
            <Button onClick={handleClickOpen} variant="contained" sx={{ mt: 'auto' }}>Новый чат</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Новый чат</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Введите тему чата
                    </DialogContentText>
                    <TextField
                        autoFocus
                        value={theme}
                        onChange={handleInput}
                        id="theme"
                        label="Тема"
                        type="text"
                        fullWidth
                        sx={{ my: 2 }}
                    />
                    <FormControlLabel control={<Switch value={isPrivate} onChange={handleChange} />} label="Приватный режим" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button onClick={handleCreate}>Создать</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default NewChat