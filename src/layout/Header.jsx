import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <h1><Link to="/">Rushabh Jadhav</Link></h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/tech-stack">Tech Stack</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
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