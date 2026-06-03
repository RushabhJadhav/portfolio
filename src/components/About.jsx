import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div 
            id="about" 
            className="section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div className="about-container">
                <h1>About Me</h1>
                <p>I have completed my Bachelor of Arts degree in Political Science and Psychology. During my final year, I discovered coding and was instantly hooked. What started as a personal interest quickly grew into a deep passion for frontend development. My self-taught journey has been fueled by curiosity, determination, and a drive to create seamless, user-friendly web experiences.</p>
                <p>Learning to code has not only transformed my career aspirations but has also taught me the value of continuous learning and problem-solving. I am committed to honing my skills and contributing to projects that make a meaningful impact.</p>
            </div>
        </motion.div>
    )
}

export default About;