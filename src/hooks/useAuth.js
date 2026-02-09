import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../store/slices/authUserSlice";

export default function useAuth() {
	const [token, setToken] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!token) return;

		axios
			.get("https://dummyjson.com/user/me", {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				dispatch(setAuthUser(response.data));
			})
			.catch((error) => console.error("Auth failed:", error.message));
	}, [token]);

	async function login(authData) {
		const response = await axios.post("https://dummyjson.com/user/login",
			authData,
			{
				headers: { "Content-Type": "application/json" },
			},
		);
		setToken(response?.data.accessToken);
	}

	return login;
}