import React from 'react'
import storyImage from '../assets/images/1.jpg'

function Story () {
  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30 text-center'>
            <span className='oliven-title-meta'>The Beginning of Forever</span>
          </div>
        </div>
        <div className='row align-items-center'>
          <div className='col-md-5 mb-30'>
            <div className='story-img-wrapper animate-box'>
              <div className='story-img'>
                <img src={storyImage} className='img-fluid' alt='Varsha and Vikas' />
                <div className='img-overlay'></div>
              </div>
              <div className='story-decoration'>
                <div className='decoration-circle'></div>
                <div className='decoration-heart'>
                  <i className='ti-heart'></i>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-7 animate-box'>
            <div className='story-content'>
              <div className='story-quote'>
                <i className='quote-icon'>"</i>
                <h3 className='story-subtitle'>Together in love, bound by tradition</h3>
              </div>
              
              <div className='story-text'>
                <p className='highlight-text'>
                  Two people who feel like home to each other.
                </p>
                <p>
                  Who finish each other's fries and still argue about the last bite 🍟
                  <br/>Who turn ordinary days into unforgettable memories.
                  <br/>Who dream the same dreams and laugh at the same silly jokes.
                </p>
                <p>
                  Who understand each other's silence better than anyone's words.
                  <br/>Who see the world in the same shade of happy, even on the tough days.
                  <br/>Who hold hands through chaos and dance through calm.
                </p>
                <p className='highlight-text'>
                  Who are ready to build a lifetime together, heart to heart, soul to soul 🤍
                </p>
              </div>

              <div className='story-divider'>
                <span className='divider-line'></span>
                <span className='divider-heart'>♥</span>
                <span className='divider-line'></span>
              </div>

              <div className='invitation-text'>
                <h4 className='invitation-heading'>Together is a beautiful place to be.</h4>
                <p>
                  We feel incredibly blessed to invite you to our wedding celebration.
                  A beautiful journey of love has brought us to this joyful moment.
                  Your presence will make our big day even more meaningful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story