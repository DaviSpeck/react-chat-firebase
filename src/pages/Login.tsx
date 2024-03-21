import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const { currentUser, signinWithGoogle } = UserAuth();

    const handleLogin = async () => {
        try {
            await signinWithGoogle();
        } catch(error: any) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(currentUser) {
            navigate("/chat");
        }
    }, [currentUser])

    return (
        <div className="hero min-h-screen bg-slate-50">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-slate-950">Olá, seja bem vindo!</h1>
                    <p className="py-6 text-gray-600">Conecte com o Google e entre na conversa!</p>
                    <button onClick={handleLogin} className="btn btn-primary bg-neutral border-neutral hover:bg-slate-600 hover:border-slate-600 ">Login com Google</button>
                </div>
            </div>
        </div>
    )
}

export default Login;