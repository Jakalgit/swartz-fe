"use client";

import React, {JSX, useEffect, useState} from 'react';
import styles from "@/styles/components/Menu.module.css"
import ArrowDownIcon from "@/app/components/client/icons/ArrowDownIcon";
import {AnimatePresence, motion} from "framer-motion";
import StyledNames from "@/app/components/client/StyledNames";
import { useLocale } from "next-intl"
import Link from "next/link";

interface MenuBlockProps {
	block: {
		head: string;
		href: string;
		items?: {
			head: string;
			href: string;
			icon?: JSX.Element;
			items?: {
				text: string;
				href: string;
			}[],
		}[];
	}
}

const MenuBlock: React.FC<MenuBlockProps> = ({block}) => {

	const [isOpenMenuBlock, setIsOpenMenuBlock] = useState(false);
	const [indexOfLevel1Opened, setIndexOfLevel1Opened] = useState(-1);

	const locale = useLocale();

	const setIndexOfLevel1 = (index: number) => {
		if (index === indexOfLevel1Opened) {
			setIndexOfLevel1Opened(-1);
		} else {
			setIndexOfLevel1Opened(indexOfLevel1Opened);
		}
	}

	useEffect(() => {
		if (!isOpenMenuBlock) {
			setIndexOfLevel1Opened(-1);
		}
	}, [isOpenMenuBlock]);

	return (
		<>
			<div
				className={`flex items-center justify-between ${styles.menuBlock}`}
				style={isOpenMenuBlock ? {border: 'none'} : {}}
			>
				<a href={`/${locale}${block.href}`}>
					<h3 className="font-bold">
						{block.head}
					</h3>
				</a>
				{block.items && block.items.length > 0 && (
					<button
						type="button"
						onClick={() => setIsOpenMenuBlock(!isOpenMenuBlock)}
					>
						<ArrowDownIcon
							className={styles.arrowIcon}
							style={isOpenMenuBlock ? {rotate: '180deg'} : {}}
						/>
					</button>
				)}
			</div>
			<AnimatePresence>
				{isOpenMenuBlock && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						className={`flex flex-col`}
					>
						{block.items?.map((item, index) =>
							<React.Fragment key={index}>
								<div className={`flex items-center justify-between ${styles.menuLevel1Block}`}>
									<Link
										href={`/${locale}${block.href}${item.href}`}
										className={`flex items-center`}
									>
										{item.icon && (
											React.cloneElement(item.icon, {className: styles.menuLevel1BlockSvg})
										)}
										<h4 className="font-bold">
											{item.head}
										</h4>
									</Link>
									{item.items && item.items.length > 0 && (
										<button
											onClick={() => setIndexOfLevel1Opened(indexOfLevel1Opened === index ? -1 : index)}
											type="button"
										>
											<ArrowDownIcon
												className={styles.arrowIcon}
												style={indexOfLevel1Opened === index ? {rotate: '180deg'} : {}}
											/>
										</button>
									)}
								</div>
								<AnimatePresence>
									{indexOfLevel1Opened === index && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: 'auto' }}
											exit={{ opacity: 0, height: 0 }}
											className={`flex flex-col ${styles.menuLevel2Block}`}
										>
											{item.items?.map((el, index) =>
												<a key={index} href={`/${locale}${block.href}${item.href}${el.href}`}>
													<StyledNames text={el.text} />
												</a>
											)}
										</motion.div>
									)}
								</AnimatePresence>
							</React.Fragment>
						)}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default MenuBlock;