import ChatBox from "../components/ChatBox";
import SendMessage from "../components/SendMessage";

const ChatRoom = () => {
    return (
        <div className="bg-slate-50">
            <ChatBox />
            <SendMessage />
        </div>
    )
}

export default ChatRoom;