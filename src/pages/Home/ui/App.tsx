import { useState } from 'react'

import { filterData } from '@/shared/temp'
import { Button } from '@/shared/ui/Button'
import { FilterModal } from '@/shared/ui/FilterModal'

export const App = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleApply = () => {
		console.log('Filters applied')
		setIsOpen(false)
	}

	const handleClear = () => {
		console.log('Filters cleared')
	}

	return (
		<section className="w-full h-dvh flex flex-col items-center justify-center">
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<h1 className="text-6xl text-gray-600 mb-12">
				WinWinTravel frontend test task
			</h1>
			<Button
				textKey="Open filter modal"
				onClick={() => setIsOpen(true)}
			/>
			<FilterModal
				filters={filterData.filterItems}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				onApply={handleApply}
				onClear={handleClear}
			/>
		</section>
	)
}
