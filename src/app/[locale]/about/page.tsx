import MotionMain from "@/app/components/client/MotionMain";
import {getTranslations} from "next-intl/server";
import {Container} from "react-bootstrap";
import styles from "@/styles/pages/About.module.css"
import FeatureBlock from "@/app/components/client/AboutPage/FeatureBlock";
import AdaptationToConditions from "@/app/components/client/AboutPage/AdaptationToConditions";
import IndustrialStandards from "@/app/components/client/AboutPage/IndustrialStandards";
import Guarantee from "@/app/components/client/AboutPage/Guarantee";
import React from "react";
import {BreakText} from "@/app/components/server/BreakText";
import Image from "next/image";
import StyledNames from "@/app/components/client/StyledNames";

export default async function About() {

	const t = await getTranslations('AboutPage');

	const line1NumberOfBlocks = 4;

	const line2 = [
		<AdaptationToConditions />,
		<IndustrialStandards />,
		<Guarantee />,
	]

	const numberOfParagraphs = [
		4, 2
	]

	return (
		<>
			<MotionMain className="max-vh">
				<section>
					<Container>
						<h1 className="head font-bold">{t('head')}</h1>
						<div className={`flex flex-col ${styles.features}`}>
							<div className={`flex ${styles.featuresLine}`}>
								{new Array(line1NumberOfBlocks).fill(0).map((_, i) =>
									<FeatureBlock
										key={i}
										head={t(`blocks.${i+1}.head`)}
										largeText={t(`blocks.${i+1}.largeText`)}
										smallText={t(`blocks.${i+1}.smallText`)}
										props={{
											className: styles.featuresLine1Block
										}}
									/>
								)}
							</div>
							<div className={`flex ${styles.featuresLine}`}>
								{line2.map((item, i) =>
									React.cloneElement(item, { className: styles.featuresLine2Block, key: i }),
								)}
							</div>
						</div>
					</Container>
				</section>
				<section className={`relative bg-[color:--purple-color] ${styles.aboutSection}`}>
					<Image
						src={'/icons/fence.png'}
						width={800}
						height={800}
						alt={'fence-image'}
						className={`absolute ${styles.aboutSectionImage}`}
					/>
					<Container>
						<p>
							{t('aboutText1')}
						</p>
						<p>
							{t('aboutText2')}
						</p>
						<h3>
							<BreakText text={t('slogan')} />
						</h3>
						<p>
							{t('aboutText3')}
						</p>
					</Container>
				</section>
				<section className={styles.bartSection}>
					<Container>
						<h2 className={`lexend-giga font-bold`}>
							BART
						</h2>
						<div className={`flex justify-between items-center`}>
							<p>
								<StyledNames text={t('aboutBart')} />
							</p>
							<Image
								src={'/images/bart.jpeg'}
								width={800}
								height={800}
								alt={'bart-image'}
								className={styles.bartSectionImage}
							/>
						</div>
					</Container>
				</section>
				{numberOfParagraphs.map((item, i) =>
					<section key={i} className={styles.textSection}>
						<Container>
							<div className={`flex items-center ${styles.textSectionHeadLine}`}>
								<h2 className="font-bold">
									{t(`textSection${i+1}.head`)}
								</h2>
								<div className="flex-grow"/>
							</div>
							<div className={`flex flex-col ${styles.textSectionList}`}>
								{new Array(item).fill(0).map((_, index) =>
									<p key={index}>
										{t(`textSection${i+1}.paragraphs.${index+1}`)}
									</p>
								)}
							</div>
						</Container>
					</section>
				)}
			</MotionMain>
		</>
	)
}