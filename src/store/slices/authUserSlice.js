import { createSlice } from "@reduxjs/toolkit";

const authUserSlice = createSlice({
	name: "authUser",
	initialState: {
		userData: null,
	},
	reducers: {
        setAuthUser(state, action) {
            state.userData = action.payload;
        },
        removeUserData(state) {
            state.userData = null;
        }
    },
});

export const { setAuthUser, removeUserData } = authUserSlice.actions;
export default authUserSlice.reducer;