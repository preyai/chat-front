import { createContext } from "react";
import { authState } from "../interfaces/auth";

const defaultState: authState = {
    user: undefined,
    setUser: () => { }
}

export const authContext = createContext(defaultState)

