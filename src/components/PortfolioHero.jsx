import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PortfolioHero.css';
import AhsanAsif from '../assets/img/resume/AhsanAsif.pdf'
import ahsan from '../assets/img/ahsan.png'

export default function PortfolioHero() {
  const [isHovered, setIsHovered] = useState(false);

  

  return (
    <div className="portfolio-hero-section text-white d-flex align-items-center">
      <div className="container px-4 py-5">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="display-3 heading-h mb-4">Ahsan Asif</h1>
            <p className="lead text-light textpara-1" style={{ maxWidth: '32rem' }}>
              A front-end developer passionate about building beautiful, responsive, and user-centric websites. I focus on creating seamless digital experiences with clean HTML, modern CSS, and dynamic JavaScript. I believe good design and smart code go hand in hand to bring ideas to life.
            </p>

            {/* 🔽 Download Button */}
            <a
              href={AhsanAsif}
              download="AhsanAsif-CV.pdf"
              className="btn position-relative btn-download"
            
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="d-flex align-items-center gap-2">
                <Download
                  className={`${isHovered ? 'bounce-animation' : ''}`}
                  style={{ width: '1.25rem', height: '1.25rem' }}
                />
                <span>Download CV</span>
              </div>
            </a>
          </div>

          {/* Right Content */}
            <div className="col-lg-6 text-center position-relative">
            {/* Background under image */}
            <div className="right-bg-layer"></div>

            {/* Main image */}
            <img
              src={ahsan}
              alt="Hero"
              className="img-fluid position-relative z-1 rounded"
              style={{
                Height: '400px ',
                objectFit: 'cover',
                width: '90%', // ⬅️ Increased width
              }}
            />

            {/* Text over image */}
            <div
              className="position-absolute z-2"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, 50%)',
                width: '100%',
                padding: '0 1rem',
              }}
            >
              {/* <h2 className="h1 text-white heading2">Front-end Developer</h2> */}
              <hr className="w-25 mx-auto my-3" style={{ borderColor: '#8B5CF6' }} />
              {/* <p className="text-light px-3 text-para">
                "I craft responsive, user-friendly websites that bring ideas to life through clean, efficient code."
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

