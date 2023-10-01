import { UserAuth } from "../context/AuthContext";

const Navbar = () => {

    const { currentUser, logout } = UserAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch(error: any) {
            console.log(error);
        }
    }

    return (
        <div className="navbar fixed z-10 bg-neutral text-neutral-content">
            <div className="containerWrap flex justify-between">
                <a className="btn btn-ghost normal-case text-xl text-white">InstantChat</a>
                {currentUser ? <button onClick={handleLogout} className="text-white">Sair</button> : ""}
            </div>
        </div>
    )
}

export default Navbar;