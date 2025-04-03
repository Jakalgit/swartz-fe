import React from 'react';
import MenuWrapper from "@/app/components/client/Header/drowdown-menu/MenuWrapper";
import stylesMenu from "@/styles/components/header-dropdown-menu/HeaderDropdownMenu.module.css";
import styles from "@/styles/components/header-dropdown-menu/MediaMenu.module.css"
import {getLocale, getTranslations} from "next-intl/server";

interface Props {
	className?: string;
}

const MediaMenu: React.FC<Props> = async ({ className }) => {

	const t = await getTranslations('header.mediaMenu.blocks');
	const locale = await getLocale();

	const paths = [
		`${locale}/media/news`,
		`${locale}/media/projects`,
		`${locale}/media/articles`,
		`${locale}/media/videos`
	];

	return (
		<MenuWrapper className={className}>
			<div className={`flex flex-wrap ${styles.wrapper}`}>
				{paths.map((path, i) =>
					<div key={i} className={`flex flex-col ${stylesMenu.block}`}>
						<div className={`flex ${stylesMenu.blockTopLine}`}>
							<a href={path}>
								<h3 className="font-bold">
									{t(`${i + 1}`)}
								</h3>
							</a>
						</div>
					</div>
				)}
			</div>
		</MenuWrapper>
	);
};

export default MediaMenu;