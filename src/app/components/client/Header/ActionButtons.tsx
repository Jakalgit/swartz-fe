"use client";

import React, {useState} from 'react';
import EmailIcon from "@/app/components/client/icons/EmailIcon";
import SearchIcon from "@/app/components/client/icons/SearchIcon";
import {useActions} from "@/store/hooks";
import {PopupEnum} from "@/store/types";
import Finder from "@/app/components/client/Header/Finder";
import {useTranslations} from "next-intl";

const ActionButtons = () => {

	const t = useTranslations('header');

	const [isOpenFinder, setIsOpenFinder] = useState(false);

	const {setPopup} = useActions();

	const openRequestPopup = () => {
		setPopup({popup: PopupEnum.REQUEST});
	}

	return (
		<>
			<Finder
				isOpen={isOpenFinder}
				closeFinder={() => setIsOpenFinder(false)}
			/>
			<button
				type="button"
				title={t('emailButtonTitle')}
				onClick={openRequestPopup}
				className="p-0"
			>
				<EmailIcon />
			</button>
			<button
				type="button"
				title={t('finderButtonTitle')}
				onClick={() => setIsOpenFinder(true)}
				className="p-0"
			>
				<SearchIcon />
			</button>
		</>
	);
};

export default ActionButtons;