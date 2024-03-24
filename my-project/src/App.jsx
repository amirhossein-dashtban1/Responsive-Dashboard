import React from "react";
import { ThemeModeContext } from "./context/ThemeContext";
import { modeSetting } from "./context/ThemeContext";
import Toggle from "./Toggle";

export default function App() {
	const [themeMode, theme] = modeSetting();
	const colors = theme.palette;
	console.log(themeMode, colors);
	return (
		<ThemeModeContext.Provider value={themeMode}>
			<h1
				className={`text-3xl font-bold underline ${colors.background.default}`}>
				Hello world!
			</h1>
			<Toggle />
		</ThemeModeContext.Provider>
	);
}
