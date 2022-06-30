import axios from "axios";
const API_URL = "http://localhost:3001/api/v1/";
const register = ({ name, email, password }) => {
  return axios.post(API_URL + "users", {
    name,
    email,
    password,
  });
};
const login = (name, password) => {
  return axios
    .post(API_URL + "login", {
      name,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default AuthService;
