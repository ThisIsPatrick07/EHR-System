import styles from './Input.module.css'

export default function Input({ typeOfInput = 'text', labelText, placeholderText = '', required = true, state, setState }) {
	return (
		<div className={styles.inputContainer}>
			<label htmlFor={labelText}>{labelText}{required ? <RequiredRedStar /> : ""}</label>
			{required
				? <input
					id={labelText}
					className={styles.inputField}
					type={typeOfInput}
					placeholder={placeholderText}
					value={state}
					onChange={(e) => { 
						setState(e.target.value) 
					}}	
					required
				/>
				: <input
					id={labelText}
					className={styles.inputField}
					type={typeOfInput}
					placeholder={placeholderText}
					value={state}
					onChange={(e) => { 
						setState(e.target.value) 
					}}	
				/>
			}

		</div>
	);
}

export function RequiredRedStar(){
	return <span className={styles.requiredStar}> *</span>;
}