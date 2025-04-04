import React from 'react';
import MotionMain from "@/app/components/client/MotionMain";
import {Container} from "react-bootstrap";
import {getTranslations} from "next-intl/server";
import styles from "@/styles/pages/Partners.module.css";
import Image from "next/image";

export default async function Page() {

	const t = await getTranslations('PartnersPage');

	const blocks = [
		{
			path: '/partners/ntc.png',
			style: styles.ntcImage,
		},
		{
			path: '/partners/src.png',
			style: styles.srcImage,
		}
	]

	return (
		<MotionMain className="max-vh">
			<section>
				<Container>
					<h1 className="head font-bold">{t('head')}</h1>
					{blocks.map((block, index) =>
						<div
							className={`flex flex-column ${styles.paragraph}`}
							key={index}
						>
							<h2 className="font-bold">
								{t(`partners.${index + 1}.name`)}
							</h2>
							<div className={`flex ${styles.col}`}>
								<p>
									{t(`partners.${index + 1}.description`)}
								</p>
								<div className="flex items-center justify-center flex-grow">
									<Image
										src={block.path}
										alt={"preview"}
										width={600}
										height={600}
										className={block.style}
									/>
								</div>
							</div>
						</div>
					)}
				</Container>
			</section>
		</MotionMain>
	);
};