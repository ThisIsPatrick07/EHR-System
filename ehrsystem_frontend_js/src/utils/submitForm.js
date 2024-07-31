import axios from 'axios';

const SERVER_URL = 'http://localhost:4000'
export default async function submitForm(formdata){
	try {
		await axios.post(`${SERVER_URL}/api/data_tmp`, formdata);
	} catch (error) {
		console.error('ERROR');
		throw error;
	}
}