import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const SendMessage = () => {

    const [value, setValue] = useState("")
    const { currentUser } = UserAuth();

    const handleSendMessage = async (e: any) => {
        e.preventDefault();

        if(value.trim() === "") {
            alert("Mensagem inválida!");
            return;
        }

        try {
            const { uid, displayName, photoURL } = currentUser;
            await addDoc(collection(db, "messages"), {
                text: value,
                name: displayName,
                avatar: photoURL,
                createdAt: serverTimestamp(),
                uid
            })
        } catch (error: any) {
            console.log(error);
        }

        setValue("");
    }

    return (
        <div className="bg-slate-300 fixed bottom-0 w-full py-10 shadow-lg">
            <form onSubmit={handleSendMessage} className="containerWrap flex">
                <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-slate-50 p-2" type="text" />
                <button type="submit" className="w-auto bg-slate-700 text-white rounded-r-lg px-5 text-sm">Enviar</button>
            </form>
        </div>
    )
}

export default SendMessage;