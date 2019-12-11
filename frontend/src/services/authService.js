import axios from "axios";

export default class AuthService {
  baseUrl = "http://localhost:3000";
  patient = axios.create({
    baseURL: this.baseUrl,
    withCredentials: true
  });
  login(userData) {
    return this.patient.post("/auth/login", userData);
  }
}

