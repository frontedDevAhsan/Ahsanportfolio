import React from 'react';
import section5 from '../assets/img/section5.png'
import arrowdown from '../assets/img/arrowdown.png'
import arrowup from '../assets/img/arrowup.png'

const WorkingProcess = () => {
  return (

    <div
  style={{
    // minHeight: '100vh',
    backgroundImage: `url(${section5})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>

      
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '100px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px',
          marginBottom: '20px'
        }}>
          <div style={{
            width: '80px',
            height: '1px',
            backgroundColor: '#fff'
          }}></div>
          <span style={{
            color: '#fff',
            fontSize: '12px',
            fontWeight: 'bold',
            letterSpacing: '4px'
          }}>SPECIALITY</span>
          <div style={{
            width: '80px',
            height: '1px',
            backgroundColor: '#fff'
          }}></div>
        </div>
        <h1 style={{
          color: '#fff',
          fontSize: '48px',
          fontWeight: 'bold',
          margin: '0'
        }}>My Working Process</h1>
      </div>

      {/* Process Flow - Exact Pattern */}
      <div style={{
        position: 'relative',
        width: '1000px',
        height: '400px'
      }}>
        
        
        {/* Empathize - Top Left */}
        
        <div style={{
          position: 'absolute',
          left: '0px',
          top: '0px'
        }}>
          {/* Outer dotted border */}
          <div style={{
            width: '160px',
            height: '160px',
            border: '2px dashed #666',
            borderRadius: '12px',
            transform: 'rotate(45deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
    
            <div style={{ 
            width: '120px',
            height: '120px',
            backgroundColor: '#0E0E10',
            border: '1px solid transparent',
            borderImage: 'linear-gradient(135deg, #C0C0C0, #161616)',
            borderImageSlice: 1,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              color: '#fff',
              fontSize: '16px',
              fontWeight: '500',
              transform: 'rotate(-45deg)',
              textAlign:'center'
            }}>Empathize </span>
          </div>
          </div>
        </div>


        {/* Arrow 1 */}
        <div style={{
          position: 'absolute',
          left: '170px',
          top: '120px',
          color: '#6366f1',
          fontSize: '28px',
          fontWeight: 'bold'
        }}>   <img src={arrowdown} alt=""  width={25} /></div>

        {/* Ideate - Top Center */}
        <div style={{
          position: 'absolute',
          left: '320px',
          top: '0px'
        }}>
          {/* Outer dotted border */}
          <div style={{
            width: '160px',
            height: '160px',
            border: '2px dashed #666',
            borderRadius: '12px',
            transform: 'rotate(45deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Inner solid diamond with glow */}
              <div style={{ 
            width: '120px',
            height: '120px',
            backgroundColor: '#0E0E10',
            border: '1px solid transparent',
            borderImage: 'linear-gradient(135deg, #C0C0C0, #161616)',
            borderImageSlice: 1,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              color: '#fff',
              fontSize: '16px',
              fontWeight: '500',
              transform: 'rotate(-45deg)'
            }}>Ideate</span>
           </div>
          </div>
        </div>

        {/* Arrow 2 */}
        <div style={{
          position: 'absolute',
          left: '490px',
          top: '120px',
          color: '#6366f1',
          fontSize: '28px',
          fontWeight: 'bold'
        }}><img src={arrowdown} alt=""  width={25} /></div>

        {/* Qualitative test - Top Right */}
        <div style={{
          position: 'absolute',
          left: '640px',
          top: '0px'
        }}>
          {/* Outer dotted border */}
          <div style={{
            width: '160px',
            height: '160px',
            border: '2px dashed #666',
            borderRadius: '12px',
            transform: 'rotate(45deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
    
            <div style={{ 
            width: '120px',
            height: '120px',
            backgroundColor: '#0E0E10',
            border: '1px solid transparent',
            borderImage: 'linear-gradient(135deg, #C0C0C0, #161616)',
            borderImageSlice: 1,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              color: '#fff',
              fontSize: '16px',
              fontWeight: '500',
              transform: 'rotate(-45deg)',
              textAlign:'center'
            }}>Qualitative<br/>test</span>
          </div>
          </div>
        </div>

        {/* Arrow 3 */}
        <div style={{
          position: 'absolute',
          left: '810px',
          top: '120px',
          color: '#6366f1',
          fontSize: '28px',
          fontWeight: 'bold'
        }}><img src={arrowdown} alt=""  width={25} /></div>

        {/* BOTTOM ROW */}
        
        {/* Define - Bottom Left */}
        <div style={{
          position: 'absolute',
          left: '160px',
          top: '200px'
        }}>
          {/* Outer dotted border */}
          <div style={{
            width: '160px',
            height: '160px',
            border: '2px dashed #666',
            borderRadius: '12px',
            transform: 'rotate(45deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Inner solid diamond with glow */}
             <div style={{ 
            width: '120px',
            height: '120px',
            backgroundColor: '#0E0E10',
            border: '1px solid transparent',
            borderImage: 'linear-gradient(135deg, #C0C0C0, #161616)',
            borderImageSlice: 1,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              color: '#fff',
              fontSize: '16px',
              fontWeight: '500',
              transform: 'rotate(-45deg)',
              textAlign:'center'
            }}>Define</span>
          </div>
          </div>
        </div>

        {/* Arrow 4 */}
        <div style={{
          position: 'absolute',
          left: '330px',
          top: '160px',
          color: '#6366f1',
          fontSize: '28px',
          fontWeight: 'bold'
        }}> <img src={arrowup} alt="arrowup" width={25}/></div>

        {/* Develop - Bottom Center */}
        <div style={{
          position: 'absolute',
          left: '480px',
          top: '200px'
        }}>

      <div style={{
            width: '160px',
            height: '160px',
            border: '2px dashed #666',
            borderRadius: '12px',
            transform: 'rotate(45deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Inner solid diamond with glow */}
            <div style={{ 
            width: '120px',
            height: '120px',
            backgroundColor: '#0E0E10',
            border: '1px solid transparent',
            borderImage: 'linear-gradient(135deg, #C0C0C0, #161616)',
            borderImageSlice: 1,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              color: '#fff',
              fontSize: '16px',
              fontWeight: '500',
              transform: 'rotate(-45deg)',
              textAlign:'center'
            }}>Develope</span>
          </div>
          </div>
        </div>

        {/* Arrow 5 */}
        <div style={{
          position: 'absolute',
          left: '650px',
          top: '160px',
          color: '#6366f1',
          fontSize: '28px',
          fontWeight: 'bold'
        }}><img src={arrowup} alt="arrowup" width={25}/></div>

        {/* Quantitative test - Bottom Right */}
        <div style={{
          position: 'absolute',
          left: '800px',
          top: '200px'
        }}>
          <div style={{
            width: '160px',
            height: '160px',
            border: '2px dashed #666',
            borderRadius: '12px',
            transform: 'rotate(45deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Inner solid diamond with glow */}
         <div style={{ 
            width: '120px',
            height: '120px',
            backgroundColor: '#0E0E10',
            border: '1px solid transparent',
            borderImage: 'linear-gradient(135deg, #C0C0C0, #161616)',
            borderImageSlice: 1,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              color: '#fff',
              fontSize: '16px',
              fontWeight: '500',
              transform: 'rotate(-45deg)',
              textAlign:'center'
            }}>Quantitative<br/>test</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;