import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  // Define navbar text color based on mode
  const navbarTextColor = props.mode === 'green' || props.mode === 'blue' || props.mode === 'light' ? 'black' : 'white';

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ color: navbarTextColor }}>
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: navbarTextColor }}>
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li> */}
          </ul>

          {/* Green Mode */}
          <div
            className={`form-check form-switch text-${
              props.mode === 'light' ? 'dark' : 'light'
            }`}
          >
            <input
              className="form-check-input"
              type="radio"
              name="mode"
              id="greenMode"
              onClick={() => props.toggleMode('green')}
            />
            <label className="form-check-label me-3" htmlFor="greenMode" style={{ color: navbarTextColor }}>
              Green Mode
            </label>
          </div>

          {/* Blue Mode */}
          <div
            className={`form-check form-switch text-${
              props.mode === 'light' ? 'dark' : 'light'
            }`}
          >
            <input
              className="form-check-input"
              type="radio"
              name="mode"
              id="blueMode"
              onClick={() => props.toggleMode('blue')}
            />
            <label className="form-check-label me-3" htmlFor="blueMode" style={{ color: navbarTextColor }}>
              Blue Mode
            </label>
          </div>

          {/* Dark Mode */}
          <div
            className={`form-check form-switch text-${
              props.mode === 'light' ? 'dark' : 'light'
            }`}
          >
            <input
              className="form-check-input"
              type="radio"
              name="mode"
              id="darkMode"
              onClick={() => props.toggleMode('dark')}
            />
            <label className="form-check-label me-3" htmlFor="darkMode" style={{ color: navbarTextColor }}>
              Dark Mode
            </label>
          </div>

          {/* Light Mode */}
          <div
            className={`form-check form-switch text-${
              props.mode === 'light' ? 'dark' : 'light'
            }`}
          >
            <input
              className="form-check-input"
              type="radio"
              name="mode"
              id="lightMode"
              onClick={() => props.toggleMode('light')}
            />
            <label className="form-check-label me-4" htmlFor="lightMode" style={{ color: navbarTextColor }}>
              Light Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  toggleMode: PropTypes.func,
};
