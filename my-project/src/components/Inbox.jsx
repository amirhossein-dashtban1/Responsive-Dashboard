import { useState } from "react";
import { useParams } from "react-router-dom";
import usePagination from "../hooks/usePagination";
import Pagination from "./Pagination";

export default function Inbox() {
	const [messages, setMessages] = useState([...new Array(8).fill(0)]);

	const [
		paginatedItems,
		setItemsPerPage,
		paginationNumber,
		paginationCount,
		handleClick,
	] = usePagination(messages, 5);

	return (
		<div className=''>
			<div className='mb-8'>
				<h1 className='text-3xl'>Inbox</h1>
			</div>

			<div className='items-center flex flex-col justify-between p-3'>
				{paginatedItems.map((message, index) => {
					return (
						<div
							key={index}
							className='items-center bg-dark-primaryAction rounded flex justify-between mb-4 p-2 w-full'>
							<div className='items-center flex flex-col xs:flex-row w-4/5'>
								<div className='xs:mr-8 w-full xs:w-auto'>
									<img
										className='h-12 w-12 rounded-full'
										src='/src/assets/7de4ad1f547c40e6844b842c206aa46f.png'
										alt=''
									/>
								</div>

								<div className='flex flex-col justify-end'>
									<p className='my-4 xs:my-0'>Lily Kiani</p>

									<p className=''>
										This is an example of a message preview
									</p>
								</div>
							</div>

							<div className=''>
								<p>2:20pm</p>
							</div>
						</div>
					);
				})}
			</div>

			<div className='flex justify-center my-4'>
				<Pagination
					paginationNumber={paginationNumber}
					paginationCount={paginationCount}
					handleClick={handleClick}
					shownArr={paginatedItems}
					href={`/dashboard/inbox`}
				/>
			</div>
		</div>
	);
}
