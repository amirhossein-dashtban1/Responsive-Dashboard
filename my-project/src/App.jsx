import { modeSetting, ThemeModeContext } from "./context/ThemeContext";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Main from "./pages/Main";
import News from "./pages/News";
import Transactions from "./components/Transactions";
import Inbox from "./components/Inbox";
import New from "./pages/New";

export default function App() {
	const [mode, themeMode] = modeSetting();
	themeMode.addThemeModeClass(mode);

	return (
		<ThemeModeContext.Provider value={{ mode, themeMode }}>
			<Routes>
				<Route path='/' element={<Main />}></Route>

				<Route path='/signup' element={<SignUp />}></Route>

				<Route path='/login' element={<Login />}></Route>

				<Route path='/dashboard' element={<Index />}>
					<Route path='home' element={<Home />}></Route>

					<Route
						path='transactions/:paginationNumber'
						element={<Transactions />}></Route>

					<Route
						path='inbox/:paginationNumber'
						element={<Inbox />}></Route>

					<Route path='profile' element={<Profile />}></Route>
				</Route>

				{/* <Route path='/main' element={<Main />}></Route> */}

				<Route
					path='/news/:paginationNumber'
					element={<News />}></Route>

				<Route path='/new/:id' element={<New />}></Route>
			</Routes>
		</ThemeModeContext.Provider>
	);
}
