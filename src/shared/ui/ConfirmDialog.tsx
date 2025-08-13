import i18next from 'i18next'

import { Button } from './Button'

interface ConfirmDialogProps {
	isOpen: boolean
	onConfirm: () => void
	onCancel: () => void
	title: string
	children: React.ReactNode
}

export const ConfirmDialog = ({
	isOpen,
	onConfirm,
	onCancel,
	title,
	children
}: ConfirmDialogProps) => {
	if (!isOpen) {
		return null
	}

	return (
		<div
			className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center"
			onClick={onCancel}
		>
			<div
				className="relative py-10 px-8 z-50 rounded-2xl bg-white w-full max-w-md"
				onClick={e => e.stopPropagation()}
			>
				<h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
				<div className="mb-8 text-center">{children}</div>
				<div className="flex justify-center items-center gap-4">
					<Button
						onClick={onConfirm}
						textKey="Confirm"
					/>
					<button
						onClick={onCancel}
						className="underline text-cyan-700"
					>
						{i18next.t('Cancel', { defaultValue: 'Cancel' })}
					</button>
				</div>
			</div>
		</div>
	)
}
