import React from 'react';

const LogoSmallIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...rest }) => {
	return (
		<svg
			viewBox="0 0 331 331"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<g clipPath="url(#clip0_35_767)">
				<g filter="url(#filter0_d_35_767)">
					<path
						d="M278.371 89.1714L148.487 89.4362L179.336 105.589L267.117 105.39L235.142 159.608L243.417 181.52L287.904 105.655C292.141 98.3732 286.845 89.1714 278.371 89.1714Z"
						fill="white"/>
					<path
						d="M233.885 176.092C231.104 168.611 228.258 161.131 225.477 153.716C220.645 138.755 212.171 132.334 192.311 123C139.682 95.4604 87.1192 67.9212 34.4902 40.4482L61.235 89.37C69.0466 105.324 76.3286 110.753 88.377 115.453L194.297 165.632L80.3006 124.191L97.2478 155.239C104.993 169.273 114.327 177.946 129.686 181.984C145.706 184.963 205.816 199.792 205.816 199.792C179.071 195.29 130.414 188.604 112.672 185.029C119.226 197.21 169.935 283.799 169.935 283.799C173.51 289.89 182.315 289.824 185.823 283.733L232.097 203.102H232.031L239.313 190.524C237.459 185.691 235.672 180.858 233.885 176.092ZM177.747 263.344L156.232 225.014L198.137 227.331L177.747 263.344Z"
						fill="white"/>
				</g>
			</g>
			<defs>
				<filter id="filter0_d_35_767" x="4.49017" y="10.4482" width="314.905" height="307.886"
								filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feFlood floodOpacity="0" result="BackgroundImageFix"/>
					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
												 result="hardAlpha"/>
					<feOffset/>
					<feGaussianBlur stdDeviation="15"/>
					<feComposite in2="hardAlpha" operator="out"/>
					<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_35_767"/>
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_35_767" result="shape"/>
				</filter>
				<clipPath id="clip0_35_767">
					<rect width="331" height="331" fill="white"/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default LogoSmallIcon;