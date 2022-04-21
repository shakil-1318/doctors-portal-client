import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";




function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/'></Route>
        </Switch>
      </BrowserRouter>
      <Home></Home>
    </>
  );
}

export default App;
