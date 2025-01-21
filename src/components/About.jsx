import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faBuilding, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <div id="about-section" className="section">
            <div className="about-container">
                <h1>About Me</h1>
                <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
            </div>
            <div className="work-experience"></div>
            <div className="education">
                <FontAwesomeIcon icon={faLocation} />
                <FontAwesomeIcon icon={faBuilding} />
                <FontAwesomeIcon icon={faCalendarDays} />
            </div>
        </div>
    )
}

export default About;