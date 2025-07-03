// import React, { useState, useEffect } from 'react';
// import { Download, Sparkles } from 'lucide-react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './PortfolioHero.css'; 

// export default function PortfolioHero() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);


//   return (
//     <div className="min-vh-100 bg-black text-white overflow-hidden position-relative">
//       {/* Animated Background Elements */}
//       <div className="position-absolute top-0 start-0 w-100 h-100">
//         {/* Main geometric shapes */}
//         <div 
//           className="position-absolute rounded-circle opacity-20 transition-all"
//           style={{
//             width: '24rem',
//             height: '24rem',
//             background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #3B82F6 100%)',
//             top: '20%',
//             right: '10%',
//             transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(${mousePosition.x * 0.1}deg)`,
//             transitionDuration: '1000ms',
//           }}
//         />
        
//         <div 
//           className="position-absolute opacity-30 transition-all"
//           style={{
//             width: '16rem',
//             height: '16rem',
//             background: 'linear-gradient(45deg, #EC4899 0%, #8B5CF6 100%)',
//             clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
//             top: '60%',
//             left: '70%',
//             transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * 0.01}px)`,
//             transitionDuration: '700ms',
//           }}
//         />

//         <div 
//           className="position-absolute rounded-circle opacity-40 transition-all"
//           style={{
//             width: '8rem',
//             height: '8rem',
//             background: 'radial-gradient(circle, #3B82F6 0%, #1E40AF 100%)',
//             top: '40%',
//             left: '80%',
//             transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * -0.02}px)`,
//             transitionDuration: '500ms',
//           }}
//         />

//         {/* Floating particles */}
//         <div className="position-absolute top-20 end-20 pulse-animation">
//           <Sparkles className="text-purple-400" style={{ width: '1.5rem', height: '1.5rem' }} />
//         </div>
//         <div className="position-absolute top-32 end-32 pulse-animation" style={{ animationDelay: '300ms' }}>
//           <div className="bg-pink-400 rounded-circle" style={{ width: '0.5rem', height: '0.5rem' }} />
//         </div>
//         <div className="position-absolute top-40 end-24 pulse-animation" style={{ animationDelay: '500ms' }}>
//           <div className="bg-blue-400 rounded-circle" style={{ width: '0.25rem', height: '0.25rem' }} />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="position-relative z-10 container px-4 py-5">
//         <div className="row align-items-center min-vh-100">
//           {/* Left Content */}
//           <div className="col-lg-6 mb-5 mb-lg-0">
//             <div className="mb-5">
//               <h1 className="display-3 fw-bold mb-4">
//                 <span className="gradient-text-white-purple-pink">
//                   Ahsan Asif
//                 </span>
//               </h1>
              
//               <p className="lead text-gray-300 mb-0" style={{ maxWidth: '32rem' }}>
//                 a front-end developer passionate about building beautiful, 
//                 responsive, and user-centric websites. I focus on creating 
//                 seamless digital experiences with clean HTML, modern CSS, 
//                 and dynamic JavaScript. I believe good design and smart 
//                 code go hand in hand to bring ideas to life.
//               </p>
//             </div>

//             <button 
//               className="btn position-relative px-4 py-3 rounded-pill fw-semibold text-white btn-gradient-purple-pink"
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//               style={{
//                 transition: 'all 300ms',
//                 border: 'none',
//                 overflow: 'hidden'
//               }}
//             >
//               <div className="d-flex align-items-center gap-2">
//                 <Download className={`transition-all ${isHovered ? 'bounce-animation' : ''}`} style={{ width: '1.25rem', height: '1.25rem', transitionDuration: '300ms' }} />
//                 <span>Download CV</span>
//               </div>
//               <div className="position-absolute top-0 start-0 w-100 h-100 rounded-pill blur-effect" />
//             </button>
//           </div>

//           {/* Right Content - Interactive Card */}
//           <div className="col-lg-6">
//             <div className="position-relative card-hover-group">
//               {/* Main Card */}
//               <div 
//                 className="position-relative rounded-4 p-4 border border-purple-500-20 transition-all card-hover-effect"
//                 style={{
//                   background: 'linear-gradient(to bottom right, rgba(109, 40, 217, 0.4), rgba(236, 72, 153, 0.4))',
//                   backdropFilter: 'blur(24px)',
//                   transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`,
//                   transitionDuration: '500ms',
//                   borderColor: 'rgba(168, 85, 247, 0.2)'
//                 }}
//               >
//                 {/* Profile Image Placeholder */}
//                 <div className="w-25 h-25 mx-auto mb-4 rounded-circle bg-gradient-pink-purple-blue p-1" style={{ width: '8rem', height: '8rem' }}>
//                   <div className="w-100 h-100 rounded-circle bg-gradient-pink-blue d-flex align-items-center justify-content-center">
//                     <div className="w-50 h-50 rounded-circle bg-gradient-pink-light-blue" style={{ width: '5rem', height: '5rem' }} />
//                   </div>
//                 </div>

//                 <div className="text-center mb-4">
//                   <h2 className="h1 fw-bold gradient-text-white-purple">
//                     Front-end Developer
//                   </h2>
                  
//                   <div className="w-25 h-1 bg-gradient-purple mx-auto my-3" style={{ width: '4rem', height: '1px' }} />
                  
//                   <p className="text-gray-300">
//                     "I craft responsive, user-friendly websites that bring ideas to life through clean, efficient code."
//                   </p>
//                 </div>

//                 {/* Floating Elements */}
//                 <div className="position-absolute top-0 end-0 bg-gradient-pink-purple rounded-circle pulse-animation" style={{ width: '2rem', height: '2rem', marginTop: '-1rem', marginRight: '-1rem' }} />
//                 <div className="position-absolute bottom-0 start-0 bg-gradient-blue-purple rounded-circle pulse-animation" style={{ width: '1.5rem', height: '1.5rem', marginBottom: '-0.5rem', marginLeft: '-0.5rem', animationDelay: '300ms' }} />
//               </div>

//               {/* Glow Effect */}
//               <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4 blur-xl opacity-0 card-hover-glow" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Animated Grid Background */}
//       {/* <div className="position-absolute top-0 start-0 w-100 h-100 opacity-5">
//         <div className="row g-1 h-100 m-0">
//           {Array.from({ length: 144 }, (_, i) => (
//             <div 
//               key={i}
//               className="col border border-purple-500 pulse-animation"
//               style={{ animationDelay: `${i * 0.1}s`, padding: '0' }}
//             />
//           ))}
//         </div>
//       </div> */}
//     </div>
//   );
// }




import React, { useState } from 'react';
import { Download } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PortfolioHero.css'; // CSS neche diya gaya hai

export default function PortfolioHero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="portfolio-hero-section text-white d-flex align-items-center"
    >
      <div className="container px-4 py-5">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="display-3 fw-bold mb-4">Ahsan Asif</h1>
            <p className="lead text-light" style={{ maxWidth: '32rem' }}>
              A front-end developer passionate about building beautiful, responsive, and user-centric websites. I focus on creating seamless digital experiences with clean HTML, modern CSS, and dynamic JavaScript. I believe good design and smart code go hand in hand to bring ideas to life.
            </p>

            <button
              className="btn position-relative px-4 py-3 rounded-pill fw-semibold text-white"
              style={{
                background: 'linear-gradient(to right, #8B5CF6, #EC4899)',
                border: 'none',
              }}
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
            </button>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 text-center position-relative">
            {/* Background under image */}
            <div className="right-bg-layer"></div>

            {/* Main image */}
            <img
              src="https://images.unsplash.com/photo-1581091012184-7f3dd4c59b96?auto=format&fit=crop&w=500&q=80"
              alt="Hero"
              className="img-fluid position-relative z-2 rounded"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />

            {/* Text under image */}
            <div className="mt-4 position-relative z-2">
              <h2 className="h1 fw-bold text-white">Front-end Developer</h2>
              <hr className="w-25 mx-auto my-3" style={{ borderColor: '#8B5CF6' }} />
              <p className="text-light px-3">
                "I craft responsive, user-friendly websites that bring ideas to life through clean, efficient code."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
