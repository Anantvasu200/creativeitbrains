import { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';

export default function TiltCard({ children, className, options = {}, ...props }) {
  const cardRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable tilt on mobile/touch screens
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(touchDevice);

    if (touchDevice) return;

    const element = cardRef.current;
    if (element) {
      VanillaTilt.init(element, {
        max: 8,
        speed: 300,
        scale: 1.03,
        glare: true,
        'max-glare': 0.15,
        ...options
      });
    }

    return () => {
      if (element && element.vanillaTilt) {
        element.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div
      ref={cardRef}
      className={`${className} ${!isTouch ? 'transform-gpu' : ''}`}
      {...props}
    >
      {children}
    </div>
  );
}
