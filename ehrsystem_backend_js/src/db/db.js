/* SQL query
CREATE TABLE patient_table2(
	id SERIAL PRIMARY KEY,
	name VARCHAR(200) NOT NULL,
	address VARCHAR(500) NOT NULL,
	state state NOT NULL,
	zipcode CHAR(6) NOT NULL CHECK (zipcode ~ '^[0-9]{6}'),
	dob DATE NOT NULL,
	email VARCHAR(100),
	phone CHAR(10) NOT NULL CHECK(phone ~ '^[0-9]{10}'),
	
	insurance_id VARCHAR(20) REFERENCES patient_insurance_table2(insurance_id),
	
	visit_reason VARCHAR(500) NOT NULL,
	past_problems VARCHAR(500),
	current_medications VARCHAR(500)
);

INSERT INTO patient_table2(name,address,state,zipcode,dob,phone,visit_reason) 
VALUES('john doe', '123 xyz street', 'assam', '123456', '1980-01-08', '1234567890', 'severe stomach pain');

INSERT INTO patient_table2(name,address,state,zipcode,dob,phone,visit_reason,insurance_id) 
VALUES ('maria hill', '234 street', 'gujarat', '234567', '1994-01-01', '0987654321', 'loose motions', '#tr123');

CREATE TABLE patient_insurance_table2(
	insurance_id VARCHAR(20) PRIMARY KEY,
	insurance_company VARCHAR(100) NOT NULL,
	policy_holder_name VARCHAR(200) NOT NULL,
	policy_holders_employer VARCHAR(200),
	policy_holder_relation_to_patient VARCHAR(100)	DEFAULT 'self'
);

INSERT INTO patient_insurance_table2(insurance_id,policy_holder_name, insurance_company)
VALUES('#tr123', 'maria', 'icici');

INSERT INTO patient_insurance_table2(insurance_id,policy_holder_name, insurance_company,policy_holder_relation_to_patient)
VALUES ('$@ewq', 'johnannes', 'hdfc', 'father');
*/

const Pool = require('pg').Pool;
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: process.env.DB_NAME || 'patient_db',
	password: process.env.DB_PASSWORD,
	port: '5432',
});

module.exports = pool;