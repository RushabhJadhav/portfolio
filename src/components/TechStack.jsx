import htmlLogo from '../assets/img/vscode-icons_file-type-html.svg';
import cssLogo from '../assets/img/vscode-icons_file-type-css.svg';
import jsLogo from '../assets/img/vscode-icons_file-type-js-official.svg';
import reactLogo from '../assets/img/logos_react.svg';
import vueLogo from '../assets/img/vue-svgrepo-com.svg';
import bootstrapLogo from '../assets/img/logos_bootstrap.svg';
import sassLogo from '../assets/img/logos_sass.svg';
import gitLogo from '../assets/img/logos_git-icon.svg';
import tailwindLogo from '../assets/img/vscode-icons_file-type-tailwind.svg';
import reduxLogo from '../assets/img/Vector.png';
import vscodeLogo from '../assets/img/vscode-icons_file-type-vscode.svg';
import typescriptLogo from '../assets/img/typescript.svg';
import { motion } from 'framer-motion';

const TechStack = () => {
    const stackBlock = [
        {imgSrc: htmlLogo, altTxt: "HTML Logo", text: "HTML"},
        {imgSrc: cssLogo, altTxt: "CSS Logo", text: "CSS"},
        {imgSrc: jsLogo, altTxt: "JavaScript Logo", text: "Javascript"},
        {imgSrc: reactLogo, altTxt: "React Logo", text: "React JS"},
        {imgSrc: vueLogo, altTxt: "Vue Logo", text: "Vue JS"},
        {imgSrc: reduxLogo, altTxt: "Redux Logo", text: "Redux"},
        {imgSrc: typescriptLogo, altTxt: "Tyepscript Logo", text: "Typescript"},
        {imgSrc: sassLogo, altTxt: "Sass Logo", text: "SASS/SCSS"},
        {imgSrc: bootstrapLogo, altTxt: "Bootstrap Logo", text: "Bootstrap"},
        {imgSrc: tailwindLogo, altTxt: "Tailwind Logo", text: "Tailwind"},
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
            <motion.p variants={itemVariants}>Technologies I’ve been working with recently</motion.p>
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