import React, { useState } from 'react';
import contact from '../assets/img/contact.png';
import call from '../assets/img/call.png';
import top from '../assets/img/top.png';
import './ContactForm.css'; // CSS file import kiya

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <>
      <div className="cf-wrapper position-relative overflow-hidden">
        <div className="cf-bg position-absolute w-100 h-100" />

        <div className="container-fluid h-100">
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-lg-6 d-flex justify-content-center align-items-center p-4">
              <div className="text-center">
                <img src={contact} alt="Person" className="img-fluid cf-img" />
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-6 d-flex justify-content-center align-items-center p-4">
              <div className="w-100 cf-form-wrapper">
                <div className="text-center mb-4">
                  <div className="d-inline-block cf-wave-img">
                    <img src={top} alt="top" width={60} />
                  </div>
                </div>

                <h2 className="cf-title">
                  <img src={call} alt="call" className="cf-call-img" />
                  <span>Ready to Work Together<br />In News Projects ?</span>
                </h2>

                <div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control form-control-lg cf-input"
                      placeholder="Your Name*"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control form-control-lg cf-input"
                      placeholder="Your Email*"
                    />
                  </div>

                  <div className="mb-4">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control form-control-lg cf-input"
                      rows="5"
                      placeholder="Your Message*"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="btn cf-submit-btn "
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
