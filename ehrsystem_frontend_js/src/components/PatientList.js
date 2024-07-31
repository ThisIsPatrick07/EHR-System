import { useEffect, useState } from 'react';
import { fetchPatients } from '../utils/api';
import { handleError } from '../utils/errorHandler';
import styles from './PatientList.module.css'

const PatientList = () => {
	const [patients, setPatients] = useState([]);

	useEffect(() => {
		const loadPatients = async () => {
			try {
				const data = await fetchPatients();
				setPatients(data);
			} catch (error) {
				handleError(error);
			}
		};

		loadPatients();
	}, []);

	return (
		<div>
			<h2>Patient List</h2>
			<ul>
				{patients.map((patient) => (
					<li key={patient.id}>{patient.name}</li>
				))}
			</ul>
		</div>
	);
};

export default PatientList;
