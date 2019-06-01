import React from 'react';
import { Link } from 'gatsby';
// import github from '../img/github-icon.svg';
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
        <div className="cursor cursor-follower" />
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-itee" title="Logo">
              <img src={logo} alt="R" className="logo" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={` burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span className="white areaA" />
              <span className="black areaB" />
              <span className="white areaC" />
              <span className="black areaD" />
              <span className="black areaE" />
              <span className="black areaF" />
              <span className="white areaG" />
              <span className="black areaH" />
              <span className="white areaI" />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="nav">
              <Link className="navbar-item" to="/about">
                About
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
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <span className="icon">
                  <img src={github} alt="Github" />
                </span> */}
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
