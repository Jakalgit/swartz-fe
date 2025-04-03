import {IPopupState} from "@/store/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IPopupState = {
	popup: null,
}

const popupSlice = createSlice({
	name: 'popup',
	initialState,
	reducers: {
		setPopup: (state, action: PayloadAction<IPopupState>) => {
			state.popup = action.payload.popup;
		}
	}
});

export const popupSliceActions = popupSlice.actions;
export default popupSlice.reducer;
