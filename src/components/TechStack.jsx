import { motion } from 'framer-motion';

const TechStack = () => {
    const stackBlock = [
        {imgSrc: "https://skillicons.dev/icons?i=html", altTxt: "HTML Logo", text: "HTML"},
        {imgSrc: "https://skillicons.dev/icons?i=css", altTxt: "CSS Logo", text: "CSS"},
        {imgSrc: "https://skillicons.dev/icons?i=js", altTxt: "JavaScript Logo", text: "Javascript"},
        {imgSrc: "https://skillicons.dev/icons?i=react", altTxt: "React Logo", text: "React JS"},
        {imgSrc: "https://skillicons.dev/icons?i=vue", altTxt: "Vue Logo", text: "Vue JS"},
        {imgSrc: "https://skillicons.dev/icons?i=redux", altTxt: "Redux Logo", text: "Redux"},
        {imgSrc: "https://skillicons.dev/icons?i=ts", altTxt: "Tyepscript Logo", text: "Typescript"},
        {imgSrc: "https://skillicons.dev/icons?i=sass", altTxt: "Sass Logo", text: "SASS/SCSS"},
        {imgSrc: "https://skillicons.dev/icons?i=bootstrap", altTxt: "Bootstrap Logo", text: "Bootstrap"},
        {imgSrc: "https://skillicons.dev/icons?i=tailwind", altTxt: "Tailwind Logo", text: "Tailwind"},
        {imgSrc: "https://skillicons.dev/icons?i=nodejs", altTxt: "Node.js Logo", text: "Node.js"},
        {imgSrc: "https://skillicons.dev/icons?i=express", altTxt: "Express Logo", text: "Express.js"},
        {imgSrc: "https://skillicons.dev/icons?i=mongodb", altTxt: "MongoDB Logo", text: "MongoDB"},
        {imgSrc: "https://skillicons.dev/icons?i=git", altTxt: "Git Logo", text: "Git"},
        {imgSrc: "https://skillicons.dev/icons?i=vscode", altTxt: "VS Code Logo", text: "VS Code"},
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.div 
            id='tech-stack' 
            className='stack-container section'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <motion.h1 variants={itemVariants}>My Tech Stack</motion.h1>
            <motion.p variants={itemVariants}>Technologies I've been working with recently</motion.p>
            <ul className='stack-images'>
                {stackBlock.map((item, index) => {
                    return (
                        <motion.li key={index} variants={itemVariants}>
                            <img src={item.imgSrc} alt={item.altTxt} />
                            <span>{item.text}</span>
                        </motion.li>
                    )
                })}
            </ul>
        </motion.div>
    )
}

export default TechStack;