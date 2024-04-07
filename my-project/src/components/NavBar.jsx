import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeModeContext } from "../context/ThemeContext";
import ProfileModal from "./ProfileModal";
import BackDrop from "./BackDrop";
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

	const toggleModal = () => {
		setToggleProfileModal((prev) => !prev);
		console.log("Toggle!");
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
			<div className=' items-center flex justify-center'>
				{isUserLoggedIn ? (
					<div>
						<div
							onClick={toggleModal}
							className='z-20 relative shadow-2xl dark:bg-dark-primaryBorder bg-light-primaryBorder w-12 h-12 flex items-center justify-center rounded-full'>
							<FontAwesomeIcon
								className=' rounded-2xl shadow-2xl text-3xl'
								icon={faUser}
							/>
						</div>

						<div>
							{toggleProfileModal && (
								<>
									<ProfileModal />
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
					<li className='mx-4 hover:text-dark-secondaryText'>
						<Link to='/'>Home</Link>
					</li>
					<li className='mx-4 hover:text-dark-secondaryText'>
						<Link to='/news/1'>News</Link>
					</li>
					<li className='mx-4 hover:text-dark-secondaryText'>
						<Link to='/'>About US</Link>
					</li>
					<li className='mx-4 hover:text-dark-secondaryText'>
						<Link to='/'>Contact US</Link>
					</li>
					<li className='mx-4 hover:text-dark-secondaryText'>
						<Link to='/'>Rules</Link>
					</li>
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
					src='../src/assets/7de4ad1f547c40e6844b842c206aa46f.png'
					alt=''
				/>
			</div>
		</>
	);
}
