import axios from "axios"

export default class NurseSheetService {
    baseUrl="http://localhost:3000"
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