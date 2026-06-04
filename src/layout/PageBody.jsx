import Intro from "../components/Intro";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const PageBody = () => {
    return (
        <div>
            <Intro />
            <TechStack />
            <Projects />
            <Contact />
        </div>
    );
};

export default PageBody;
