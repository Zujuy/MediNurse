import axios from "axios"

export default class NurseSheetService {
    baseUrl="https://ancient-atoll-83528.herokuapp.com"
    form = axios.create ({
        baseURL: this.baseUrl,
        withCredentials: true
    });
    getNursingSheets(){
        return this.form.get("/nursingsheet")
    }
    updateNursingSheet(nursingsheetdata){
        return this.form.patch("/nursingsheet", nursingsheetdata)
    }
    createNursingSheet(nursingsheetdata){
        return this.form.post("/nursingsheet", nursingsheetdata)
    }
} 
