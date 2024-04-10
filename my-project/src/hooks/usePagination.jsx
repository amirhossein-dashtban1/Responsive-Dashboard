import { useState } from "react";
import { useParams } from "react-router-dom";

export default function usePagination(allItems, pageItemsCount) {
	const [paginatedItems, setPaginatedItems] = useState([]);
	const [itemsPerPage, setItemsPerPage] = useState(pageItemsCount);
	const paginationNumber = useParams().paginationNumber;
	const paginationCount = Math.ceil(allItems.length / itemsPerPage);

	const handleClick = () => {
		let filteredArr = allItems.filter((_, index) => {
			return (
				index >= paginationNumber * itemsPerPage - itemsPerPage &&
				index < paginationNumber * itemsPerPage
			);
		});

		setPaginatedItems(filteredArr);
	};

	return [paginatedItems, setItemsPerPage, paginationNumber, paginationCount, handleClick];
}
