import styles from './InsuranceCheckbox.module.css';

export default function InsuranceCheckbox({ showInsuranceInput, onCheck }) {
	return (
		<div className={styles.checkboxGroup}>
			<input
				id="insurance-checkbox"
				type="checkbox"
				className={styles.checkboxInput}
				checked={showInsuranceInput}
				onChange={(e) => onCheck(e)}
			/>
			<label className={styles.checkboxLabel} htmlFor="insurance-checkbox">
				Has insurance? (Tick if yes)
			</label>
		</div>
	);
}
