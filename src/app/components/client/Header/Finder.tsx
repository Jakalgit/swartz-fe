"use client";

import React, {useState} from 'react';
import styles from "@/styles/components/Header.module.css"
import {AnimatePresence, motion} from "framer-motion";
import Input from "@/app/components/client/Input";
import {useTranslations} from "next-intl";
import SearchIcon from "@/app/components/client/icons/SearchIcon";
import CloseIcon from "@/app/components/client/icons/CloseIcon";

interface FinerProps {
	isOpen: boolean;
	closeFinder: () => void;
}

const Finder: React.FC<FinerProps> = ({ isOpen, closeFinder }) => {

	const t = useTranslations('header.finder');

	const [value, setValue] = useState("");

	const find = () => {

	}

	return (
		<>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, transform: "translateY(-100%)" }}
						animate={{ opacity: 1, transform: "translateY(0)" }}
						exit={{ opacity: 0, transform: "translateY(-100%)" }}
						className={`absolute flex items-center justify-center left-0 w-full bg-black ${styles.headerContainer}`}
					>
						<div className={`flex ${styles.finderBlock}`}>
							<button
								title={t('findButton.ariaLabel')}
								type="button"
								onClick={find}
							>
								<SearchIcon />
							</button>
							<Input
								inputAttrs={{
									placeholder: t('inputPlaceholder'),
									value: value,
									onChange: (e) => setValue(e.target.value),
								}}
							/>
							<button
								title={t('closeButton.ariaLabel')}
								type="button"
								onClick={closeFinder}
							>
								<CloseIcon />
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Finder;