import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeModeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAlignJustify,
	faMoon,
	faSun,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
	const modeObject = useContext(ThemeModeContext);

	return (
		<>
			<div
				className=''
				onClick={() => {
					modeObject.themeMode.toggleThemeMode();
				}}>
				<FontAwesomeIcon
					className='rounded-2xl shadow-2xl'
					size='lg'
					icon={faMoon}
					onClick={() => {
						// setShowMobileSideBar(true);
					}}
				/>
			</div>

			<div className='block md:hidden w-[50px] h-[50px]'>
				<img
					className=''
					src='./src/assets/7de4ad1f547c40e6844b842c206aa46f.png'
					alt=''
				/>
			</div>

			<div className='hidden md:block'>
				<ul className='items-center flex justify-center'>
					<li className='mx-4 hover:text-dark-secondaryText'>
						<Link to='/main'>Home</Link>
					</li>
					<li className='mx-4 hover:text-dark-secondaryText'>
						<Link to='/news/1'>News</Link>
					</li>
					<li className='mx-4 hover:text-dark-secondaryText'>
						<Link>About US</Link>
					</li>
					<li className='mx-4 hover:text-dark-secondaryText'>
						<Link>Contact US</Link>
					</li>
					<li className='mx-4 hover:text-dark-secondaryText'>
						<Link>Rules</Link>
					</li>
				</ul>
			</div>

			<FontAwesomeIcon
				className='md:hidden rounded-2xl shadow-2xl'
				size='lg'
				icon={faAlignJustify}
				onClick={() => {
					// setShowMobileSideBar(true);
				}}
			/>

			<div className='hidden md:block w-[50px] h-[50px]'>
				<img
					className='rounded-xl'
					src='../src/assets/7de4ad1f547c40e6844b842c206aa46f.png'
					alt=''
				/>
			</div>
		</>
	);
}
