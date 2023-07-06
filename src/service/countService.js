import axios from "axios";
import { API } from "./util";

class CompteService {
  async login(username, password) {
    return axios.post(API + "/users/login", { username, password });
  }
  async register(newUser) {
    return axios.post(API + "/users", newUser);
  }

  setStorage(data) {
    this.removeStorage();
    localStorage.setItem("connected", JSON.stringify(data));
  }
  getStorage() {
    if (!localStorage.getItem("connected")) return null;
    return JSON.parse(localStorage.getItem("connected"));
  }
  removeStorage() {
    if (localStorage.getItem("connected")) localStorage.removeItem("connected");
  }

  logout() {
    const user = this.getStorage();
    return axios.post(API + "/users/logout", user);
  }

  async getAllUsers(search) {
    if (search) return axios.get(API + "/users/search/" + search);
    return axios.get(API + "/users");
  }
}
const compteService = new CompteService();

export default compteService;
