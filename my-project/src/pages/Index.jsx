import { useState } from "react";
import TopBar from "../components/TopBar";
import MobileSideBar from "../components/MobileSideBar";
import BackDrop from "../components/BackDrop";
import SideBar from "../components/SideBar";
import Home from "../components/Home";

export default function Index() {
	const [showMobileSideBar, setShowMobileSideBar] = useState(false);
	return (
		<section className='relative h-full xlg:h-full dark:bg-dark-primary dark:text-dark-primaryText'>
			<section className={`mb-4 z-20`}>
				<TopBar setShowMobileSideBar={setShowMobileSideBar}></TopBar>
			</section>

			<section className='flex justify-center'>
				<SideBar></SideBar>

				{showMobileSideBar ? (
					<>
						<MobileSideBar />
						<BackDrop setShowMobileSideBar={setShowMobileSideBar} />
					</>
				) : null}

				<section className='p-4 w-4/5 flex flex-col'>
					<Home />
				</section>
			</section>
		</section>
	);
}
