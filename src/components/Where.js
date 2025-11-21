import { useState } from "react";
import where1 from "../assets/images/location.png";
import krishFarmsLogo from "../assets/images/krishFarms.png";

function Where() {
  const [isHovering, setIsHovering] = useState(false);

  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/RJNJSNX1mKjMpiX9A", "_blank");
  };

  return (
    <div id="whenwhere" className="whenwhere section-padding">
      {/* Floating decorative elements */}
      <div className="location-bg-decoration">
        <div className="floating-element element-1">📍</div>
        <div className="floating-element element-2">🗺️</div>
        <div className="floating-element element-3">📍</div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-60 text-center">
            <span
              className="section-subtitle animate-box"
              data-animate-effect="fadeInDown"
            >
              Wedding Venue
            </span>
            <h2
              className="section-title animate-box"
              data-animate-effect="fadeInUp"
            >
              Where We Celebrate
            </h2>
            <div className="title-divider">
              <span className="divider-line"></span>
              <span className="divider-icon">♥</span>
              <span className="divider-line"></span>
            </div>
            <p
              className="section-description animate-box"
              data-animate-effect="fadeInUp"
            >
              Join us at this beautiful venue as we begin our forever
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div
              className="location-card animate-box"
              data-animate-effect="fadeInUp"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Map Section */}
              <div
                className="location-map-wrapper"
                onClick={handleLocationClick}
              >
                <div className="map-frame">
                  <img
                    src={where1}
                    alt="Krrish Farms Location"
                    className="location-map"
                  />
                  <div className="map-border-glow"></div>
                </div>
                <div className={`map-overlay ${isHovering ? "active" : ""}`}>
                  <div className="map-icon-circle">
                    <i className="ti-location-pin"></i>
                  </div>
                  <span className="click-hint">
                    Click to open in Google Maps
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="location-content">
                <div className="venue-logo-wrapper">
                  <div className="logo-circle">
                    <img
                      src={krishFarmsLogo}
                      alt="Krrish Farms"
                      className="venue-logo"
                    />
                  </div>
                  <div className="logo-glow"></div>
                </div>

                <h3 className="venue-name">Krrish Farms</h3>

                <div className="location-divider">
                  <span className="divider-line-left"></span>
                  <span className="divider-dot">♥</span>
                  <span className="divider-line-right"></span>
                </div>

                <div className="address-section">
                  <div className="address-icon">
                    <i className="ti-location-pin"></i>
                  </div>
                  <p className="venue-address">
                    Krrish Farms, Patna Sahib
                    <br />
                    Patna, Bihar 800008
                  </p>
                </div>

                <button onClick={handleLocationClick} className="location-btn">
                  <span className="btn-icon">
                    <i className="ti-location-pin"></i>
                  </span>
                  <span className="btn-text">Get Directions</span>
                  <span className="btn-arrow">→</span>
                </button>

                {/* Decorative corner elements */}
                <div className="card-corner corner-tl"></div>
                <div className="card-corner corner-tr"></div>
                <div className="card-corner corner-bl"></div>
                <div className="card-corner corner-br"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Where;
