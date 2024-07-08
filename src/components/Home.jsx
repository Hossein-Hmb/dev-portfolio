import React from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

function Home() {
    return (
        <div className="Home">
            <About />
            <Projects />
            <Contact />
            {/* <Skills /> */}
        </div>
    )
}

export default Home;