import React, { useState } from 'react'

function RSVP () {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '1',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const MY_WHATSAPP_NUMBER = '917010033792'; // Your number with country code

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendWhatsAppToHost = (data) => {
    const userPhone = data.phone.replace(/\D/g, '');
    
    const hostMessage = 
      `🎊 *New Wedding RSVP* 🎊%0A%0A` +
      `*Guest Name:* ${data.name}%0A` +
      `*Phone:* +91${userPhone}%0A` +
      `*Email:* ${data.email}%0A` +
      `*Number of Guests:* ${data.guests}%0A` +
      `*Message:* ${data.message || 'No message'}%0A%0A` +
      `_Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}_`;

    const whatsappUrl = `https://wa.me/${MY_WHATSAPP_NUMBER}?text=${hostMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const sendWhatsAppToGuest = (data) => {
    const userPhone = data.phone.replace(/\D/g, '');
    
    const guestMessage = 
      `🎊 *Wedding Invitation - RSVP Confirmed* 🎊%0A%0A` +
      `Dear ${data.name},%0A%0A` +
      `Thank you for confirming your attendance at our wedding celebration! ♥%0A%0A` +
      `*Your Details:*%0A` +
      `Number of Guests: ${data.guests}%0A%0A` +
      `We are delighted to have you join us on our special day.%0A%0A` +
      `*Wedding Details:*%0A` +
      `📍 Venue: Vysya Mahal, Salem%0A` +
      `📅 Date: [Your Wedding Date]%0A` +
      `⏰ Time: [Your Wedding Time]%0A%0A` +
      `Looking forward to celebrating with you! 💕%0A%0A` +
      `With love,%0A` +
      `Varsha & Vikas`;

    const whatsappUrl = `https://wa.me/91${userPhone}?text=${guestMessage}`;
    
    // Open in a new window after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  const sendEmailToGuest = async (data) => {
    // Create email content
    const emailSubject = encodeURIComponent('Wedding RSVP Confirmation - Varsha & Vikas');
    const emailBody = encodeURIComponent(
      `Dear ${data.name},\n\n` +
      `Thank you for confirming your attendance at our wedding celebration!\n\n` +
      `Your RSVP Details:\n` +
      `- Number of Guests: ${data.guests}\n` +
      `- Your Message: ${data.message || 'N/A'}\n\n` +
      `Wedding Details:\n` +
      `Venue: Vysya Mahal, Salem\n` +
      `Address: M56Q+6H5, Military Rd, Ammapet, Salem, Tamil Nadu 636003\n` +
      `Date: [Your Wedding Date]\n` +
      `Time: [Your Wedding Time]\n\n` +
      `We are delighted to have you join us on our special day.\n\n` +
      `Looking forward to celebrating with you!\n\n` +
      `With love,\n` +
      `Varsha & Vikas`
    );

    // Method 1: Using mailto (opens user's email client)
    const mailtoLink = `mailto:${data.email}?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoLink;

    // Note: For automatic sending without user intervention, you'll need a backend service
    // I'll provide that solution below as well
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Send WhatsApp to you (host)
      sendWhatsAppToHost(formData);

      // 2. Send WhatsApp to guest
      sendWhatsAppToGuest(formData);

      // 3. Send email to guest
      sendEmailToGuest(formData);

      // Show success message
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          guests: '1',
          email: '',
          message: ''
        });
        setSubmitSuccess(false);
        setIsSubmitting(false);
      }, 3000);

    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('There was an error submitting your RSVP. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div id='rsvp' className='rsvp section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-60 text-center'>
            <span className='section-subtitle animate-box' data-animate-effect='fadeInDown'>
              Will You Join Us?
            </span>
            <h2 className='section-title animate-box' data-animate-effect='fadeInUp'>
              RSVP
            </h2>
            <div className='title-divider'>
              <span className='divider-line'></span>
              <span className='divider-icon'>♥</span>
              <span className='divider-line'></span>
            </div>
            <p className='section-description animate-box' data-animate-effect='fadeInUp'>
              Please confirm your attendance by filling out the form below
            </p>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-10 col-lg-8'>
            <div className='rsvp-card animate-box' data-animate-effect='fadeInUp'>
              {submitSuccess ? (
                <div className='success-message'>
                  <div className='success-icon'>
                    <i className='ti-check'></i>
                  </div>
                  <h3>RSVP Confirmed! 🎊</h3>
                  <p>Thank you for confirming your attendance!</p>
                  <p>WhatsApp and email confirmations have been sent.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='rsvp-form'>
                  {/* Name Field */}
                  <div className='form-group'>
                    <label htmlFor='name' className='form-label'>
                      Full Name <span className='required'>*</span>
                    </label>
                    <div className='input-wrapper'>
                      <i className='input-icon ti-user'></i>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        placeholder='Enter your full name'
                      />
                    </div>
                    {errors.name && <span className='error-message'>{errors.name}</span>}
                  </div>

                  {/* Phone Field */}
                  <div className='form-group'>
                    <label htmlFor='phone' className='form-label'>
                      Phone Number <span className='required'>*</span>
                    </label>
                    <div className='input-wrapper'>
                      <i className='input-icon ti-mobile'></i>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        placeholder='Enter 10-digit phone number'
                        maxLength='10'
                      />
                    </div>
                    {errors.phone && <span className='error-message'>{errors.phone}</span>}
                  </div>

                  {/* Email Field */}
                  <div className='form-group'>
                    <label htmlFor='email' className='form-label'>
                      Email Address <span className='required'>*</span>
                    </label>
                    <div className='input-wrapper'>
                      <i className='input-icon ti-email'></i>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder='Enter your email address'
                      />
                    </div>
                    {errors.email && <span className='error-message'>{errors.email}</span>}
                  </div>

                  {/* Number of Guests */}
                  <div className='form-group'>
                    <label htmlFor='guests' className='form-label'>
                      Number of Guests
                    </label>
                    <div className='input-wrapper'>
                      <i className='input-icon ti-user'></i>
                      <select
                        id='guests'
                        name='guests'
                        value={formData.guests}
                        onChange={handleChange}
                        className='form-input form-select'
                      >
                        <option value='1'>1 Guest</option>
                        <option value='2'>2 Guests</option>
                        <option value='3'>3 Guests</option>
                        <option value='4'>4 Guests</option>
                        <option value='5'>5 Guests</option>
                        <option value='6+'>6+ Guests</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className='form-group'>
                    <label htmlFor='message' className='form-label'>
                      Message (Optional)
                    </label>
                    <div className='input-wrapper'>
                      <i className='input-icon ti-comment'></i>
                      <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        className='form-input form-textarea'
                        placeholder='Any special requests or messages...'
                        rows='4'
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className='form-submit'>
                    <button 
                      type='submit' 
                      className='rsvp-submit-btn'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className='btn-spinner'></span>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span className='btn-icon'>
                            <i className='ti-check'></i>
                          </span>
                          <span>Confirm Attendance</span>
                          <span className='btn-whatsapp'>
                            <i className='ti-comment'></i>
                          </span>
                        </>
                      )}
                    </button>
                    <p className='submit-note'>
                      <i className='ti-info-alt'></i> You'll receive WhatsApp & email confirmations
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RSVP