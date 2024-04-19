import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendar,
	faCopy,
	faEye,
	faShare,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function New() {
	return (
		<div className='dark:bg-dark-primary dark:text-dark-primaryText'>
			<div className='items-center border-b border-b-dark-primaryBorder flex justify-between p-4 w-full'>
				<NavBar />
			</div>

			<section className='flex p-12'>
				<div className='bg-[#242A38] rounded-lg flex flex-col px-4 py-2 w-3/4'>
					<div className='border-dark-primaryBorder border-b pb-6 pt-4'>
						<h1 className='text-2xl'>
							Why the prices change sharply? Lily says...
						</h1>
					</div>

					<div className='items-center flex my-6'>
						<div className='mr-10'>
							<FontAwesomeIcon
								className=' rounded-2xl shadow-2xl text-lg'
								icon={faUser}
							/>
							<span className='text-sm ml-2'>
								AmirHosein Dashtban Namaghi
							</span>
						</div>
						<div className='mr-10'>
							<FontAwesomeIcon
								className=' rounded-2xl shadow-2xl text-lg'
								icon={faCalendar}
							/>
							<span className='text-sm ml-2'>4/19/2024</span>
						</div>
						<div className='mr-10'>
							<FontAwesomeIcon
								className=' rounded-2xl shadow-2xl text-lg'
								icon={faEye}
							/>
							<span className='text-sm ml-2'>145</span>
						</div>
					</div>

					<div className='items-center flex flex-col'>
						<img
							src='/src/assets/pikaso_texttoimage_A-picture-of-transferring-assets-through-the-Inter.jpeg'
							className=''
						/>
					</div>
				</div>

				<div className='bg-[#242A38] items-center rounded-lg flexflex-col ml-12 px-4 py-2 h-40 w-1/4'>
					<div className='border-b-dark-primaryBorder border-b items-center flex pb-4'>
						<FontAwesomeIcon
							className='rounded-2xl shadow-2xl text-lg mr-2'
							icon={faShare}
						/>
						<span className='ml-2 text-lg'>Share this new!</span>
					</div>
					<div className='mt-4'>
						<div className='border border-dotted rounded items-cemter flex justify-center p-4'>
							<div className='items-center flex justify-center mr-4'>
								<FontAwesomeIcon className='' icon={faCopy} />
							</div>

							<div className='items-center flex justify-center mr-4'>
								<p>https://sabzlearn.ir/?p=835</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
