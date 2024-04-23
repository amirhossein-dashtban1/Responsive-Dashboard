import { useEffect } from "react";
import { Link } from "react-router-dom";
import getPathaName from "../utils/getPathName";

export default function Pagination({
	paginationNumber,
	itemsperPage,
	paginationCount,
	handleClick,
	href,
}) {
	const Map = new Array(paginationCount).fill(0);

	const url = getPathaName()

	useEffect(() => {
		handleClick(1);
	}, [paginationNumber, paginationCount]);

	return (
		<div className='flex'>
			{Map.map((_, index) => {
				return (
					<Link
						key={index}
						to={`${href}/page${index + 1}`}
						className={`${
							url == index + 1 && "text-dark-secondaryText"
						} mr-4 hover:text-dark-secondaryText`}>
						{index + 1}
					</Link>
				);
			})}
		</div>
	);
}

// onClick={handleClick}
