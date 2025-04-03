"use client";

import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import {PopupEnum} from "@/store/types";
import PopupBackground from "@/app/components/popups/PopupBackground";
import {AnimatePresence} from "framer-motion";
import {useActions} from "@/store/hooks";
import RequestComponent from "@/app/components/popups/RequestComponent";

const RequestPopup: React.FC = () => {

	const popup = useSelector((state: RootState) => state.popup.popup)
	const {setPopup} = useActions();

	const closePopup = () => {
		setPopup({popup: null});
	}

	return (
		<>
			<AnimatePresence>
				{popup === PopupEnum.REQUEST && (
					<PopupBackground>
						<RequestComponent closePopup={closePopup} />
					</PopupBackground>
				)}
			</AnimatePresence>
		</>
	)
};

export default RequestPopup;