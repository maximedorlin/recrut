/** @format */

import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { UserInformations } from "../../interfaces/user";

export interface initialState {
	user_infos: UserInformations | null;
	isLoading: boolean | null;
	isError: boolean | null;
	isLogin: boolean;
	access: string | null;
	refresh: string | null;
}

const Initial: initialState = {
	access: "",
	isError: false,
	isLoading: false,
	isLogin: false,
	refresh: "",
	user_infos: {
		id: 0,
		username: "",
		email: "",
		password: "",
		status: [],
		evaluationList: [],
	},
};

const AuthSlice = createSlice({
	name: "auth",
	initialState: Initial,
	reducers: {
		loginStart: (state) => {
			state.isLoading = true;
		},
		setLoginTrue: (state) => {
			state.isLogin = true;
		},

		loginSuccess: (state, action: PayloadAction<initialState>) => {
			// console.log("Login success ", action);
			state.isLoading = false;
			state.isError = false;
			state.user_infos = action.payload.user_infos;
			state.isLogin = true;
			state.refresh = action.payload.refresh;
			state.access = action.payload.access;
		},

		loginFailure: (state) => {
			state.isLoading = false;
			state.isError = true;
		},

		logout: (state) => {
			state.access = null;
			state.isError = false;
			state.isLogin = false;
			state.refresh = "";
			state.user_infos = null;
		},
	},
});

export const { loginSuccess, loginFailure, logout, setLoginTrue } =
	AuthSlice.actions;

export default AuthSlice.reducer;
