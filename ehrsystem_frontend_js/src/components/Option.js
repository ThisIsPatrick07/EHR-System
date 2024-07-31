import { RequiredRedStar } from "./Input";
import styles from './Option.module.css'

export default function Option({ name, options, required=true, defaultValue='--', state, setState }) {
	return (
		<div>
			<label htmlFor={name}>{name}{required ? <RequiredRedStar /> : ""}</label>
			{required 
				? <select 
					name={name}
					id={name}
					className={styles.selectField}
					value={state}
					onChange={(e) => setState(e.target.value)}
					required
				>
					<option defaultValue="--">{defaultValue}</option>
					{options.map(opt => (
						<option key={opt} value={opt}>{capitalizeEachWord(opt)}</option>
					))}
				</select>
				
				: <select 
					name={name} 
					id={name}
					className={styles.selectField}
					value={state}
					onChange={(e) => setState(e.target.value)}
				>
					<option defaultValue="--">{defaultValue}</option>
					{options.map(opt => (
						<option key={opt} value={opt}>{capitalizeEachWord(opt)}</option>
					))}
				</select>
			}
		</div>
	);
}

function capitalizeEachWord(s){
	return s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

/** Hardcoded state options

<option value="andhra pradesh">Andhra Pradesh</option>
		<option value="arunachal pradesh">Arunachal Pradesh</option>
		<option value="assam">Assam</option>
		<option value="bihar">Bihar</option>
		<option value="chhattisgarh">Chhattisgarh</option>
		<option value="goa">Goa</option>
		<option value="gujarat">Gujarat</option>
		<option value="haryana">Haryana</option>
		<option value="himachal pradesh">Himachal Pradesh</option>
		<option value="jharkhand">Jharkhand</option>
		<option value="karnataka">Karnataka</option>
		<option value="kerala">Kerala</option>
		<option value="madhya pradesh">Madhya Pradesh</option>
		<option value="maharashtra">Maharashtra</option>
		<option value="manipur">Manipur</option>
		<option value="meghalaya">Meghalaya</option>
		<option value="mizoram">Mizoram</option>
		<option value="nagaland">Nagaland</option>
		<option value="odisha">Odisha</option>
		<option value="punjab">Punjab</option>
		<option value="rajasthan">Rajasthan</option>
		<option value="sikkim">Sikkim</option>
		<option value="tamil nadu">Tamil Nadu</option>
		<option value="telangana">Telangana</option>
		<option value="tripura">Tripura</option>
		<option value="uttarakhand">Uttarakhand</option>
		<option value="uttar pradesh">Uttar Pradesh</option>
		<option value="west bengal">West Bengal</option>

 */