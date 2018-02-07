import axios from "axios";
import { AxiosResponse } from "axios";

export class UserService {
  static signIn(email: string, password: string) {
    return axios.post("/users/login", {
      email,
      password,
    }).then((response: AxiosResponse) => {
      localStorage.setItem("jwt", response.data);
      axios.defaults.headers.Authorization = response.data;
    });
  }

  static signUp(email: string, username: string, password: string) {
    return axios.put("/users", { username, email, password });
  }

  static signOut() {
    localStorage.removeItem("jwt");
  }

  static isAuthenticated() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      const claims = JSON.parse(atob(jwt.split(".")[1]));
      const now = Date.now();
      return now < claims.exp;
    }
  }
}
