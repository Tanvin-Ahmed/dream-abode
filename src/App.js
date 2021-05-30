import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { getUserInfo } from "./app/actions/userActions";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute";
import NavBar from "./components/Navbar/NavBar";
import NoMatch from "./components/NoMatch/NoMatch";
import Payment from "./components/Payment/Payment";
import Review from "./components/Review/Review";
import UserAccount from "./components/UserAccount/UserAccount";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  return (
    <main className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <Home />
            <Footer />
          </Route>
          <Route path="/review/:id">
            <NavBar />
            <Review />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Payment />
          </PrivateRoute>
          <PrivateRoute path="/user-account">
            <NavBar />
            <UserAccount />
            <Footer />
          </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
