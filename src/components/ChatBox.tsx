import { useEffect, useState, useRef } from "react";
import Message from "./Message";
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";

const ChatBox = () => {

    const messagesEndRef: any = useRef();
    const [messages, setMessages] = useState<any[]>([]);

    const scrollToBottom = () => {
        // @ts-ignore
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages])

    useEffect((): any => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50),
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages: any[] = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });

        return () => unsubscribe;
    }, [])

    return (
        <div className="pb-44 pt-20 containerWrap bg-slate-50">
            {messages.map(message => {
                return (
                    <Message key={message.id} message={message} />
                )
            })}
            <div ref={messagesEndRef}></div>
        </div>
    )
}

export default ChatBox;