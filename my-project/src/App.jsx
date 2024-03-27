import { modeSetting, ThemeModeContext } from "./context/ThemeContext";
import Index from "./pages/Index";

export default function App() {
	const [mode, themeMode] = modeSetting();
	// console.log(mode);
	themeMode.addThemeModeClass(mode);

	// console.log(mode);
	// console.log(window.document.documentElement);
	return (
		<ThemeModeContext.Provider value={{ mode, themeMode }}>
			<Index></Index>
		</ThemeModeContext.Provider>
	);
}
