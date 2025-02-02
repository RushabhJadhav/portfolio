import rectangeImage1 from "../assets/img/Rectangle_1.png";
import rectangeImage2 from "../assets/img/Rectangle_2.png";
import rectangeImage3 from "../assets/img/Rectangle_3.png";
import rectangeImage4 from "../assets/img/Rectangle_4.png";
import rectangeImage5 from "../assets/img/Rectangle_5.png";
import rectangeImage6 from "../assets/img/Rectangle_6.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";

const Projects = () => {
    const projectCards = [
        {title: "Football App", desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", stack: "HTML , JavaScript, SASS, React", img: rectangeImage1, preview: "https://github.com/RushabhJadhav/football-app", code: "https://github.com/RushabhJadhav/football-app"},
        {title: "News App", desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", stack: "HTML , JavaScript, SASS, Vue", img: rectangeImage2, preview: "https://github.com/RushabhJadhav/vue-news-app", code: "https://github.com/RushabhJadhav/vue-news-app"},
        {title: "To Do List", desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", stack: "HTML , JavaScript, SASS, React", img: rectangeImage3, preview: "https://rushabhjadhav.github.io/react-to-do-list/", code: "https://github.com/RushabhJadhav/react-to-do-list"},
        {title: "Tips Calculator", desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", stack: "HTML , JavaScript, SASS, React", img: rectangeImage4, preview: "https://rushabhjadhav.github.io/tips-calculator/", code: "https://github.com/RushabhJadhav/tips-calculator"},
        {title: "Tic Tac Toe", desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", stack: "HTML , CSS, JavaScript", img: rectangeImage5, preview: "https://github.com/RushabhJadhav/tic-tac-toe-game", code: "https://github.com/RushabhJadhav/tic-tac-toe-game"},
        {title: "Weather App", desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", stack: "HTML , CSS, JavaScript", img: rectangeImage6, preview: "https://weather-app-by-rushabh-jadhav.netlify.app/", code: "https://github.com/RushabhJadhav/weather-app"},
    ];

    const { pathname } = useLocation();

    return (
        <div id="projects" className="projects-container section" style={pathname == '/projects' ? { margin: '3rem auto' } : {}}>
            <h1>Projects</h1>
            <p>Things I've built so far</p>
            <div className="cards-container">
                {projectCards.map((item, index) => {
                    return <div className="card" key={index} style={{backgroundImage: `url(${item.img})`}}>
                        <div className="card-text">
                            <p className="card-title">{item.title}</p>
                            <p className="card-desc">{item.desc}</p>
                            <p className="card-stack">Stack: {item.stack}</p>
                            <ul className="card-links">
                                <li>
                                    <a href={item.preview} target="_blank">
                                        <FontAwesomeIcon icon={faLink} />
                                        Live Preview
                                    </a>
                                </li>
                                <li>
                                    <a href={item.code} target="_blank">
                                        <FontAwesomeIcon icon={faGithub} />
                                        View Code
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Projects;