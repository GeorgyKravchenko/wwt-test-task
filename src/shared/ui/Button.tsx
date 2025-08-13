import React from 'react'
import { useTranslation } from 'react-i18next'

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
	const { t } = useTranslation()

	return (
		<button
			className={`cursor-pointer font-semibold bg-orange-500 text-white py-[26px] px-[70px] rounded-2xl transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{t(textKey, { defaultValue: textKey })}
		</button>
	)
}
