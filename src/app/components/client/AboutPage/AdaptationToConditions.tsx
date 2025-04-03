import React from 'react';
import {getTranslations} from "next-intl/server";
import styles from "@/styles/pages/About.module.css";
import {BreakText} from "@/app/components/server/BreakText";

const AdaptationToConditions: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = async (props) => {

	const t = await getTranslations('AboutPage.blocks.adaptationToConditions');

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
					<BreakText text={t('head')}/>
				</p>
				<div className="flex items-start">
					<p className={`font-medium ${styles.featureMediumText1}`}>
						<BreakText text={t('text')}/>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AdaptationToConditions;