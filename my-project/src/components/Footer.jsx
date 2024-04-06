import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocation,
	faPhone,
	faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faLinkedin,
	faFacebook,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (
		<section className='border-dark-primaryBorder border-t flex flex-col justify-between mt-4 w-full'>
			<div className='flex flex-col xs:flex-row w-full p-8'>
				<div className='flex flex-col justify-normal mb-6 w-full md:w-1/2'>
					<div className='items-center flex justify-start'>
						<h3 className='mb-3 sm:mb-8 w-full text-left'>
							Contact US
						</h3>
					</div>

					<div className='flex flex-col items-start justify-between'>
						<div className='items-center flex my-2'>
							<FontAwesomeIcon
								className='mr-4 text-[11px] md:text-xl'
								icon={faLocation}
							/>

							<span className='text-[11px]'>
								21 Revolution Street <br />
								<span className=''>Paris, France</span>
							</span>
						</div>

						<div className='items-center flex my-2'>
							<FontAwesomeIcon
								className='mr-4 text-[11px] md:text-xl'
								icon={faPhone}
							/>

							<span className='text-[11px]'>011654874552</span>
						</div>

						<div className='items-center flex my-2'>
							<FontAwesomeIcon
								className='mr-4 text-[11px] md:text-xl'
								icon={faMailBulk}
							/>

							<span className='text-[11px]'>
								MyLily@gmail.com
							</span>
						</div>
					</div>
				</div>

				<div className='items-center flex flex-col justify-normal w-full md:w-1/2'>
					<div className='items-center flex justify-start'>
						<h3 className='mb-3 sm:mb-8 w-full text-left'>
							About US
						</h3>
					</div>

					<div className=''>
						<p className='lg:text-[1rem] sm:text-[0.75rem] xs:text-sm x2s:text-[11px] break-all text-justify'>
							Lorem Ipsum is simply dummy text of the printing
							andtypesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the
							1500s,when an unknown printer took a galley of type
							and scrambled it to make a type specimen book. It
							hassurvived not only five centuries, but also the
							leap into electronic typesetting, remaining
							essentially unchanged.It was popularised in the
							11160s with the release of Letraset sheets
							containing Lorem Ipsum passages, andmore recently
							with desktop publishing software like Aldus
							PageMaker including versions of Lorem Ipsum.
						</p>
					</div>
				</div>
			</div>

			<div className='flex justify-center pb-6'>
				<FontAwesomeIcon
					className='mr-4 text-sm md:text-xl'
					icon={faInstagram}
				/>

				<FontAwesomeIcon
					className='mr-4 text-sm md:text-xl'
					icon={faFacebook}
				/>

				<FontAwesomeIcon
					className='mr-4 text-sm md:text-xl'
					icon={faLinkedin}
				/>

				<FontAwesomeIcon
					className='mr-4 text-sm md:text-xl'
					icon={faTwitter}
				/>
			</div>
		</section>
	);
}
