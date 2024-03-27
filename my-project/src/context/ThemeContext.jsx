import { createContext, useState, useMemo } from "react";

export const ThemeModeContext = createContext({
	toggleThemeMode: () => {},
});

export const modeSetting = () => {
	const [mode, setMode] = useState("dark");

	const themeMode = useMemo(
		() => ({
			toggleThemeMode: () => {
				setMode((prev) => (prev === "dark" ? "light" : "dark"));
			},
			addThemeModeClass: (_mode) => {
				if (_mode === "dark") {
					window.document.documentElement.classList.remove("light");
					window.document.documentElement.classList.add(_mode);
				} else {
					window.document.documentElement.classList.remove("dark");
					window.document.documentElement.classList.add(_mode);
				}
			},
		}),
		[]
	);

	return [mode, themeMode];
};
