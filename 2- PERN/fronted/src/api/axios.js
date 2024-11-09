// Este código configura un cliente de Axios con una URL base y habilita el envío de cookies, 
// permitiendo realizar peticiones HTTP de forma coherente y reutilizable en la aplicación

import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND || "http://localhost:3000/api"

const client = axios.create({
  baseURL: baseURL,
  withCredentials: true, // Habilita el envío de cookies
});

export default client;
