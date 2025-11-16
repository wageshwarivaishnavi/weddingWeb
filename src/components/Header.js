import React from 'react'

function Header () {
  
  const scrollToLocation = (e) => {
    e.preventDefault();
    const locationSection = document.getElementById('whenwhere');
    if (locationSection) {
      locationSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header
      id='home'
      className='header valign bg-img parallaxie'
    >
      <div className='hero-overlay'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center caption'>
            <div className='hero-content'>
              
              {/* Names and Parents Layout */}
              <div className='names-section'>
                {/* Bride Section */}
                <div className='bride-section'>
                  <h1 className='name-text animate-box' data-animate-effect='fadeInUp'>
                    Varsha
                  </h1>
                  <p className='parent-label'>DAUGHTER OF</p>
                  <p className='parent-names'>Mr. K. Ravi & Mrs. Krithika Ravi</p>
                </div>

                {/* Ampersand */}
                <div className='ampersand-wrapper'>
                  <span className='ampersand-large'>&</span>
                </div>

                {/* Groom Section */}
                <div className='groom-section'>
                  <h1 className='name-text animate-box' data-animate-effect='fadeInUp'>
                    Vikas
                  </h1>
                  <p className='parent-label'>SON OF</p>
                  <p className='parent-names'>Mr. N. Kalyan & Mrs. Gayathri Kalyan</p>
                </div>
              </div>

              {/* Elegant divider */}
              <div className='hero-divider'>
                <span className='divider-line-left'></span>
                <span className='divider-icon'>♥</span>
                <span className='divider-line-right'></span>
              </div>
            
              {/* Subtitle */}
              <p className='hero-subtitle animate-box' data-animate-effect='fadeInUp'>
                Together Forever, From This Day Forward
              </p>

              {/* Event details cards */}
              <div className='event-cards'>
                <div className='event-card animate-box' data-animate-effect='fadeInUp'>
                  <div className='event-card-inner'>
                    <h3 className='event-title'>Reception</h3>
                    <div className='event-date'>March 04, 2026</div>
                    <div className='event-time'>6:00 PM onwards</div>
                  </div>
                </div>

                <div className='event-card animate-box' data-animate-effect='fadeInUp'>
                  <div className='event-card-inner'>
                    <h3 className='event-title'>Marriage Ceremony</h3>
                    <div className='event-date'>March 05, 2026</div>
                    <div className='event-time'>11:00 AM - 12:00 PM</div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className='hero-buttons'>
                <button 
                  onClick={scrollToLocation}
                  className='btn-primary hero-btn'
                >
                  <i className='ti-location-pin'></i>
                  View Location
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header