import React from "react";
import { useContext } from "react";
import { ThemeModeContext } from "./context/ThemeContext";

export default function Toggle() {
	const toggleHandler = useContext(ThemeModeContext);
	console.log(toggleHandler.toggleThemeMode);
	return (
		<div
			onClick={() => {
				toggleHandler.toggleThemeMode();
			}}>
			Toggle
		</div>
	);
}
