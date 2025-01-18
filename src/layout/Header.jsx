import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <>
            <header>
                <h1>Rushabh Jadhav</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Tech Stack</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
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