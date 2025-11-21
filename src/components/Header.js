import React, { useState } from "react";

function Header() {
  const [isInvitationHindi, setIsInvitationHindi] = useState(false);

  const scrollToLocation = (e) => {
    e.preventDefault();
    const locationSection = document.getElementById("whenwhere");
    if (locationSection) {
      locationSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Add to Calendar functions
  const addToCalendar = (eventType) => {
    let title, startDate, endDate, details, location;
    title = "Wageshwari & Rishab - Marriage Ceremony";
    startDate = "20260219T110000";
    endDate = "20260220T120000";
    details = "Join us for the wedding ceremony of Wageshwari and Rishab";
    location =
      "Fly Over Bridge of, Railway Station, Near, Sudarshan Path, Patna Sahib, Nalapar, Kali Asthan, Patna, Bihar 800008";

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      details
    )}&location=${encodeURIComponent(location)}`;

    window.open(googleCalendarUrl, "_blank");
  };

  const downloadICS = (eventType) => {
    let title, startDate, endDate, details, location;
    title = "Wageshwari & Rishab - Marriage Ceremony";
    startDate = "20260305T110000";
    endDate = "20260305T120000";
    details = "Join us for the wedding ceremony of Wageshwari and Rishab";
    location =
      "Fly Over Bridge of, Railway Station, Near, Sudarshan Path, Patna Sahib, Nalapar, Kali Asthan, Patna, Bihar 800008";
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

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${eventType}-Wageshwari-Rishab.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEventCardClick = (eventType) => {
    if (
      window.confirm(
        "Add to Calendar?\n\nClick OK for Google Calendar\nClick Cancel to download for Apple/Outlook"
      )
    ) {
      addToCalendar(eventType);
    } else {
      downloadICS(eventType);
    }
  };

  return (
    <header id="home" className="header valign bg-img parallaxie">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center caption">
            {/* Om Namah Shivaya - Top */}
            <div
              className="sacred-chant animate-box"
              data-animate-effect="fadeInDown"
            >
              <span className="om-symbol">ॐ नमः शिवाय</span>
            </div>

            <div className="hero-content">
              {/* Translate Button */}
              <button
                className="hero-translate-btn"
                onClick={() => setIsInvitationHindi(!isInvitationHindi)}
                title={
                  isInvitationHindi ? "Switch to English" : "Switch to Hindi"
                }
              >
                {isInvitationHindi ? "A" : "अ"}
              </button>

              {/* Invitation Message */}
              <div
                className="invitation-message animate-box"
                data-animate-effect="fadeInUp"
              >
                {isInvitationHindi ? (
                  <>
                    <p className="invite-line-2">
                      हमारे विवाह समारोह का जश्न मनाने के लिए
                    </p>
                    <p className="invite-line-3">
                      आपको स्नेहपूर्वक आमंत्रित करते हैं
                    </p>
                  </>
                ) : (
                  <>
                    <p className="invite-line-2">
                      We cordially invite you to celebrate
                    </p>
                    <p className="invite-line-3">The wedding of</p>
                  </>
                )}
              </div>

              {/* Names and Parents Layout */}
              <div className="names-section">
                {/* Bride Section */}
                <div className="bride-section">
                  <h1
                    className="name-text animate-box"
                    data-animate-effect="fadeInUp"
                  >
                    {isInvitationHindi ? "वागेश्वरी" : "Wageshwari"}
                  </h1>
                  {isInvitationHindi ? (
                    <>
                      <p className="parent-label">कन्या</p>
                      <p className="parent-names">
                        स्व. अनिल कुमार और श्रीमती रजनी गुप्ता
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="parent-label">DAUGHTER OF</p>
                      <p className="parent-names">
                        Late Anil Kumar & Mrs. Rajani Gupta
                      </p>
                    </>
                  )}
                </div>

                {/* Ampersand */}
                <div className="ampersand-wrapper">
                  <span className="ampersand-large">&</span>
                </div>

                {/* Groom Section */}
                <div className="groom-section">
                  <h1
                    className="name-text animate-box"
                    data-animate-effect="fadeInUp"
                  >
                    {isInvitationHindi ? "रिशाब" : "Rishab"}
                  </h1>
                  {isInvitationHindi ? (
                    <>
                      <p className="parent-label">पुत्र</p>
                      <p className="parent-names">
                        श्री रंजीत कुमार रंजन और श्रीमती रेखा देवी
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="parent-label">SON OF</p>
                      <p className="parent-names">
                        Mr. Ranjit Kumar Ranjan & Mrs. Rekha Devi
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Elegant divider */}
              <div className="hero-divider">
                <span className="divider-line-left"></span>
                <span className="divider-icon">♥</span>
                <span className="divider-line-right"></span>
              </div>

              {/* Subtitle */}
              <p
                className="hero-subtitle animate-box"
                data-animate-effect="fadeInUp"
              >
                {isInvitationHindi
                  ? "आज से हमेशा के लिए एक साथ"
                  : "Together Forever, From This Day"}
              </p>

              {/* Event details cards - CLICKABLE */}
              <div className="event-cards">
                <div
                  className="event-card animate-box"
                  data-animate-effect="fadeInUp"
                  onClick={() => handleEventCardClick("ceremony")}
                  role="button"
                  tabIndex="0"
                  onKeyPress={(e) =>
                    e.key === "Enter" && handleEventCardClick("ceremony")
                  }
                >
                  <div className="event-card-inner">
                    <div className="calendar-icon-badge">
                      <i className="ti-calendar"></i>
                    </div>
                    <h3 className="event-title">
                      {isInvitationHindi ? "विवाह समारोह" : "Marriage Ceremony"}
                    </h3>
                    <div className="event-date">
                      {isInvitationHindi ? "05 मार्च, 2026" : "Feb 19, 2026"}
                    </div>
                    <div className="event-time">
                      {isInvitationHindi
                        ? "सुबह 10:30 - 12:00"
                        : "07:00 PM Onwards"}
                    </div>
                    <div className="add-calendar-hint">
                      <i className="ti-plus"></i>{" "}
                      {isInvitationHindi
                        ? "कैलेंडर में जोड़ें"
                        : "Add to Calendar"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="hero-buttons">
                <button
                  onClick={scrollToLocation}
                  className="btn-primary hero-btn"
                >
                  <i className="ti-location-pin"></i>
                  {isInvitationHindi ? "स्थान देखें" : "View Location"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
