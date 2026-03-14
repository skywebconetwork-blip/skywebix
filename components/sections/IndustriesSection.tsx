
"use client"
import { useEffect, useRef, useState } from 'react';
import {
  Building2,
  GraduationCap,
  Rocket,
  Warehouse,
  ShoppingCart,
} from 'lucide-react';

const industries = [
  {
    icon: Building2,
    name: 'Corporate Offices',
    description: 'Enterprise solutions for modern workplaces',
  },
  {
    icon: GraduationCap,
    name: 'Educational Institutions',
    description: 'Reliable connectivity for schools and universities',
  },
  {
    icon: Rocket,
    name: 'Startups & SMEs',
    description: 'Scalable solutions for growing businesses',
  },
  {
    icon: Warehouse,
    name: 'Warehousing & Logistics',
    description: 'Robust networks for supply chain operations',
  },
  {
    icon: ShoppingCart,
    name: 'Retail Businesses',
    description: 'Seamless connectivity for retail environments',
  },
];

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-navy-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="industry-dots"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="15" cy="15" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#industry-dots)" />
        </svg>
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="section-inner">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div
              className={`inline-flex items-center gap-2 mb-4 transition-all duration-700 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
                }`}
            >
              <div className="w-8 h-0.5 bg-orange" />
              <span className="text-orange font-semibold text-sm uppercase tracking-wider">
                Our Clients
              </span>
              <div className="w-8 h-0.5 bg-orange" />
            </div>

            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
                }`}
            >
              Industries We Serve
            </h2>

            <p
              className={`text-white/70 leading-relaxed transition-all duration-700 delay-200 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
                }`}
            >
              We provide tailored IT solutions across diverse industries,
              helping businesses of all sizes achieve their connectivity goals.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`group text-center transition-all duration-700 ${isVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-90'
                  }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                {/* Icon Container */}
                <div className="relative mb-5 mx-auto">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-orange/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon Circle */}
                  <div className="relative w-20 h-20 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:bg-orange group-hover:border-orange group-hover:-translate-y-2">
                    <industry.icon
                      size={32}
                      className="text-orange transition-colors duration-500 group-hover:text-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div
            className={`mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-700 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
              }`}
          >
            {[
              { value: '15+', label: 'Industries Served' },
              { value: '100+', label: 'Projects Completed' },
              { value: '50+', label: 'Happy Clients' },
              { value: '10+', label: 'Cities Covered' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-orange mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
