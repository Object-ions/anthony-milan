import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import '../../assets/styles/navbar.scss';
const Navbar = () => {
  return (
    <nav>
      <div className="nav-content">
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#plans">Plans & Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.instagram.com/anthonytmilian" target='_blank' rel='noreferrer'>
              <FontAwesomeIcon icon={faInstagram} size="2x"/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
