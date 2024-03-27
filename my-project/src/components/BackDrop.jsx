import React from "react";

export default function BackDrop({ setShowMobileSideBar }) {
	return (
		<div
			className='absolute top-0 h-full w-full bg-dark-primary opacity-75 z-40'
			onClick={() => setShowMobileSideBar(false)}></div>
	);
}
