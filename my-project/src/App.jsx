import React from "react";
import { ThemeModeContext } from "./context/ThemeContext";
import { modeSetting } from "./context/ThemeContext";
import { useContext } from "react";

export default function App() {
	const [themeMode, theme] = modeSetting();
	const { palette } = theme;
	console.log(themeMode, `text-${palette.background.primary}`);
	return (
		<ThemeModeContext.Provider value={themeMode.toggleThemeMode}>
			<h1
				onClick={() => {
					console.log("hi");
				}}
				className={`text-3xl font-bold underline text-${palette.background.primary}`}>
				Hello world!
			</h1>
		</ThemeModeContext.Provider>
	);
}
