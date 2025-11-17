import React, { useState } from 'react'

function Header () {
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
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

  // Generate ICS file content
  const generateICS = (eventType) => {
    let title, startDate, endDate, details, location;
    
    if (eventType === 'reception') {
      title = 'Varsha & Vikas - Wedding Reception';
      startDate = '20260304T180000Z'; // Z for UTC
      endDate = '20260304T230000Z';
      details = 'Join us for the wedding reception of Varsha and Vikas';
      location = 'Adithi Hall, NO 2, 1st Main Rd, Kannan Nagar, Madipakkam, Chennai, Tamil Nadu 600091';
    } else {
      title = 'Varsha & Vikas - Marriage Ceremony';
      startDate = '20260305T110000Z';
      endDate = '20260305T120000Z';
      details = 'Join us for the wedding ceremony of Varsha and Vikas';
      location = 'Adithi Hall, NO 2, 1st Main Rd, Kannan Nagar, Madipakkam, Chennai, Tamil Nadu 600091';
    }

    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Varsha & Vikas Wedding//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${eventType}-${Date.now()}@wedding.com
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${title}
DESCRIPTION:${details}
LOCATION:${location}
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:Wedding Reminder - Tomorrow!
END:VALARM
END:VEVENT
END:VCALENDAR`;
  };

  // Handle event card click - show menu
  const handleEventCardClick = (eventType) => {
    setSelectedEvent(eventType);
    setShowCalendarMenu(true);
  };

  // Add to Google Calendar
  const addToGoogleCalendar = () => {
    let title, startDate, endDate, details, location;
    
    if (selectedEvent === 'reception') {
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

    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    window.open(googleUrl, '_blank');
    setShowCalendarMenu(false);
  };

  // Download ICS file (works for Apple Calendar, Outlook, etc.)
  const downloadICS = () => {
    const icsContent = generateICS(selectedEvent);
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${selectedEvent}-varsha-vikas-wedding.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    setShowCalendarMenu(false);
  };

  // Add to Apple Calendar (iOS)
  const addToAppleCalendar = () => {
    const icsContent = generateICS(selectedEvent);
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = window.URL.createObjectURL(blob);
    
    // For iOS devices, this will trigger the calendar app
    window.location.href = url;
    
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      setShowCalendarMenu(false);
    }, 100);
  };

  // Add to Outlook
  const addToOutlook = () => {
    let title, startDate, endDate, details, location;
    
    if (selectedEvent === 'reception') {
      title = 'Varsha & Vikas - Wedding Reception';
      startDate = '2026-03-04T18:00:00';
      endDate = '2026-03-04T23:00:00';
      details = 'Join us for the wedding reception of Varsha and Vikas';
      location = 'Adithi Hall, NO 2, 1st Main Rd, Kannan Nagar, Madipakkam, Chennai, Tamil Nadu 600091';
    } else {
      title = 'Varsha & Vikas - Marriage Ceremony';
      startDate = '2026-03-05T11:00:00';
      endDate = '2026-03-05T12:00:00';
      details = 'Join us for the wedding ceremony of Varsha and Vikas';
      location = 'Adithi Hall, NO 2, 1st Main Rd, Kannan Nagar, Madipakkam, Chennai, Tamil Nadu 600091';
    }

    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&subject=${encodeURIComponent(title)}&startdt=${encodeURIComponent(startDate)}&enddt=${encodeURIComponent(endDate)}&body=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    window.open(outlookUrl, '_blank');
    setShowCalendarMenu(false);
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

              {/* Event details cards - CLICKABLE */}
              <div className='event-cards'>
                <div 
                  className='event-card animate-box' 
                  data-animate-effect='fadeInUp'
                  onClick={() => handleEventCardClick('reception')}
                  role='button'
                  tabIndex='0'
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

      {/* Calendar Menu Popup */}
      {showCalendarMenu && (
        <div className='calendar-menu-overlay' onClick={() => setShowCalendarMenu(false)}>
          <div className='calendar-menu' onClick={(e) => e.stopPropagation()}>
            <button className='close-menu' onClick={() => setShowCalendarMenu(false)}>
              <i className='ti-close'></i>
            </button>
            <h3 className='calendar-menu-title'>Add to Calendar</h3>
            <p className='calendar-menu-subtitle'>Choose your calendar app</p>
            
            <div className='calendar-options'>
              <button className='calendar-option' onClick={addToGoogleCalendar}>
                <i className='ti-google'></i>
                <span>Google Calendar</span>
              </button>
              
              <button className='calendar-option' onClick={addToAppleCalendar}>
                <i className='ti-apple'></i>
                <span>Apple Calendar</span>
              </button>
              
              <button className='calendar-option' onClick={addToOutlook}>
                <i className='ti-microsoft'></i>
                <span>Outlook</span>
              </button>
              
              <button className='calendar-option' onClick={downloadICS}>
                <i className='ti-download'></i>
                <span>Download .ics File</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header