export default function (value, validations) {
	let isValid = true;
	let errorMessages = [];
	// console.log(value);
	for (const key in validations) {
		switch (validations[key]) {
			case "REQUIRED":
				if (value.trim().length === 0) {
					// console.log("www");
					errorMessages.push("This field is required!");
				}
				break;

			case "MIN-Length":
				if (value.trim().length < 8) {
					// console.log("www");
					errorMessages.push("Must be more than 8 characters");
				}
				break;

			case "MAX-LENGTH":
				if (value.trim().length > 20) {
					// console.log("www");
					errorMessages.push("Must be less than 20 characters");
				}
				break;

			default:
				break;
		}
	}

	if (errorMessages.length > 0) {
		isValid = false;
	}

	return { isValid, errorMessages };
}
