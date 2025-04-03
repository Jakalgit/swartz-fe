import {IMenuState} from "@/store/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IMenuState = {
	isOpen: false,
}

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		setIsOpenMenu: (state, action: PayloadAction<typeof  initialState.isOpen>) => {
			state.isOpen = action.payload;
		}
	}
});

export const menuSliceActions = menuSlice.actions;
export default menuSlice.reducer;
