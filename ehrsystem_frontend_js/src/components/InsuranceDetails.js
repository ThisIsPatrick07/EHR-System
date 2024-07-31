import Input from "./Input"

function InsuranceDetails({ insuranceId, insuranceCompany, policyHolderName, policyHoldersEmployer, policyHolderRelationToPatient,
	setInsuranceId, setInsuranceCompany, setPolicyHolderName, setPolicyHoldersEmployer, setPolicyHolderRelationToPatient,
	hasInsurance
}) {
	return (
		<div>
			<Input labelText="Insurance ID" required={hasInsurance} state={insuranceId} setState={setInsuranceId} />
			<Input labelText="Insurance Company" placeholderText="XYZ Insurance Ltd." required={hasInsurance} state={insuranceCompany} setState={setInsuranceCompany} />
			<Input labelText="Policy Holder's Name" required={hasInsurance} state={policyHolderName} setState={setPolicyHolderName} />
			<Input labelText="Policy Holder's Employer (if any)" required={false} state={policyHoldersEmployer} setState={setPolicyHoldersEmployer} />
			<Input labelText="Policy Holder's Relation to Patient (Leave empty if self)" placeholderText="Father, Mother, Uncle..." required={false} state={policyHolderRelationToPatient} setState={setPolicyHolderRelationToPatient}/>
		</div>
	)
}

export default InsuranceDetails