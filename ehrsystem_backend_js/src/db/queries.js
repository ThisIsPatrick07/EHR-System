const patient_table_name = process.env.PATIENT_TABLE_NAME || 'patient_table';
const patient_table_col_names = process.env.PATIENT_TABLE_COL_NAMES;
const insurance_table_name = process.env.INSURANCE_TABLE_NAME || 'patient_insurance_table';
const insurance_table_col_names = process.env.INSURANCE_TABLE_COL_NAMES;


const queries = {
	getPatientData : `SELECT * FROM ${patient_table_name}`,

	addInsuranceData: `INSERT INTO ${insurance_table_name} (${insurance_table_col_names}) VALUES(
		$1,$2,$3,$4,$5
	)`,
	addPatientData: `INSERT INTO ${patient_table_name} (${patient_table_col_names}) VALUES(
		$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11
	)`,

	// deletePatientData: `DELETE FROM ${patient_table_name} WHERE `,
	// deleteInsuranceData: ``,
	
};

module.exports = queries;