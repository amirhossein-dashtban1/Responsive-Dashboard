import React from "react";
import { modeSetting } from "../context/ThemeContext";

export default function Card() {
	const [themeMode, mode] = modeSetting();
	return (
		<section
			className={`flex flex-col w-40 h-40 p-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-8`}>
			<h5 className='mb-2 text-2 text-center font-bold tracking-tight text-gray-900'>
				Total Revenue
			</h5>
			<p className='font-normal text-gray-700 text-center'>12,000$</p>
		</section>
	);
}
