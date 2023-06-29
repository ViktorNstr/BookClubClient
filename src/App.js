import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import EditEventPage from "./pages/EditEventPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import SignupPage from "./pages/SignupPage";
import Comments from "./comments/Comments";

import IsPrivate from "./pages/IsPrivate";
import IsAnon from "./components/isAnon";
import LoginPage from "./pages/LoginPage";
import EventListPage from "./pages/EventListPage";


function App() {
return (
  <div className="App">
    <Navbar />

    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route
        path="/events"
        element={
          <IsPrivate>
            {" "}
            <EventListPage />{" "}
          </IsPrivate>
        }
      />
      <Route
        path="/events/:eventID"
        element={
          <IsPrivate>
            {" "}
            <EventDetailsPage />{" "}
          </IsPrivate>
        }
      />

      <Route
        path="/events/edit/:eventId"
        element={
          <IsPrivate>
            {" "}
            <EditEventPage />{" "}
          </IsPrivate>
        }
      />

      <Route
        path="/signup"
        element={
          <IsAnon>
            {" "}
            <SignupPage />{" "}
          </IsAnon>
        }
      />
      <Route
        path="/login"
        element={
          <IsAnon>
            {" "}
            <LoginPage />{" "}
          </IsAnon>
        }
      />
    </Routes>

    <Comments />
  </div>

);
      }

export default App;
