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
                <p>My path into tech wasn't a traditional one. While pursuing my Bachelor's degree in Political Science and Psychology, I originally planned to build a career in sports psychology. In 2021, I became curious about technology after a conversation with my buddy <a href="https://yashtarkar.vercel.app/" target="_blank" rel="noopener noreferrer">Yash</a>, who was pursuing engineering. When I asked him what the easiest language was for someone from a non-technical background, he suggested HTML although it's not a programming language yet that simple recommendation sparked my interest in web development.</p>
                <p>I started learning through YouTube tutorials, building small projects, and reaching out to <a href="https://yashtarkar.vercel.app/" target="_blank" rel="noopener noreferrer">Yash</a> whenever I got stuck. What began as curiosity quickly grew into a passion for creating things on the web and solving problems through code.</p>
                <p>Today, I'm a Software Developer specializing in Frontend Development, focused on building responsive and user-friendly applications. My journey from an arts background to tech has taught me the value of curiosity, persistence, and continuous learning.</p>
            </div>
        </motion.div>
    )
}

export default About;