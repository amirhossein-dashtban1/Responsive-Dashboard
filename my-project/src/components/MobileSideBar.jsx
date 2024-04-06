import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faUsers,
	faUser,
	faPager,
	faPaperclip,
	faGear,
	faHome,
	faMultiply,
} from "@fortawesome/free-solid-svg-icons";

export default function MobileSideBar({ setShowMobileSideBar }) {
	const menu = [
		{ id: 0, title: "Home", icon: faHouse, href: "home" },
		{ id: 1, title: "Profile", icon: faUser, href: "profile" },
		{ id: 2, title: "Dashboard", icon: faPager, href: "folan" },
		{ id: 3, title: "Inbox", icon: faGear, href: "folan" },
		{ id: 4, title: "Contact US", icon: faPaperclip, href: "folan" },
	];
	const url = useLocation().pathname.split("/")[1];
	return (
		<section className='absolute px-2 py-3 top-0 left-0 h-full z-50 bg-light-primary dark:bg-dark-primary shadow-2xl sm:w-2/5 w-3/4 '>
			<div className='border-b-2 border-dark-primaryBorder border-sm pb-1 mb-2 flex items-center justify-end'>
				<FontAwesomeIcon
					onClick={() => setShowMobileSideBar(false)}
					className='text'
					size='xl'
					icon={faMultiply}
				/>
			</div>

			{menu.map((item) => {
				return (
					<Link
						to={item.href}
						key={item.id}
						className={`${
							url === item.href ? "bg-dark-primaryAction" : null
						} mb-4 p-2 rounded-md hover:bg-light-primaryAction dark:hover:bg-dark-primaryAction flex items-center`}
						onClick={() => setShowMobileSideBar(false)}>
						<FontAwesomeIcon className='mr-4' icon={item.icon} />
						{item.title}
					</Link>
				);
			})}

			<div className='bg-dark-primaryAction w-full h-[1px]'></div>

			<div className='mt-6'>
				<section className='flex items-center'>
					<button className='p-1 w-full rounded-md bg-dark-primaryButton dark:bg-dark-primaryButton hover:bg-[#ca8a04] dark:text-dark-primaryButtonText'>
						New Transaction
					</button>
				</section>

				<section className='mt-4'>
					<Link className='lg:h-10 max-w-56 h-10 mb-4 p-2 rounded-md hover:bg-light-primaryAction flex items-center'>
						<FontAwesomeIcon className='mr-3' icon={faGear} />

						<p className=''>Dashboard</p>
					</Link>
					<Link className='lg:h-10 max-w-56 h-10 mb-4 p-2 rounded-md hover:bg-light-primaryAction dark:hover:bg-dark-primaryAction flex items-center'>
						<FontAwesomeIcon className='mr-3' icon={faGear} />

						<p className=''>Dashboard</p>
					</Link>
				</section>
			</div>
		</section>
	);
}
