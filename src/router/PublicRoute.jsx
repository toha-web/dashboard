import { Navigate } from "react-router";
import { useSelector } from "react-redux";

import Login from "../components/Login/Login";

export default function ProtectedRoute(){

    const user = useSelector(state => state.authUser.userData);

    return !user ? <Login /> : <Navigate to="/dashboard" />;
}