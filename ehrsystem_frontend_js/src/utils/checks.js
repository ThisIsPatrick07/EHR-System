export function validateZipcode(zipcode, required = true) {
	if (!required) return true;

	const regex = /^[0-9]{6}$/;
	return regex.test(zipcode);
}

export function validateEmail(email, required = true) {
	if (!required) return true;

	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
	return regex.test(email);
}

export function validateDate(dateString, required = true) {
	if (!required) return true;

	const today = new Date();
	const inputDate = new Date(dateString);

	// Check if the date is valid
	if (isNaN(inputDate.getTime())) {
		return false;
	}

	// Compare the input date to today's date
	return inputDate <= today;
}

export function validateStateLocation(state, required = true) {
	if (!required) return true;

	if (state === defaultStateValue) {
		return false;
	}
	return true;
}

export const defaultStateValue = 'Please select State';

export function validateMandatoryInsuranceDetails(insuranceDetails) {
	if (insuranceDetails.insuranceId === '') {
		return false;
	}

	if (insuranceDetails.insuranceCompany === '') {
		return false;
	}
	if (insuranceDetails.policyHolderName === '') {
		return false;
	}

	return true;
}

export function validateMobileNumber(number) {
	const regex = /^\d{10}$/;
	return regex.test(number);
}