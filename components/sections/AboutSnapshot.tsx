"use client"
import { useEffect, useRef, useState } from 'react';
import {
  Building2,
  Wifi,
  Network,
  Server,
  MessageSquare,
} from 'lucide-react';

const services = [
  { icon: Wifi, text: 'Enterprise Internet Solutions' },
  { icon: Network, text: 'Corporate Broadband Services' },
  { icon: Server, text: 'Managed Network Services' },
  { icon: Building2, text: 'IT Infrastructure Setup & Support' },
  { icon: MessageSquare, text: 'Business Connectivity Consulting' },
];

export default function AboutSnapshot() {
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-light-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="about-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#1e3a5f"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              {/* Section Label */}
              <div
                className={`inline-flex items-center gap-2 mb-4 transition-all duration-700 ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                  }`}
              >
                <div className="w-8 h-0.5 bg-orange" />
                <span className="text-orange font-semibold text-sm uppercase tracking-wider">
                  About Us
                </span>
              </div>

              {/* Heading */}
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 mb-6 transition-all duration-700 delay-100 ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                  }`}
              >
                Who We Are
              </h2>

              {/* Body Text */}
              <div className="space-y-4 text-navy-600/80 leading-relaxed">
                <p
                  className={`transition-all duration-700 delay-200 ${isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                    }`}
                >
                  SKYWEBIX INFOROTECH LLP is a technology-focused organization
                  providing dependable internet and IT services to businesses
                  across India. We help organizations build, manage, and maintain
                  strong connectivity and IT foundations that drive efficiency and
                  long-term growth.
                </p>
                <p
                  className={`transition-all duration-700 delay-300 ${isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                    }`}
                >
                  Our team of experienced professionals is dedicated to delivering
                  tailored solutions that meet the unique needs of each client,
                  ensuring seamless operations and maximum uptime.
                </p>
              </div>

              {/* Stats */}
              <div
                className={`grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-navy-500/10 transition-all duration-700 delay-400 ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                  }`}
              >
                {[
                  { value: '50+', label: 'Clients Served' },
                  { value: '99%', label: 'Uptime SLA' },
                  { value: '24/7', label: 'Support' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-orange mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-navy-600/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group flex items-center gap-5 p-5 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-500 cursor-default ${isVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-10'
                    }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-orange group-hover:scale-110">
                    <service.icon
                      size={24}
                      className="text-orange transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                  <span className="font-semibold text-navy-500 group-hover:text-orange transition-colors duration-300">
                    {service.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
