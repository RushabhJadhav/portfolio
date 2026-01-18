import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faBuilding, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <div id="about-section" className="section">
            <div className="about-container">
                <h1>About Me</h1>
                <p>I have completed my Bachelor of Arts degree in Political Science and Psychology. During my final year, I discovered coding and was instantly hooked. What started as a personal interest quickly grew into a deep passion for frontend development. My self-taught journey has been fueled by curiosity, determination, and a drive to create seamless, user-friendly web experiences.</p>
                <p>Learning to code has not only transformed my career aspirations but has also taught me the value of continuous learning and problem-solving. I am committed to honing my skills and contributing to projects that make a meaningful impact.</p>
            </div>
            <div className="qualifications">
                <div className="experience-cont">
                    <h1>Work Experience</h1>
                    <div className="experience">
                        <div className="upper-section">
                            <h3>Assistant Software Consultant</h3>
                            <span className="tenure">Full Time</span>
                        </div>
                        <div className="lower-section">
                            <span>
                                <FontAwesomeIcon icon={faBuilding} />
                                <p>Credence Analytics</p>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faLocation} />
                                <p>Malad, Mumbai</p>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faCalendarDays} />
                                <p>May 2023 - September 2025</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="education-cont">
                    <h1>Education</h1>
                    <div className="experience">
                        <div className="upper-section">
                            <h3>Bachelor of Arts in Political Science & Psychology</h3>
                            {/* <span className="tenure">Full Time</span> */}
                        </div>
                        <div className="lower-section">
                            <span>
                                <FontAwesomeIcon icon={faBuilding} />
                                <p>Gokhale Education Society(Mumbai University)</p>
                            </span>
                            {/* <span>
                                <FontAwesomeIcon icon={faLocation} />
                                <p>Borivali, Mumbai</p>
                            </span> */}
                            <span>
                                <FontAwesomeIcon icon={faCalendarDays} />
                                <p>June 2019 - April 2022</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;