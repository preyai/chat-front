import {useCallback, useEffect, useState} from "react";
import {IChat, IMessage} from "../interfaces/services";
import {getChat} from "../helpers/chats";
import {getMessages, messagesService} from "../helpers/messages";

const useMessages = (id: string) => {
    const [messages, setMessages] = useState<IMessage[]>([])

    const listener = useCallback((message:IMessage)=>{
        if (message.chat === id)
            setMessages((prev) => {
                const copy = prev.slice()
                copy.push(message)
                return copy
            })
    },[id])

    useEffect(() => {
        messagesService.removeListener('created',listener)
        getMessages(id).then(r => setMessages(r.data.sort(sort)))
        messagesService.on('created', listener)
        return () => {
            messagesService.removeListener('created',listener)
        }
    }, [id, listener])

    const sort = (a:IMessage, b:IMessage) => {
        if (a.createdAt < b.createdAt)
        return -1
        if (a.createdAt > b.createdAt)
        return 1
        return 0
    }

    return messages
}

export {useMessages}