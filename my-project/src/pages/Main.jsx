import NavBar from "../components/NavBar";
// import CreditCard from "../components/CreditCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDollar,
	faArrowRight,
	faShield,
	faUsers,
	faDollarSign,
	faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NewsBox from "../components/NewsBox";
import Footer from "../components/Footer";

export default function Main() {
	return (
		<div className='items-center dark:bg-dark-primary flex flex-col h-full dark:text-dark-primaryText w-full'>
			<div className='items-center border-b border-b-dark-primaryBorder flex justify-between p-4 w-full'>
				<NavBar />
			</div>

			<div className='items-center flex flex-col justify-center mt-12'>
				<div className='items-center flex-col justify-center sm:text-4xl'>
					<p className='text-xl xs:text-2xl sm:text-3xl lg:text-4xl mb-4 text-center'>
						Simple Way to Manage Your
					</p>

					<p className='text-xl xs:text-2xl sm:text-3xl lg:text-4xl mt-4 text-center'>
						All Internationall
						<span> </span>
						<span className=' text-dark-secondaryText'>
							Transactions
						</span>
					</p>
				</div>

				<div className='items-center flex flex-col justify-center my-8'>
					<p className='text-[10px] xs:text-sm lg:text-md text-center'>
						Everything you need to pay and get paid by international
						marketplaces
					</p>

					<p className='text-[10px] xs:text-sm lg:text-md text-center'>
						and direct clients on secure one platform.
					</p>
				</div>

				<div className='flex flex-col md:flex-row'>
					<div className='items-center flex my-4 md:mx-12'>
						<FontAwesomeIcon
							className='mx-1 text-2xl'
							icon={faShield}
							onClick={() => {
								// setShowMobileSideBar(true);
							}}
						/>
						<p className='mx-1'>
							Regulated by the Bank of America!
						</p>
					</div>

					<div className='items-center flex my-4 md:mx-12'>
						<FontAwesomeIcon
							className='mx-1 text-2xl'
							icon={faDollar}
						/>
						<p className='mx-1'>Only 5% Transaction Cost! </p>
					</div>
				</div>

				<div className=''>
					<Link to='/signup'>
						<button className='bg-dark-primaryButton my-12 pl-2 pr-8 py-3 md:text-lg text-dark-primaryButtonText relative rounded-lg hover:bg-[#ffe95b]'>
							<p className=''>Free Registration</p>
							<FontAwesomeIcon
								className='absolute right-1 md:text-md top-[1.15rem]'
								icon={faArrowRight}
							/>
						</button>
					</Link>
				</div>
				{/* <div className='items-center flex flex-col lg:flex-row justify-center my-12'>
					<CreditCard />

					<CreditCard />

					<CreditCard />
				</div> */}
			</div>

			<div className='mx-12 p-4 my-2 lg:border lg:border-dark-primaryBorder grid grid-cols-1 gap-1 sm:grid-cols-2  xlg:grid-cols-4 justify-items-center'>
				<div className='shadow-2xl flex mx-6 p-6 w-80'>
					<div className='item-center flex'>
						<FontAwesomeIcon
							className='mx-2 text-2xl'
							icon={faUsers}
						/>
					</div>

					<div className='items-center flex'>
						<p className='mx-2'>Over 10,000,000 Users!</p>
					</div>
				</div>

				<div className='shadow-2xl flex mx-6 p-6 w-80'>
					<div className='item-center flex'>
						<FontAwesomeIcon
							className='mx-2 text-2xl'
							icon={faMoneyBillTransfer}
						/>
					</div>

					<div className='items-center flex'>
						<p className='mx-2'>Over 50,000,000 Transactions!</p>
					</div>
				</div>

				<div className='shadow-2xl flex r mx-6 p-6 w-80'>
					<div className='item-center flex'>
						<FontAwesomeIcon
							className='mx-4 text-2xl'
							icon={faDollarSign}
						/>
					</div>

					<div className='items-center flex'>
						<p className='mx-2'>Over $10,000,000 Transfered!</p>
					</div>
				</div>

				<div className='shadow-2xl flex  mx-6 p-6 w-80'>
					<div className='item-center flex'>
						<FontAwesomeIcon
							className='mx-2 text-2xl'
							icon={faUsers}
						/>
					</div>

					<div className='items-center flex'>
						<p className='mx-2'>Over 10,000,000 Users!</p>
					</div>
				</div>
			</div>

			<div className='m-12'>
				<h2 className='mb-8 lg:text-2xl x2s:text-sm md:text-lg'>
					Latest News
				</h2>

				<div className='md:hover:scale-102'>
					<NewsBox />
				</div>

				<div className='md:hover:scale-102'>
					<NewsBox />
				</div>

				<div className='md:hover:scale-102'>
					<NewsBox />
				</div>
			</div>

			<Footer />
		</div>
	);
}
