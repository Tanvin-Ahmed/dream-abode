import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import Review from "./components/Review/Review";

function App() {
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
        </Switch>
      </Router>
    </main>
  );
}

export default App;
