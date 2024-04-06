import { useState } from "react";
import TopBar from "../components/TopBar";
import MobileSideBar from "../components/MobileSideBar";
import BackDrop from "../components/BackDrop";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router";

export default function Index() {
	const [showMobileSideBar, setShowMobileSideBar] = useState(false);
	return (
		<section className='h-full dark:bg-dark-primary dark:text-dark-primaryText'>
			<section className='h-12'>
				<TopBar setShowMobileSideBar={setShowMobileSideBar}></TopBar>
			</section>

			<section className='flex justify-center h-full'>
				<SideBar></SideBar>

				{showMobileSideBar ? (
					<>
						<MobileSideBar
							setShowMobileSideBar={setShowMobileSideBar}
						/>
						<BackDrop setShowMobileSideBar={setShowMobileSideBar} />
					</>
				) : null}

				<section className='p-4 w-4/5 flex flex-col h-full'>
					<Outlet />
				</section>
			</section>
		</section>
	);
}
