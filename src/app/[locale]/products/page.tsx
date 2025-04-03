import {getLocale, getTranslations} from "next-intl/server";
import styles from "@/styles/pages/Products.module.css"
import {PRODUCTS_LINKS} from "@/consts/links";
import ThermostatIcon from "@/app/components/client/icons/ThermostatIcon";
import FlagIcon from "@/app/components/client/icons/FlagIcon";
import SettingsIcon from "@/app/components/client/icons/SettingsIcon";
import ConstructionIcon from "@/app/components/client/icons/ConstructionIcon";
import ThumbUpIcon from "@/app/components/client/icons/ThumbUpIcon";
import React from "react";
import {Container} from "react-bootstrap";
import ArrowRightIcon from "@/app/components/client/icons/ArrowRightIcon";
import Image from "next/image";
import RequestComponent from "@/app/components/popups/RequestComponent";
import MotionMain from "@/app/components/client/MotionMain";

export default async function Products() {

	const t = await getTranslations('ProductsPage');
	const tHome = await getTranslations('HomePage');

	const locale = await getLocale();

	const blocks = [
		{
			text: tHome('mobileSurveillance'),
			href: PRODUCTS_LINKS.items[0].href,
			image: '/icons/camera.png',
		},
		{
			text: tHome('security'),
			href: PRODUCTS_LINKS.items[2].href,
			image: '/icons/shield.png',
		},
		{
			text: tHome('aerialVehicles'),
			href: PRODUCTS_LINKS.items[3].href,
			image: '/icons/copter.png',
		},
		{
			text: tHome('modulesAndComponents'),
			href: PRODUCTS_LINKS.items[4].href,
			image: '/icons/inverter.png',
		},
		{
			text: tHome('powerSupplies'),
			href: PRODUCTS_LINKS.items[1].href,
			image: '/icons/accum.png',
		}
	];

	const list1Length = 5, list2Length = 7;

	return (
		<>
			<MotionMain className="max-vh">
				<h1 className={`font-bold text-center head`}>{t('head')}</h1>
				<section className={styles.categoriesSection}>
					<Container>
						<div className={`flex ${styles.categories}`}>
							{blocks.map((block, index) =>
								<div className={`duration-300 flex items-center justify-between ${styles.category}`} key={index}>
									<div className="flex flex-col h-full">
										<h3 className="font-bold">
											{block.text}
										</h3>
										<span className="flex mt-auto">
											<a
												className="flex items-center duration-300"
												href={`/${locale}${block.href}`}
											>
												Посмотреть
												<ArrowRightIcon/>
											</a>
										</span>
									</div>
									<Image
										width={200}
										height={200}
										src={block.image}
										alt="image"
										className="h-full w-auto"
									/>
								</div>
							)}
						</div>
					</Container>
				</section>
				<section className={`bg-[color:--purple-color] relative ${styles.spheresSection}`}>
					<Image
						width={500}
						height={500}
						className={`absolute ${styles.image}`}
						src={'/icons/products_image.png'}
						alt={'radar'}
					/>
					<Container>
						<h2 className="font-bold">
							{t('spheres')}
						</h2>
						<p>
							{t('text1')}
						</p>
						<ul>
							{new Array(list1Length).fill(0).map((_, i) =>
								<li className="items-center" key={i}>
									<span className="bg-white flex-shrink-0"/>
									<p>{t(`blocks1.${i + 1}`)};</p>
								</li>
							)}
						</ul>
						<p className={styles.spheresText2}>
							{t('text2')}
						</p>
						<ul>
							{new Array(list2Length).fill(0).map((_, i) =>
								<li className="items-center" key={i}>
									<span className="bg-white flex-shrink-0"/>
									<p>{t(`blocks2.${i + 1}`)};</p>
								</li>
							)}
						</ul>
					</Container>
				</section>
				<section className={`flex flex-col items-center ${styles.requestSection}`}>
					<h2 className="text-center">{t('request')}</h2>
					<RequestComponent />
				</section>
			</MotionMain>
		</>
	);
}