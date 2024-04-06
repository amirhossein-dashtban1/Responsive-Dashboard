import { ThemeModeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAlignJustify,
	faMoon,
	faSun,
} from "@fortawesome/free-solid-svg-icons";

export default function TopBar({ setShowMobileSideBar }) {
	const modeObject = useContext(ThemeModeContext);
	// console.log(modeObject);
	return (
		<section className='p-2 h-12 relative'>
			<FontAwesomeIcon
				className='md:hidden absolute left-0 top-0 p-4 rounded-2xl shadow-2xl'
				size='lg'
				icon={faAlignJustify}
				onClick={() => {
					setShowMobileSideBar(true);
				}}
			/>

			<div
				onClick={() => {
					modeObject.themeMode.toggleThemeMode();
				}}
				className='absolute flex items-center justify-center right-2 top-2 p-4 rounded-xl w-2 h-2 shadow-2xl bg-dark-primaryBorder'>
				<FontAwesomeIcon
					className='text-dark-primaryButton  dark:text-dark-primaryText'
					size='lg'
					icon={modeObject.mode === "dark" ? faMoon : faSun}
				/>
			</div>
		</section>
	);
}
