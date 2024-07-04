import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="components">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
