import React from 'react';
import section5 from '../assets/img/section5.png';
import arrowdown from '../assets/img/arrowdown.png';
import arrowup from '../assets/img/arrowup.png';
import './WorkingProcess.css'; // ✅ Import external CSS

const WorkingProcess = () => {
  return (
    <div className="wp-section" style={{ backgroundImage: `url(${section5})` }}>
      {/* Header */}
      <div className="wp-header">
        <div className="wp-subheader">
          <div className="wp-line" />
          <span className="wp-subtitle">SPECIALITY</span>
          <div className="wp-line" />
        </div>
        <h1 className="wp-title">My Working Process</h1>
      </div>

      {/* Process Flow */}
      <div className="wp-process-wrapper">
        {/* Step 1 - Empathize */}
        <div className="wp-step wp-step-1">
          <div className="wp-outer">
            <div className="wp-inner"><span>Empathize</span></div>
          </div>
        </div>
        <div className="wp-arrow wp-arrow-1"><img src={arrowdown} alt="" width={25} /></div>

        {/* Step 2 - Ideate */}
        <div className="wp-step wp-step-2">
          <div className="wp-outer">
            <div className="wp-inner"><span>Ideate</span></div>
          </div>
        </div>
        <div className="wp-arrow wp-arrow-2"><img src={arrowdown} alt="" width={25} /></div>

        {/* Step 3 - Qualitative Test */}
        <div className="wp-step wp-step-3">
          <div className="wp-outer">
            <div className="wp-inner"><span>Qualitative<br />test</span></div>
          </div>
        </div>
        <div className="wp-arrow wp-arrow-3"><img src={arrowdown} alt="" width={25} /></div>

        {/* Step 4 - Define */}
        <div className="wp-step wp-step-4">
          <div className="wp-outer">
            <div className="wp-inner"><span>Define</span></div>
          </div>
        </div>
        <div className="wp-arrow wp-arrow-4"><img src={arrowup} alt="" width={25} /></div>

        {/* Step 5 - Develope */}
        <div className="wp-step wp-step-5">
          <div className="wp-outer">
            <div className="wp-inner"><span>Develope</span></div>
          </div>
        </div>
        <div className="wp-arrow wp-arrow-5"><img src={arrowup} alt="" width={25} /></div>

        {/* Step 6 - Quantitative Test */}
        <div className="wp-step wp-step-6">
          <div className="wp-outer">
            <div className="wp-inner"><span>Quantitative<br />test</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
