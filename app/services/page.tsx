"use client"

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    Building2,
    Wifi,
    Network,
    Server,
    MessageSquare,
    Check,
    ArrowRight,
} from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

const services = [
    {
        icon: Wifi,
        title: 'Enterprise Internet Connectivity',
        image: '/images/Enterprice-Connectivity.jpeg',
        shortDescription:
            'High-speed dedicated internet solutions designed for businesses that require reliable and uninterrupted connectivity.',
        fullDescription:
            'Enterprise Internet Connectivity provides high-speed dedicated internet solutions designed for businesses that require reliable and uninterrupted connectivity. Our solutions ensure stable performance, fast data transfer, and SLA-backed uptime to keep your operations running smoothly.',
        features: [
            'Dedicated leased line connectivity',
            'High-speed business internet',
            'Reliable and uninterrupted connectivity',
            '99.9% uptime SLA guarantee',
            'Scalable bandwidth options',
            '24/7 technical support',
        ],
    },
    {
        icon: Network,
        title: 'Corporate Broadband Services',
        image: '/images/service-broadband.png',
        shortDescription:
            'Reliable broadband solutions customized for small to mid-sized businesses.',
        fullDescription:
            'Our Corporate Broadband Services offer reliable broadband solutions customized to meet the needs of small to mid-sized businesses. Enjoy fast, stable connectivity that keeps your operations running smoothly.',
        features: [
            'High-speed fiber broadband',
            'Flexible plans and pricing',
            'Static IP options',
            'Business-grade support',
            'Quick installation',
            'No data caps',
        ],
    },
    {
        icon: Server,
        title: 'Managed Network Services',
        image: '/images/manage-network.png', // Fallback to hero image style
        shortDescription:
            'Comprehensive network monitoring, maintenance, and optimization.',
        fullDescription:
            'Our Managed Network Services provide comprehensive network monitoring, maintenance, and performance optimization. We handle your network infrastructure so you can focus on your core business.',
        features: [
            '24/7 network monitoring',
            'Proactive issue resolution',
            'Performance optimization',
            'Security management',
            'Regular maintenance',
            'Detailed reporting',
        ],
    },
    {
        icon: Building2,
        title: 'IT Infrastructure Setup & Support',
        image: '/images/support.png', // Fallback
        shortDescription:
            'Design, deployment, and ongoing support of IT infrastructure.',
        fullDescription:
            'Our IT Infrastructure Setup & Support services cover design, deployment, and ongoing support of IT infrastructure for offices and commercial environments. We build robust systems that power your business.',
        features: [
            'Network design and planning',
            'Hardware procurement',
            'Professional installation',
            'System configuration',
            'Ongoing maintenance',
            'Technical support',
        ],
    },
    {
        icon: MessageSquare,
        title: 'Business Connectivity Consulting',
        image: '/images/about-us.png', // Fallback
        shortDescription:
            'Expert guidance to help businesses select the right solutions.',
        fullDescription:
            'Our Business Connectivity Consulting provides expert guidance to help businesses select the right connectivity and IT solutions. We analyze your needs and recommend the best approach for your goals.',
        features: [
            'Needs assessment',
            'Solution recommendations',
            'Cost-benefit analysis',
            'Implementation planning',
            'Vendor selection',
            'Project management',
        ],
    },
    {
        icon: Network,
        title: 'ISP Coordination & Network Management',
        image: '/images/Network-Management.jpeg', // Fallback
        shortDescription:
            'We coordinate with multiple internet service providers to ensure stable connectivity.',
        fullDescription:
            'Our ISP Coordination & Network Management service ensures seamless connectivity by coordinating with multiple internet service providers. We focus on maintaining stable network performance, minimizing downtime, and ensuring faster issue resolution for businesses.',
        features: [
            'Coordination with multiple ISPs',
            'Stable and reliable connectivity',
            'Faster issue resolution',
            'Network performance monitoring',
            'Downtime minimization',
            'Proactive network support',
        ],
    },
];

export default function Services() {
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
                                id="services-hero-grid"
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
                        <rect width="100%" height="100%" fill="url(#services-hero-grid)" />
                    </svg>
                </div>

                <div className="section-container relative z-10">
                    <div className="section-inner text-center">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-0.5 bg-orange" />
                            <span className="text-orange font-semibold text-sm uppercase tracking-wider">
                                Our Services
                            </span>
                            <div className="w-8 h-0.5 bg-orange" />
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Comprehensive IT Solutions
                        </h1>

                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            From enterprise internet to managed network services, we provide
                            end-to-end connectivity solutions for businesses of all sizes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
                <div className="section-container">
                    <div className="section-inner">
                        <div className="space-y-24 lg:space-y-32">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col lg:items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                                        } transition-all duration-1000 ${isVisible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-12'
                                        }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    {/* Content */}
                                    <div className="flex-1 max-w-2xl">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center">
                                                <service.icon size={32} className="text-orange" />
                                            </div>
                                            <h2 className="text-3xl sm:text-4xl font-bold text-navy-500">
                                                {service.title}
                                            </h2>
                                        </div>

                                        <p className="text-navy-600/80 text-lg leading-relaxed mb-8">
                                            {service.fullDescription}
                                        </p>

                                        {/* Features List */}
                                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                                            {service.features.map((feature, fIndex) => (
                                                <div
                                                    key={fIndex}
                                                    className="flex items-center gap-3 text-navy-600/70"
                                                >
                                                    <div className="w-6 h-6 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                                                        <Check size={14} className="text-orange" />
                                                    </div>
                                                    <span className="text-sm font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-3 px-8 py-4 bg-navy-500 text-white rounded-full font-bold hover:bg-orange transition-all duration-300 group"
                                        >
                                            Get Started
                                            <ArrowRight
                                                size={20}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </Link>
                                    </div>

                                    {/* Visual Image */}
                                    <div className="flex-1">
                                        <div className="relative group">
                                            <div className="absolute -inset-4 bg-orange/5 rounded-[2.5rem] transform group-hover:scale-105 transition-transform duration-700" />
                                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-light-blue">
                                                <Image
                                                    src={service.image}
                                                    alt={service.title}
                                                    width={1526}
                                                    height={1024}
                                                    className="w-full h-auto object-cover aspect-[1526/1024] group-hover:scale-110 transition-transform duration-1000"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-navy-500/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                            </div>

                                            {/* Floating Info Card */}
                                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[240px] hidden md:block animate-bounce-subtle">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="w-8 h-8 rounded-lg bg-orange/10 flex items-center justify-center">
                                                        <service.icon size={18} className="text-orange" />
                                                    </div>
                                                    <span className="font-bold text-navy-500 text-sm">Service Focus</span>
                                                </div>
                                                <p className="text-xs text-navy-400 leading-tight">
                                                    Tailored for business performance and reliability.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to Elevate Your Connectivity?"
                description="Our experts are ready to design a custom solution that perfectly aligns with your operational goals — from leased lines to fully managed networks."
                primaryLabel="Schedule a Consultation"
                primaryHref="/contact"
                secondaryLabel="Call Us Now"
                secondaryHref="https://wa.me/918097681293"
                secondaryExternal
            />
        </main>
    );
}

