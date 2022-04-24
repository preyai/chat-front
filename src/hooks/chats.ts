import { useEffect, useState } from "react"
import {chatsService, getChat, getChatsId} from "../helpers/chats"
import {IChat, IMessage} from "../interfaces/services"
import {getMessages} from "../helpers/messages";

const useChats = () => {
    const [chats, setChats] = useState<string[]>([])

    useEffect(() => {
        getChatsId().then(r => setChats(r.data.map((chat: IChat) => chat._id)))
        chatsService.on('created', (chat) => {
            setChats((prev)=>{
                const _chats = prev.slice()
                _chats.push(chat._id)
                return _chats
            })
        })
        chatsService.on('removed', (chat) => {
            setChats((prev)=>{
                const _chats = prev.filter(c=>c !== chat._id)
                return _chats
            })
        })
    }, [])

    return chats
}

const useChat = (id: string) => {
    const [chat, setChat] = useState<IChat | undefined>()

    useEffect(() => {
        getChat(id).then(r => setChat(r))
    }, [id])

    return chat
}


export { useChat, useChats }