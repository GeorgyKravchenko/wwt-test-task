import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'
import useFiltersStore from '@/shared/lib/store'
import { filterData } from '@/shared/temp'
import { Button } from '@/shared/ui/Button'
import { FilterModal } from '@/shared/ui/FilterModal'

export const App = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [appliedFilters, setAppliedFilters] = useState<
		Record<string, string[]>
	>({})

	const { currentFilter, filters, setCurrentFilter, addFilter } =
		useFiltersStore()

	const { t } = useTranslation()

	const handleApply = (selections: Record<string, string[]>) => {
		setAppliedFilters(selections)

		const filterItems = Object.entries(selections).map(([key, values]) => ({
			id: key,
			type: 'OPTION' as const,
			optionsIds: values
		}))

		const newFilter: SearchRequestFilter = filterItems
		setCurrentFilter(newFilter)
		addFilter(newFilter)
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-8">
					<h1 className="text-5xl font-bold text-gray-800 mb-4">
						{t('common.pageTitle')}
					</h1>
					<Button
						textKey="Open filter modal"
						onClick={() => setIsOpen(true)}
					/>
				</div>

				<div className="space-y-6">
					{currentFilter && (
						<div className="bg-white rounded-lg shadow-lg border-l-4 border-l-blue-500 p-6">
							<h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
								<span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
								{t('filter.currentFilter')}
							</h2>
							<div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
								<pre className="text-sm text-gray-800 whitespace-pre-wrap">
									{JSON.stringify(currentFilter, null, 2)}
								</pre>
							</div>
						</div>
					)}

					{filters.length > 0 && (
						<div className="bg-white rounded-lg shadow-lg border-l-4 border-l-green-500 p-6">
							<h2 className="text-xl font-bold text-green-800 mb-4 flex items-center">
								<span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
								{t('filter.allFilters')} - {filters.length} {t('filter.total')}
							</h2>
							<div className="bg-gray-50 rounded-lg p-4 max-h-64 overflow-y-auto">
								<pre className="text-sm text-gray-800 whitespace-pre-wrap">
									{JSON.stringify(filters, null, 2)}
								</pre>
							</div>
						</div>
					)}

					{!currentFilter &&
						filters.length === 0 &&
						Object.keys(appliedFilters).length === 0 && (
							<div className="bg-white rounded-lg shadow-lg p-8 text-center">
								<div className="text-gray-400 text-6xl mb-4">🔍</div>
								<h3 className="text-xl font-semibold text-gray-600 mb-2">
									{t('filter.noFiltersApplied')}
								</h3>
								<p className="text-gray-500">{t('filter.openFilterModal')}</p>
							</div>
						)}
				</div>
			</div>

			<FilterModal
				filters={filterData.filterItems}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				onApply={handleApply}
			/>
		</div>
	)
}
