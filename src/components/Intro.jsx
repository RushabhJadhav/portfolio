import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-text">
                <h1>Hi, I'm Rushabh, a Self Taught</h1>
                <h1>Frontend Developer</h1>
                <span>Based in Mumbai, Maharashtra, India</span>
                <span>Specialized in Vue and React</span>
                <a className="CV_btn" href="/pdf/Rushabh_Jadhav_CV.pdf" target="_blank" rel="noopener noreferrer">
                    <p>Resume</p>
                    <FontAwesomeIcon icon={faCloudArrowDown} />
                </a>
            </div>
        </div>
    )
}

export default Intro;