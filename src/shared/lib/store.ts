import { create } from 'zustand'

import { SearchRequestFilter } from '../api/types/SearchRequest/SearchRequestFilter'

interface FiltersState {
	filters: SearchRequestFilter[]
	currentFilter: SearchRequestFilter | null
	clearCurrentFilter: () => void
	addFilter: (filter: SearchRequestFilter) => void
	setCurrentFilter: (filter: SearchRequestFilter) => void
}
const useFiltersStore = create<FiltersState>(set => ({
	filters: [],
	currentFilter: null,
	addFilter: (filter: SearchRequestFilter) => {
		set(state => ({
			filters: [...state.filters, filter]
		}))
	},
	setCurrentFilter: (filter: SearchRequestFilter) => {
		set({
			currentFilter: filter
		})
	},
	clearCurrentFilter: () => {
		set({
			currentFilter: null
		})
	}
}))
export default useFiltersStore
