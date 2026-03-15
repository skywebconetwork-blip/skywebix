"use client"

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
    FileCheck,
    Briefcase,
    Globe,
    Handshake,
    MessageCircle,
    Headphones,
    Search,
    ClipboardCheck,
    FileText,
    Settings,
    LifeBuoy,
    ArrowRight,
} from 'lucide-react';

const reasons = [
    {
        icon: FileCheck,
        title: 'Registered LLP in India',
        description:
            'A legally registered Limited Liability Partnership, ensuring professional standards and accountability.',
    },
    {
        icon: Briefcase,
        title: 'Business-focused Solutions',
        description:
            'Every solution is designed with your business goals in mind, ensuring maximum ROI.',
    },
    {
        icon: Globe,
        title: 'Pan-India Service Capability',
        description:
            'We serve businesses across India with consistent quality and reliability.',
    },
    {
        icon: Handshake,
        title: 'Reliable ISP & Network Partners',
        description: 'We work closely with trusted local ISP providers to deliver reliable internet connectivity and network solutions for businesses.'
    }
    ,
    {
        icon: MessageCircle,
        title: 'Transparent Communication',
        description:
            'Clear, honest communication at every step of your project journey.',
    },
    {
        icon: Headphones,
        title: 'Responsive Support',
        description:
            'Our support team is always ready to help you with any issues or questions.',
    },
];

const process = [
    {
        icon: Search,
        title: 'Requirement Analysis',
        description: 'We understand your business needs and challenges.',
    },
    {
        icon: ClipboardCheck,
        title: 'Feasibility Assessment',
        description: 'We evaluate technical and commercial viability.',
    },
    {
        icon: FileText,
        title: 'Solution Proposal',
        description: 'We present a tailored solution with clear deliverables.',
    },
    {
        icon: Settings,
        title: 'Deployment & Setup',
        description: 'We implement the solution with minimal disruption.',
    },
    {
        icon: LifeBuoy,
        title: 'Ongoing Support',
        description: 'We provide continuous support and optimization.',
    },
];

export default function WhyChooseUs() {
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
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <main className="min-h-screen pt-24">
            {/* Hero Banner */}
            <section className="relative py-20 lg:py-28 bg-navy-500 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern
                                id="why-hero-grid"
                                width="40"
                                height="40"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 40 0 L 0 0 0 40"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="1"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#why-hero-grid)" />
                    </svg>
                </div>

                <div className="section-container relative z-10">
                    <div className="section-inner text-center">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-0.5 bg-orange" />
                            <span className="text-orange font-semibold text-sm uppercase tracking-wider">
                                Why SKYWEBIX
                            </span>
                            <div className="w-8 h-0.5 bg-orange" />
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Why Choose Us?
                        </h1>

                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            We combine technical expertise with business understanding to
                            deliver solutions that drive real results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Reasons Grid */}
            <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
                <div className="section-container">
                    <div className="section-inner">
                        {/* Section Header */}
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2
                                className={`text-3xl sm:text-4xl font-bold text-navy-500 mb-4 transition-all duration-700 ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-6'
                                    }`}
                            >
                                The SKYWEBIX Advantage
                            </h2>
                            <p
                                className={`text-navy-600/70 transition-all duration-700 delay-100 ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-6'
                                    }`}
                            >
                                Six reasons why businesses choose SKYWEBIX for reliable internet and network services.
                            </p>
                        </div>

                        {/* Reasons Cards */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
                            {reasons.map((reason, index) => (
                                <div
                                    key={index}
                                    className={`group p-8 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500 ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-10'
                                        }`}
                                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                                >
                                    <div className="w-16 h-16 rounded-xl bg-orange/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-orange group-hover:scale-110">
                                        <reason.icon
                                            size={32}
                                            className="text-orange transition-colors duration-500 group-hover:text-white"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-navy-500 mb-3 group-hover:text-orange transition-colors duration-300">
                                        {reason.title}
                                    </h3>
                                    <p className="text-navy-600/70 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Our Process */}
                        <div className="bg-light-blue rounded-3xl p-8 lg:p-16">
                            <div className="text-center max-w-2xl mx-auto mb-12">
                                <h2
                                    className={`text-3xl sm:text-4xl font-bold text-navy-500 mb-4 transition-all duration-700 delay-500 ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-6'
                                        }`}
                                >
                                    Our Working Process
                                </h2>
                                <p
                                    className={`text-navy-600/70 transition-all duration-700 delay-600 ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-6'
                                        }`}
                                >
                                    A proven methodology that ensures successful project delivery
                                </p>
                            </div>

                            {/* Process Steps */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                                {process.map((step, index) => (
                                    <div
                                        key={index}
                                        className={`relative text-center transition-all duration-700 ${isVisible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-10'
                                            }`}
                                        style={{ transitionDelay: `${700 + index * 100}ms` }}
                                    >
                                        {/* Step Number */}
                                        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-orange text-white font-bold flex items-center justify-center text-sm">
                                            {index + 1}
                                        </div>

                                        {/* Icon */}
                                        <div className="w-16 h-16 mx-auto rounded-xl bg-navy-500 flex items-center justify-center mb-4">
                                            <step.icon size={28} className="text-white" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-lg font-bold text-navy-500 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-navy-600/70 text-sm leading-relaxed">
                                            {step.description}
                                        </p>

                                        {/* Connector Line (hidden on last item and mobile) */}
                                        {index < process.length - 1 && (
                                            <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-navy-500/20">
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-navy-500/40" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div
                            className={`mt-16 text-center transition-all duration-700 delay-1000 ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-6'
                                }`}
                        >
                            <h3 className="text-2xl font-bold text-navy-500 mb-4">
                                Ready to Experience the Difference?
                            </h3>
                            <p className="text-navy-600/70 mb-8 max-w-xl mx-auto">
                                Let's discuss how SKYWEBIX can help your business achieve its
                                connectivity goals.
                            </p>
                            <Link href="/contact" className="btn-primary inline-flex">
                                Get Started Today
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
