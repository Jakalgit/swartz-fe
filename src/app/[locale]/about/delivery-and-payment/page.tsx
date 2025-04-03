import {getTranslations} from "next-intl/server";
import MotionMain from "@/app/components/client/MotionMain";
import {Container} from "react-bootstrap";
import stylesAbout from "@/styles/pages/About.module.css"
import React from "react";

export default async function DeliveryAndPayment() {

	const t = await getTranslations('DeliveryAndPaymentPage');

	const NUMBER_OF_PARAGRAPHS = 3;

	return (
		<MotionMain className="max-vh">
			<Container>
				<h1 className="head font-bold">{t('head')}</h1>
				<div className={stylesAbout.textSection}>
					<div className={`flex items-center ${stylesAbout.textSectionHeadLine}`}>
						<h2 className="font-bold">
							{t('block1.head')}
						</h2>
						<div className="flex-grow"/>
					</div>
					<div className={`flex flex-col ${stylesAbout.textSectionList}`}>
						<p>
							{t('block1.text')}
						</p>
					</div>
				</div>
				<div className={stylesAbout.textSection}>
					<div className={`flex items-center ${stylesAbout.textSectionHeadLine}`}>
						<h2 className="font-bold">
							{t('block2.head')}
						</h2>
						<div className="flex-grow"/>
					</div>
					<div className={`flex flex-col ${stylesAbout.textSectionList}`}>
						{new Array(NUMBER_OF_PARAGRAPHS).fill(0).map((_, i) =>
							<div key={i}>
								<h3 className="font-bold">{t(`block2.paragraphs.${i + 1}.title`)}</h3>
								<p>
									{t(`block2.paragraphs.${i + 1}.text`)}
								</p>
							</div>
						)}
					</div>
				</div>
			</Container>
		</MotionMain>
	)
}