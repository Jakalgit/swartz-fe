import {popupSliceActions} from "@/store/slices/popupSlice";
import {menuSliceActions} from "@/store/slices/menuSlice";
import {AppDispatch} from "@/store/index";
import {bindActionCreators} from "redux";

const allActions = {
	...popupSliceActions,
	...menuSliceActions
}

export const createActions = (dispatch: AppDispatch) => {
	return bindActionCreators(allActions, dispatch);
}