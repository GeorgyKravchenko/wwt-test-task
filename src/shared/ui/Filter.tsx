import { FilterItem } from '../api/types/Filter'

interface FilterProps {
	filter: FilterItem
	selections: string[]
	onToggleOption: (filterId: string, optionId: string) => void
}

export const Filter = ({ filter, selections, onToggleOption }: FilterProps) => {
	return (
		<div className="py-8 first:border-t-[1.2px] border-t-gray-400 border-b-[1.2px] border-b-gray-400">
			<h3 className="mb-6 text-2xl">{filter.name}</h3>
			<article
				className={`${filter.options.length <= 4 ? 'grid grid-cols-2 ' : 'grid grid-cols-3'}`}
			>
				{filter.options.map(option => (
					<div
						className="flex items-center gap-4"
						key={option.id}
					>
						<input
							type="checkbox"
							id={option.id}
							className="w-4 h-4"
							checked={selections.includes(option.id)}
							onChange={() => onToggleOption(filter.id, option.id)}
						/>
						<label
							htmlFor={option.id}
							className="text-[16px] cursor-pointer"
						>
							{option.name}
						</label>
					</div>
				))}
			</article>
		</div>
	)
}
