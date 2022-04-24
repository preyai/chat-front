import { USERS } from "../constants"
import { app } from "./feathers"

export const usersService = app.service(USERS)

export const getUsers = async () => {
    const users = await usersService.find()
    return users
}