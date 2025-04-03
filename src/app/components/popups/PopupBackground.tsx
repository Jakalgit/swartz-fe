"use client";

import React from 'react';
import {motion} from "framer-motion";

interface IProps {
	children?: React.ReactNode;
}

const PopupBackground: React.FC<IProps> = ({ children }) => {
	return (
		<motion.div
			style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", zIndex: 100 }}
			className="fixed inset-0 flex items-center justify-center"
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
		>
			{children}
		</motion.div>
	);
};

export default PopupBackground;