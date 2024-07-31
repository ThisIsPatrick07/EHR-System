import Input from "./Input"
import Option from "./Option"
import { statesOfIndia } from "../utils/statesOfIndia.js";
import { defaultStateValue } from "../utils/checks.js";

function PersonalDetails({ name, address, zipcode, email, mobileNo, dob, state, setName, setAddress, setZipcode, setEmail, setMobileNo, setDob, setState }) {
	
	return (
		<div>
			<Input labelText='Full Name' placeholderText="First and Last Name" state={name} setState={setName} />
			
			<Input labelText='Address' placeholderText="Flat No., Building, Area" state={address} setState={setAddress} />
			{/* Input for the state in which the patient lives */}
			<Option name="State" options={statesOfIndia} state={state} setState={setState} defaultValue={defaultStateValue} />
			<Input typeOfInput="number" labelText='Zipcode' state={zipcode} setState={setZipcode} />
			
			<Input typeOfInput="number" labelText='Mobile No.' state={mobileNo} setState={setMobileNo} />
			
			{/* Input for date of birth of user */}
			<Input typeOfInput="date" labelText="Date of Birth" state={dob} setState={setDob} />
			
			
			<Input labelText='E-mail' placeholderText="somename@xyz.com" state={email} setState={setEmail} required={false} />
		</div>
	)
}

export default PersonalDetails