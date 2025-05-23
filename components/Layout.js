import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">      {/* Sticky Header with slide-down animation */}
      <header className="bg-deep-purple-800 text-white sticky top-0 z-50 shadow-lg animate-slide-down">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">          <div className="flex justify-between h-16">
            <div className="flex items-center">              {/* Logo with pulse animation */}
              <Link href="/" className="flex items-center hover:animate-pulse transition-all duration-300 group">
                <img src="/logo.png" alt="Mojo Xotics Logo" className="h-12 w-auto mr-3" />
                <span className="text-2xl font-bold group-hover:text-lime-green-400">Mojo Xotics</span>
              </Link>
            </div>
            {/* Desktop Navigation with hover animations */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-lime-green-300 transition-all duration-300 hover:scale-105 transform neon-hover">
                Home
              </Link>
              <Link href="/products" className="hover:text-lime-green-300 transition-all duration-300 hover:scale-105 transform neon-hover">
                Products
              </Link>
              <Link href="/wellness" className="hover:text-lime-green-300 transition-all duration-300 hover:scale-105 transform neon-hover">
                Wellness
              </Link>
              <Link href="/about" className="hover:text-lime-green-300 transition-all duration-300 hover:scale-105 transform neon-hover">
                About
              </Link>
              <Link href="/contact" className="hover:text-lime-green-300 transition-all duration-300 hover:scale-105 transform neon-hover">
                Contact
              </Link>
            </div>

            {/* Mobile menu button with rotation animation */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-lime-green-300 transition-all duration-300 transform hover:rotate-90"
              >
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation with slide-down animation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-3 animate-slide-down">
              <div className="flex flex-col space-y-2">
                <Link href="/" className="hover:text-lime-green-300 transition-all duration-300 py-2 hover:bg-deep-purple-700 rounded px-2">
                  Home
                </Link>
                <Link href="/products" className="hover:text-lime-green-300 transition-all duration-300 py-2 hover:bg-deep-purple-700 rounded px-2">
                  Products
                </Link>
                <Link href="/wellness" className="hover:text-lime-green-300 transition-all duration-300 py-2 hover:bg-deep-purple-700 rounded px-2">
                  Wellness
                </Link>
                <Link href="/about" className="hover:text-lime-green-300 transition-all duration-300 py-2 hover:bg-deep-purple-700 rounded px-2">
                  About
                </Link>
                <Link href="/contact" className="hover:text-lime-green-300 transition-all duration-300 py-2 hover:bg-deep-purple-700 rounded px-2">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>      {/* Footer with fade-in animation */}
      <footer className="bg-deep-purple-900 text-white py-8 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3 text-lime-green-400">Mojo's Hemp House</h3>
              <p className="text-deep-purple-200">Your local Indianapolis source for premium CBD and hemp wellness products.</p>
            </div>
            <div className="hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3 text-lime-green-400">Quick Links</h3>
              <ul className="space-y-2 text-deep-purple-200">
                <li><Link href="/products" className="hover:text-lime-green-300 transition-colors duration-300 neon-hover">Shop Products</Link></li>
                <li><Link href="/wellness" className="hover:text-lime-green-300 transition-colors duration-300 neon-hover">Wellness Guide</Link></li>
                <li><Link href="/contact" className="hover:text-lime-green-300 transition-colors duration-300 neon-hover">Visit Us</Link></li>
              </ul>
            </div>
            <div className="hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-3 text-lime-green-400">Contact</h3>
              <p className="text-deep-purple-200">Indianapolis, IN</p>
              <p className="text-deep-purple-200">Open Daily: 10am - 8pm</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-deep-purple-800 text-center text-deep-purple-200">
            <p>&copy; 2025 Mojo's Hemp House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}