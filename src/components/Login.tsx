import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { USERS } from "../constants"
import { app } from "../helpers/feathers"
import { useAuthContext } from "../hooks/useAuth"

interface LoginProps {
    open: boolean
}

const Login = ({ open }: LoginProps) => {
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { setUser } = useAuthContext()

    const register = () => {
        app.service(USERS).create({
            nickname,
            password
        })
            .then(() => login())
            .catch(e => setError(e.message))
    }

    const login = () => {
        app.authenticate({
            strategy: 'local',
            nickname,
            password
        }).then(val => {
            setUser(val.user)
        }).catch(e => setError(e.message))
    }

    return (
        <Dialog
            open={open}
        >
            <DialogTitle>Войти</DialogTitle>
            <DialogContent>
                <TextField
                    label={'nickname'}
                    value={nickname}
                    onChange={(event) => setNickname(event.target.value)}
                    type={'text'}
                    fullWidth
                    sx={{ my: 1 }}
                />
                <TextField
                    label={'password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type={'password'}
                    fullWidth
                    sx={{ my: 1 }}
                />
                <DialogContentText>{error}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={login}>Войти</Button>
                <Button onClick={register}>Зарегистрироваться</Button>
            </DialogActions>
        </Dialog >
    )
}
export default Login