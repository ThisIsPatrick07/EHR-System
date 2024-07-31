import { RequiredRedStar } from '../components/Input';
import PatientDetail from '../components/PatientDetail';
import styles from './HomePage.module.css'

function HomePage(){
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Welcome to X hospital!</h1>
			<h5 className={styles.subHeader}>
				<i>Fields marked with a <span className={styles.requiredText}><RequiredRedStar /></span> are mandatory</i>
			</h5>
			<PatientDetail />
			{/* <HeartRateForm /> */}
			
		</div>
	);
}

export default HomePage;
