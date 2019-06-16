import React from 'react';
import { Link } from 'gatsby';

// import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import github from '../img/github-icon.svg';
import mail from '../img/social/mail.svg';
import scroll from '../img/scroll.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer" id="footer">
        <h2 className="sectionTitle areaB">Contact</h2>
        <p className="areaD">&copy;Reo Yoshioka 2019</p>
        <div className="areaE">
          <p>Thank you for coming to my portforio website.</p>
          <p>If you are interested, please don’t hesitate to contact me.</p>
        </div>
        <div className="github areaG">
          <a
            title="instagram"
            href="https://github.com/ReoYweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github" style={{ width: '1.2em' }} />
          </a>
        </div>
        <div className="social areaH">
          <a
            title="facebook"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" style={{ width: '1.2em' }} />
          </a>
          <a
            title="twitter"
            href="https://twitter.com/reowebd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="fas fa-lg"
              src={twitter}
              alt="Twitter"
              style={{ width: '1.2em' }}
            />
          </a>
          <a
            title="instagram"
            href="https://www.instagram.com/reo6255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" style={{ width: '1.2em' }} />
          </a>
          <a
            title="mail"
            href="https://www.instagram.com/reo6255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mail} alt="mail" style={{ width: '1.2em' }} />
          </a>
        </div>
        <Link to="/" className="areaI">
          <img src={scroll} className="scroll" alt="scroll" />
        </Link>
      </footer>
    );
  }
};

export default Footer;
