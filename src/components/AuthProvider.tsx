import { PropsWithChildren, useEffect, useState } from "react"
import { authContext } from "../contexts/authContext"
import { app } from "../helpers/feathers"
import Login from "./Login"
import { USERS } from "../constants";

const AuthProvider = (props: PropsWithChildren<{}>) => {
    const { children } = props
    const [user, setUser] = useState(undefined)
    const [open, setOpen] = useState(false)
    const Provider = authContext.Provider

    useEffect(() => {
        app.authenticate()
            .then(authentication => setUser(authentication.user))
            .catch(e => setOpen(true))
    }, [])

    useEffect(() => {
        if (user)
            setOpen(false)
    }, [user])

    return (
        <Provider value={{ user, setUser }}>
            {children}
            <Login open={open} />
        </Provider >
    )
}
export default AuthProvider