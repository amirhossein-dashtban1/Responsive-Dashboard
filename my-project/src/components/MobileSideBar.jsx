import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
	faHouse,
	faUsers,
	faArrowDownUpAcrossLine,
	faPager,
	faPaperclip,
	faGear,
} from "@fortawesome/free-solid-svg-icons";

export default function MobileSideBar() {
	return (
		<section className='absolute p-3 top-0 left-0 h-auto z-50 dark:bg-dark-primary shadow-2xl w-1/2 sm:w-1/3'>
			{[1, 1, 1, 1, 1, 1, 1].map((_, index) => {
				return (
					<div
						key={index}
						className='mb-4 p-2 rounded-md hover:bg-dark-primaryAction dark:hover:bg-dark-primaryAction flex items-center'>
						<FontAwesomeIcon className='mr-4' icon={faHouse} />

						<Link>Dashboard</Link>
					</div>
				);
			})}

			<div className='bg-dark-primaryAction w-full h-[1px]'></div>

			<div className='mt-6'>
				<section className='flex items-center'>
					<button className='p-1 w-full rounded-md dark:bg-dark-primaryButton dark:text-dark-primaryButtonText'>
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
