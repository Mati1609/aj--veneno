import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const requestRef = useRef<number | null>(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check if device is a touch screen (coarse pointer)
    const checkTouch = () => {
      return window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    };
    if (checkTouch()) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('button, a, input, select, textarea, [role="button"], .cursor-pointer, [data-interactive="true"]')
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Smooth animation loop using requestAnimationFrame with lerp
    const animateCursor = () => {
      // Lerp smooth follow
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.45;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.45;

      setPosition({
        x: currentPos.current.x,
        y: currentPos.current.y,
      });

      requestRef.current = requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    requestRef.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isVisible]);

  // Don't render on mobile / touch-only devices
  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] select-none transition-opacity duration-200"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Container offset to center the cursor icon at pointer position */}
      <div 
        className={`relative transition-transform duration-150 ease-out ${
          isMouseDown ? 'scale-75' : isHovered ? 'scale-110' : 'scale-100'
        }`}
        style={{
          transform: isHovered 
            ? 'translate(-12px, -36px) rotate(-12deg)' 
            : 'translate(-10px, -10px)',
        }}
      >
        {isHovered ? (
          /* ========================================================
             HOVER STATE: IRREVERENT CHILEAN CHILI PEPPER (AJÍ VENENO)
             ======================================================== */
          <div className="relative group">
            {/* Fiery glow underneath */}
            <div className="absolute -inset-2 bg-[#F4C430] rounded-full blur-xs opacity-60 animate-pulse pointer-events-none" />

            {/* Custom Chili Pepper Vector Illustration */}
            <svg
              width="44"
              height="44"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[3px_3px_0px_#111111]"
            >
              {/* Flame Spark behind */}
              <path
                d="M 65,15 Q 75,5 82,18 Q 88,28 78,35 Q 70,25 65,15 Z"
                fill="#F4C430"
                stroke="#111111"
                strokeWidth="2.5"
              />
              <path
                d="M 70,18 Q 75,12 80,20 Q 82,26 77,28 Z"
                fill="#FFF9EE"
              />

              {/* Chili Body */}
              <path
                d="M 22,78 C 15,62 18,38 38,28 C 58,18 78,32 72,48 C 65,68 45,86 28,88 C 24,88 22,84 22,78 Z"
                fill="#D92323"
                stroke="#111111"
                strokeWidth="5"
                strokeLinejoin="round"
              />

              {/* Chili Tip highlight */}
              <path
                d="M 23,76 C 21,70 24,55 35,42"
                stroke="#FFF9EE"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Shading contour */}
              <path
                d="M 68,44 C 62,60 48,76 32,84"
                stroke="#8A0C0C"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Stem Cap (Cáliz verde) */}
              <path
                d="M 52,24 C 58,16 68,18 74,25 C 68,34 58,32 52,24 Z"
                fill="#397A3C"
                stroke="#111111"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />

              {/* Curly Green Stem */}
              <path
                d="M 65,20 C 72,12 80,10 84,6"
                fill="none"
                stroke="#397A3C"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {/* Irreverent tiny flame face / shine dot */}
              <circle cx="48" cy="42" r="3" fill="#FFF9EE" />
            </svg>

            {/* Tiny "¡PICA!" badge pill next to chili */}
            <div className="absolute -top-3 -right-6 bg-[#111111] text-[#F4C430] border-2 border-[#FFF9EE] px-1.5 py-0.2 font-anton text-[9px] uppercase tracking-wider transform rotate-12 shadow-[2px_2px_0px_#111111] whitespace-nowrap">
              ¡PICA!
            </div>
          </div>
        ) : (
          /* ========================================================
             NORMAL STATE: GRAPHIC BRUTALIST DOT & RING
             ======================================================== */
          <div className="relative flex items-center justify-center w-5 h-5">
            {/* Outer ring */}
            <div className="w-5 h-5 rounded-full border-2 border-[#111111] bg-[#F4C430] shadow-[2px_2px_0px_#111111] flex items-center justify-center">
              {/* Inner chili red dot */}
              <div className="w-2 h-2 rounded-full bg-[#D92323] border border-[#111111]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
