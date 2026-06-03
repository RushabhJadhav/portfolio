import Intro from "../components/Intro";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const PageBody = () => {
    return (
        <main>
            <Intro />
            <TechStack />
            <Projects />
            <Contact />
        </main>
    );
};

export default PageBody;
