import ChatView from "../components/Chat";
import { useParams } from "react-router-dom";

const Chat = () => {
    const { chatId } = useParams()
    if (chatId)
        return (
            <ChatView chatId={chatId} key={chatId} />
        )
    else
        return null
}
export default Chat