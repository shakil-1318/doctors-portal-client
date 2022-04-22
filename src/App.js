import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appointment from './Pages/Appointments/Appointment/Appointment';
import AppointmentHeader from './Pages/Appointments/AppointmentHeader/AppointmentHeader';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
