import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import gallery1 from '../assets/images/1.jpg'
import gallery2 from '../assets/images/2.jpg'
import gallery3 from '../assets/images/3.jpg'
import gallery4 from '../assets/images/4.jpg'
import gallery5 from '../assets/images/5.jpg'
import gallery6 from '../assets/images/6.jpg'

function Gallery () {
  const [selectedImage, setSelectedImage] = useState(null);

  const engagementPhotos = [
    { id: 1, image: gallery1 },
    { id: 2, image: gallery2 },
    { id: 3, image: gallery3 },
    { id: 4, image: gallery4 },
    { id: 5, image: gallery5 },
    { id: 6, image: gallery6 }
  ];

  const openLightbox = (photo) => {
    setSelectedImage(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div id='gallery' className='engagement-gallery section-padding-compact'>
      {/* Floating decorative elements */}
      <div className='gallery-bg-decoration'>
        <div className='floating-element element-1'>💕</div>
        <div className='floating-element element-2'>♥</div>
        <div className='floating-element element-3'>💕</div>
        <div className='floating-element element-4'>💕</div>
      </div>

      <div className='container'>
        {/* Header Section */}
        <div className='row'>
          <div className='col-md-12 mb-50 text-center'>
            <span className='gallery-subtitle animate-box' data-animate-effect='fadeInDown'>
              Engagement Gallery
            </span>
            <div className='gallery-title-divider'>
              <span className='divider-line'></span>
              <span className='divider-icon'>♥</span>
              <span className='divider-line'></span>
            </div>
            <p className='gallery-description animate-box' data-animate-effect='fadeInUp'>
              Capturing the beautiful moments of our engagement celebration
            </p>
          </div>
        </div>

        {/* Main Slider */}
        <div className='row'>
          <div className='col-md-12'>
            <div className='gallery-slider-wrapper'>
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                effect='coverflow'
                grabCursor={true}
                centeredSlides={true}
                slidesPerView='auto'
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                speed={800}
                className='engagement-swiper'
              >
                {engagementPhotos.map((photo) => (
                  <SwiperSlide key={photo.id}>
                    <div 
                      className='slider-item'
                      onClick={() => openLightbox(photo)}
                    >
                      <div className='slider-image-wrapper'>
                        <img 
                          src={photo.image} 
                          alt='Engagement moment'
                          className='slider-image'
                        />
                        <div className='image-overlay'>
                          <div className='overlay-icon'>
                            <i className='ti-zoom-in'></i>
                          </div>
                          <p className='overlay-text'>Click to view</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button className='swiper-button-prev-custom nav-button'>
                <i className='ti-angle-left'></i>
              </button>
              <button className='swiper-button-next-custom nav-button'>
                <i className='ti-angle-right'></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className='lightbox-modal' onClick={closeLightbox}>
          <button className='lightbox-close' onClick={closeLightbox}>
            <i className='ti-close'></i>
          </button>
          <div className='lightbox-content' onClick={(e) => e.stopPropagation()}>
            <div className='lightbox-image-container'>
              <img 
                src={selectedImage.image} 
                alt='Engagement moment' 
                className='lightbox-image'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery