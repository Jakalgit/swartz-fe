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
									{t('addressText')}
								</p>
							</div>
							<div className={`flex flex-col ${styles.paragraph}`}>
								<h3 className="font-bold">{t('phone')}</h3>
								<p>
									+7 995 885 71 60<br/>
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
						<div className={`flex flex-grow justify-end overflow-hidden ${styles.map}`}>
							<div
								style={{position: 'relative', overflow: 'hidden', width: "100%"}}><a
								href="https://yandex.ru/maps/20674/troitsk/?utm_medium=mapframe&utm_source=maps"
								style={{color: "#eee", fontSize: "12px", position: "absolute", top: 0}}>Троицк</a><a
								href="https://yandex.ru/maps/20674/troitsk/house/promyshlennaya_ulitsa_19s1/Z04YdABgTUwOQFtvfXh3cXhkYg==/?ll=37.270499%2C55.460477&utm_medium=mapframe&utm_source=maps&z=17"
								style={{color: "#eee", fontSize: "12px", position: "absolute", top: 14}}>Промышленная улица, 19с1 на карте Троицка
								— Яндекс Карты</a>
								<iframe
									src="https://yandex.ru/map-widget/v1/?ll=37.270499%2C55.460477&mode=whatshere&utm_source=share&whatshere%5Bpoint%5D=37.270499%2C55.460476&whatshere%5Bzoom%5D=17&z=17"
									width="100%" height="400" frameBorder="1" allowFullScreen={true} style={{position: 'relative'}}></iframe>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</MotionMain>
	)
}