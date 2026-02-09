import { createBrowserRouter, Navigate, redirect } from "react-router";
import { store } from "../store";

import App from "../App";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import UsersList from "../components/UsersList/UsersList";

const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
		children: [
			{
				index: true,
				loader: () => redirect(store.getState().authUser.userData ? "/dashboard" : "/login"),
			},
			{
				path: "dashboard",
				Component: ProtectedRoute,
				children: [
					{
						index: true,
						element: <Navigate to="profile" replace />,
					},
					{
						path: "profile",
						Component: Profile,
					},
					{
						path: "users",
						Component: UsersList,
					},
				],
			},
			{
				path: "login",
				Component: PublicRoute,
				children: [
					{
						index: true,
						Component: Login,
					},
				],
			},
		],
	},
]);

export default router;
