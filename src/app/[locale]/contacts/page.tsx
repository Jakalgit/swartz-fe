import MotionMain from "@/app/components/client/MotionMain";
import {Container} from "react-bootstrap";
import {getTranslations} from "next-intl/server";
import React from "react";
import styles from "@/styles/pages/Contacts.module.css"

export default async function Contacts() {

	const t = await getTranslations('ContactsPage');

	return (
		<MotionMain className="max-vh">
			<section>
				<Container>
					<h1 className="head font-bold">{t('head')}</h1>
					<div className={`flex ${styles.wrapper}`}>
						<div className={`flex flex-col ${styles.info}`}>
							<div className={`flex flex-col ${styles.paragraph}`}>
								<h3 className="font-bold">{t('address')}</h3>
								<p>
									Россия, 111123, Москва, Шоссе Энтузиастов, дом 56, строение 32, офис 429
								</p>
							</div>
							<div className={`flex flex-col ${styles.paragraph}`}>
								<h3 className="font-bold">{t('phone')}</h3>
								<p>
									8 800 555 35 35<br/>
									{t('freeNumber')}
								</p>
								<p>
									7 925 888 22 99<br/>
									{t('freeNumber')}
								</p>
							</div>
							<div className={`flex flex-col ${styles.paragraph}`}>
								<h3 className="font-bold">E-Mail</h3>
								<a href="mailto:info@swartz.ru">
									info@swartz.ru
								</a>
							</div>
						</div>
						<div className={`bg-white flex-grow ${styles.map}`}>

						</div>
					</div>
				</Container>
			</section>
		</MotionMain>
	)
}