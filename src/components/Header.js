import React, { useState } from 'react'

function Header () {
  const [isInvitationTamil, setIsInvitationTamil] = useState(false);
  
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
      startDate = '20260304T180000';
      endDate = '20260304T230000';
      details = 'Join us for the wedding reception of Varsha and Vikas';
      location = 'Vysya Hall, M56Q+6H5, Military Rd, Ammapet, Salem, Tamil Nadu 636003';
    } else {
      title = 'Varsha & Vikas - Marriage Ceremony';
      startDate = '20260305T110000';
      endDate = '20260305T120000';
      details = 'Join us for the wedding ceremony of Varsha and Vikas';
      location = 'Vysya Hall, M56Q+6H5, Military Rd, Ammapet, Salem, Tamil Nadu 636003';
    }

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  const downloadICS = (eventType) => {
    let title, startDate, endDate, details, location;
    
    if (eventType === 'reception') {
      title = 'Varsha & Vikas - Wedding Reception';
      startDate = '20260304T180000';
      endDate = '20260304T230000';
      details = 'Join us for the wedding reception of Varsha and Vikas';
      location = 'Vysya Hall, M56Q+6H5, Military Rd, Ammapet, Salem, Tamil Nadu 636003';
    } else {
      title = 'Varsha & Vikas - Marriage Ceremony';
      startDate = '20260305T110000';
      endDate = '20260305T120000';
      details = 'Join us for the wedding ceremony of Varsha and Vikas';
      location = 'Vysya Hall, M56Q+6H5, Military Rd, Ammapet, Salem, Tamil Nadu 636003';
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
              {/* Translate Button */}
              <button 
                className='hero-translate-btn'
                onClick={() => setIsInvitationTamil(!isInvitationTamil)}
                title={isInvitationTamil ? 'Switch to English' : 'Switch to Tamil'}
              >
                {isInvitationTamil ? 'A' : 'அ'}
              </button>
              
              {/* Invitation Message */}
              <div className='invitation-message animate-box' data-animate-effect='fadeInUp'>
                {isInvitationTamil ? (
                  <>
                    <p className='invite-line-2'>எங்கள் திருமண விழாவை கொண்டாட</p>
                    <p className='invite-line-3'>உங்களை அன்புடன் அழைக்கிறோம்</p>
                  </>
                ) : (
                  <>
                    <p className='invite-line-2'>We cordially invite you to celebrate</p>
                    <p className='invite-line-3'>The wedding of</p>
                  </>
                )}
              </div>

              {/* Names and Parents Layout */}
              <div className='names-section'>
                {/* Bride Section */}
                <div className='bride-section'>
                  <h1 className='name-text animate-box' data-animate-effect='fadeInUp'>
                    {isInvitationTamil ? 'வர்ஷா' : 'Varsha'}
                  </h1>
                  {isInvitationTamil ? (
                    <>
                      <p className='parent-label'>மகள்</p>
                      <p className='parent-names'>திரு. கே. ரவி & திருமதி. கிருத்திகா ரவி</p>
                    </>
                  ) : (
                    <>
                      <p className='parent-label'>DAUGHTER OF</p>
                      <p className='parent-names'>Mr. K. Ravi & Mrs. Krithika Ravi</p>
                    </>
                  )}
                </div>

                {/* Ampersand */}
                <div className='ampersand-wrapper'>
                  <span className='ampersand-large'>&</span>
                </div>

                {/* Groom Section */}
                <div className='groom-section'>
                  <h1 className='name-text animate-box' data-animate-effect='fadeInUp'>
                    {isInvitationTamil ? 'விகாஸ்' : 'Vikas'}
                  </h1>
                  {isInvitationTamil ? (
                    <>
                      <p className='parent-label'>மகன்</p>
                      <p className='parent-names'>திரு. என். கல்யாண் & திருமதி. காயத்ரி கல்யாண்</p>
                    </>
                  ) : (
                    <>
                      <p className='parent-label'>SON OF</p>
                      <p className='parent-names'>Mr. N. Kalyan & Mrs. Gayathri Kalyan</p>
                    </>
                  )}
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
                {isInvitationTamil 
                  ? 'இன்று முதல் என்றென்றும் ஒன்றாக'
                  : 'Together Forever, From This Day Forward'
                }
              </p>

              {/* Event details cards - CLICKABLE */}
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
                    <h3 className='event-title'>
                      {isInvitationTamil ? 'வரவேற்பு விழா' : 'Reception'}
                    </h3>
                    <div className='event-date'>
                      {isInvitationTamil ? 'மார்ச் 04, 2026' : 'March 04, 2026'}
                    </div>
                    <div className='event-time'>
                      {isInvitationTamil ? 'மாலை 6:00 முதல்' : '6:00 PM onwards'}
                    </div>
                    <div className='add-calendar-hint'>
                      <i className='ti-plus'></i> {isInvitationTamil ? 'காலண்டரில் சேர்க்க' : 'Add to Calendar'}
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
                    <h3 className='event-title'>
                      {isInvitationTamil ? 'திருமண விழா' : 'Marriage Ceremony'}
                    </h3>
                    <div className='event-date'>
                      {isInvitationTamil ? 'மார்ச் 05, 2026' : 'March 05, 2026'}
                    </div>
                    <div className='event-time'>
                      {isInvitationTamil ? 'காலை 11:00 - 12:00' : '11:00 AM - 12:00 PM'}
                    </div>
                    <div className='add-calendar-hint'>
                      <i className='ti-plus'></i> {isInvitationTamil ? 'காலண்டரில் சேர்க்க' : 'Add to Calendar'}
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
                  {isInvitationTamil ? 'இடத்தைப் பார்க்க' : 'View Location'}
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