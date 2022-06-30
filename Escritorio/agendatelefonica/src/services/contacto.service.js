import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:3001/api/v1/";

// esta funcion nos traera todos los contactos del usuario logueado
const getContacts = () => {
  return axios.get(API_URL + "contactos", { headers: authHeader() });
};

const contactService = {
  getContacts,
};
export default contactService;
