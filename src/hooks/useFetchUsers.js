import axios from "axios";
import { useDispatch } from "react-redux";

import { setUsers, setLoading } from "../store/slices/usersListSlice";

export default function useFetchUsers() {
    const dispatch = useDispatch();

	function getUsers(url) {
		dispatch(setLoading(true));
		setTimeout(() => {
			axios
				.get(url)
				.then((response) => {
					dispatch(setUsers(response.data.users));
				})
				.catch((error) => {
					console.error("Failed to fetch users:", error);
				});
		}, 2000);
	}
	return getUsers;
}