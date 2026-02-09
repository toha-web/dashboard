import { Navigate } from "react-router";
import { useSelector } from "react-redux";

import Dashboard from "../components/Dashboard/Dashboard";

export default function ProtectedRoute(){

    const user = useSelector(state => state.authUser.userData);

    return user ? <Dashboard /> : <Navigate to="/login" />;
}