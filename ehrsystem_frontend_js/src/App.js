import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.module.css'; // Import the new global styles

const App = () => (
	<Router>
		<Routes>
			<Route path="/" element={<HomePage />} />
			{/* <Route path="/patient/:patientId" element={<PatientPage />} /> */}
		</Routes>
	</Router>
);

export default App;
