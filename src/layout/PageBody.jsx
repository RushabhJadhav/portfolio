import Intro from "../components/Intro";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

const PageBody = () => {
    return (
        <main>
            <Intro />
            <About />
            <TechStack />
            <Projects />
            <Contact />
        </main>
    );
};

export default PageBody;
