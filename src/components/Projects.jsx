import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";

const Projects = () => {
    const projectCards = [
        {
            title: "Kitty-Chatty", 
            desc: "A real-time chat application built with the MERN stack, featuring Socket.io for instant messaging, JWT authentication, and Cloudinary for media storage.", 
            stack: "JavaScript, MongoDB, Express, React, Node, Socket.io", 
            img: "https://skillicons.dev/icons?i=react,nodejs,mongodb,express", 
            preview: "", 
            code: "https://github.com/RushabhJadhav/kitty-chatty"
        },
        {
            title: "Music-App", 
            desc: "A high-performance music streaming application built with the MERN stack, featuring Redux Toolkit for centralized state management and Axios for API integration.", 
            stack: "TypeScript, React, Redux, Node, Express, MongoDB", 
            img: "https://skillicons.dev/icons?i=ts,react,redux,nodejs", 
            preview: "", 
            code: "https://github.com/RushabhJadhav/music-app"
        },
        {
            title: "News-App", 
            desc: "A sleek, responsive news platform built with Vue 3 and Vuex, fetching real-time news across multiple global categories using the NewsAPI.", 
            stack: "Vue 3, Vite, Vuex, JavaScript", 
            img: "https://skillicons.dev/icons?i=vue,vite,js", 
            preview: "", 
            code: "https://github.com/RushabhJadhav/news-app"
        },
        {
            title: "Thinkboard", 
            desc: "A collaborative brainstorming and planning tool built with modern web technologies.", 
            stack: "TypeScript, React, Tailwind", 
            img: "https://skillicons.dev/icons?i=ts,react,tailwind", 
            preview: "", 
            code: "https://github.com/RushabhJadhav/thinkboard"
        },
        {
            title: "Tips Calculator", 
            desc: "A simple and efficient tool to calculate tips and split bills between multiple people.", 
            stack: "JavaScript, HTML, SASS, React", 
            img: "https://skillicons.dev/icons?i=js,react,sass", 
            preview: "https://rushabhjadhav.github.io/tips-calculator/", 
            code: "https://github.com/RushabhJadhav/tips-calculator"
        },
        {
            title: "To Do List", 
            desc: "A feature-rich To-Do list application to manage daily tasks efficiently.", 
            stack: "JavaScript, HTML, SASS, React", 
            img: "https://skillicons.dev/icons?i=js,react,sass", 
            preview: "https://rushabhjadhav.github.io/react-to-do-list/", 
            code: "https://github.com/RushabhJadhav/react-to-do-list"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.div 
            id="projects" 
            className="projects-container section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <motion.h1 variants={itemVariants}>Projects</motion.h1>
            <motion.p variants={itemVariants}>Things I've built so far</motion.p>
            <div className="cards-container">
                {projectCards.map((item, index) => {
                    const hasPreview = item.preview && item.preview !== "";
                    const hasCode = item.code && item.code !== "";
                    const hasImg = item.img && item.img !== "";

                    return (
                        <motion.div 
                            className={`card ${!hasImg ? 'no-img' : ''}`} 
                            key={index} 
                            style={hasImg ? { backgroundImage: `url(${item.img})` } : {}} 
                            variants={itemVariants}
                        >
                            <div className="card-text">
                                <p className="card-title">{item.title}</p>
                                <p className="card-desc">{item.desc}</p>
                                <p className="card-stack">Stack: {item.stack}</p>
                                <ul className="card-links">
                                    <li>
                                        <a 
                                            href={hasPreview ? item.preview : undefined} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className={!hasPreview ? "disabled" : ""}
                                            onClick={(e) => !hasPreview && e.preventDefault()}
                                        >
                                            <FontAwesomeIcon icon={faLink} />
                                            {hasPreview ? "Live Preview" : "Coming Soon"}
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            href={hasCode ? item.code : undefined} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className={!hasCode ? "disabled" : ""}
                                            onClick={(e) => !hasCode && e.preventDefault()}
                                        >
                                            <FontAwesomeIcon icon={faGithub} />
                                            View Code
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default Projects;