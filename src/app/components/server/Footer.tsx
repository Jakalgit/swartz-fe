import React from 'react';
import styles from "@/styles/components/Footer.module.css";
import LogoIcon from "@/app/components/client/icons/LogoIcon";
import {getLocale, getTranslations} from "next-intl/server";
import {Container} from "react-bootstrap";
import {generateLinks} from "@/consts/links";

export default async function Footer() {

	const t = await getTranslations('footer');
	const tHeader = await getTranslations('header');
	const locale = await getLocale();

	const links = generateLinks(tHeader, locale);

	return (
		<footer className={`flex flex-col bg-[color:--purple-color] ${styles.footer}`}>
			<Container>
				<div className={styles.topLine}>
					<div className={`flex items-center ${styles.topBlock}`}>
						<div className={`flex flex-col`}>
							<LogoIcon className={styles.logo}/>
							<p>{t('slogan')}</p>
						</div>
						<p>{t('address')}</p>
					</div>
					<div className={`flex items-center ${styles.topBlock}`}>
						<a href="mailto:info@swartz.ru">
							info@swartz.ru
						</a>
						<div className={`flex flex-col items-start`}>
							<a className="font-bold" href="">
								8 800 555 35 35
							</a>
							<button>
								{tHeader('callback')}
							</button>
						</div>
					</div>
				</div>
				<div className={styles.middleLine}>
					{links.map((block, i) =>
						<div className="flex flex-col items-start" key={i}>
							<h3 className="font-bold">
								<a href={block.href}>
									{block.head}
								</a>
							</h3>
							<ul className="flex flex-col">
								{block.items?.map((item, i) =>
									<li key={i}>
										<a href={item.href}>
											{item.head}
										</a>
									</li>
								)}
							</ul>
						</div>
					)}
				</div>
				<div className={`flex items-center justify-center ${styles.bottomLine}`}>
					<span>
						{t('cp')}
					</span>
				</div>
			</Container>
		</footer>
	);
};