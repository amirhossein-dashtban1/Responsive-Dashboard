import { createContext, useState, useMemo } from "react";

const themeSetting = (mode) =>
	mode === "dark"
		? {
				palette: {
					action: {
						active: "#33405C",
					},
					background: {
						default: "text-orange-500",
					},
					border: {
						primary: "#33405C",
					},
					button: {
						primary: "#F5C754",
						secondary: "#E3E8F2",
						primaryText: "#141C24",
						secondaryText: "#F7FAFA",
					},
					chart: {
						primary: "#8A9EBF",
					},
					mode: mode,
					text: {
						primary: "#F7FAFA",
						secondary: "#8A9EBF",
					},
				},
		  }
		: {
				palette: {
					action: {
						active: "#E3E8F2",
					},
					background: {
						primary: "text-stone-950",
					},
					border: {
						primary: "#D4DBE8",
					},
					button: {
						primary: "#F5C754",
						secondary: "#E3E8F2",
						primaryText: "#141C24",
						secondaryText: "#141C24",
					},
					chart: {
						primary: "#0F1622",
					},
					text: {
						primary: "#141C24",
						secondary: "#D4DBE8",
					},
				},
		  };

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
		}),
		[]
	);

	const theme = useMemo(() => {
		return {
			...themeSetting(mode),
		};
	}, [mode]);

	return [themeMode, theme];
};
