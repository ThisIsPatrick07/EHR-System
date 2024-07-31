import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import InsuranceDetails from "./InsuranceDetails";
import MedicalHistoryDetails from "./MedicalHistoryDetails";
import { validateEmail, validateZipcode, validateStateLocation, defaultStateValue, validateMandatoryInsuranceDetails, validateMobileNumber } from "../utils/checks.js"
import submitForm from "../utils/submitForm.js";
import styles from './PatientDetail.module.css'
import InsuranceCheckbox from "./InsuranceCheckbox.js";

function PatientDetail() {
	// whether or not to pop open the insurance input
	const [showInsuranceInput, setShowInsuranceInput] = useState(false);

	// plain text
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [zipcode, setZipcode] = useState('');
	const [email, setEmail] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [visitReason, setVisitReason] = useState('');
	const [pastProblems, setPastProblems] = useState('');
	const [currentMedications, setCurrentMedications] = useState('');
	
	const [insuranceId, setInsuranceId] = useState('');
	const [insuranceCompany, setInsuranceCompany] = useState('');
	const [policyHolderName, setPolicyHolderName] = useState('');
	const [policyHoldersEmployer, setPolicyHoldersEmployer] = useState('');
	const [policyHolderRelationToPatient, setPolicyHolderRelationToPatient] = useState('');

	// options
	const [state, setState] = useState(defaultStateValue);
	console.log(state);

	// date
	const [dob, setDob] = useState('Enter your DOB');

	async function handleSubmit(e) {
		e.preventDefault();

		if (!validateZipcode(zipcode)) {
			alert('Zipcode must strictly be of 6 numbers only! No alphabets or any other special characters!');
			// setZipcode('');
			return;
		}

		if (!validateEmail(email, false)) {
			alert('E-mail must have an "@" symbol along with a .com, .net or a 2 letter domain!');
			// setEmail('');
			return;
		}

		if (!validateStateLocation(state)) {
			alert('Please enter your state!');
			// setState(defaultStateValue);
			return;
		}
		
		if(!validateMobileNumber(mobileNo)){
			alert('Mobile number should be of exactly 10 digits!');
			// setMobileNo('');
			return;
		}

		// only validate insurance details if user has insurance
		if (showInsuranceInput){
			if (!validateMandatoryInsuranceDetails({
				insuranceId,
				insuranceCompany,
				policyHolderName,
			})) {
				alert('Please enter mandatory insurance details');
				setInsuranceId('');
				setInsuranceCompany('');
				setPolicyHolderName('');
				return;
			}
		}

		try {
			await submitForm({
				name,
				address,
				state,
				zipcode,
				dob,
				email,
				mobileNo,

				insuranceId,
				insuranceCompany,
				policyHolderName,
				policyHoldersEmployer,
				policyHolderRelationToPatient,

				visitReason,
				pastProblems,
				currentMedications,
			});
		} catch (error) {
			console.log(`Error while submitting form data! Error message: ${error.message}`);
		}

		alert(`form submitted!`);
	}

	function handleCheck(e) {
		// e.preventDefault();
		setShowInsuranceInput(e.target.checked);
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
			<PersonalDetails
				name={name}
				address={address}
				zipcode={zipcode}
				email={email}
				mobileNo={mobileNo}
				dob={dob}
				state={state}

				setName={setName}
				setAddress={setAddress}
				setZipcode={setZipcode}
				setEmail={setEmail}
				setMobileNo={setMobileNo}
				setDob={setDob}
				setState={setState}
			/>
			{/* Add a checkmark option for user if insurance is available.
				If user clicks yes, ONLY THEN show the insurance input	
			*/}
			<InsuranceCheckbox showInsuranceInput={showInsuranceInput} onCheck={handleCheck} />
			{showInsuranceInput &&
				<InsuranceDetails
					insuranceId={insuranceId}
					insuranceCompany={insuranceCompany}
					policyHolderName={policyHolderName}
					policyHoldersEmployer={policyHoldersEmployer}
					policyHolderRelationToPatient={policyHolderRelationToPatient}

					setInsuranceId={setInsuranceId}
					setInsuranceCompany={setInsuranceCompany}
					setPolicyHolderName={setPolicyHolderName}
					setPolicyHoldersEmployer={setPolicyHoldersEmployer}
					setPolicyHolderRelationToPatient={setPolicyHolderRelationToPatient}
				/>
			}
			<MedicalHistoryDetails
				visitReason={visitReason}
				pastProblems={pastProblems}
				currentMedications={currentMedications}

				setVisitReason={setVisitReason}
				setPastProblems={setPastProblems}
				setCurrentMedications={setCurrentMedications}
			/>
			<div className={styles.formContainer}>
				<button className={styles.submitButton}>Submit</button>
			</div>
		</form>
	);
}

export default PatientDetail;