import "./App.css";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="components">
        <Routes>
          <Route></Route>
          <Route></Route>
        </Routes>
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
