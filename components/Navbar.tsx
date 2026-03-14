"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Why Choose Us', path: '/why-choose-us' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = usePathname();

  const isActive = (path: string) => location === path;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-md py-3"
    >
      <div className="section-container">
        <div className="section-inner flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/logo.png"
              alt="SKYWEBIX"
              width={220}
              height={60}
              className="w-auto h-12 lg:h-16 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative font-medium text-sm transition-all duration-300 ${isActive(link.path)
                  ? 'text-orange'
                  : 'text-navy-500 hover:text-orange'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-orange transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-primary text-sm animate-glow-pulse"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md transition-colors duration-300 text-navy-500"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="section-container py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-3 px-4 rounded-lg font-medium transition-all duration-300 ${isActive(link.path)
                ? 'bg-orange/10 text-orange'
                : 'text-navy-500 hover:bg-navy-50 hover:text-orange'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary text-center mt-2"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
