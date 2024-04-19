import { useState } from "react";
import NavBar from "../components/NavBar";
import MobileSideBar from "../components/MobileSideBar";
import BackDrop from "../components/BackDrop";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

export default function Index() {
	const [toggleMobileSideBar, setToggleMobileSideBar] = useState(false);

	localStorage.removeItem("menuActiveClass")
	// console.log("Index");

	return (
		<section className='dark:bg-dark-primary dark:text-dark-primaryText h-full w-full'>
			<div className='items-center border-b border-b-dark-primaryBorder flex justify-between p-4 w-full'>
				<NavBar />
			</div>

			<section className='flex justify-center h-full'>
				<SideBar></SideBar>

				{toggleMobileSideBar ? (
					<>
						<MobileSideBar
							settoggleMobileSideBar={setToggleMobileSideBar}
						/>
						<BackDrop
							settoggleMobileSideBar={setToggleMobileSideBar}
						/>
					</>
				) : null}

				<section className='p-4 flex flex-col w-4/5'>
					<Outlet />
				</section>
			</section>

			<Footer />
		</section>
	);
}
