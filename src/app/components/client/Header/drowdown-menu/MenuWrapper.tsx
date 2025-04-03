"use client";

import React from 'react';
import stylesMenu from "@/styles/components/header-dropdown-menu/HeaderDropdownMenu.module.css";
import {motion} from "framer-motion";
import {Container} from "react-bootstrap";

interface Props {
	children?: React.ReactNode;
	className?: string;
}

const MenuWrapper: React.FC<Props> = ({ children, className }) => {
	return (
		<motion.div
			initial={{opacity: 0, height: 0}}
			animate={{opacity: 1, height: 'auto'}}
			exit={{opacity: 0, height: 0}}
			className={`overflow-hidden ${stylesMenu.menu} ${className}`}
		>
			<Container>
				{children}
			</Container>
		</motion.div>
	);
};

export default MenuWrapper;