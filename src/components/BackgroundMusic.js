import React, { useState, useEffect, useRef } from 'react';
import weddingSong from '../assets/images/AajSeTeri.mp3';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const autoplayAttemptedRef = useRef(false); // Track if we've tried autoplay

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    // Try autoplay
    const tryAutoplay = () => {
      if (autoplayAttemptedRef.current) return; // Don't try multiple times
      autoplayAttemptedRef.current = true;

      audio.play()
        .then(() => {
          setIsPlaying(true);
          console.log('Playing');
        })
        .catch(() => {
          console.log('Autoplay blocked, waiting for user interaction');
          
          // Play on first interaction (click, touch, OR scroll)
          const playOnce = () => {
            audio.play()
              .then(() => setIsPlaying(true))
              .catch(err => console.log(err));
            
            // Remove all listeners
            document.removeEventListener('click', playOnce);
            document.removeEventListener('touchstart', playOnce);
            document.removeEventListener('scroll', playOnce);
          };
          
          document.addEventListener('click', playOnce, { once: true });
          document.addEventListener('touchstart', playOnce, { once: true });
          document.addEventListener('scroll', playOnce, { once: true }); // ✅ Added scroll
        });
    };

    tryAutoplay();

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log('Play error:', err));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto" playsInline>
        <source src={weddingSong} type="audio/mpeg" />
      </audio>

      <div
        className={`music-control ${isPlaying ? 'playing' : 'paused'}`}
        onClick={toggleMusic}
        role="button"
        aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        {isPlaying ? (
          <>
            <i className="fa fa-music"></i>
            <span className="music-waves">
              <span className="wave wave-1"></span>
              <span className="wave wave-2"></span>
              <span className="wave wave-3"></span>
            </span>
          </>
        ) : (
          <i className="fa fa-play"></i>
        )}
      </div>
    </>
  );
};

export default BackgroundMusic;