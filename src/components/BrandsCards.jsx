import React, { useState, useRef, useEffect } from "react"; 
import { motion as Motion, useAnimationFrame, useMotionValue } from "framer-motion"; 
 
export default function BrandsCards() { 
  const leftBrands = [
    "/unilamp.jpg",
    "/pxf.jpg",
    "/tm.jpg",
    "/hosca.jpg",
    "/tryka.jpg",
  ];

  const rightBrands = [
    "/lug.jpg",
    "/long.jpg",
    "/bsi.jpg",
    "/lnd.jpg",
    "/kld.jpg",
  ];

  // Quad arrays for better coverage
  const loopLeft = [...leftBrands, ...leftBrands, ...leftBrands, ...leftBrands];
  const loopRight = [...rightBrands, ...rightBrands, ...rightBrands, ...rightBrands];

  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);

  const leftY = useMotionValue(0);
  const rightY = useMotionValue(0);

  const containerRef = useRef(null); 
  const computeLogoHeight = () => { 
    const heights = { 
      sm: 80 + 32, 
      md: 96 + 48, 
      lg: 128 + 64, 
      xl: 160 + 64 
    }; 
    if (window.innerWidth >= 1280) return heights.xl; 
    if (window.innerWidth >= 1024) return heights.lg; 
    if (window.innerWidth >= 768) return heights.md; 
    return heights.sm; 
  }; 
  const [logoHeight, setLogoHeight] = useState(() => computeLogoHeight()); 
 
  // Fixed height calculation 
  useEffect(() => { 
    const handleResize = () => setLogoHeight(computeLogoHeight()); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize); 
  }, []); 
 
  const totalHeight = loopLeft.length * logoHeight;

  useAnimationFrame((time, delta) => {
    const speed = 0.12; // consistent speed
    
    // Left - always scrolls up smoothly
    if (!hoveredLeft) {
      let newY = leftY.get() - delta * speed;
      // Reset when first set of brands goes out (1/4 of total)
      if (newY <= -totalHeight / 4) {
        newY += totalHeight / 4;
      }
      leftY.set(newY);
    }

    // Right - always scrolls down smoothly  
    if (!hoveredRight) {
      let newY = rightY.get() + delta * speed;
      if (newY >= totalHeight / 4) {
        newY -= totalHeight / 4;
      }
      rightY.set(newY);
    }
  });

  return ( 
    <section className="relative min-h-[140vh] lg:min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden px-3 sm:px-4 md:px-8 py-8 md:py-12 gap-4 lg:gap-0"> 
        
 
       {/* LEFT SLIDER - Full height */} 
       <div className="w-full lg:w-auto lg:absolute lg:left-52 z-10 flex flex-col items-center justify-center h-[50vh] sm:h-[60vh] lg:h-full min-h-[400px] sm:min-h-[500px]"> 
         <Motion.div 
           ref={containerRef} 
          className="flex flex-col items-center space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-10 xl:space-y-12 w-full"
          style={{ y: leftY }}
          onHoverStart={() => setHoveredLeft(true)}
          onHoverEnd={() => setHoveredLeft(false)}
        >
          {loopLeft.map((logo, i) => (
             <Motion.img 
               key={`${logo}-${i}`} 
               src={logo} 
               alt={`brand-${logo}`} 
               className="h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-44 xl:w-44 2xl:h-52 2xl:w-52 object-contain cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-2xl hover:shadow-white/40 hover:brightness-110 rounded-2xl bg-white/15 p-2 sm:p-4 md:p-5 xl:p-6 backdrop-blur-md border-2 border-white/30 hover:border-white/60 flex-shrink-0 opacity-95 hover:opacity-100" 
               whileHover={{ scale: 1.15, rotate: 3 }} 
               transition={{ type: "spring", stiffness: 500, damping: 20 }} 
               loading="eager" 
             /> 
           ))} 
         </Motion.div> 
       </div> 
 
       {/* CENTER TITLE */} 
       <Motion.h2 
         className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black z-20 drop-shadow-2xl tracking-tighter w-full lg:w-auto order-3 lg:order-none flex-shrink-0 px-4 sm:px-8 lg:px-0" 
         initial={{ opacity: 0, y: 30 }} 
         whileInView={{ opacity: 1, y: 0 }} 
         transition={{ duration: 1 }} 
         viewport={{ once: false, amount: 0.3 }} 
       > 
         Our Brands 
       </Motion.h2> 
 
       {/* RIGHT SLIDER - Full height */} 
      <div className="w-full lg:w-auto lg:absolute lg:right-52 z-10 flex flex-col items-center justify-center h-[50vh] sm:h-[60vh] lg:h-full min-h-[400px] sm:min-h-[500px]">
        <Motion.div
          className="flex flex-col items-center space-y-2 sm:space-y-4 md:space-y-6 lg:space-y-10 xl:space-y-12 w-full"
          style={{ y: rightY }}
          onHoverStart={() => setHoveredRight(true)}
          onHoverEnd={() => setHoveredRight(false)}
        >
          {loopRight.map((logo, i) => (
             <Motion.img 
               key={`${logo}-${i}`} 
               src={logo} 
               alt={`brand-${logo}`} 
               className="h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-36 lg:w-36 xl:h-44 xl:w-44 2xl:h-52 2xl:w-52 object-contain cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 hover:shadow-2xl hover:shadow-white/40 hover:brightness-110 rounded-2xl bg-white/15 p-2 sm:p-4 md:p-5 xl:p-6 backdrop-blur-md border-2 border-white/30 hover:border-white/60 flex-shrink-0 opacity-95 hover:opacity-100" 
               whileHover={{ scale: 1.15, rotate: -3 }} 
               transition={{ type: "spring", stiffness: 500, damping: 20 }} 
               loading="eager" 
             /> 
           ))} 
        </Motion.div>
      </div>
    </section>
  );
}
