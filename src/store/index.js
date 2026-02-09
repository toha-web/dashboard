import { configureStore } from "@reduxjs/toolkit";

import authUserReducer from "./slices/authUserSlice";
import usersListReducer from "./slices/usersListSlice";

export const store = configureStore({
	reducer: {
		authUser: authUserReducer,
		usersList: usersListReducer,
	},
});