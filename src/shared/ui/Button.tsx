import React from 'react'

import i18next from 'i18next'

interface ButtonProps {
	textKey: string
	onClick?: () => void
	className?: string
	disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({
	textKey,
	onClick,
	className = '',
	disabled = false
}) => {
	return (
		<button
			className={`cursor-pointer font-semibold bg-orange-500 text-white py-[26px] px-[70px] rounded-2xl ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{i18next.t(textKey)}
		</button>
	)
}
