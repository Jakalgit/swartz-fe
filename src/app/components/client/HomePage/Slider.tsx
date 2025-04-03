"use client";

import React, {useEffect, useState} from 'react';
import {motion, AnimatePresence} from "framer-motion";
import Image from "next/image";
import styles from "@/styles/components/HomeSlider.module.css"
import ArrowDownIcon from "@/app/components/client/icons/ArrowDownIcon";

const images = [
	"/images/slide1.jpeg",
	"/images/slide2.jpeg",
	"/images/slide3.jpeg",
	"/images/slide4.jpeg",
	"/images/slide5.jpeg",
	"/images/slide6.jpeg",
	"/images/slide1.jpeg",
	"/images/slide2.jpeg",
	"/images/slide3.jpeg",
	"/images/slide4.jpeg",
	"/images/slide5.jpeg",
	"/images/slide6.jpeg",
];

const Slider = () => {

	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prevState => (prevState + 1) % images.length);
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col w-full">
			<div className="flex">
				<button
					className={`duration-300 ${styles.button}`}
					onClick={() => setIndex(prevState => prevState === 0 ? images.length - 1 : prevState - 1)}
				>
					<ArrowDownIcon style={{rotate: '90deg'}} />
				</button>
				<div className={`relative flex justify-center flex-grow ${styles.imageHeight}`}>
					<AnimatePresence>
						<motion.div
							key={index}
							className="absolute"
							style={{transform: 'translateX(-50%)'}}
							initial={{opacity: 0, y: 50}}
							animate={{opacity: 1, y: 0}}
							exit={{opacity: 0, y: -50}}
							transition={{duration: 0.5}}
						>
							<Image
								src={images[index]}
								alt="Slide image"
								width={2000}
								height={2000}
								className={`${styles.currentImage} ${styles.imageHeight}`}
							/>
						</motion.div>
					</AnimatePresence>
				</div>
				<button
					className={`duration-300 ${styles.button}`}
					onClick={() => setIndex(prevState => (prevState + 1) % images.length)}
				>
					<ArrowDownIcon style={{rotate: '-90deg'}}/>
				</button>
			</div>
			<div className={`overflow-x-auto overflow-y-hidden ${styles.slides}`}>
				<div className="flex">
					{images.map((image, i) =>
						<Image
							key={i}
							src={image}
							width={2000}
							height={2000}
							alt="Slide image"
							style={i === index ? {outline: '1px solid white'} : {}}
							onClick={() => setIndex(i)}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Slider;