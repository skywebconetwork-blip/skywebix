"use client"
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/hero-bg.jpg',
    '/hero-bg2.png',
    '/hero-bg1.png',
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !contentRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;

      if (scrollY < heroHeight) {
        const parallaxValue = scrollY * 0.5;
        const opacityValue = 1 - scrollY / (heroHeight * 0.6);
        contentRef.current.style.transform = `translateY(${parallaxValue}px)`;
        contentRef.current.style.opacity = `${Math.max(0, opacityValue)}`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Carousel Interval
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div
              className={`absolute inset-0 ${index === currentImageIndex ? 'animate-ken-burns' : ''}`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        ))}

        {/* Gradient Overlay - Minimized Opacity as requested */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-500/80 via-navy-500/50 to-navy-500/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-500/40 via-transparent to-transparent" />
      </div>

      {/* Particle Network Canvas Effect - CSS Alternative */}
      <div className="absolute inset-0 z-10 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1.5" fill="rgba(249, 115, 22, 0.4)">
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-20 section-container pt-30 pb-16"
      >
        <div className="section-inner w-full flex flex-col items-center lg:items-start">
          <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left px-4">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 opacity-0 animate-fade-in-up">
              Reliable Internet & IT Solutions for{' '}
              <span className="text-orange">Businesses Across India</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up animation-delay-300 drop-shadow-md">
              SKYWEBIX INFOROTECH LLP delivers enterprise-grade internet
              connectivity and IT infrastructure solutions, designed to support
              modern businesses with consistent reliability and high performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up animation-delay-500">
              <Link
                href="/contact"
                className="btn-primary group animate-glow-pulse"
              >
                Contact Us
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
