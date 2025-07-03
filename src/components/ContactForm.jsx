import React, { useState } from 'react';
import last from '../assets/img/last.png'
import contact from '../assets/img/contact.png'
import call from '../assets/img/call.png'
import top from '../assets/img/top.png'

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
      // Handle form submission here
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <>      
      <div className=" position-relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="position-absolute w-100 h-100"
        style={{
        backgroundImage: `url(${last})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -2
      }}
    />

        <div className="container-fluid h-100">
          <div className="row  align-items-center">
            
            {/* Left Side - Image */}
            <div className="col-lg-6 d-flex justify-content-center align-items-center p-4">
              <div className="text-center">
                <img
                  src={contact}
                  alt="Person working on laptop"
                  className="img-fluid"
                  style={{
                    maxWidth: '400px',
                    maxHeight: '400px',
                  }}
                />
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div className="col-lg-6 d-flex justify-content-center align-items-center p-4">
              <div className="w-100" style={{ maxWidth: '450px' }}>
                
                {/* Decorative Wave */}
                <div className="text-center mb-4">
                  <div 
                    className="d-inline-block"
                    style={{
                      marginLeft:'-380px'
                    }}
                  >
                    <img src={top} alt="top" width={60}/>
                  </div>
                </div>
                
                {/* Title */}
                
                   <h2
                  className="text-white text-left mb-5"
                  style={{
                    fontSize: '2.2rem',
                    fontWeight: 'bold',
                    position: 'relative',
                  }}
                >
                  {/* Background Image */}
                  <img
                    src={call}
                    alt="call"
                    width={330}
                    style={{
                      position: 'absolute',
                      left: -30,
                      top: -60,
                      zIndex: 1,
                    }}
                  />

                  {/* Text Content */}
                  <span style={{ position: 'relative', zIndex: 1 }}>
                    Ready to Work Together<br />
                    In News Projects ?
                  </span>
                </h2>

                {/* Form */}
                <div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Your Name*"
                      style={{
                        backgroundColor: '#f8f9fa',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '15px 20px',
                        fontSize: '16px'
                      }}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Your Email*"
                      style={{
                        backgroundColor: '#f8f9fa',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '15px 20px',
                        fontSize: '16px'
                      }}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      rows="5"
                      placeholder="Your Message*"
                      style={{
                        backgroundColor: '#f8f9fa',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '15px 20px',
                        fontSize: '16px',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                  
                  <button
                    onClick={handleSubmit}
                    className="btn btn-lg w-100 text-white fw-bold"
                    style={{
                      backgroundColor: '#8A2BE2',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '15px 20px',
                      fontSize: '18px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#7B68EE';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#8A2BE2';
                      e.target.style.transform = 'translateY(0)';
                    }}
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