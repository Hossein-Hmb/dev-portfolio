import "./App.css";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import Skillset from "./components/Skillset.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="components">
          <About />
          <Projects />
          <Skillset />
          <Contact />
        </div>
        <div className="pages">
          {/* <Routes><Route path="/blog" element={<Blog />}/></Routes> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
