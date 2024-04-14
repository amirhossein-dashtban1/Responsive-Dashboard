import { createContext, useState, useMemo } from "react";

export const ThemeModeContext = createContext({
	toggleThemeMode: () => {},
});

export const modeSetting = () => {
	const theme = localStorage.getItem("theme") || "dark";
	const [mode, setMode] = useState(theme);

	const themeMode = useMemo(
		() => ({
			toggleThemeMode: () => {
				setMode((prev) => (prev === "dark" ? "light" : "dark"));
			},

			addThemeModeClass: (_mode) => {
				if (_mode === "dark") {
					window.document.documentElement.classList.remove("light");
				} else {
					window.document.documentElement.classList.remove("dark");
				}
				window.document.documentElement.classList.add(_mode);
				localStorage.setItem("theme", _mode);
			},
		}),
		[]
	);

	return [mode, themeMode];
};
