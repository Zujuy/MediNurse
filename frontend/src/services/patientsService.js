import axios from "axios"

export default class PatientService {
    baseUrl="http://localhost:3000"
    form = axios.create ({
        baseURL: this.baseUrl,
        withCredentials: true
    });
    getPatient(){
        return this.form.get("/patients")
    }
    createPatient(patientData){
        return this.form.post("/patients", patientData)
    }
    updatePatient(patientData){
        return this.form.patch("/patients", patientData)
    }
} 