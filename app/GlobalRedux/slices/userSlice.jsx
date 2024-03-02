"use client";

import api from "@/services/apis/api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	token: null,
	isLoggedIn: false,
	userDefaultPaymentMethod: {},
	defaultPaymentMethodLoading: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.isLoggedIn = true;
		},
		setToken: (state, action) => {
			state.token = action.payload;
		},
		logout: (state) => {
			state.user = null;
			state.token = null;
			state.isLoggedIn = false;
		},

		setDefaultPaymentMethod: (state, action) => {
			state.userDefaultPaymentMethod = action.payload;
		},

		setDefaultPaymentMethodLoading: (state, action) => {
			state.defaultPaymentMethodLoading = action.payload;
		},
	},
});

export const {
	setUser,
	setToken,
	logout,
	setDefaultPaymentMethod,
	setDefaultPaymentMethodLoading,
} = userSlice.actions;

export const loadDefaultPaymentMethod = () => (dispatch) => {
	dispatch(setDefaultPaymentMethodLoading(true));
	api.managePaymentMethod
		.getSavedPaymentMethods()
		.then((res) => {
			console.log(res);
			dispatch(setDefaultPaymentMethod(res.data.default_payment_method));
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			dispatch(setDefaultPaymentMethodLoading(false));
		});
};
