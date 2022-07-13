import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Cryptocurrencies from "./components/Cryptocurrencies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />}></Route>
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>
            </Routes>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
