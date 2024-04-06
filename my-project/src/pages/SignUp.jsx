import useForm from "../hooks/useForm";
import TopBar from "../components/TopBar";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import React from "react";

export default function Login() {
	const [inputs, handleInputChange] = useForm(
		{
			userFirstName: {
				value: "",
				validation: { isValid: false, errorMessages: [] },
			},

			userLastName: {
				value: "",
				validation: { isValid: false, errorMessages: [] },
			},

			// userEmail: {
			// 	value: "",
			// 	validation: { isValid: true, errorMessages: [] },
			// },
		},
		false
	);

	return (
		<div className='bg-dark-primary text-dark-primaryText h-full w-full fixed'>
			<TopBar />

			<section className='items-center flex flex-col h-full'>
				<form className=''>
					<div className='text-md items-center flex justify-center'>
						<p className='mx-1'>Not Have An Acount?</p>
						<Link
							to='/login'
							className='mx-1 text-dark-secondaryText'>
							Sign In
						</Link>
					</div>

					<div className='flex flex-col my-4'>
						<div className='md:flex md:justify-center'>
							<div className='flex flex-col justify-center md:p-2'>
								<Input
									id='userFirstName'
									label='First Name'
									type='text'
									validations={{
										required: "REQUIRED",
										minLength: "MIN-Length",
										maxLength: "MAX-LENGTH",
									}}
									handleInputChange={handleInputChange}
								/>
							</div>

							<div className='flex flex-col justify-center md:p-2'>
								<Input
									id='userLastName'
									label='Last Name'
									type='text'
									validations={{
										required: "REQUIRED",
										minLength: "MIN-Length",
										maxLength: "MAX-LENGTH",
									}}
									handleInputChange={handleInputChange}
								/>
							</div>
						</div>

						<div className='flex flex-col justify-center md:p-2'>
							<Input
								id='userEmail'
								label='Email'
								type='text'
								validations={{
									required: "REQUIRED",
									minLength: "MIN-Length",
									maxLength: "MAX-LENGTH",
								}}
								handleInputChange={handleInputChange}
							/>
						</div>

						<div className='flex flex-col justify-center md:p-2'>
							<Input
								id='userName'
								label='User Name'
								type='text'
								validations={{
									required: "REQUIRED",
									minLength: "MIN-Length",
									maxLength: "MAX-LENGTH",
								}}
								handleInputChange={handleInputChange}
							/>
						</div>

						<div className='flex flex-col justify-center md:p-2'>
							<Input
								id='password'
								label='Password'
								type='text'
								validations={{
									required: "REQUIRED",
									minLength: "MIN-Length",
									maxLength: "MAX-LENGTH",
								}}
								handleInputChange={handleInputChange}
							/>
						</div>
					</div>

					<div className='flex justify-center'>
						<button className='bg-dark-primaryButton text-lg hover:bg-dark-primaryButton dark:hover:bg-[#e0b350] text-dark-primaryButtonText py-1 px-6 rounded'>
							Sign Up
						</button>
					</div>
				</form>
			</section>
		</div>
	);
}
