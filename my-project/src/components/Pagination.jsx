import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Pagination({
	paginationNumber,
	itemsperPage,
	paginationCount,
	handleClick,
}) {
	const Map = new Array(paginationCount).fill(0);

	useEffect(() => {
		handleClick();
	}, [paginationNumber, itemsperPage]);

	return (
		<div className='flex'>
			{Map.map((_, index) => {
				return (
					<Link
						key={index}
						to={`/news/${index + 1}`}
						className='mr-4 hover:text-dark-secondaryText'
						onClick={handleClick}>
						{index + 1}
					</Link>
				);
			})}
		</div>
	);
}
