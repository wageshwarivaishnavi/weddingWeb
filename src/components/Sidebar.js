import React, { useState } from "react";
import Logo from "../assets/images/2.webp";

function Sidebar() {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle("slide");
  };

  const closeMenu = () => {
    setShow(false);
    document.body.classList.remove("slide");
  };

  return (
    <>
      <a
        href="/"
        onClick={openMenu}
        className={`js-oliven-nav-toggle oliven-nav-toggle${
          show ? " active" : ""
        }`}
      >
        <i></i>
      </a>
      <aside id="oliven-aside">
        <div className="sidebar-overlay" onClick={closeMenu}></div>
        <div className="sidebar-content">
          <div className="oliven-logo">
            <a href="/">
              <div className="logo-wrapper">
                <img src={Logo} alt="Wedding Logo" loading="lazy" />
              </div>
              <span className="couple-names">
                Wageshwari <small className="ampersand">&</small> Rishab
              </span>
              <div className="date-divider">
                <span className="divider-line"></span>
                <span className="divider-heart">♥</span>
                <span className="divider-line"></span>
              </div>
              <h6 className="wedding-dates">19 Feb 2026</h6>
            </a>
          </div>
          <nav className="oliven-main-menu">
            <ul>
              <li className="menu-item">
                <a href="#home" onClick={closeMenu}>
                  <span className="menu-icon">
                    <i className="ti-home"></i>
                  </span>
                  <span className="menu-text">Home</span>
                </a>
              </li>
              {/* <li className="menu-item">
                <a href="#organization" onClick={closeMenu}>
                  <span className="menu-icon">
                    <i className="ti-crown"></i>
                  </span>
                  <span className="menu-text">Vivaha Vaibhavam</span>
                </a>
              </li> */}
              <li className="menu-item">
                <a href="#story" onClick={closeMenu}>
                  <span className="menu-icon">
                    <i className="ti-heart"></i>
                  </span>
                  <span className="menu-text">Invitation</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#gallery" onClick={closeMenu}>
                  <span className="menu-icon">
                    <i className="ti-location-pin"></i>
                  </span>
                  <span className="menu-text">Engagement Gallery</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#countdown" onClick={closeMenu}>
                  <span className="menu-icon">
                    <i className="ti-home"></i>
                  </span>
                  <span className="menu-text">Countdown</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="#whenwhere" onClick={closeMenu}>
                  <span className="menu-icon">
                    <i className="ti-location-pin"></i>
                  </span>
                  <span className="menu-text">Wedding Venue</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer1">
            <span className="separator"></span>
            <p className="footer-text">
              Join us in celebrating
              <br />
              <strong>Wageshwari & Rishab</strong>
              <br />
              <span className="footer-date">19 Feb 2026</span>
            </p>
            <div className="footer-heart">
              <i className="ti-heart"></i>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
