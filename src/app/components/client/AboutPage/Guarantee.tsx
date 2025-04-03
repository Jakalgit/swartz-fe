import React from 'react';
import styles from "@/styles/pages/About.module.css";
import {getTranslations} from "next-intl/server";

const Guarantee: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = async (props) => {

	const t = await getTranslations('AboutPage.blocks.guarantee');

	const className = props?.className || '';

	return (
		<div
			{...props}
			className={`flex flex-col items-start ${styles.feature} ${className}`}
		>
			<div className="text-start">
				<p
					className={styles.featureHead}
					style={{minHeight: '2em'}}
				>
					{t('head')}
				</p>
				<div className="flex items-start">
					<p className={styles.featureSmallText}>
						{t('smallText1')}
					</p>
					<p className={`font-medium ${styles.featureLargeText}`}>
						{t('largeText')}
					</p>
					<p className={`mt-auto ${styles.featureSmallText}`}>
						{t('smallText2')}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Guarantee;