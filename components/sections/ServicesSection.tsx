"use client"

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Settings,
  Server,
  Router,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Enterprise Internet Solutions',
    description:
      'High-speed dedicated internet for businesses with guaranteed uptime and performance.',
    link: '/services',
  },
  {
    icon: Settings,
    title: 'Managed Network Services',
    description:
      'Proactive network management and monitoring to ensure optimal performance.',
    link: '/services',
  },
  {
    icon: Server,
    title: 'IT Infrastructure Setup',
    description:
      'Complete IT setup and support solutions tailored to your business needs.',
    link: '/services',
  },
  {
    icon: Router,
    title: 'Corporate Broadband',
    description:
      'Fast and reliable broadband services designed for modern offices.',
    link: '/services',
  },
];

export default function ServicesSection() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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
                What We Offer
              </span>
              <div className="w-8 h-0.5 bg-orange" />
            </div>

            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 mb-4 transition-all duration-700 delay-100 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
                }`}
            >
              Our Services
            </h2>

            <p
              className={`text-navy-600/70 leading-relaxed transition-all duration-700 delay-200 ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
                }`}
            >
              Comprehensive IT and connectivity solutions designed to power your
              business growth and ensure seamless operations.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className={`group service-card flex flex-col h-full transition-all duration-700 ${isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
                  }`}
                style={{
                  transitionDelay: `${300 + index * 100}ms`,
                  marginTop: index % 2 === 1 ? '30px' : '0',
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-navy-500/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-orange group-hover:scale-110 group-hover:rotate-3">
                  <service.icon
                    size={28}
                    className="text-navy-500 transition-colors duration-500 group-hover:text-white"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-navy-500 mb-3 group-hover:text-orange transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-navy-600/70 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Link */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-orange font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div
            className={`text-center mt-14 transition-all duration-700 delay-700 ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
              }`}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-navy-500 font-semibold hover:text-orange transition-colors duration-300 group"
            >
              View All Services
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
