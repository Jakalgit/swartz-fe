"use client";

import React from 'react';
import {motion} from 'framer-motion';
import { ComponentProps } from "react";

type MotionMainProps = ComponentProps<typeof motion.main>;

const MotionMain: React.FC<MotionMainProps> = ({children, ...rest}) => {
	return (
		<motion.main
			initial={{ opacity: 0}}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			{...rest}
		>
			{children}
		</motion.main>
	);
};

export default MotionMain;