import { useState } from "react";
import { useParams } from "react-router-dom";
import usePagination from "../hooks/usePagination";
import Pagination from "./Pagination";

export default function Transactions() {
	const [arr, setArr] = useState([...new Array(31).fill(0)]);

	const [paginatedItems, setItemsPerPage, paginationNumber, paginationCount, handleClick] = usePagination(arr, 10);

	// const [shownArr, setShownArr] = useState([]);
	// const paginationNumber = useParams().paginationNumber; //Because It is acting like async
	// const [itemsPerPage, setItemsPerPage] = useState(10); // (handleClick runs sooner than paginationNumber And of course we can't call hooks inside handleClick),
	// const paginationCount = Math.ceil(arr.length / itemsPerPage); //We must pass it to the useEffect of Pagination

	// const handleClick = () => {
	// 	let filteredArr = arr.filter((_, index) => {
	// 		return (
	// 			index >= paginationNumber * itemsPerPage - itemsPerPage &&
	// 			index < paginationNumber * itemsPerPage
	// 		);
	// 	});

	// 	setShownArr(filteredArr);
	// };

	return (
		<div className=''>
			<div className='mb-8'>
				<h1 className='text-3xl'>Transactions</h1>
			</div>

			<div></div>

			<div className='border border-dark-primaryBorder'>
				<div className='border-b border-dark-primaryBorder mb-8'>
					<h1 className='text-xl p-3'>All Transactions</h1>
				</div>

				<div className='border-b border-dark-primaryBorder'>
					<div>
						<div className=''></div>
						<div className=''></div>
					</div>

					<div className=''></div>
				</div>

				<div className=''>
					<table className='p-2 w-full'>
						<thead>
							<tr className='bg-[#cccccc1a]'>
								<th className='text-left py-2 px-8'>No</th>
								<th className='text-left py-2 px-8'>ID</th>
								<th className='text-left py-2 px-8'>
									Reciever
								</th>
								<th className='text-left py-2 px-8'>Amount</th>
								<th className='text-left py-2 px-8'>Date</th>
								<th className='text-left py-2 px-8'>Status</th>
								<th className='text-left py-2 px-8'>Date</th>
								<th className='text-left py-2 px-8'>Date</th>
							</tr>
						</thead>

						{paginatedItems.map((_, index) => {
							return (
								<tbody key={index}>
									<tr key={index}>
										<td className='text-left py-2 px-8'>
											{index + 1}
										</td>
										<td className='text-left py-2 px-8'>
											Anom
										</td>
										<td className='text-left py-2 px-8'>
											19
										</td>
										<td className='text-left py-2 px-8'>
											Male
										</td>
										<td className='text-left py-2 px-8'>
											Anom
										</td>
										<td className='text-left py-2 px-8'>
											19
										</td>
										<td className='text-left py-2 px-8'>
											Male
										</td>
										<td className='text-left py-2 px-8'>
											Male
										</td>
									</tr>
								</tbody>
							);
						})}
					</table>
				</div>

				<div className='flex justify-center my-4'>
					<Pagination
						paginationNumber={paginationNumber}
						paginationCount={paginationCount}
						handleClick={handleClick}
						shownArr={paginatedItems}
						href={`/dashboard/transactions`}
					/>
				</div>
			</div>
		</div>
	);
}
