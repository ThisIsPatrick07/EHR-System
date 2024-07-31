import Input from "./Input"

function MedicalHistoryDetails({ visitReason, pastProblems, currentMedications, setVisitReason, setPastProblems, setCurrentMedications }) {
	return (
		<div>
			<Input labelText='Reason for visit' placeholderText="Headache, Stomach pain etc." state={visitReason} setState={setVisitReason} />
			<Input labelText='Past Medical Problems (if any)' state={pastProblems} setState={setPastProblems} required={false} />
			<Input labelText='Currently taking medications (if any)' state={currentMedications} setState={setCurrentMedications} required={false} />
		</div>
	)
}

export default MedicalHistoryDetails