import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Why Choose Us', path: '/why-choose-us' },
  { name: 'Contact Us', path: '/contact' },
];

const serviceLinks = [
  'Enterprise Internet',
  'Corporate Broadband',
  'Managed Networks',
  'IT Infrastructure',
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-navy-500 to-navy-700 text-white">
      <div className="section-container py-16">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <span className="text-2xl font-bold tracking-tight text-white">
                  SKYWEBIX
                </span>
                <span className="block text-xs font-medium tracking-wider text-white/70">
                  INFOROTEC LLP
                </span>
              </Link>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Reliable IT Solutions for Modern Businesses. We deliver
                enterprise-grade connectivity and infrastructure services across
                India.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3">
                {[
                  { Icon: Twitter, href: 'https://x.com/skywebixllp', label: 'Twitter' },
                  { Icon: Facebook, href: 'https://www.facebook.com/skywebixllp/', label: 'Facebook' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-orange hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-white/70 text-sm hover:text-orange transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-3" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-5">Our Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((service, index) => (
                  <li key={index}>
                    <Link
                      href="/services"
                      className="text-white/70 text-sm hover:text-orange transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-3" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-5">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-orange mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:skyweb.conetwork@gmail.com"
                    className="text-white/70 text-sm hover:text-orange transition-colors duration-300"
                  >
                    skyweb.conetwork@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-orange mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:02269718266"
                    className="text-white/70 text-sm hover:text-orange transition-colors duration-300"
                  >
                    02269718266
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-orange mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm">
                    TODAY ELITE PLOT NO 325 OFFICE 06<br />
                    ULWE SECTOR 17<br />
                    NAVI MUMBAI MAHARASHTRA 410206
                  </span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-white/50 text-xs">
                  Business Hours:
                  <br />
                  Monday – Saturday | 10:00 AM – 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5">
          <div className="section-inner flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} SKYWEBIX INFOROTECH LLP. All
              Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/50 text-sm hover:text-orange transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/50 text-sm hover:text-orange transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
