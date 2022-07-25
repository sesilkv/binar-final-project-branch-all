import { createSlice } from "@reduxjs/toolkit";

let initialState = null;

const productSlice = createSlice({
	name: "product",
	initialState: {
		data: initialState,
	},
	reducers: {
		addProduct: (state, action) => {
			// action.payload: userData
			state.data = { ...action.payload };
		},
	},
});

export default productSlice;
