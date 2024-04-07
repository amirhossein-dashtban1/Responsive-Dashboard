import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorClosed, faDashboard } from "@fortawesome/free-solid-svg-icons";

export default function ProfileModal() {
	return (
		<div className='absolute flex flex-col p-2 w-64 top-20 left-8 bg-dark-primaryBorder rounded z-50'>
			<div className='px-2 py-3 mx-2 border-b flex flex-col'>
				<p className='text-xl'>Lily Kiani</p>

				<div className='flex items-center justify-end'>
					<p className='text-lg text-[#44da44]'>Balance:</p>
					<p className='text-lg ml-2 text-[#44da44]'>$1,000,000</p>
				</div>
			</div>

			<Link
				className='mb-2 mt-2 hover:bg-dark-primaryAction px-2 py-3 mx-2 hover:text-primaryAction rounded-xl '
				to='/dashboard/home'>
				<FontAwesomeIcon
					className='mr-2 rounded-2xl shadow-2xl text-lg'
					icon={faDashboard}
				/>
				Dashboard
			</Link>

			<div className='border-t flex py-2'>
				<Link className='flex items-center px-2 py-3 mx-2 hover:bg-[#ff000087] rounded-xl w-full'>
					<FontAwesomeIcon
						className='mr-2 rounded-2xl shadow-2xl text-lg'
						icon={faDoorClosed}
					/>
					LogOut
				</Link>
			</div>
		</div>
	);
}
