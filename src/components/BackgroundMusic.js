import React, { useState, useEffect, useRef } from 'react';
import weddingSong from '../assets/images/Mella-Sirithai.mp3';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const hasStartedRef = useRef(false); // ADDED: Track if music has started

  useEffect(() => {
    const audio = audioRef.current;
    
    if (!audio) return;

    audio.volume = 0;
    
    const attemptAutoPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        hasStartedRef.current = true; // ADDED: Mark as started
        fadeIn(audio);
        console.log('✅ Music auto-playing successfully');
      } catch (error) {
        console.log('⚠️ Autoplay blocked by browser:', error.message);
        console.log('🎵 Music will start on first user interaction');
        
        const playOnInteraction = async (e) => {
          // ADDED: Only play if music hasn't started yet
          if (hasStartedRef.current) return;
          
          try {
            await audio.play();
            setIsPlaying(true);
            hasStartedRef.current = true; // ADDED: Mark as started
            fadeIn(audio);
            console.log('✅ Music started after user interaction');
            
            // Remove all listeners after first play
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
            document.removeEventListener('keydown', playOnInteraction);
            document.removeEventListener('scroll', playOnInteraction);
          } catch (err) {
            console.error('❌ Play failed:', err);
          }
        };
        
        // Listen for ANY user interaction ONLY for first play
        document.addEventListener('click', playOnInteraction);
        document.addEventListener('touchstart', playOnInteraction);
        document.addEventListener('keydown', playOnInteraction);
        document.addEventListener('scroll', playOnInteraction); // This will be removed after first play
      }
    };

    const timer = setTimeout(attemptAutoPlay, 100);

    return () => {
      clearTimeout(timer);
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  const toggleMusic = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const audio = audioRef.current;
    
    if (!audio) return;

    if (isPlaying) {
      // Pause the music
      fadeOut(audio, () => {
        audio.pause();
        setIsPlaying(false);
      });
    } else {
      // Play the music
      audio.volume = 0;
      audio.play()
        .then(() => {
          fadeIn(audio);
          setIsPlaying(true);
          hasStartedRef.current = true; // ADDED: Mark as started
        })
        .catch((error) => {
          console.error('Play failed:', error);
        });
    }
  };

  const fadeIn = (audio) => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }
    
    let volume = 0;
    const targetVolume = 0.5;
    
    fadeIntervalRef.current = setInterval(() => {
      if (volume < targetVolume) {
        volume += 0.05;
        audio.volume = Math.min(volume, targetVolume);
      } else {
        clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = null;
      }
    }, 100);
  };

  const fadeOut = (audio, callback) => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }
    
    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume -= 0.05;
      } else {
        audio.volume = 0;
        clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = null;
        if (callback) callback();
      }
    }, 100);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
      >
        <source src={weddingSong} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button
        className={`music-control ${isPlaying ? 'playing' : 'paused'}`}
        onClick={toggleMusic}
        onTouchEnd={toggleMusic}
        aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
        type="button"
      >
        {isPlaying ? (
          <>
            <i className="fa fa-music" aria-hidden="true"></i>
            <span className="music-waves" aria-hidden="true">
              <span className="wave wave-1"></span>
              <span className="wave wave-2"></span>
              <span className="wave wave-3"></span>
            </span>
          </>
        ) : (
          <i className="fa fa-play" aria-hidden="true"></i>
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;