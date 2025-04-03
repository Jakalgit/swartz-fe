import {configureStore} from "@reduxjs/toolkit";
import popupReducer from "@/store/slices/popupSlice";
import menuReducer from "@/store/slices/menuSlice";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () =>
	configureStore({
		reducer: {
			popup: popupReducer,
			menu: menuReducer,
		},
	});

export const wrapper = createWrapper(makeStore);
export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];