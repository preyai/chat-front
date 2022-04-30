import {app} from "./feathers";
import {MESSAGES} from "../constants";

const messagesService = app.service(MESSAGES)

const getMessages = async (chatId:string, skip:number = 0) => {
    const response = await messagesService.find({query:{chat:chatId, $skip:skip, $sort:{createdAt: -1}}})
    return response
}

const createMessage = async (chat:string,text:string) => {
    const message = await messagesService.create({
        chat,
        text
    })
    return message
}

export {messagesService, getMessages,createMessage }