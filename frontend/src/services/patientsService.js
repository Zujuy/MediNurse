import axios from 'axios';

const baseURL = 'https://ancient-atoll-83528.herokuapp.com';
//const baseURL = 'http://localhost:3000';

const form = axios.create({
  baseURL,
  withCredentials: true
});

const PATIENT_SERVICE = {
  getMedicsAndNurses: () => {
    return form.get('/api/patients/nurses&&medics');
  },
  getPatient: () => {
    return form.get('/api/patients/onepatient/:id');
  },
  createPatient: patientData => {
    return form.post('/api/patients/createpatient', patientData);
  },
  updatePatient: patientData => {
    return form.patch('/api/patients/update/:id', patientData);
  },
  getPatientsAsigned: () => {
    return form.get('api/patients/all/asigned');
  }
};

export default PATIENT_SERVICE;
