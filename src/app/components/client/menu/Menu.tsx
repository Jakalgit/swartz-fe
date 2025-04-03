"use client";

import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import {AnimatePresence, motion} from "framer-motion";
import styles from "@/styles/components/Menu.module.css";
import {Container} from "react-bootstrap";
import {useLocale, useTranslations} from "next-intl";
import MenuBlock from "@/app/components/client/menu/MenuBlock";
import {generateLinks} from "@/consts/links";

const Menu = () => {

	const t = useTranslations('header');
	const isOpen = useSelector((state: RootState) => state.menu.isOpen);
	const locale = useLocale();

	const list = generateLinks(t, locale);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{opacity: 0, height: 0}}
					animate={{opacity: 1, height: 'calc(100vh - var(--header-height))'}}
					exit={{opacity: 0, height: 0}}
					className={`flex flex-col w-full bg-none overflow-hidden ${styles.menu}`}
				>
					<Container>
						<div className={`flex flex-col ${styles.contactsBlock}`}>
							<a className={`font-bold ${styles.largeText}`} href="tel:+78805553535">
								8 800 555 35 35
							</a>
							<a href="mailto:info@swart.tu">
								info@swart.tu
							</a>
						</div>
					</Container>
					<span className={`w-full ${styles.sepLine}`} />
					<Container>
						{list.map((item, index) =>
							<MenuBlock key={index} block={item} />
						)}
					</Container>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Menu;