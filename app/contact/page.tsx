"use client"

import { useState, useEffect, useRef } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle,
} from 'lucide-react';

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'business@skyweb.net.in',
        href: 'mailto:business@skyweb.net.in',
    },
    {
        icon: Phone,
        label: 'WhatsApp',
        value: '+91 80976 81293',
        href: 'https://wa.me/918097681293',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'TODAY ELITE PLOT NO 325 OFFICE 06, ULWE SECTOR 17, NAVI MUMBAI MAHARASHTRA 410206',
        href: 'https://maps.google.com/maps?q=TODAY%20ELITE,%20PLOT%20NO%20325,%20OFFICE%2006,%20ULWE%20SECTOR%2017,%20NAVI%20MUMBAI,%20MAHARASHTRA%20410206',
    },
    {
        icon: Clock,
        label: 'Business Hours',
        value: 'Monday – Saturday | 10:00 AM – 7:00 PM',
        href: '#',
    },
];

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: '',
                });
            } else {
                setError(result.error?.message || result.error || 'Failed to submit Qu. Please try again.');
            }
        } catch (err) {
            console.error('Submission error:', err);
            setError('An error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen pt-24">
            {/* Hero Banner */}
            <section className="relative py-20 lg:py-28 bg-navy-500 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern
                                id="contact-hero-grid"
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
                        <rect width="100%" height="100%" fill="url(#contact-hero-grid)" />
                    </svg>
                </div>

                <div className="section-container relative z-10">
                    <div className="section-inner text-center">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-0.5 bg-orange" />
                            <span className="text-orange font-semibold text-sm uppercase tracking-wider">
                                Contact Us
                            </span>
                            <div className="w-8 h-0.5 bg-orange" />
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Get in Touch
                        </h1>

                        <p className="text-lg text-white/70 max-w-3xl mx-auto">
                            Ready to transform your business connectivity? Reach out to us and
                            let's discuss how we can help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section ref={sectionRef} className="py-20 lg:py-28 bg-white">
                <div className="section-container">
                    <div className="section-inner">
                        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                            {/* Contact Info */}
                            <div className="lg:col-span-2">
                                <div
                                    className={`transition-all duration-700 ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-6'
                                        }`}
                                >
                                    <h2 className="text-3xl font-bold text-navy-500 mb-4">
                                        Contact Information
                                    </h2>
                                    <p className="text-navy-600/70 mb-10">
                                        Reach out to us through any of these channels. Our team is
                                        ready to assist you.
                                    </p>
                                </div>

                                {/* Info Cards */}
                                <div className="space-y-4">
                                    {contactInfo.map((info, index) => (
                                        <a
                                            key={index}
                                            href={info.href}
                                            className={`flex items-start gap-4 p-5 bg-light-blue rounded-xl hover:bg-navy-500 group transition-all duration-500 ${isVisible
                                                ? 'opacity-100 translate-x-0'
                                                : 'opacity-0 -translate-x-10'
                                                }`}
                                            style={{ transitionDelay: `${200 + index * 100}ms` }}
                                        >
                                            <div className="w-12 h-12 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-orange">
                                                <info.icon
                                                    size={22}
                                                    className="text-orange transition-colors duration-300 group-hover:text-white"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-sm text-navy-600/60 group-hover:text-white/60 transition-colors duration-300">
                                                    {info.label}
                                                </p>
                                                <p className="font-semibold text-navy-500 group-hover:text-white transition-colors duration-300">
                                                    {info.value}
                                                </p>
                                            </div>
                                        </a>
                                    ))}
                                </div>

                                {/* Quick Response Promise */}
                                <div
                                    className={`mt-8 p-6 bg-orange/10 rounded-xl border border-orange/20 transition-all duration-700 delay-600 ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-6'
                                        }`}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <CheckCircle size={20} className="text-orange" />
                                        <h4 className="font-semibold text-navy-500">
                                            Quick Response Guarantee
                                        </h4>
                                    </div>
                                    <p className="text-navy-600/70 text-sm">
                                        We typically respond to all inquiries within 24 business
                                        hours.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:col-span-3">
                                <div
                                    className={`bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100 transition-all duration-700 delay-200 ${isVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-10'
                                        }`}
                                >
                                    <h3 className="text-2xl font-bold text-navy-500 mb-2">
                                        Send Us Your Query
                                    </h3>
                                    <p className="text-navy-600/70 mb-8">
                                        Fill out the form below and we'll get back to you shortly.
                                    </p>

                                    {error && (
                                        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
                                            {error}
                                        </div>
                                    )}

                                    {isSubmitted ? (
                                        <div className="text-center py-12">
                                            <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
                                                <CheckCircle size={40} className="text-green-500" />
                                            </div>
                                            <h4 className="text-2xl font-bold text-navy-500 mb-3">
                                                Thank You!
                                            </h4>
                                            <p className="text-navy-600/70">
                                                Your message has been sent successfully. We'll get back
                                                to you soon.
                                            </p>
                                            <button
                                                onClick={() => setIsSubmitted(false)}
                                                className="mt-6 text-orange font-semibold hover:underline"
                                            >
                                                Send another message
                                            </button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div>
                                                    <label
                                                        htmlFor="name"
                                                        className="block text-sm font-medium text-navy-500 mb-2"
                                                    >
                                                        Full Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        disabled={isLoading}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all duration-300 disabled:opacity-50"
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="email"
                                                        className="block text-sm font-medium text-navy-500 mb-2"
                                                    >
                                                        Email Address *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        disabled={isLoading}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all duration-300 disabled:opacity-50"
                                                        placeholder="john@company.com"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div>
                                                    <label
                                                        htmlFor="phone"
                                                        className="block text-sm font-medium text-navy-500 mb-2"
                                                    >
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        disabled={isLoading}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all duration-300 disabled:opacity-50"
                                                        placeholder="+91 80976 81293"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="company"
                                                        className="block text-sm font-medium text-navy-500 mb-2"
                                                    >
                                                        Company Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="company"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        disabled={isLoading}
                                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all duration-300 disabled:opacity-50"
                                                        placeholder="Your Company"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label
                                                    htmlFor="message"
                                                    className="block text-sm font-medium text-navy-500 mb-2"
                                                >
                                                    Message *
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows={5}
                                                    disabled={isLoading}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all duration-300 resize-none disabled:opacity-50"
                                                    placeholder="Tell us about your requirements..."
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full btn-primary justify-center py-4 disabled:opacity-70 disabled:cursor-not-allowed group"
                                            >
                                                {isLoading ? (
                                                    <span className="flex items-center gap-2">
                                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Sending...
                                                    </span>
                                                ) : (
                                                    <>
                                                        Submit Query
                                                        <Send size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 lg:py-28 bg-light-blue">
                <div className="section-container">
                    <div className="section-inner">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-navy-500 mb-4">
                                Serving Businesses Across India
                            </h2>
                            <p className="text-navy-600/70">
                                We provide pan-India service coverage with local expertise and
                                support.
                            </p>
                        </div>

                        {/* India Map Placeholder */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-96 w-full">
                            <iframe
                                src="https://maps.google.com/maps?q=TODAY%20ELITE,%20PLOT%20NO%20325,%20OFFICE%2006,%20ULWE%20SECTOR%2017,%20NAVI%20MUMBAI,%20MAHARASHTRA%20410206&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Skywebix Location"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
