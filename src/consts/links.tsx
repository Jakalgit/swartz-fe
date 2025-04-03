import SpeedCameraIcon from "@/app/components/client/icons/SpeedCameraIcon";
import BatteryChargingIcon from "@/app/components/client/icons/BatteryChargingIcon";
import EncryptedIcon from "@/app/components/client/icons/EncryptedIcon";
import FlightIcon from "@/app/components/client/icons/FlightIcon";
import ViewModuleIcon from "@/app/components/client/icons/ViewModuleIcon";
import React from "react";

const PRODUCTS_NUMBER_OF_ITEMS = [2, 1, 3, 2, 4];
const MEDIA_NUMBER_OF_LINKS = 4;
const ABOUT_NUMBER_OF_LINKS = 3;

export const PRODUCTS_SVGS = [
	<SpeedCameraIcon />,
	<BatteryChargingIcon />,
	<EncryptedIcon />,
	<FlightIcon />,
	<ViewModuleIcon />
];

export const PRODUCTS_LINKS = {
	href: '/products',
	items: [
		{
			href: '/mobile-surveillance',
			items: [ '/bart-mini', 'bart-pro', ]
		},
		{
			href: '/power-supplies',
			items: [ '/bart-power', ]
		},
		{
			href: '/security',
			items: [ '/video-cameras', '/spotlights', '/thermal-imagers' ]
		},
		{
			href: '/aerial-vehicles',
			items: [ '/bart-fly', '/bart-eagle' ]
		},
		{
			href: '/modules-and-components',
			items: [ '/batteries', '/voltage-converters', '/wifi-adapters', '/switches' ]
		}
	]
};

export const MEDIA_LINKS = {
	href: '/media',
	items: [
		{ href: '/news', },
		{ href: '/projects', },
		{ href: '/articles', },
		{ href: '/videos', }
	]
};

export const ABOUT_LINKS = {
	href: '/about',
	items: [
		{ href: '/team' },
		{ href: '/partners' },
		{ href: '/delivery-and-payment' },
	]
};

export const CONTACT_LINKS = { href: '/contacts', }

export const generateLinks = (t: any, locale: string) => {
	return [
		{
			head: t('products'),
			href: `/${locale}${PRODUCTS_LINKS.href}`,
			items: PRODUCTS_NUMBER_OF_ITEMS.map((count: number, index) => {
				return {
					head: t(`productsMenu.blocks.${index + 1}.head`),
					href: `/${locale}${PRODUCTS_LINKS.items[index].href}`,
					icon: PRODUCTS_SVGS[index],
					items: new Array(count).fill(0).map((_, i: number) => {
						return {
							text: t(`productsMenu.blocks.${index + 1}.items.${i + 1}`),
							href: `/${locale}${PRODUCTS_LINKS.items[index].items[i]}`,
						}
					}),
				}
			})
		},
		{
			head: t('media'),
			href: `/${locale}${MEDIA_LINKS.href}`,
			items: new Array(MEDIA_NUMBER_OF_LINKS).fill(0).map((_, i: number) => {
				return {
					head: t(`mediaMenu.blocks.${i + 1}`),
					href: `/${locale}${MEDIA_LINKS.items[i].href}`,
				}
			})
		},
		{
			head: t('aboutCompany'),
			href: `/${locale}${ABOUT_LINKS.href}`,
			items: new Array(ABOUT_NUMBER_OF_LINKS).fill(0).map((_, i: number) => {
				return {
					head: t(`aboutMenu.blocks.${i + 1}`),
					href: `/${locale}${ABOUT_LINKS.items[i].href}`,
				}
			})
		},
		{
			head: t('contacts'),
			href: `/${locale}${CONTACT_LINKS.href}`,
		}
	];
}