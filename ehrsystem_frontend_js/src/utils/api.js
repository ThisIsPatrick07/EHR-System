const API_BASE_URL = "http://localhost:4000";

export const fetchPatients = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/data_tmp`);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchClinicalData = async (patientId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/clinical_data?patient_id=${patientId}`);
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    throw error;
  }
};
