import { FilterItem } from '../api/types/Filter'

export const Filter = ({ filter }: { filter: FilterItem }) => {
	return (
		<div className="py-8 first:border-t-[1.2px] border-t-gray-400 border-b-[1.2px] border-b-gray-400">
			<h3 className="mb-6 text-2xl">{filter.name}</h3>
			<article
				className={`${filter.options.length <= 4 ? 'grid grid-cols-2 ' : 'grid grid-cols-3'}`}
			>
				{filter.options.map(option => (
					<div
						className="flex items-center  gap-4"
						key={option.id}
					>
						<input
							type="checkbox"
							id={option.id}
							className="w-4 h-4"
						/>
						<label
							htmlFor={option.id}
							className="text-[16px]"
						>
							{option.name}
						</label>
					</div>
				))}
			</article>
		</div>
	)
}
