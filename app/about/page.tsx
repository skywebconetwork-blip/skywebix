"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
    Target,
    Eye,
    Award,
    Users,
    Shield,
    Zap,
} from 'lucide-react';

const values = [
    {
        icon: Shield,
        title: 'Reliability',
        description: 'We deliver consistent, dependable services you can count on.',
    },
    {
        icon: Zap,
        title: 'Innovation',
        description: 'We stay ahead with cutting-edge technology solutions.',
    },
    {
        icon: Users,
        title: 'Partnership',
        description: 'We build long-term relationships with our clients.',
    },
    {
        icon: Award,
        title: 'Excellence',
        description: 'We strive for the highest standards in everything we do.',
    },
];

export default function About() {
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
                                id="about-hero-grid"
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
                        <rect width="100%" height="100%" fill="url(#about-hero-grid)" />
                    </svg>
                </div>

                <div className="section-container relative z-10">
                    <div className="section-inner text-center">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-0.5 bg-orange" />
                            <span className="text-orange font-semibold text-sm uppercase tracking-wider">
                                About Us
                            </span>
                            <div className="w-8 h-0.5 bg-orange" />
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            About SKYWEBIX INFOROTECH LLP
                        </h1>

                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            An emerging IT and connectivity solutions provider committed to
                            delivering reliable, scalable, and business-oriented technology
                            services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
                <div className="section-container">
                    <div className="section-inner">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
                            {/* Left Image */}
                            <div
                                className={`relative transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                                    }`}
                            >
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/about-us.png"
                                        alt="Who We Are"
                                        width={600}
                                        height={600}
                                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-navy-500/20 to-transparent pointer-events-none" />
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange rounded-2xl -z-10 opacity-20 blur-2xl" />
                                <div className="absolute -top-6 -left-6 w-32 h-32 bg-navy-400 rounded-full -z-10 opacity-10 blur-xl" />
                            </div>

                            {/* Right Content */}
                            <div className="flex flex-col justify-center">
                                <h2
                                    className={`text-3xl sm:text-5xl font-bold text-navy-500 mb-8 transition-all duration-700 ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-6'
                                        }`}
                                >
                                    Innovation <span className="text-orange">&</span> Reliability
                                </h2>

                                <div className="space-y-6 text-navy-600/90 text-lg leading-relaxed">
                                    <p
                                        className={`transition-all duration-700 delay-100 ${isVisible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-6'
                                            }`}
                                    >
                                        At <span className="font-bold text-navy-500">SKYWEBIX INFOROTECH LLP</span>, we don't just provide services; we build foundations. Since our inception, we've focused on delivering scalable, business-oriented technology that empowers enterprises to reach their full potential.
                                    </p>

                                    <p
                                        className={`transition-all duration-700 delay-200 ${isVisible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-6'
                                            }`}
                                    >
                                        We specialize in high-performance connectivity and IT infrastructure that adapt to the ever-evolving digital landscape. Our goal is to ensure your business stays ahead with zero compromises on stability.
                                    </p>
                                </div>

                                <div className={`flex flex-wrap gap-8 mt-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                                    <div>
                                        <div className="text-4xl font-extrabold text-orange">99.9%</div>
                                        <div className="text-sm font-semibold text-navy-400 uppercase tracking-wider mt-1">Uptime SLA</div>
                                    </div>
                                    <div className="w-px h-12 bg-gray-200 hidden sm:block" />
                                    <div>
                                        <div className="text-4xl font-extrabold text-navy-500">24/7</div>
                                        <div className="text-sm font-semibold text-navy-400 uppercase tracking-wider mt-1">Expert Support</div>
                                    </div>
                                    <div className="w-px h-12 bg-gray-200 hidden sm:block" />
                                    <div>
                                        <div className="text-4xl font-extrabold text-navy-500">100%</div>
                                        <div className="text-sm font-semibold text-navy-400 uppercase tracking-wider mt-1">Client Focus</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mission & Vision Section */}
                        <div className="grid md:grid-cols-2 gap-8 mb-32">
                            {/* Mission Card */}
                            <div
                                className={`group p-10 bg-light-blue rounded-3xl transition-all duration-700 delay-400 border border-transparent hover:border-orange/20 hover:shadow-xl ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                    }`}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Target size={32} className="text-orange" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy-500 mb-4">
                                    Our Mission
                                </h3>
                                <p className="text-navy-600/70 text-lg leading-relaxed">
                                    To simplify business connectivity and IT management across
                                    India by providing reliable, scalable, and cost-effective
                                    solutions that empower organizations to achieve their full
                                    potential.
                                </p>
                            </div>

                            {/* Vision Card */}
                            <div
                                className={`group p-10 bg-navy-500 rounded-3xl transition-all duration-700 delay-500 hover:shadow-2xl hover:shadow-navy-500/20 ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                    }`}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-orange/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Eye size={32} className="text-orange" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                                <p className="text-white/70 text-lg leading-relaxed">
                                    To become India's most trusted IT and connectivity partner,
                                    known for our reliability, innovation, and commitment to
                                    customer success.
                                </p>
                            </div>
                        </div>

                        {/* Our Values */}
                        <div className="relative">
                            <div className="text-center mb-16">
                                <h2
                                    className={`text-3xl sm:text-5xl font-bold text-navy-500 mb-6 transition-all duration-700 delay-600 ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-6'
                                        }`}
                                >
                                    Our Core Values
                                </h2>
                                <p
                                    className={`text-navy-600/70 text-lg max-w-2xl mx-auto transition-all duration-700 delay-700 ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-6'
                                        }`}
                                >
                                    The principles that define our culture and drive our results.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {values.map((value, index) => (
                                    <div
                                        key={index}
                                        className={`group p-8 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-3 transition-all duration-500 ${isVisible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-10'
                                            }`}
                                        style={{ transitionDelay: `${800 + index * 100}ms` }}
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-navy-500/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-orange">
                                            <value.icon
                                                size={32}
                                                className="text-navy-500 transition-colors duration-500 group-hover:text-white"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-navy-500 mb-3 group-hover:text-orange transition-colors duration-300">
                                            {value.title}
                                        </h3>
                                        <p className="text-navy-600/60 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


