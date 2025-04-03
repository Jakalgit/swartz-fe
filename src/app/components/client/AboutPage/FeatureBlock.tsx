import React from 'react';
import styles from "@/styles/pages/About.module.css";
import {BreakText} from "@/app/components/server/BreakText";

interface FeatureBlockProps {
	head: string;
	largeText: string;
	smallText: string;
	props?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ head, largeText, smallText, props }) => {

	const className = props?.className || '';

	return (
		<div
			{...props}
			className={`flex flex-col items-start ${styles.feature} ${className}`}
		>
			<div className="text-start">
				<p className={styles.featureHead}>{head}</p>
				<div className="flex items-start">
					<p className={`font-medium ${styles.featureLargeText}`}>
						{largeText}
					</p>
					<p className={`mt-auto ${styles.featureSmallText}`}>
						<BreakText text={smallText}/>
					</p>
				</div>
			</div>
		</div>
	);
};

export default FeatureBlock;