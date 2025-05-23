import React from 'react';

const FlightIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ ...rest }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -960 960 960"
			{...rest}
		>
			<path
				d="M400-408 147-307q-24 10-45.5-4.5T80-352v-22q0-12 5.5-23t15.5-18l299-209v-176q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800v176l299 209q10 7 15.5 18t5.5 23v22q0 26-21.5 40.5T813-307L560-408v144l103 72q8 6 12.5 14.5T680-159v24q0 20-16.5 32.5T627-96l-147-44-147 44q-20 6-36.5-6.5T280-135v-24q0-10 4.5-18.5T297-192l103-72v-144Z"/>
		</svg>
	);
};

export default FlightIcon;