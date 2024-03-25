import { createContext, useState, useMemo } from "react";

const themeSetting = (mode) =>
	mode === "dark"
		? {
				palette: {
					action: {
						active: "bg-dark-primaryAction",
					},
					background: {
						primary: "dark-dark-primary",
					},
					border: {
						primary: "border-dark-primaryBorder",
					},
					button: {
						primary: "bg-dark-primaryButton",
						secondary: "bg-dark-secondaryButton",
						primaryText: "bg-dark-primaryButtonText",
						secondaryText: "bg-dark-secondaryButtonText",
					},
					chart: {
						primary: "bg-dark-primaryChart",
					},
					mode: mode,
					text: {
						primary: "text-dark-primaryText",
						secondary: "text-dark-secondaryText",
					},
				},
		  }
		: {
				palette: {
					action: {
						active: "bg-light-primaryAction",
					},
					background: {
						primary: "bg-light-primary",
					},
					border: {
						primary: "border-light-primaryBorder",
					},
					button: {
						primary: "bg-light-primaryButton",
						secondary: "bg-light-secondaryButton",
						primaryText: "bg-light-primaryButtonText",
						secondaryText: "bg-light-secondaryButtonText",
					},
					chart: {
						primary: "bg-light-primaryChart",
					},
					mode: mode,
					text: {
						primary: "text-light-primaryText",
						secondary: "text-light-secondaryText",
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
