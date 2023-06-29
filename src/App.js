import './App.css';
import AddEvent from './components/AddEvent';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import EditEventPage from './pages/EditEventPage';
import EventDetailsPage from './pages/EventDetailsPage';
import SignupPage from './pages/SignupPage';
import EventCard from './components/EventCard';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route exact path="/" element={<HomePage />} />
        <Route
  path="/events"
  element={ <IsPrivate> <EventListPage/> </IsPrivate> } 
/>
<Route
          path="/events/:eventID"
          element={ <IsPrivate> <EventDetailsPage /> </IsPrivate> }
        />
 
        <Route
          path="/events/edit/:eventId"
          element={ <IsPrivate> <EditEventPage /> </IsPrivate> } 
        />
        
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
 
      </Routes>
    </div>
  );
}

export default App;
