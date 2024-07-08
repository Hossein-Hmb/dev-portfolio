import "./App.css";
import React, { useEffect
, useRef } from 'react';
import './App.css'; 
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const componentRefs = useRef([]);

  useEffect(() => {
    componentRefs.current.forEach((ref, index) => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.add('slide-in');
        }
      }, index * 300); // Adjust 300 for delay between components (in milliseconds)
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="components">
          <div ref={(el) => componentRefs.current.push(el)}>
            <About /> 
          </div>
          <div ref={(el) => componentRefs.current.push(el)}>
            <Projects /> 
          </div>
          <div ref={(el) => componentRefs.current.push(el)}>
            <Contact /> 
          </div>
        </div>
        <div className="pages">
          {/* <Routes><Route path="/blog" element={<Blog />}/></Routes> */}
        </div>
      </div>
    </Router>
  );
}

export default App;

