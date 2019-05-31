import React from 'react';
import { Link } from 'gatsby';
<<<<<<< HEAD
// import github from '../img/github-icon.svg';
=======
import github from '../img/github-icon.svg';
>>>>>>> 193242d338e7a5d2f8b5c5c96dc3558419d2a4b5
import logo from '../img/logo.svg';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ''
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active'
            })
          : this.setState({
              navBarActiveClass: ''
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
<<<<<<< HEAD
            <Link to="/" className="navbar-itee" title="Logo">
              <img src={logo} alt="R" className="logo" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={` burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span className="white" />
              <span className="black" />
              <span className="white" />
              <span className="black" />
              <span className="black" />
              <span className="black" />
              <span className="white" />
              <span className="black" />
              <span className="white" />
=======
            <Link to="/" className="navbar-item" title="R">
              <img src={logo} alt="R" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
>>>>>>> 193242d338e7a5d2f8b5c5c96dc3558419d2a4b5
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
<<<<<<< HEAD
            <div className="nav">
              <Link className="navbar-item" to="/about">
                About
=======
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                Works
>>>>>>> 193242d338e7a5d2f8b5c5c96dc3558419d2a4b5
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
<<<<<<< HEAD
            <div className="navbar-end has-text-centered">
=======
            {/* <div className="navbar-end has-text-centered">
>>>>>>> 193242d338e7a5d2f8b5c5c96dc3558419d2a4b5
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
<<<<<<< HEAD
                {/* <span className="icon">
                  <img src={github} alt="Github" />
                </span> */}
              </a>
            </div>
=======
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
>>>>>>> 193242d338e7a5d2f8b5c5c96dc3558419d2a4b5
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
