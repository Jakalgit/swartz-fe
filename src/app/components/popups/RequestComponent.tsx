"use client";

import React, {useState} from 'react';
import stylesPopup from "@/styles/components/Popup.module.css";
import styles from "@/styles/components/RequestPopup.module.css";
import CloseIcon from "@/app/components/client/icons/CloseIcon";
import Input from "@/app/components/client/Input";
import {motion} from "framer-motion";
import {useTranslations} from "next-intl";
import {sendUserRequest} from "@/http/user-request/api";

interface IProps {
	closePopup?: () => void;
}

const RequestComponent: React.FC<IProps> = ({ closePopup }) => {

	const t = useTranslations('requestPopup');

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");

	const sendRequest = async () => {
		try {
			await sendUserRequest({
				name,
				email,
				message,
			});

			setName("");
			setEmail("");
			setMessage("");

			alert(t('success'));
		} catch (e: any) {
			console.error(e);
			alert(e.response?.data?.message);
		}
	}

	return (
		<motion.div
			className={`flex flex-col ${stylesPopup.popup} ${styles.popup}`}
			initial={{transform: "translateY(8%)"}}
			animate={{transform: "translateY(0)"}}
			exit={{transform: "translateY(8%)"}}
		>
			{closePopup && (
				<div className="flex items-center justify-between">
					<h1 className="font-bold">
						{t('contactUs')}
					</h1>
					<button
						type="button"
						title={t('closeButtonTitle')}
						onClick={closePopup}
					>
						<CloseIcon className={stylesPopup.closeIcon}/>
					</button>
				</div>
			)}
			<div className={`flex flex-col ${styles.inputCol}`}>
				<div className={`flex ${styles.inputLine}`}>
					<Input
						divAttrs={{
							className: "flex-grow"
						}}
						inputAttrs={{
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: `${t('namePlaceholder')} *`,
							className: styles.input
						}}
					/>
					<Input
						divAttrs={{
							className: "flex-grow"
						}}
						inputAttrs={{
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: `${t('emailPlaceholder')} *`,
							className: styles.input,
							type: "email"
						}}
					/>
				</div>
				<Input
					inputAttrs={{
						value: message,
						onChange: (e) => setMessage(e.target.value),
						placeholder: t('messagePlaceholder'),
						className: styles.input
					}}
				/>
				<button
					onClick={sendRequest}
					className={`bg-[color:--purple-color] hover:brightness-125 duration-300 ${styles.button}`}
					type="submit"
					title={t('send')}
				>
					{t('send')}
				</button>
				<p style={{color: "rgba(255, 255, 255, 0.5)"}}>
					{t('caption')}&nbsp;
					<a
						href=""
						className="text-[color:--blue-color]"
					>
						{t('captionLink')}
					</a>
				</p>
			</div>
		</motion.div>
	);
};

export default RequestComponent;