import rectangeImage1 from "../assets/img/Rectangle_1.png";
import rectangeImage2 from "../assets/img/Rectangle_2.png";
import rectangeImage3 from "../assets/img/Rectangle_3.png";
import rectangeImage4 from "../assets/img/Rectangle_4.png";
import rectangeImage5 from "../assets/img/Rectangle_5.png";
import rectangeImage6 from "../assets/img/Rectangle_6.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    const projectCards = [
        {title: "Project Tile goes here", desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", stack: "HTML , JavaScript, SASS, React", img: rectangeImage1, preview: "", code: ""},
        {title: "Project Tile goes here", desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", stack: "HTML , JavaScript, SASS, React", img: rectangeImage2, preview: "", code: ""},
        {title: "Project Tile goes here", desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", stack: "HTML , JavaScript, SASS, React", img: rectangeImage3, preview: "", code: ""},
        {title: "Project Tile goes here", desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", stack: "HTML , JavaScript, SASS, React", img: rectangeImage4, preview: "", code: ""},
        {title: "Project Tile goes here", desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", stack: "HTML , JavaScript, SASS, React", img: rectangeImage5, preview: "", code: ""},
        {title: "Project Tile goes here", desc: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", stack: "HTML , JavaScript, SASS, React", img: rectangeImage6, preview: "", code: ""},
    ]

    return (
        <div id="projects" className="projects-container section">
            <h1>Projects</h1>
            <p>Things I've built so far</p>
            <div className="cards-container">
                {projectCards.map((item, index) => {
                    return <div className="card" key={index} style={{backgroundImage: `url(${item.img})`}}>
                        <div className="card-text">
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