import Card from "./Card";
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	ResponsiveContainer,
	BarChart,
	Tooltip,
	Legend,
	Bar,
} from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faUsers,
	faArrowDownUpAcrossLine,
	faPager,
	faPaperclip,
	faGear,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
	const data = [
		{
			name: "Page A",
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: "Page B",
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: "Page C",
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: "Page D",
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: "Page E",
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: "Page F",
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: "Page G",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
	];

	return (
		<>
			<section className={`mb-8`}>
				<h1 className={`text-5xl mb-3`}>Overview</h1>
				<p className={`text-xl ml-1`}>Welcome back, Lily!</p>
			</section>

			<section className='grid grid-cols-1 gap-1 sm:grid-cols-2  lg:grid-cols-3 xlg:grid-cols-5 justify-items-center'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</section>

			<section className='flex flex-col lg:flex-row p-4'>
				<div className='border mr-4 p-2 rounded-md flex flex-col w-full lg:w-1/2 border-dark-primaryBorder'>
					<h1>Monthly Revenue</h1>
					<ResponsiveContainer width={"100%"} height={200}>
						<LineChart
							width={500}
							height={500}
							data={data}
							margin={{
								top: 10,
								buttom: 10,
								right: 1,
								left: 0,
							}}>
							<Line
								type='monotone'
								dataKey='uv'
								stroke='#8884d8'
							/>
							<CartesianGrid stroke='#ccc' />
							<XAxis dataKey='name' />
							<YAxis />
						</LineChart>
					</ResponsiveContainer>
				</div>

				<br />

				<div className='border p-2 flex flex-col rounded-md w-full lg:w-1/2 border-dark-primaryBorder'>
					<h1>Monthly Transactions</h1>
					<ResponsiveContainer width={"100%"} height={200}>
						<BarChart
							width={500}
							height={500}
							data={data}
							margin={{
								top: 10,
								buttom: 10,
								right: 1,
								left: 0,
							}}>
							<CartesianGrid strokeDasharray='3 3' />
							<XAxis dataKey='name' />
							<YAxis />
							<Tooltip />
							<Bar dataKey='pv' fill='#8884d8' />
							<Bar dataKey='uv' fill='#82ca9d' />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</section>

			<section className=''>
				<h3 className='mb-6'>Recent Activity</h3>

				<div className='flex pl-4'>
					<div>
						<div className='border-l-2 mt-2 border-light-secondaryText flex flex-col h-20 w-4 relative'>
							<div className=''>
								<FontAwesomeIcon
									className='absolute top-[-20px] right-2 '
									icon={faGear}
								/>
							</div>
						</div>

						<div className='border-l-2 my-6 border-light-secondaryText flex flex-col h-20 w-4 relative'>
							<div className=''>
								<FontAwesomeIcon
									className='absolute top-[-20px] right-2'
									icon={faGear}
								/>
							</div>
						</div>

						<div className='border-l-2 border-light-secondaryText flex flex-col h-20 w-4 relative'>
							<div className=''>
								<FontAwesomeIcon
									className='absolute top-[-20px] right-2'
									icon={faGear}
								/>
							</div>
						</div>
					</div>

					<div className='flex flex-col justify-between'>
						<div className='h-20'>
							<p>Hello</p>
							<p>10,000$</p>
						</div>

						<div className='h-20'>
							<p>Hello</p>
							<p>10,000$</p>
						</div>

						<div className='h-20'>
							<p>Hello</p>
							<p>10,000$</p>
						</div>
					</div>
				</div>
			</section>

			<div className='items-center flex justify-center sm:justify-end p-2'>
				<button className='hover:bg-dark-primaryChart text-dark-secondaryButton bg-light-secondaryButton dark:bg-dark-primaryAction rounded-md p-2 w-24'>
					Add a note
				</button>
			</div>
		</>
	);
}
