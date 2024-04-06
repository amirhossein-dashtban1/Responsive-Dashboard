import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAlignJustify,
	faMoon,
	faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

export default function CreditCard() {
	return (
		<div className='bg-[#ccc] opacity-75 shadow-2xl flex flex-col mx-4 my-8 lg:my-0 p-8 text-dark-primaryButtonText rotate-22.5 rounded-md w-52 md:w-72'>
			<div className='my-3'>
				<FontAwesomeIcon
					className='shadow-2xl rounded-2xl'
					size='lg'
					icon={faPaypal}
					onClick={() => {
						// setShowMobileSideBar(true);
					}}
				/>
			</div>
			<div className='flex justify-between my-2'>
				<p>Lily Kiani</p>
				<p>01/29</p>
			</div>
			<div className='my-3'>
				<p>0493 2567 3384 5402</p>
			</div>
		</div>
	);
}
