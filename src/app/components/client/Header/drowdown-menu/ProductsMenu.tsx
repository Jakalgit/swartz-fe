import React from 'react';
import stylesMenu from "@/styles/components/header-dropdown-menu/HeaderDropdownMenu.module.css"
import styles from "@/styles/components/header-dropdown-menu/ProductsMenu.module.css"
import SpeedCameraIcon from "@/app/components/client/icons/SpeedCameraIcon";
import BatteryChargingIcon from "@/app/components/client/icons/BatteryChargingIcon";
import EncryptedIcon from "@/app/components/client/icons/EncryptedIcon";
import FlightIcon from "@/app/components/client/icons/FlightIcon";
import ViewModuleIcon from "@/app/components/client/icons/ViewModuleIcon";
import StyledNames from "@/app/components/client/StyledNames";
import MenuWrapper from "@/app/components/client/Header/drowdown-menu/MenuWrapper";
import {getTranslations} from "next-intl/server";

interface Props {
	className?: string;
}

const ProductsMenu: React.FC<Props> = async ({ className }) => {

	const t = await getTranslations('header.productsMenu.blocks')

	const svgs = [
		<SpeedCameraIcon />,
		<BatteryChargingIcon />,
		<EncryptedIcon />,
		<FlightIcon />,
		<ViewModuleIcon />
	];

	const numberOfItemsInBlock = [2, 1, 3, 2, 4];

	return (
		<MenuWrapper className={className}>
			<div className={`flex flex-wrap ${styles.wrapper}`}>
				{numberOfItemsInBlock.map((item, i) =>
					<div key={i} className={`flex flex-col ${stylesMenu.block}`}>
						<div className={`flex ${stylesMenu.blockTopLine}`}>
							{svgs[i]}
							<h3 className="font-bold">
								{t(`${i + 1}.head`)}
							</h3>
						</div>
						<ul className="flex flex-col">
							{new Array(item).fill(0).map((_, index) =>
								<li key={index}>
									<a href="">
										<StyledNames text={t(`${i + 1}.items.${index + 1}`)}/>
									</a>
								</li>
							)}
						</ul>
					</div>
				)}
			</div>
		</MenuWrapper>
	);
};

export default ProductsMenu;