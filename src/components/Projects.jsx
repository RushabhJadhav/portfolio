import rectangeImage from "../assets/img/Rectangle_8.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <div className="projects-container section">
            <h1>Projects</h1>
            <p>Things I've built so far</p>
            <div className="cards-container">
                <div className="card">
                    <div className="card-img" style={{backgroundImage: `url(${rectangeImage})`}}>
                    </div>
                    <div className="card-texts">
                        <h3>Project Tile goes here</h3>
                        <p>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
                        <p>Tech stack : HTML , JavaScript, SASS, React</p>
                        <ul className="card-links">
                            <li>
                                <a href="#" target="_blank">
                                    <FontAwesomeIcon icon={faLink} />
                                    Live Preview
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                    View Code
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;