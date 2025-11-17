import React, { useEffect, useState } from 'react'

function Countdown () {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isWeddingDay, setIsWeddingDay] = useState(false);

  useEffect(() => {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    
    const weddingDate = "Mar 05, 2026 11:00:00";
    const countDown = new Date(weddingDate).getTime();
    
    const x = setInterval(() => {    
      const now = new Date().getTime();
      const distance = countDown - now;

      if (distance < 0) {
        setIsWeddingDay(true);
        clearInterval(x);
      } else {
        setTimeLeft({
          days: Math.floor(distance / day),
          hours: Math.floor((distance % day) / hour),
          minutes: Math.floor((distance % hour) / minute),
          seconds: Math.floor((distance % minute) / second)
        });
      }
    }, 1000);

    return () => clearInterval(x);
  }, []);

  if (isWeddingDay) {
    return (
      <div id='countdown' className='countdown-section section-padding'>
        <div className='celebration-background'>
          <div className='celebration-particle'></div>
          <div className='celebration-particle'></div>
          <div className='celebration-particle'></div>
          <div className='celebration-particle'></div>
          <div className='celebration-particle'></div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <div className='celebration-content'>
                <div className='celebration-icon'>
                  <i className='ti-heart'></i>
                </div>
                <h2 className='celebration-title'>It's Our Wedding Day!</h2>
                <p className='celebration-text'>The day we've been waiting for is finally here</p>
                <div className='celebration-sparkles'>
                  <span className='sparkle'>✨</span>
                  <span className='sparkle'>💐</span>
                  <span className='sparkle'>✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id='countdown' className='countdown-section section-padding'>
      {/* Animated background elements */}
      <div className='countdown-bg-elements'>
        <div className='floating-heart heart-1'>♥</div>
        <div className='floating-heart heart-2'>♥</div>
        <div className='floating-heart heart-3'>♥</div>
        <div className='floating-heart heart-3'>♥</div>
        <div className='floating-heart heart-1'>♥</div>
      </div>
      
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center countdown-header'>
            <span className='countdown-subtitle animate-box' data-animate-effect='fadeInUp'>
              Save The Date
            </span>
            <h2 className='countdown-title animate-box' data-animate-effect='fadeInUp'>
              Countdown to Forever
            </h2>
            <div className='title-divider'>
              <span className='divider-line'></span>
              <span className='divider-icon'>♥</span>
              <span className='divider-line'></span>
            </div>
            
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='countdown-wrapper'>
              <div className='countdown-item'>
                <div className='countdown-box'>
                  <div className='countdown-number'>{String(timeLeft.days).padStart(2, '0')}</div>
                  <div className='countdown-label'>Days</div>
                  <div className='countdown-glow'></div>
                </div>
              </div>
              
              <div className='countdown-separator'>
                <span className='separator-dot'>•</span>
              </div>
              
              <div className='countdown-item'>
                <div className='countdown-box'>
                  <div className='countdown-number'>{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className='countdown-label'>Hours</div>
                  <div className='countdown-glow'></div>
                </div>
              </div>
              
              <div className='countdown-separator'>
                <span className='separator-dot'>•</span>
              </div>
              
              <div className='countdown-item'>
                <div className='countdown-box'>
                  <div className='countdown-number'>{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className='countdown-label'>Minutes</div>
                  <div className='countdown-glow'></div>
                </div>
              </div>
              
              <div className='countdown-separator'>
                <span className='separator-dot'>•</span>
              </div>
              
              <div className='countdown-item'>
                <div className='countdown-box'>
                  <div className='countdown-number'>{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className='countdown-label'>Seconds</div>
                  <div className='countdown-glow'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <p className='countdown-message'>
              <i className='ti-heart'></i> Can't wait to celebrate with you! <i className='ti-heart'></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown