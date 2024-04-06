import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import TopBar from "../components/TopBar";
import Input from "../components/Input";
import { users } from "../data/users";

export default function Login() {
	const navigate = useNavigate();
	const [formState, handleInputChange] = useForm(
		{
			userEmail: {
				value: "",
				validation: { isValid: false, errorMessages: [] },
			},

			password: {
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
	const [warning, setWarning] = useState(<div></div>);

	const handleLogin = (e) => {
		e.preventDefault();

		if (formState.isFormValid) {
			users.map((user) => {
				if (
					formState.inputs.userEmail.value === user.email &&
					formState.inputs.password.value === user.password
				) {
					navigate("/home");
				} else {
					setWarning(
						<div className='flex justify-center mt-4'>
							<p>Wrong Email or Password!</p>
						</div>
					);
				}
			});
		} else {
			setWarning(
				<div className='flex justify-center mt-4'>
					<p>Fill all the inputs!</p>
				</div>
			);
		}
	};
	return (
		<div className='dark:bg-dark-primary dark:text-dark-primaryText h-full w-full fixed'>
			<TopBar />
			<section className=' items-center flex flex-col h-full'>
				<form className='p-8 sm:w-96'>
					<div className='text-md items-center flex justify-center'>
						<p className='mx-1'>Not Have An Acount?</p>
						<Link
							to='/signup'
							className='mx-1 dark:text-dark-secondaryText'>
							Sign Up
						</Link>
					</div>

					<div className='flex flex-col'>
						<div className='flex flex-col justify-center my-4 md:p-2'>
							<Input
								id='userEmail'
								label='Email'
								type='text'
								validations={{
									required: "REQUIRED",
									minLength: "MIN-Length",
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

					<div className='flex mt-4 justify-center'>
						<button
							onClick={handleLogin}
							className='bg-dark-primaryButton text-lg hover:bg-dark-primaryButton dark:hover:bg-[#e0b350] text-dark-primaryButtonText py-1 px-6 rounded'>
							Login
						</button>
					</div>

					{warning}
				</form>
			</section>
		</div>
	);
}
