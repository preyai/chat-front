import { useEffect, useState } from "react"
import { chatsService, getChat, getChatsId } from "../helpers/chats"
import { IChat } from "../interfaces/services"

const useChats = () => {
    const [chats, setChats] = useState<string[]>([])

    useEffect(() => {
        getChatsId().then(r => setChats(r.data.map((chat: IChat) => chat._id)))
        chatsService.on('created', (chat) => {
            const _chats = chats.slice()
            _chats.push(chat._id)
            setChats(_chats)
        })
    }, [])

    return chats
}

const useChat = (id: string) => {
    const [chat, setChat] = useState<IChat | undefined>()

    useEffect(() => {
        getChat(id).then(r => setChat(r))
    }, [])

    return chat
}

export { useChat, useChats }