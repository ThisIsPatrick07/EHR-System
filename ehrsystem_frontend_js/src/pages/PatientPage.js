import { useParams } from 'react-router-dom';
import PatientDetail from '../components/PatientDetail';
import styles from './PatientPage.module.css'

function PatientPage() {
	const { patientId } = useParams();

	return (
		<div>
			<h1>Patient Details</h1>
		</div>
	);
};

export default PatientPage;
