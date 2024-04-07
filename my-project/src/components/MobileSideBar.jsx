import { useLocation, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faGear,
	faMultiply,
	faNewspaper,
	faUserGroup,
	faPhone,
	faRuler,
	faUser,
	faPaperclip,
	faPager,
} from "@fortawesome/free-solid-svg-icons";

export default function MobileSideBar({ toggleMobileSideBar }) {
	const menu = [
		{ id: 0, title: "Home", icon: faHouse, href: "/" },
		{ id: 1, title: "News", icon: faNewspaper, href: "/news/3" },
		{ id: 2, title: "About US", icon: faUserGroup, href: "/" },
		{ id: 3, title: "Contact Us", icon: faPhone, href: "/" },
		{ id: 4, title: "Rules", icon: faRuler, href: "/" },
	];

	const dashboardMenu = [
		{ id: 1, title: "Profile", icon: faUser, href: "profile" },
		{ id: 2, title: "Dashboard", icon: faPager, href: "folan" },
		{ id: 3, title: "Inbox", icon: faGear, href: "folan" },
	];
	const url = useLocation().pathname.split("/")[1];

	console.log(url);
	return (
		<section className='absolute px-2 py-3 top-0 left-0 h48 z-50 bg-light-primary dark:bg-dark-primary shadow-2xl sm:w-2/5 w-3/4 '>
			<div className='border-b border-dark-primaryBorder border-sm pb-1 mb-2 flex items-center justify-end'>
				<FontAwesomeIcon
					onClick={() => setShowMobileSideBar(false)}
					className='text'
					size='xl'
					icon={faMultiply}
				/>
			</div>

			{menu.map((item) => {
				return (
					<NavLink
						to={item.href}
						key={item.id}
						className={`${
							url === item.href ? "bg-dark-primaryAction" : null
						} mb-4 p-2 rounded-md hover:bg-light-primaryAction dark:hover:bg-dark-primaryAction flex items-center`}
						onClick={() => toggleMobileSideBar}>
						<FontAwesomeIcon className='mr-4' icon={item.icon} />
						{item.title}
					</NavLink>
				);
			})}

			<div className='bg-dark-primaryBorder w-full h-[1px]'></div>

			{url === "dashboard" && (
				<div className='mt-6'>
					{dashboardMenu.map((item) => {
						return (
							<NavLink
								to={item.href}
								key={item.id}
								className={`${
									url === item.href
										? "bg-dark-primaryAction"
										: null
								} mb-4 p-2 rounded-md hover:bg-light-primaryAction dark:hover:bg-dark-primaryAction flex items-center`}
								onClick={() => toggleMobileSideBar}>
								<FontAwesomeIcon
									className='mr-4'
									icon={item.icon}
								/>
								{item.title}
							</NavLink>
						);
					})}

					<section className='flex items-center'>
						<button className='p-1 w-full rounded-md bg-dark-primaryButton dark:bg-dark-primaryButton hover:bg-[#ca8a04] dark:text-dark-primaryButtonText'>
							New Transaction
						</button>
					</section>
				</div>
			)}
		</section>
	);
}
