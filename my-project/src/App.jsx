import { modeSetting, ThemeModeContext } from "./context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login";
import Main from "./pages/Main";

export default function App() {
	const [mode, themeMode] = modeSetting();
	// console.log(mode);
	themeMode.addThemeModeClass(mode);

	// console.log(mode);
	// console.log(window.document.documentElement);
	return (
		<ThemeModeContext.Provider value={{ mode, themeMode }}>
			<Routes>
				<Route path='/' element={<Index />}>
					<Route path='home' element={<Home />}></Route>

					<Route path='profile' element={<Profile />}></Route>
				</Route>

				<Route path='/signup' element={<SignUp />}></Route>

				<Route path='/login' element={<Login />}></Route>

				<Route path='/main' element={<Main />}></Route>
			</Routes>
		</ThemeModeContext.Provider>
	);
}
