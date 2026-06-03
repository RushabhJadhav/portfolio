import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faBuilding, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Qualifications = () => {
    return (
        <motion.div 
            id="qualifications" 
            className="section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div className="qualifications">
                <div className="experience-cont">
                    <h1>Work Experience</h1>
                    <div className="experience">
                        <div className="upper-section">
                            <h3>Frontend Developer SDE - 2</h3>
                            <span className="tenure">Full Time</span>
                        </div>
                        <div className="lower-section">
                            <span>
                                <FontAwesomeIcon icon={faBuilding} />
                                <p>Codesis Technologies</p>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faLocation} />
                                <p>Malad, Mumbai</p>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faCalendarDays} />
                                <p>May 2026 - Present</p>
                            </span>
                        </div>
                    </div>
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
                        </div>
                        <div className="lower-section">
                            <span>
                                <FontAwesomeIcon icon={faBuilding} />
                                <p>Gokhale Education Society(Mumbai University)</p>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faCalendarDays} />
                                <p>June 2019 - April 2022</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Qualifications;