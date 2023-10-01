import { UserAuth } from "../context/AuthContext";

const Message = ({ message }: any) => {

    const { currentUser } = UserAuth();

    return (
        <div>
            <div className={`chat ${message.uid === currentUser.uid ? "chat-end" : "chat-start"}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={message.avatar} />
                    </div>
                </div>
                <div className="chat-header text-slate-700">
                    {message.name}
                </div>
                <div className="chat-bubble text-white">{message.text}</div>
            </div>
        </div>
    )
}

export default Message;