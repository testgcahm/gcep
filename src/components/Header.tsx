'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Donate', href: '/donate' },
  { name: 'Programs', href: '/programs' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const pathname = usePathname(); // Get current page URL
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo.png" alt="GCEP Logo" width={46} height={46} />
          <span className="text-lg font-bold">GCEP</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-2 rounded-md transition ${
                pathname === link.href ? 'bg-secondary text-white' : 'hover:text-tertiary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden cursor-pointer">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden absolute top-16 left-1/2 transform z-50 -translate-x-1/2 w-[90%] max-w-[220px] bg-secondary text-white rounded-lg shadow-lg py-4">
          <ul className="flex flex-col items-center space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 rounded-md ${
                    pathname === link.href ? 'bg-tertiary text-primary' : 'hover:bg-tertiary/80'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
