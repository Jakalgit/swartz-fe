"use client";

import React from 'react';
import {useActions} from "@/store/hooks";
import MenuIcon from "@/app/components/client/icons/MenuIcon";
import {useTranslations} from "next-intl";
import styles from "@/styles/components/Header.module.css";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

const MenuButton = () => {

	const t = useTranslations('header');

	const isOpen = useSelector((state: RootState) => state.menu.isOpen);
	const {setIsOpenMenu} = useActions();

	return (
		<button
			className={styles.menuButton}
			type="button"
			title={t("menuButtonTitle")}
			onClick={() => setIsOpenMenu(!isOpen)}
		>
			<MenuIcon />
		</button>
	);
};

export default MenuButton;