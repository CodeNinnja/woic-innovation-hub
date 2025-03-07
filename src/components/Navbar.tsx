
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-woic-primary">WOIC</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-woic-primary font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-woic-primary font-medium">About Us</Link>
          <Link to="/services" className="text-gray-700 hover:text-woic-primary font-medium">Services</Link>
          <Link to="/hub" className="text-gray-700 hover:text-woic-primary font-medium">Hub</Link>
          <Link to="/contact" className="text-gray-700 hover:text-woic-primary font-medium">Contact</Link>
          <Button className="bg-woic-primary hover:bg-woic-secondary text-white">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-woic-primary font-medium py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-woic-primary font-medium py-2" onClick={toggleMenu}>About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-woic-primary font-medium py-2" onClick={toggleMenu}>Services</Link>
            <Link to="/hub" className="text-gray-700 hover:text-woic-primary font-medium py-2" onClick={toggleMenu}>Hub</Link>
            <Link to="/contact" className="text-gray-700 hover:text-woic-primary font-medium py-2" onClick={toggleMenu}>Contact</Link>
            <Button className="bg-woic-primary hover:bg-woic-secondary text-white">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
