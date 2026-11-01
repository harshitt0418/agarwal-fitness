import React, { useEffect, useRef, useState } from 'react';

export const ScrollReveal = ({
  children,
  className = '',
  direction = 'up', // 'up' | 'left' | 'right' | 'zoom' | 'fade'
  delay = 0, // delay in ms
  threshold = 0.12,
  triggerOnce = true
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  const getAnimationClass = () => {
    switch (direction) {
      case 'left':
        return 'reveal-from-left';
      case 'right':
        return 'reveal-from-right';
      case 'zoom':
        return 'reveal-zoom';
      case 'fade':
      case 'up':
      default:
        return 'reveal-on-scroll';
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`${getAnimationClass()} ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
