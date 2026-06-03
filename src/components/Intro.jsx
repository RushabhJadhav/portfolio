import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Intro = () => {
    return (
        <motion.div 
            id="intro" 
            className="intro"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="intro-text">
                <h1>Hi, I'm Rushabh, a Self Taught</h1>
                <h1>Frontend Developer</h1>
                <span>Based in Mumbai, Maharashtra, India</span>
                <span>Specialized in Vue and React</span>
                <a className="CV_btn" href="https://drive.google.com/file/d/1gnlweC8LAefIdIuF7wbr7D-yW_o84QgI/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <p>Resume</p>
                    <FontAwesomeIcon icon={faCloudArrowDown} />
                </a>
            </div>
        </motion.div>
    )
}

export default Intro;