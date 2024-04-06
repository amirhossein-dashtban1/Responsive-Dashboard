import useForm from "../hooks/useForm";
import { users } from "../data/users";
import Input from "./Input";

export default function Profile() {
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

	// console.log(inputs);

	return (
		<section className='items-center flex flex-col flex-1'>
			<section className='flex sm:justify-normal justify-center w-full'>
				<h1 className='text-3xl'>Profile</h1>
			</section>

			<section className='items-center flex flex-col md:w-full justify-start'>
				<form className=''>
					<div className='flex flex-col'>
						<div className='items-center flex flex-col sm:flex-row justify-center'>
							<div className='flex flex-col justify-center p-4 sm:w-1/2 sm:m-2 sm:p-2'>
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

							<div className='flex flex-col justify-center p-4 w-full sm:m-2 sm:p-2'>
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
						</div>

						<div className='flex flex-col justify-center p-4 sm:m-2 sm:p-2'>
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

						<div className='flex flex-col justify-center p-4 sm:m-2 sm:p-2'>
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
					</div>

					<div className='flex md:pl-4 md:justify-normal justify-center'>
						<button className='mt-8 bg-dark-primaryButton text-dark-primaryButtonText p-1 w-20 rounded-md'>
							Save
						</button>
					</div>
				</form>
			</section>
		</section>
	);
}
