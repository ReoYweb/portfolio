import React from 'react';
import { Link } from 'gatsby';
// import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';
import menu from '../img/menu1.jpg';

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
          <div id="nav" className={` ${this.state.navBarActiveClass}`}>
            <img src={logo} className="menu__logo" />
            <div class="navleft">
              <img src={menu} />
            </div>
            <div class="navright">
              <div className="nav-inner">
                <Link className="navbar-item" to="/">
                  Home
                </Link>
                <Link className="navbar-item" to="/about">
                  Work
                </Link>
                <Link className="navbar-item" to="/products">
                  Photos
                </Link>
                <Link className="navbar-item" to="/blog">
                  Blog
                </Link>
                <Link className="navbar-item" to="#footer">
                  Contact
                </Link>
              </div>
            </div>
            <p className="nav__text">
              Hello, I am Reo Yoshioka and UI/UX designer. I design and build
              cool websites like below. I have worked as a web designer for 2
              years in Japan and then learned web design at Vanarts institute of
              media arts in Vancouver, Canada. I am obsessed with UI/UX design
              and web development as well and always think of how user
              experience become good.
            </p>
            {/* <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
