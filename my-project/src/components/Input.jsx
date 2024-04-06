import { useEffect, useState } from "react";
import validator from "../utils/validator";

export default function Input(props) {
	const [inputState, setInputState] = useState({
		value: "",
		validation: { isValid: false, errorMessages: [] },
	});

	const { value, validation } = inputState;

	// console.log(validation.isValid);

	useEffect(() => {
		props.handleInputChange(props.id, validation, value);
	}, [value]);

	const handleChange = (event) => {
		setInputState({
			...inputState,
			value: event.target.value,
			validation: validator(event.target.value, props.validations),
		});
	};

	return (
		<>
			<label htmlFor={props.id} className='mb-2'>
				{props.label}
			</label>

			<input
				className='bg-dark-primaryBorder p-3 rounded'
				id={props.id}
				type={props.type}
				onChange={handleChange}
				disabled={props.disabled}
			/>
			{/* {console.log(validation.isValid)} */}

			{!validation.isValid ? (
				<div className='block h-4 text-[13px] text-[red] mt-1 w-full'>
					{validation.errorMessages[0]}
				</div>
			) : (
				<div className='block h-4 mt-1 w-full'></div>
			)}
		</>
	);
}
