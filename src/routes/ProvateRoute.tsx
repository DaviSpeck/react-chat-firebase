import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }: any) => {

    const {currentUser} = UserAuth();

    if (!currentUser) {
        return <Navigate to="/" replace={true} />
    }
    return children;
}

export default PrivateRoute;