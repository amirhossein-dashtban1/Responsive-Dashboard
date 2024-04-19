import { useEffect, useState } from "react";
import { useParams } from "react-router";
import usePagination from "../hooks/usePagination";
import NavBar from "../components/NavBar";
import NewsBox from "../components/NewsBox";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

export default function News() {
	const [arr, setArr] = useState([1, 2, 3, 4, 5]);

	const [
		paginatedItems,
		setItemsPerPage,
		paginationNumber,
		paginationCount,
		handleClick,
	] = usePagination(arr, 3);

	// const [shownArr, setShownArr] = useState([]);
	// const paginationNumber = useParams().paginationNumber; //Because It is acting like async
	// const [itemsPerPage, setItemsPerPage] = useState(2); // (handleClick runs sooner than paginationNumber And of course we can't call hooks inside handleClick),
	// const paginationCount = Math.ceil(arr.length / itemsPerPage); //We must pass it to the useEffect of Pagination

	return (
		<div className='items-center dark:bg-dark-primary flex flex-col dark:text-dark-primaryText'>
			<div className='items-center border-b border-b-dark-primaryBorder flex justify-between p-4 w-full'>
				<NavBar />
			</div>

			<div>
				<div className='m-12'>
					<h2 className='mb-8 lg:text-2xl x2s:text-sm md:text-lg'>
						All News...
					</h2>

					{paginatedItems.map((_, index) => {
						return (
							<div key={index} className='md:hover:scale-102'>
								<NewsBox />
							</div>
						);
					})}
				</div>
			</div>

			<div className='mb-8'>
				<Pagination
					shownArr={paginatedItems}
					paginationNumber={paginationNumber}
					paginationCount={paginationCount}
					handleClick={handleClick}
					href={`/news`}
				/>
			</div>

			<Footer />
		</div>
	);
}
