import { createSlice } from "@reduxjs/toolkit";

const usersListSlice = createSlice({
	name: "usersList",
	initialState: {
		users: [],
		loading: false,
	},
	reducers: {
		setUsers(state, action) {
			state.users = action.payload;
			state.loading = false;
		},
		setLoading(state){
			state.loading = true;
		}
	},
});

export const { setUsers, setLoading } = usersListSlice.actions;
export default usersListSlice.reducer;