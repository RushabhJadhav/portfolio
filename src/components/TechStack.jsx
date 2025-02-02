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
import { useLocation } from 'react-router-dom';

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
        // {imgSrc: gitLogo, altTxt: "Git Logo", text: "GIT"},
        // {imgSrc: vscodeLogo, altTxt: "VS Code Logo", text: "VS Code"},
    ];

    const { pathname } = useLocation();

    return (
        <div id='tech-stack' className='stack-container section' style={pathname == '/tech-stack' ? { height: '70vh' } : {}}>
            <h1>My Tech Stack</h1>
            <p>Technologies I’ve been working with recently</p>
            <ul className='stack-images'>
                {stackBlock.map((item, index) => {
                    return (
                        <li key={index}>
                            <img src={item.imgSrc} alt={item.altTxt} />
                            <span>{item.text}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TechStack;