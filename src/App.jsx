import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="components">
          <About />
          <Projects />
          <Contact />
          <Routes>
            {/* <Route path="/blog" element={<Blog />}/> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
