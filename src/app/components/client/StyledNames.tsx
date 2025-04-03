import React from 'react';

interface Props {
	text: string;
}

const StyledNames: React.FC<Props> = ({ text }) => {
	return (
		<>
			{text.split(/(BART)/).map((part, index) =>
				part === "BART" ? (
					<span key={index} className="lexend-giga font-bold">{part}</span>
				) : (
					part
				)
			)}
		</>
	);
};

export default StyledNames;