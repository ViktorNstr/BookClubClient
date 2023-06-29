<<<<<<< HEAD
import axios from 'axios';

class EventsService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:5005'
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');
=======
import axios from "axios";

class EventsService {
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

  // POST /api/events
<<<<<<< HEAD
  createEvents = requestBody => {
    return this.api.post('/api/events', requestBody);
=======
  createEvent = (requestBody) => {
    return this.api.post("/api/events", requestBody);
>>>>>>> refs/remotes/origin/main
  };

  // GET /api/events
  getAllEvents = () => {
<<<<<<< HEAD
    return this.api.get('/api/events');
  };

  // GET /api/events/:id
  getEvents = id => {
=======
    return this.api.get("/api/events");
  };

  // GET /api/events/:id
  getEvent = (id) => {
>>>>>>> refs/remotes/origin/main
    return this.api.get(`/api/events/${id}`);
  };

  // PUT /api/events/:id
<<<<<<< HEAD
  updateEvents = (id, requestBody) => {
=======
  updateEvent = (id, requestBody) => {
>>>>>>> refs/remotes/origin/main
    return this.api.put(`/api/events/${id}`, requestBody);
  };

  // DELETE /api/events/:id
<<<<<<< HEAD
  deleteEvents = id => {
=======
  deleteEvevent = (id) => {
>>>>>>> refs/remotes/origin/main
    return this.api.delete(`/api/events/${id}`);
  };
}

<<<<<<< HEAD
// Create one instance object
const EventsService = new EventsService();

export default EventsService;
=======
// Create one instance (object) of the service
const eventsService = new EventsService();

export default eventsService;
>>>>>>> refs/remotes/origin/main
