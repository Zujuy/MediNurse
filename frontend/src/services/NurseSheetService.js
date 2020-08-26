import axios from 'axios';
let baseURL;
process.env.NODE_ENV === 'production'
  ? (baseURL = 'https://ancient-atoll-83528.herokuapp.com')
  : (baseURL = 'http://localhost:3000');

export default class NurseSheetService {
  form = axios.create({
    baseURL: this.baseUrl,
    withCredentials: true,
  });
  getNursingSheets() {
    return this.form.get('/nursingsheet');
  }
  updateNursingSheet(nursingsheetdata) {
    return this.form.patch('/nursingsheet', nursingsheetdata);
  }
  createNursingSheet(nursingsheetdata) {
    return this.form.post('/nursingsheet', nursingsheetdata);
  }
}
