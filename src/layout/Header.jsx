import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <>
            <header>
                <h1>Rushabh Jadhav</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="#tech-stack">Tech Stack</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <div className="social-links">
                        <a href="https://github.com/RushabhJadhav/" target='_blank'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/rushabh-jadhav-002294249/" target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://www.instagram.com/j_rushabh39/" target='_blank'>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;