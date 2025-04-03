import React from 'react';
import LogoIcon from "@/app/components/client/icons/LogoIcon";
import {Container} from "react-bootstrap";
import styles from "@/styles/components/Header.module.css"
import {getLocale, getTranslations} from "next-intl/server";
import ActionButtons from "@/app/components/client/Header/ActionButtons";
import ShoppingCart from "@/app/components/client/icons/ShoppingCart";
import LanguageSelector from "@/app/components/client/Header/LanguageSelector";
import ProductsMenu from "@/app/components/client/Header/drowdown-menu/ProductsMenu";
import MediaMenu from "@/app/components/client/Header/drowdown-menu/MediaMenu";
import AboutMenu from "@/app/components/client/Header/drowdown-menu/AboutMenu";
import MenuButton from "@/app/components/client/Header/MenuButton";
import Menu from "@/app/components/client/menu/Menu";

export default async function Header() {

	const t = await getTranslations('header');
	const locale = await getLocale();

	const links = [
		{
			text: t('products'),
			href: `/${locale}/products`,
			menu: <ProductsMenu />,
		},
		{
			text: t('media'),
			href: `/${locale}/media`,
			menu: <MediaMenu />,
		},
		{
			text: t('aboutCompany'),
			href: `/${locale}/about`,
			menu: <AboutMenu />,
		},
		{
			text: t('contacts'),
			href: `/${locale}/contacts`,
			menu: <></>
		}
	];

	return (
		<>
			<header
				className={`fixed top-0 left-0 w-full ${styles.header}`}
				style={{zIndex: 99}}
			>
				<Container>
					<div className={`flex items-center ${styles.headerContainer}`}>
						<a className={styles.logo} href={`/${locale}`}>
							<LogoIcon/>
						</a>
						<div className={`flex h-full ${styles.links}`}>
							{links.map(({text, href, menu}, index) => (
								<div className={styles.linkItem} key={index}>
									<div className={`group relative h-full flex flex-col justify-center`} key={`v${index}`}>
										<a href={href}>
											{text}
										</a>
										<span
											className={`absolute bottom-0 left-0 bg-white w-0 group-hover:w-full transition-all duration-300`}/>
									</div>
									{React.cloneElement(menu, {className: `absolute top-full left-0 w-full ${styles.dropdownMenu} ${styles.header}`})}
								</div>
							))}
						</div>
						<div className={`flex flex-col ${styles.callbackBlock}`}>
							<a className={`font-bold`} href="">8 800 555 35 35</a>
							<span className={`opacity-50`}>{t('callback')}</span>
						</div>
						<div className={`flex items-center ${styles.actionIcons}`}>
							<ActionButtons/>
							<a href="">
								<ShoppingCart/>
							</a>
						</div>
						<LanguageSelector/>
						<MenuButton/>
					</div>
				</Container>
				<Menu/>
			</header>
			<div className={styles.headerContainer} />
		</>
	);
};