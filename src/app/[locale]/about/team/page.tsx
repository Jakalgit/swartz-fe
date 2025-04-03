import MotionMain from "@/app/components/client/MotionMain";
import {Container} from "react-bootstrap";
import {getTranslations} from "next-intl/server";
import React from "react";
import styles from "@/styles/pages/Team.module.css"
import ChatIcon from "@/app/components/client/icons/ChatIcon";
import {BreakText} from "@/app/components/server/BreakText";
import WriteToUsButton from "@/app/components/client/TeamPage/WriteToUsButton";

export default async function Team() {

	const t = await getTranslations('TeamPage');

	return (
		<MotionMain className="max-vh">
			<section>
				<Container>
					<h1 className="head font-bold">{t('head')}</h1>
					<p className={styles.text}>
						{t('text')}
					</p>
					<div className={`flex flex-col items-center ${styles.block}`}>
						<ChatIcon />
						<p className="text-center">
							<BreakText text={t('chat')} />
						</p>
						<WriteToUsButton
							className={`bg-[color:--purple-color]`}
						>
							{t('writeToUs')}
						</WriteToUsButton>
					</div>
				</Container>
			</section>
		</MotionMain>
	)
}