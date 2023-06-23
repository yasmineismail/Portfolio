import "./App.css";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Portfolio from "./components/portfolio/Portfolio";
import {
  Route,
  Routes,
  HashRouter,
  BrowserRouter as Router,
} from "react-router-dom";
import Experience from "./components/Experience/Experience";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
