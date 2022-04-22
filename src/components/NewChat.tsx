import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemButton, ListItemText, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { createChat } from "../helpers/chats"

const NewChat = () => {
    const [open, setOpen] = useState(false)
    const [theme, setTheme] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreate = () => {
        createChat(theme).then(handleClose)
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
                        onChange={e => setTheme(e.target.value)}
                        id="theme"
                        label="Тема"
                        type="text"
                        fullWidth
                    />
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