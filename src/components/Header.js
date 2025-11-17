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

  // Add to Calendar functions
  const addToCalendar = (eventType) => {
    let title, startDate, endDate, details, location;
    
    if (eventType === 'reception') {
      title = 'Varsha & Vikas - Wedding Reception';
      startDate = '20260304T180000'; // March 04, 2026, 6:00 PM
      endDate = '20260304T230000';   // March 04, 2026, 11:00 PM
      details = 'Join us for the wedding reception of Varsha and Vikas';
      location = 'Adithi Hall, NO 2, 1st Main Rd, Kannan Nagar, Madipakkam, Chennai, Tamil Nadu 600091';
    } else {
      title = 'Varsha & Vikas - Marriage Ceremony';
      startDate = '20260305T110000'; // March 05, 2026, 11:00 AM
      endDate = '20260305T120000';   // March 05, 2026, 12:00 PM
      details = 'Join us for the wedding ceremony of Varsha and Vikas';
      location = 'Adithi Hall, NO 2, 1st Main Rd, Kannan Nagar, Madipakkam, Chennai, Tamil Nadu 600091';
    }

    // Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    
    // Open in new tab
    window.open(googleCalendarUrl, '_blank');
  };

  // Download ICS file for Apple Calendar, Outlook, etc.
  const downloadICS = (eventType) => {
    let title, startDate, endDate, details, location;
    
    if (eventType === 'reception') {
      title = 'Varsha & Vikas - Wedding Reception';
      startDate = '20260304T180000';
      endDate = '20260304T230000';
      details = 'Join us for the wedding reception of Varsha and Vikas';
      location = 'Adithi Hall, NO 2, 1st Main Rd, Kannan Nagar, Madipakkam, Chennai, Tamil Nadu 600091';
    } else {
      title = 'Varsha & Vikas - Marriage Ceremony';
      startDate = '20260305T110000';
      endDate = '20260305T120000';
      details = 'Join us for the wedding ceremony of Varsha and Vikas';
      location = 'Adithi Hall, NO 2, 1st Main Rd, Kannan Nagar, Madipakkam, Chennai, Tamil Nadu 600091';
    }

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${title}
DESCRIPTION:${details}
LOCATION:${location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${eventType}-varsha-vikas.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Show calendar options
  const handleEventCardClick = (eventType) => {
    if (window.confirm('Add to Calendar?\n\nClick OK for Google Calendar\nClick Cancel to download for Apple/Outlook')) {
      addToCalendar(eventType);
    } else {
      downloadICS(eventType);
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
            {/* Om Namah Shivaya - Top */}
            <div className='sacred-chant animate-box' data-animate-effect='fadeInDown'>
              <span className='om-symbol'>ॐ नमः शिवाय</span>
            </div>
            
            <div className='hero-content'>
              
              {/* Invitation Message */}
              <div className='invitation-message animate-box' data-animate-effect='fadeInUp'>
                <p className='invite-line-2'>We cordially invite you to celebrate</p>
                <p className='invite-line-3'>The wedding of</p>
              </div>

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

              {/* Event details cards - NOW CLICKABLE */}
              <div className='event-cards'>
                <div 
                  className='event-card animate-box' 
                  data-animate-effect='fadeInUp'
                  onClick={() => handleEventCardClick('reception')}
                  role='button'
                  tabIndex='0'
                  onKeyPress={(e) => e.key === 'Enter' && handleEventCardClick('reception')}
                >
                  <div className='event-card-inner'>
                    <div className='calendar-icon-badge'>
                      <i className='ti-calendar'></i>
                    </div>
                    <h3 className='event-title'>Reception</h3>
                    <div className='event-date'>March 04, 2026</div>
                    <div className='event-time'>6:00 PM onwards</div>
                    <div className='add-calendar-hint'>
                      <i className='ti-plus'></i> Add to Calendar
                    </div>
                  </div>
                </div>

                <div 
                  className='event-card animate-box' 
                  data-animate-effect='fadeInUp'
                  onClick={() => handleEventCardClick('ceremony')}
                  role='button'
                  tabIndex='0'
                  onKeyPress={(e) => e.key === 'Enter' && handleEventCardClick('ceremony')}
                >
                  <div className='event-card-inner'>
                    <div className='calendar-icon-badge'>
                      <i className='ti-calendar'></i>
                    </div>
                    <h3 className='event-title'>Marriage Ceremony</h3>
                    <div className='event-date'>March 05, 2026</div>
                    <div className='event-time'>11:00 AM - 12:00 PM</div>
                    <div className='add-calendar-hint'>
                      <i className='ti-plus'></i> Add to Calendar
                    </div>
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