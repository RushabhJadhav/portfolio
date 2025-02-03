import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

const Header = () => {
    let [isOpen, setIsOpen] = useState(false);
    
    const hamburgerMenu = useRef(null);

    const handleClick = () => {
        setIsOpen(prevState => {
            const newState = !prevState;

            if(newState) {
                hamburgerMenu.current.classList.add('open')
            } else {
                hamburgerMenu.current.classList.remove('open')
            }

            return newState;
        })
    }

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
                <div className="hamburger-menu" onClick={handleClick} ref={hamburgerMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className="hamburger-nav"></ul>
            </header>
        </>
    )
}

export default Header;