import React from 'react';
import './WhatIDoSection.css';
import frontend from '../assets/img/frontend.png'
import responsive from '../assets/img/responsive.png'
import func from "../assets/img/func.png"

export default function WhatIDoSection() {
  return (
<section
  className="what-i-do-section text-white py-1"
 
>
      <div className="container text-center">
        {/* Heading */}
        <p className="text-uppercase small letter-spacing mb-5">Speciality</p>
        <h2 className="display-5 head-1 mb-5">What I DO</h2>

        {/* Cards */}
        <div className="row mb-5">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0 p-4">
              <div className="mb-3">
                <img src={frontend} alt="Frontend" width="70" />
              </div>
              <h5 className="fw-semibold">Complete Frontend</h5>
              <div className="section-inline-underline">
                  <div className="line-20"></div>
                  <div className="line-10"></div>
                </div>
              <p className="text-para  mt-2">
                "I build complete front-end solutions with clean code and intuitive design. Every project is crafted for performance, usability, and a smooth user experience."
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card  h-100 shadow-sm border-0 p-4">
              <div className="mb-3">
                <img src={responsive} alt="Responsive" width="70" />
              </div>
                 <h5 className="fw-semibold ">Responsive</h5>
                 <div className="section-inline-underline">
                  <div className="line-20"></div>
                  <div className="line-10"></div>
                </div>
              <p className="text-para  mt-2">
                "I create fully responsive websites that adapt beautifully to any screen size. Your site will look perfect and function flawlessly on desktop, tablet, and mobile."
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card  h-100 shadow-sm border-0 p-4">
              <div className="mb-3">
                <img src={func} alt="Functional" width="70" />
              </div>
                 <h5 className="fw-semibold">Functional</h5>
                 <div className="section-inline-underline">
                  <div className="line-20"></div>
                  <div className="line-10"></div>
                </div>
              <p className="text-para mt-2" >
                "I develop highly functional websites that don’t just look good — they work seamlessly. From smooth navigation to dynamic features, every detail is built for performance."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message (NOW OUTSIDE IMAGE) */}
        <div className="mt-5 mb-2">
          <p className="text-mid">
            I’m currently looking to join a <span className="text-gradient">cross-functional</span> team
          </p>
          <p className="text-end">
            that values improving people’s lives through accessible design
          </p>
        </div>

      
      </div>
    </section>
  );
}
