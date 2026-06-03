import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NavHashLink } from 'react-router-hash-link';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const navLinks = [
        { name: 'Home', path: '/#intro' },
        { name: 'About', path: '/about' },
        { name: 'Tech Stack', path: '/#tech-stack' },
        { name: 'Projects', path: '/#projects' },
        { name: 'Contact', path: '/#contact' },
    ];

    return (
        <header>
            <h1><NavHashLink smooth to="/#intro" onClick={closeMenu}>Rushabh Jadhav</NavHashLink></h1>
            <nav>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavHashLink smooth to={link.path}>{link.name}</NavHashLink>
                        </li>
                    ))}
                </ul>
                <div className="social-links">
                    <a href="https://github.com/RushabhJadhav/" target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/rushabh-jadhav-002294249/" target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com/j_rushabh39/" target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </nav>
            <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`hamburger-nav ${isOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <NavHashLink smooth to={link.path} onClick={closeMenu}>{link.name}</NavHashLink>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;
