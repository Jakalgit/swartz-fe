"use client";

import React from 'react';
import styles from "@/styles/components/Input.module.css"
import classNames from "classnames";

interface InputProps {
	inputAttrs?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
	divAttrs?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}

const Input: React.FC<InputProps> = ({ inputAttrs, divAttrs }) => {

	const divClassName = divAttrs?.className || '';
	const inputClassName = inputAttrs?.className || '';

	return (
		<div className={classNames(styles.wrapper, divClassName)}>
			<input
				type="text"
				{...inputAttrs}
				className={classNames(styles.input, "w-full", inputClassName)}
			/>
		</div>
	);
};

export default Input;