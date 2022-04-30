import {useCallback, useEffect, useState} from "react";
import {IChat, IMessage} from "../interfaces/services";
import {getChat} from "../helpers/chats";
import {getMessages, messagesService} from "../helpers/messages";

const useMessages = (id: string) => {
    const [messages, setMessages] = useState<IMessage[]>([])
    const [total,setTotal] = useState(1)
    const [isLoad,setIsLoad] = useState(false)

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
        loadMessages()
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

    const loadMessages = () => {
        if (messages.length < total && !isLoad) {
            setIsLoad(true)
            getMessages(id, messages.length).then(r => {
                setTotal(r.total)
                setMessages((prev) => {
                    return [...prev, ...r.data].sort(sort);
                })
                setIsLoad(false)
            });
        }
    }

    return {messages, loadMessages,isLoad}
}

export {useMessages}