"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    closed: {
      x: 400, // or another number representing the off-screen position in px
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
    open: {
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
  };

  return (
    <header className="sfg__bg-dark sfg__text-light sticky top-0 z-50 py-4 px-6 md:px-12">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="font-inter text-2xl font-bold">
          <Image 
            src="/temp_logo.svg"
            width={80}
            height={80}
            alt="SFG WEB Logo"
          />
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="font-roboto hover:text-accent transition-colors">
            About
          </Link>
          <Link href="#portfolio" className="font-roboto hover:text-accent transition-colors">
            Portfolio
          </Link>
          <Link href="#contact" className="font-roboto hover:text-accent transition-colors">
            Contact
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="flex md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      {/* Off-Canvas Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 w-3/4 max-w-xs bg-primary text-light z-50 flex flex-col p-6 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <button
              className="self-end text-2xl focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            <div className="flex flex-col space-y-6 mt-8">
              <Link
                href="#about"
                className="font-roboto text-lg hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="#portfolio"
                className="font-roboto text-lg hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="font-roboto text-lg hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 sfg__bg-dark sfg__text-light  z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}