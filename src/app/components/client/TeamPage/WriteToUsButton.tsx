"use client"

import React from 'react';
import {useActions} from "@/store/hooks";
import {PopupEnum} from "@/store/types";

const WriteToUsButton: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({children, ...rest}) => {

	const {setPopup} = useActions();

	const openPopup = () => {
		setPopup({popup: PopupEnum.REQUEST});
	}

	return (
		<button
			{...rest}
			onClick={openPopup}
		>
			{children}
		</button>
	);
};

export default WriteToUsButton;