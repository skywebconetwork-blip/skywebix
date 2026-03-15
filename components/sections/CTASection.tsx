"use client"
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface CTASectionProps {
  /** Main heading */
  title?: string;
  /** Body description paragraph. Pass null to hide. */
  description?: string | null;
  /** Smaller secondary line shown below description */
  subtitle?: string;
  /** Primary button label */
  primaryLabel?: string;
  /** Primary button href */
  primaryHref?: string;
  /** Secondary link label */
  secondaryLabel?: string;
  /** Secondary link href */
  secondaryHref?: string;
  /** Open secondary link in new tab */
  secondaryExternal?: boolean;
}

const DEFAULTS: Required<CTASectionProps> = {
  title: 'Looking for a reliable connectivity partner for your business?',
  description: 'Let our experts help you find the perfect IT and connectivity solution tailored to your business needs.',
  subtitle: '',
  primaryLabel: 'Request a Consultation',
  primaryHref: '/contact',
  secondaryLabel: 'Call Us Now',
  secondaryHref: 'https://wa.me/918097681293',
  secondaryExternal: true,
};

export default function CTASection(props: CTASectionProps = {}) {
  const {
    title = DEFAULTS.title,
    description = DEFAULTS.description,
    subtitle = DEFAULTS.subtitle,
    primaryLabel = DEFAULTS.primaryLabel,
    primaryHref = DEFAULTS.primaryHref,
    secondaryLabel = DEFAULTS.secondaryLabel,
    secondaryHref = DEFAULTS.secondaryHref,
    secondaryExternal = DEFAULTS.secondaryExternal,
  } = props;

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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 lg:py-28">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 py-16 px-6 sm:px-12 lg:px-20 lg:py-20 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] border border-white/10">

          {/* Background Image */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/services-hero.png"
              alt="Background"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 text-center">
            {/* Title */}
            <h2 className={`text-3xl sm:text-5xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {title}
            </h2>

            {/* Main description */}
            {description !== null && description !== '' && (
              <p className={`text-white/70 text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${subtitle ? 'mb-4' : 'mb-12'}`}>
                {description}
              </p>
            )}

            {/* Subtitle */}
            {subtitle && (
              <p className={`text-white/50 text-base mb-12 max-w-xl mx-auto transition-all duration-700 delay-250 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                {subtitle}
              </p>
            )}

            {/* Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <Link href={primaryHref} className="btn-primary px-10 py-5 text-lg group">
                {primaryLabel}
                <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={secondaryHref}
                {...(secondaryExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-white font-semibold hover:text-orange transition-colors"
              >
                {secondaryLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
