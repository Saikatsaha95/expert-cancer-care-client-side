import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CancerWeTreat from "./pages/CancerWeTreat/CancerWeTreat";
import TreatmentOptions from "./pages/TreatmentOptions/TreatmentOptions";
import OurExperts from "./pages/OurExperts/OurExperts";
import Aboutus from "./pages/Aboutus/Aboutus";
import Header from "./components/Header/Header";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFound from "./pages/NotFound/NotFound";
import CancerDetails from "./pages/CancerDetails/CancerDetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/aboutus">
            <Aboutus></Aboutus>
          </Route>
          <PrivateRoute exact path="/allservices">
            <CancerWeTreat></CancerWeTreat>
          </PrivateRoute>
          <PrivateRoute exact path="/allservices/:cancerId">
            <CancerDetails></CancerDetails>
          </PrivateRoute>
          <Route exact path="/treatments">
            <TreatmentOptions></TreatmentOptions>
          </Route>
          <Route exact path="/experts">
            <OurExperts></OurExperts>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
