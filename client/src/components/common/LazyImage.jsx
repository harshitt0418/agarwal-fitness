import React, { useState, useEffect, useRef } from 'react';

export const LazyImage = ({
  src,
  alt = '',
  className = '',
  wrapperClassName = '',
  fallbackSrc = '/assets/source_images/images_about-2-446x608.png',
  aspectRatio = '',
  onClick
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  // Lazy load into viewport using IntersectionObserver
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        },
        { rootMargin: '100px 0px' }
      );
      observer.observe(el);
      return () => observer.disconnect();
    } else {
      setInView(true);
    }
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const finalSrc = hasError ? fallbackSrc : src;

  return (
    <div 
      ref={imgRef}
      onClick={onClick}
      className={`relative overflow-hidden bg-athletic-100 ${wrapperClassName} ${aspectRatio}`}
    >
      {/* Athletic Shimmer Skeleton (active while image loads) */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-athletic-200 overflow-hidden">
          <div 
            className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
            style={{ width: '200%' }}
          ></div>
        </div>
      )}

      {/* Actual Image with smooth fade & scale-in */}
      {inView && (
        <img
          src={finalSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            isLoaded 
              ? 'opacity-100 scale-100 blur-0' 
              : 'opacity-0 scale-95 blur-sm'
          } ${className}`}
        />
      )}
    </div>
  );
};
