import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeModeContext } from "../context/ThemeContext";
import ProfileModal from "./ProfileModal";
import BackDrop from "./BackDrop";
// import logo from "../assets/7de4ad1f547c40e6844b842c206aa46f.png";
import MobileSideBar from "./MobileSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAlignJustify,
	faDoorOpen,
	faMoon,
	faSun,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
	const modeObject = useContext(ThemeModeContext);
	const [toggleProfileModal, setToggleProfileModal] = useState(false);
	const [toggleMobileSideBar, setToggleMobileSideBar] = useState(false);
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

	const url = useLocation().pathname.split("/")[1];
	// console.log(url);

	const menu = [
		{ id: 0, title: "Home", href: "/" },
		{ id: 1, title: "News", href: "/news/page1" },
		{ id: 2, title: "About US", href: "/" },
		{ id: 3, title: "Contact US", href: "/" },
		{ id: 4, title: "Rules", href: "/" },
	];

	// console.log(menu[0].href.split('/'));

	const toggleModal = () => {
		setToggleProfileModal((prev) => !prev);
	};

	const hideModal = () => {
		setToggleProfileModal(false);
	};

	const openSideBar = () => {
		setToggleMobileSideBar(true);
	};

	const closeSideBar = () => {
		setToggleMobileSideBar(false);
	};

	return (
		<>
			<div className='items-center flex justify-center'>
				{isUserLoggedIn ? (
					<div>
						<div
							onClick={toggleModal}
							className='z-50 relative shadow-2xl dark:bg-dark-primaryBorder bg-light-primaryBorder w-12 h-12 flex items-center justify-center rounded-full'>
							<FontAwesomeIcon
								className=' rounded-2xl shadow-2xl text-3xl'
								icon={faUser}
							/>
						</div>

						<div>
							{toggleProfileModal && (
								<>
									<ProfileModal hideModal={hideModal} />
									<BackDrop setToggleModal={hideModal} />
								</>
							)}
						</div>
					</div>
				) : (
					<Link
						to='/login'
						className='z-10 relative shadow-2xl dark:bg-dark-primaryBorder bg-light-primaryBorder w-12 h-12 flex items-center justify-center rounded-full'>
						<FontAwesomeIcon
							className=' rounded-2xl shadow-2xl text-3xl'
							icon={faDoorOpen}
						/>
					</Link>
				)}

				{toggleMobileSideBar && (
					<>
						<MobileSideBar toggleMobileSideBar={closeSideBar} />
						<BackDrop setToggleModal={closeSideBar} />
					</>
				)}

				<div
					className='ml-8 shadow-2xl dark:bg-dark-primaryBorder bg-light-primaryBorder w-12 h-12 flex items-center justify-center rounded-full'
					onClick={() => {
						modeObject.themeMode.toggleThemeMode();
					}}>
					{modeObject.mode === "dark" ? (
						<FontAwesomeIcon
							className='rounded-2xl shadow-2xl text-3xl'
							icon={faMoon}
						/>
					) : (
						<FontAwesomeIcon
							className='rounded-2xl shadow-2xl text-3xl'
							icon={faSun}
						/>
					)}
				</div>
			</div>

			<div className='hidden md:block'>
				<ul className='items-center flex justify-center'>
					{menu.map((item, index) => {
						return (
							<li
								key={index}
								className={`${
									item.href.split("/")[1] === url &&
									"text-dark-secondaryText"
								} mx-4 hover:text-dark-secondaryText`}>
								<Link to={item.href}>{item.title}</Link>
							</li>
						);
					})}
				</ul>
			</div>

			<div
				onClick={openSideBar}
				className='md:hidden z-10 relative shadow-2xl dark:bg-dark-primaryBorder bg-light-primaryBorder w-12 h-12 flex items-center justify-center rounded-full'>
				<FontAwesomeIcon
					className=' rounded-2xl shadow-2xl text-3xl'
					icon={faAlignJustify}
				/>
			</div>

			<div className='md:mr-4 hidden md:justify-end md:flex w-[100px] h-[50px]'>
				<img
					className='rounded-xl w-[50px] h-[50px]'
					src='/src/assets/7de4ad1f547c40e6844b842c206aa46f.png'
					alt=''
				/>
			</div>
		</>
	);
}
