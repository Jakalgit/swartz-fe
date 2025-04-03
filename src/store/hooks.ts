import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/index";
import {createActions} from "@/store/actions";

export const useActions = () => {
	const dispatch = useDispatch<AppDispatch>();
	return createActions(dispatch);
};