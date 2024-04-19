import { Link } from "react-router-dom";

export default function NewsBox() {
	return (
		<div className='flex justify-between my-12 w-full md:hover:scale-102 md:hover:shadow-2xl shad p-4'>
			<div className='flex flex-col justify-between w-3/4 mr-4'>
				<div className=''>
					<h3 className='mb-1 text-[6px] md:text-sm text-dark-secondaryText'>
						2 Hours ago - Reuters
					</h3>

					<p className='xl:text-xl lg:text-lg x2s:text-[9px] break-all'>
						a;sldajcakcldnscsbzvhjbvjzska;sldajcakcldnscsbzvhjbvjzssldajcakcldnscsbzvhjbvjzsk
					</p>
				</div>

				<Link className=''>
					<button className='bg-dark-primaryButton md:p-2 x2s:p-[4px] md:text-sm x2s:text-[7px] text-dark-primaryButtonText relative rounded-lg hover:bg-[#ffe95b]'>
						Read More!
					</button>
				</Link>
			</div>

			<div className='w-1/4 ml-4'>
				<img
					src='.././src/assets/pikaso_texttoimage_A-picture-of-transferring-assets-through-the-Inter.jpeg'
					className='rounded-lg w-full'
				/>
			</div>
		</div>
	);
}
