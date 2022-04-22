import { CHATS } from "../constants"
import { app } from "./feathers"

const chatsService = app.service(CHATS)

const createChat = async (theme: string) => {
    const chat = await chatsService.create({
        theme
    })
    return chat
}

const getChat = async (chatId: string) => {
    const chat = await chatsService.get(chatId)
    return chat
}

const getChatsId = async () => {
    const chats = await chatsService.find({ query: { $select: ['_id'] } })
    return chats
}

export { chatsService, createChat, getChat, getChatsId }