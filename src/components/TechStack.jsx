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

const TechStack = () => {
    const images = [
        {imgSrc: htmlLogo, altTxt: "HTML Logo"},
        {imgSrc: cssLogo, altTxt: "CSS Logo"},
        {imgSrc: jsLogo, altTxt: "JavaScript Logo"},
        {imgSrc: reactLogo, altTxt: "React Logo"},
        {imgSrc: vueLogo, altTxt: "Vue Logo"},
        {imgSrc: sassLogo, altTxt: "Sass Logo"},
        {imgSrc: bootstrapLogo, altTxt: "Bootstrap Logo"},
        {imgSrc: tailwindLogo, altTxt: "Git Logo"},
        {imgSrc: gitLogo, altTxt: "Git Logo"},
        {imgSrc: reduxLogo, altTxt: "Redux Logo"},
        {imgSrc: vscodeLogo, altTxt: "VS Code Logo"},
        {imgSrc: typescriptLogo, altTxt: "Tyepscript Logo"},
    ];

    return (
        <div className='stack-container'>
            <h1>My Tech Stack</h1>
            <div className='stack-images'>
                {images.map((item, index) => {
                    return <img key={index} src={item.imgSrc} alt={item.altTxt} />
                })}
            </div>
        </div>
    )
}

export default TechStack;