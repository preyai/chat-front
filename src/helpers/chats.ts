import {CHATS, MESSAGES} from "../constants"
import { app } from "./feathers"

const chatsService = app.service(CHATS)

const createChat = async (theme: string, isPrivate:boolean) => {
    const chat = await chatsService.create({
        theme,
        private:isPrivate
    })
    return chat
}

const getChat = async (chatId: string) => {
    const chat = await chatsService.get(chatId)
    return chat
}

const getChats = async () => {
    const chats = await chatsService.find()
    return chats
}

const getChatsId = async () => {
    const chats = await chatsService.find({ query: { $select: ['_id'] } })
    return chats
}

export { chatsService, createChat, getChat, getChats, getChatsId }