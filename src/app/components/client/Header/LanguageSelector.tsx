"use client";

import React, {useEffect, useRef, useState} from 'react';
import LanguageIcon from "@/app/components/client/icons/LanguageIcon";
import styles from "@/styles/components/Header.module.css"
import { usePathname } from "next/navigation";
import {AnimatePresence, motion} from "framer-motion";
import {LOCALES} from "@/consts/locales";

const LanguageSelector = () => {

	const pathname = usePathname();
	const locale = pathname.split("/")[1];

	const regex = new RegExp(`^/${locale}(/|$)`);

	const [isListOpen, setIsListOpen] = useState(false);
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	const getLanguageName = (localeCode: string) => {
		try {
			return new Intl.DisplayNames([localeCode], { type: "language" }).of(localeCode) || localeCode;
		} catch {
			return localeCode;
		}
	};

	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (buttonRef.current && !buttonRef.current.contains(event.target)) {
				setTimeout(() => setIsListOpen(false), 100);
			}
		}

		document.addEventListener("pointerdown", handleClickOutside);

		return () => {
			document.removeEventListener("pointerdown", handleClickOutside);
		};
	}, [buttonRef.current]);

	return (
		<div className="flex flex-col">
			<button
				ref={buttonRef}
				onClick={() => setIsListOpen(!isListOpen)}
				className={`flex items-center font-bold ${styles.langButton}`}
			>
				{locale.toUpperCase()}
				<LanguageIcon/>
			</button>
			<div className="relative">
				<AnimatePresence>
					{isListOpen && (
						<motion.ul
							className={`absolute overflow-hidden right-0 bg-black ${styles.localesList}`}
							initial={{height: 0}}
							animate={{height: 'auto'}}
							exit={{height: 0}}
						>
							{LOCALES.map((loc, i) =>
								<motion.li key={i}>
									<a
										className="transition-all duration-300"
										href={pathname.replace(regex, `/${loc}/`)}
									>
										{getLanguageName(loc)}
									</a>
								</motion.li>
							)}
						</motion.ul>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default LanguageSelector;