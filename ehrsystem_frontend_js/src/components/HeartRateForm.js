import React, { useState } from 'react';
import axios from 'axios';

const HeartRateForm = () => {
    const [timestamp, setTimestamp] = useState('');
    const [heartRate, setHeartRate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/heart-rate', {
                timestamp,
                heart_rate: parseInt(heartRate, 10),
            });
            // Clear form fields after submission
            setTimestamp('');
            setHeartRate('');
        } catch (error) {
            console.error('Error submitting heart rate data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="timestamp">Timestamp:</label>
                <input
                    type="datetime-local"
                    id="timestamp"
                    value={timestamp}
                    onChange={(e) => setTimestamp(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="heart_rate">Heart Rate:</label>
                <input
                    type="number"
                    id="heart_rate"
                    value={heartRate}
                    onChange={(e) => setHeartRate(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default HeartRateForm;
