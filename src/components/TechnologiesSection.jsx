import React from 'react';
import './TechnologiesSection.css'
import secondsection from '../assets/img/secondsection.png';
import left from '../assets/img/left.png'
import coding from '../assets/img/coding.png'
import top from '../assets/img/top.png'
import react from '../assets/img/react.png'
import bootstrap from '../assets/img/bootstrap.png'
import Javascript from '../assets/img/Javascript.png'


const InteractiveInterfacesLanding = () => {
  return (
<div
  style={{
backgroundImage: `url(${secondsection})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'white',
  }}
>

      <div className="container-fluid py-5">
        {/* Header */}
        <div className="text-center mb-5 position-relative">
          {/* Background Text */}
          <div 
            className="position-absolute w-100 d-flex justify-content-center align-items-center"
            style={{
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
              fontSize: '8rem',
              fontWeight: 'bold',
              color: 'transparent',
              WebkitTextStroke: '1px #FFFFFF26',
              zIndex: 1,
              userSelect: 'none'
              
            }}
          >
            <div className='bg-text'>
            LANGUAGES
            </div>
          </div>
          
          {/* Main Content */}
          <div className="position-relative" style={{zIndex: 2}}>
            <small className="text-info"><img src={top} alt="top" width={100}/></small>
            <h1 className="display-3 second-head mb-4 ">
              🚀 Turning Ideas Into Interactive Interfaces
            </h1>
          </div>
        </div>

        <div className="row align-items-center">
          {/* Left Side - Simple Image */}
          <div className="col-lg-6 text-center mb-5 mb-lg-0">
            <img 
              src={left}
              alt="Interactive Interface" 
              className="img-fluid rounded-3"
              style={{ maxWidth: '400px', transform: 'translateX(50px)' }}
            />
          </div>

          {/* Right Side - Cards in Curve */}
                    
          <div className="col-lg-6" style={{ marginTop: '100px' }}>
            {/* HTML Card */}
            <div className="card interactive-card html-card mb-4">
              <div className="card-body d-flex align-items-center">
                <div className="card-img-wrap">
                  <img src={coding} alt="coding" className="img-fluid icon-img" />
                </div>
                <div className="card-text-wrap">
                  <h5 className="card-title text-white">HTML</h5>
                  <p className="card-text ">Building the foundation of web pages with clean, semantic and accessible structure.</p>
                </div>
              </div>
            </div>

            {/* CSS Card */}
            <div className="card interactive-card css-card mb-4">
              <div className="card-body d-flex align-items-center">
                <div className="card-img-wrap">
                  <img src={coding} alt="coding" className="img-fluid icon-img" />
                </div>
                <div className="card-text-wrap">
                  <h5 className="card-title text-white">CSS</h5>
                  <p className="card-text">Styling modern interfaces using responsive design, flex CSS Grid techniques.</p>
                </div>
              </div>
            </div>

            {/* JavaScript Card */}
            <div className="card interactive-card js-card mb-4">
              <div className="card-body d-flex align-items-center">
                <div className="card-img-wrap">
                  <img src={Javascript} alt="coding" className="img-fluid icon-img" />
                </div>
                <div className="card-text-wrap">
                  <h5 className="card-title text-white">Javascript</h5>
                  <p className="card-text ">Adding interactivity and logic to web applications with modern Javascript.</p>
                </div>
              </div>
            </div>

            {/* Bootstrap Card */}
            <div className="card interactive-card bootstrap-card mb-4">
              <div className="card-body d-flex align-items-center">
                <div className="card-img-wrap">
                  <img src={bootstrap} alt="coding" className="img-fluid icon-img" />
                </div>
                <div className="card-text-wrap">
                  <h5 className="card-title text-white">Bootstrap</h5>
                  <p className="card-text ">Rapid prototyping and fast UI layouts using Bootstrap's flexible components.</p>
                </div>
              </div>
            </div>

            {/* React Card */}
            <div className="card interactive-card react-card mb-4">
              <div className="card-body d-flex align-items-center">
                <div className="card-img-wrap">
                  <img src={react} alt="coding" className="img-fluid icon-img" />
                </div>
                <div className="card-text-wrap">
                  <h5 className="card-title text-white">React</h5>
                  <p className="card-text ">Building fast, reusable, and dynamic user interfaces with component architecture.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
    </div>
  );
};

export default InteractiveInterfacesLanding;