import React from "react";

export default function BackDrop({ setToggleModal }) {
	return (
		<div
			className='fixed top-0 left-0 h-full w-full bg-dark-primary opacity-75 z-40'
			onClick={setToggleModal}></div>
	);
}
