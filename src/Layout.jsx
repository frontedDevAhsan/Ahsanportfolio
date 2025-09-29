// // src/Layout.jsx
// import React, { useEffect, useState } from "react";
// // import Nav from "./components/Nav";
// // import Footer from "./components/Footer";
// // import CallToAction from "./components/CallToAction";
// // import Section from "./components/Section";
// // import Loader from "./components/Loader";
// import { ReactLenis } from "lenis/react";
// // import CustomCursor from "./components/CustomCursor";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// const Layout = ({ children }) => {
//   const [loading, setLoading] = useState(true);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startY, setStartY] = useState(0);
//   const [startScrollTop, setStartScrollTop] = useState(0);
// //   const isContactPage = window.location.pathname === "/contact";
//   useEffect(() => {
//     const handlePageLoad = () => setLoading(false);
//     window.addEventListener("load", handlePageLoad);
//     const minLoadTime = setTimeout(() => setLoading(false), 5000);
//     return () => {
//       clearTimeout(minLoadTime);
//       window.removeEventListener("load", handlePageLoad);
//     };
//   }, []);

//   useEffect(() => {
//     const scroller = document.querySelector(".scroller");
//     const scrollerContainer = document.querySelector(".scroller-container");
//     function updateScroller() {
//       const scrollTop =
//         document.documentElement.scrollTop || document.body.scrollTop;
//       const scrollHeight =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;
//       const scrollPercent = (scrollTop / scrollHeight) * 100;
//       const containerHeight = 200;
//       const scrollerHeight = 40;
//       const maxScrollerPosition = containerHeight - scrollerHeight;
//       const scrollerPosition = (scrollPercent / 100) * maxScrollerPosition;
//       if (scroller) {
//         scroller.style.transform = `translateY(${scrollerPosition}px)`;
//       }
//     }
//     const handleMouseDown = (e) => {
//       e.preventDefault();
//       setIsDragging(true);
//       setStartY(e.clientY);
//       setStartScrollTop(
//         document.documentElement.scrollTop || document.body.scrollTop
//       );
//     };
//     const handleMouseMove = (e) => {
//       if (!isDragging) return;
//       const deltaY = e.clientY - startY;
//       const scrollHeight =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;
//       const containerHeight =
//         scrollerContainer.offsetHeight - scroller.offsetHeight;
//       const scrollDelta = (deltaY / containerHeight) * scrollHeight;
//       window.scrollTo({
//         top: startScrollTop + scrollDelta,
//         behavior: "auto",
//       });
//     };
//     const handleMouseUp = () => {
//       setIsDragging(false);
//     };
//     if (scroller) {
//       scroller.addEventListener("mousedown", handleMouseDown);
//     }
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     window.addEventListener("scroll", updateScroller);
//     return () => {
//       if (scroller) {
//         scroller.removeEventListener("mousedown", handleMouseDown);
//       }
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//       window.removeEventListener("scroll", updateScroller);
//     };
//   }, [isDragging, startY, startScrollTop]);
//   useEffect(() => {
//     if (!loading) {
//       window.scrollTo(0, 0);
//       setTimeout(() => {
//         ScrollTrigger.refresh();
//       }, 100);
//     }
//   }, [loading]);
//   return (
//     <ReactLenis
//       root
//       options={{
//         autoRaf: true,
//         lerp: 0.1,
//         smoothWheel: true,
//         wheelMultiplier: 0.8,
//         autoResize: true,
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           marginLeft: "auto",
//           marginRight: "auto",
//           position: "relative",
//           maxWidth: "1440px",
//         }}
//       >
//         <div
//           className="scroller-container"
//           style={{ display: loading ? "none" : "block" }}
//         >
//           <div className="scroller"></div>
//         </div>
//         {/* <CustomCursor /> */}
//         <div
//           className={`sticky top-0 z-[7] mx-5 xs:mx-8 md:mx-10 lg:mx-14 xl:mx-20 ${
//             loading
//               ? "opacity-0 transition-all ease-in-out"
//               : "opacity-100 duration-1000 transition-all ease-in-out"
//           }`}
//         >
//           {/* <Nav /> */}
//           ddd
//         </div>
//         {loading ? (
//           <div className="z-[999]">
//             {/* <Loader /> */}
//             Loading ....
//           </div>
//         ) : (
//           React.cloneElement(children, { loading })
//         )}
//         {/* {!isContactPage && (
//           <div style={{ display: loading ? "none" : "block" }}>
//             <Section
//               classes={`mx-auto px-5 mb-0 xs:mb-0 md:mb-0 xs:px-8 md:px-0 !z-[2] ${
//                 loading
//                   ? "opacity-0 transition-all ease-in-out"
//                   : "opacity-100 duration-1000 transition-all ease-in-out"
//               } `}
//             >
//               <CallToAction />
//             </Section>
//           </div>
//         )} */}
//         {/* <Section
//           classes={`!my-0 mx-0 px-5 !overflow-hidden xs:px-8 md:mx-0 md:px-10 lg:px-14 xl:px-20 !z-[2] ${
//             loading
//               ? "opacity-0 hidden transition-all ease-in-out"
//               : "opacity-100 duration-1000 transition-all block ease-in-out"
//           } `}
//         >
//           <Footer loading={loading} />
//         </Section> */}
//       </div>
//     </ReactLenis>
//   );
// };
// export default Layout;

import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScrollTop, setStartScrollTop] = useState(0);

  // Lenis smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      autoResize: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // Simulate minimum loading time
  useEffect(() => {
    const handlePageLoad = () => setLoading(false);
    window.addEventListener("load", handlePageLoad);
    const minLoadTime = setTimeout(() => setLoading(false), 5000);
    return () => {
      clearTimeout(minLoadTime);
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  // Custom scroll bar drag behavior
  useEffect(() => {
    const scroller = document.querySelector(".scroller");
    const scrollerContainer = document.querySelector(".scroller-container");

    function updateScroller() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      const containerHeight = 200;
      const scrollerHeight = 40;
      const maxScrollerPosition = containerHeight - scrollerHeight;
      const scrollerPosition = (scrollPercent / 100) * maxScrollerPosition;

      if (scroller) {
        scroller.style.transform = `translateY(${scrollerPosition}px)`;
      }
    }

    const handleMouseDown = (e) => {
      e.preventDefault();
      setIsDragging(true);
      setStartY(e.clientY);
      setStartScrollTop(document.documentElement.scrollTop || document.body.scrollTop);
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaY = e.clientY - startY;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const containerHeight = scrollerContainer.offsetHeight - scroller.offsetHeight;
      const scrollDelta = (deltaY / containerHeight) * scrollHeight;

      window.scrollTo({ top: startScrollTop + scrollDelta, behavior: "auto" });
    };

    const handleMouseUp = () => setIsDragging(false);

    if (scroller) {
      scroller.addEventListener("mousedown", handleMouseDown);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("scroll", updateScroller);

    return () => {
      if (scroller) {
        scroller.removeEventListener("mousedown", handleMouseDown);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("scroll", updateScroller);
    };
  }, [isDragging, startY, startScrollTop]);

  // ScrollTrigger refresh after loading
  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }
  }, [loading]);

  return (
    <div
      style={{
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
      }}
    >
      <div className="scroller-container" style={{ display: loading ? "none" : "block" }}>
        <div className="scroller"></div>
      </div>

      <div
        className={`sticky top-0 z-[7] mx-5 xs:mx-8 md:mx-10 lg:mx-14 xl:mx-20 ${
          loading
            ? "opacity-0 transition-all ease-in-out"
            : "opacity-100 duration-1000 transition-all ease-in-out"
        }`}
      >
      </div>

      {loading ? (
        <div className="z-[999]">Loading ....</div>
      ) : (
        children && React.isValidElement(children)
          ? React.cloneElement(children, { loading })
          : children
      )}
    </div>
  );
};

export default Layout;
