<<<<<<< HEAD
import axios from 'axios';

class AuthService {
  constructor() {
    // Create a new instance of axios with a custom configuration
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:5005'
      // We set our API's base URL so that all requests use the same base URL
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');
=======
import axios from "axios";

class AuthService {
  constructor() {
    const baseURL = process.env.SERVER_URL || "http://localhost:5005";
    this.api = axios.create({
      baseURL: baseURL,
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");
>>>>>>> refs/remotes/origin/main

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

<<<<<<< HEAD
  login = requestBody => {
    return this.api.post('/auth/login', requestBody);
=======
  login = (requestBody) => {
    return this.api.post("/auth/login", requestBody);
>>>>>>> refs/remotes/origin/main
    // same as
    // return axios.post("http://localhost:5005/auth/login");
  };

<<<<<<< HEAD
  signup = requestBody => {
    return this.api.post('/auth/signup', requestBody);
=======
  signup = (requestBody) => {
    return this.api.post("/auth/signup", requestBody);
>>>>>>> refs/remotes/origin/main
    // same as
    // return axios.post("http://localhost:5005/auth/singup");
  };

  verify = () => {
<<<<<<< HEAD
    return this.api.get('/auth/verify');
=======
    return this.api.get("/auth/verify");
>>>>>>> refs/remotes/origin/main
    // same as
    // return axios.post("http://localhost:5005/auth/verify");
  };
}

<<<<<<< HEAD
// Create one instance object
const authService = new AuthService();

export default authService;
=======
// Create one instance (object) of the service
const authService = new AuthService();

export default authService;
>>>>>>> refs/remotes/origin/main
