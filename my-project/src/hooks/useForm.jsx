import { useState } from "react";

export default function useForm(initInputs, initInputValidation) {
	const [formState, setFormState] = useState({
		inputs: initInputs,
		isFormValid: initInputValidation,
	});

	const handleInputChange = (inputID, validation, value) => {
		let count = 0;
		// console.log(count, validation.isValid);
		if (!validation.isValid) {
			count++;
		} else {
			// console.log("Entered");
			for (const input in formState.inputs) {
				if (input != inputID) {
					// console.log(formState.inputs[input].validation.isValid);
					formState.inputs[input].validation.isValid === false &&
						count++;
				}
			}
		}

		// console.log(count);

		setFormState({
			...formState,
			inputs: {
				...formState.inputs,
				[inputID]: {
					validation,
					value,
				},
			},
			isFormValid: count === 0 ? true : false,
		});
	};

	// console.log(formState);

	return [formState, handleInputChange];
}
