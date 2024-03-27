import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faUsers,
	faArrowDownUpAcrossLine,
	faPager,
	faPaperclip,
	faGear,
} from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
	return (
		<section className='p-4 w-1/5 hidden md:flex flex-col justify-between'>
			<section className={`bg-white`}>
				{[1, 1, 1, 1, 1, 1, 1].map((_, index) => {
					return (
						<Link
							key={index}
							className='lg:h-10 max-w-56 h-10 mb-4 p-2 rounded-md hover:bg-dark-primaryAction dark:hover:bg-dark-primaryAction flex items-center'>
							<FontAwesomeIcon className='mr-3' icon={faGear} />

							<p className=''>Dashboard</p>
						</Link>
					);
				})}
			</section>

			<div>
				<section className='flex items-center'>
					<button className='p-1 w-full sm:text-sm lg:text-base rounded-md dark:bg-dark-primaryButton dark:hover:bg-[#ca8a04] dark:text-dark-primaryButtonText'>
						New Transaction
					</button>
				</section>

				<section className='mt-4'>
					<Link className='lg:h-10 max-w-56 h-10 mb-4 p-2 rounded-md hover:bg-dark-primaryAction dark:hover:bg-dark-primaryAction flex items-center'>
						<FontAwesomeIcon className='mr-3' icon={faGear} />

						<p className=''>Dashboard</p>
					</Link>

					<Link className='lg:h-10 max-w-56 h-10 mb-4 p-2 rounded-md hover:bg-dark-primaryAction dark:hover:bg-dark-primaryAction flex items-center'>
						<FontAwesomeIcon className='mr-3' icon={faGear} />

						<p className=''>Dashboard</p>
					</Link>
				</section>
			</div>
		</section>
	);
}
