const pool = require('../db/db.js');
const queries = require('../db/queries.js');

const getData = async (req, res) => {
	try {
		const client = await pool.connect();
		try {
			const response = await client.query(queries.getPatientData);
			res.status(200).json(response.rows);
		} catch (error) {
			console.error(`client error while fetching data! Message: ${error.message}`);
			res.status(500).send('ERROR');
		} finally {
			client.release();
		}
	} catch (error) {
		console.error(`error while fetching data! Message: ${error.message}`);
		res.status(500).send('ERROR');
	}
}

const addData = async (req, res) => {
	const {
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
	} = req.body;

	try {
		const client = await pool.connect();
		try {
			// begin transaction
			await client.query('BEGIN');


			if(insuranceId && insuranceCompany && policyHolderName){
				// insert insurance data
				await client.query(queries.addInsuranceData, [
					insuranceId,
					insuranceCompany,
					policyHolderName,
					policyHoldersEmployer,
					policyHolderRelationToPatient
				]);	
			}

			// inserting patient data
			await client.query(queries.addPatientData, [
				name,
				address,
				state,
				zipcode,
				dob,
				email,
				mobileNo,
				visitReason,
				pastProblems,
				currentMedications,
				insuranceId
			]);

			// commit if successfully added
			await client.query('COMMIT');
			
			res.status(200).json({
				message: "successfully added patient!",
			});
		} catch (error) {
			console.error(`client error while entering data! Message: ${error.message}`);
			await client.query('ROLLBACK');
			res.status(500).json({
				message: 'unsucessful transaction- could not add patient!',
			});
		} finally {
			client.release();
		}
	} catch (error) {
		console.error(`error while entering data! Message: ${error.message}`);
		res.status(500).send('ERROR');
	}
}


module.exports = {
	getData,
	addData,
}