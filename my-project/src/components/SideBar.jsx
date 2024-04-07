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
} from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
	const menu = [
		{ id: 1, title: "Profile", icon: faUser, href: "profile" },
		{ id: 2, title: "Dashboard", icon: faPager, href: "folan" },
		{ id: 3, title: "Inbox", icon: faGear, href: "folan" },
	];

	const url = useLocation().pathname.split("/")[1];

	console.log(url);

	return (
		<section className='p-4 w-2/5 hidden h-screen md:flex flex-col justify-between'>
			<section className={`bg-white`}>
				{menu.map((item) => {
					return (
						<Link
							key={item.id}
							className={`${
								url === item.href
									? "bg-dark-primaryAction"
									: null
							} lg:h-10 max-w-56 h-10 mb-4 p-2 rounded-md hover:bg-dark-primaryAction dark:hover:bg-dark-primaryAction flex items-center`}
							to={item.href}>
							<FontAwesomeIcon
								className='mr-3'
								icon={item.icon}
							/>

							<p className=''>{item.title}</p>
						</Link>
					);
				})}
			</section>

			<div>
				<section className='flex items-center'>
					<button className='p-1 w-full lg:w-56 sm:text-sm lg:text-base rounded-md bg-dark-primaryButton hover:bg-dark-primaryChart dark:bg-dark-primaryButton dark:hover:bg-[#e0b350] dark:text-dark-primaryButtonText'>
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
