
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-woic-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Wale Opejin Innovation Centre</h3>
            <p className="mb-4 text-gray-300">Reimagining possibilities, Redefining the Future</p>
            <p className="text-gray-300">Innovation isn't just a concept—it's our commitment.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/hub" className="text-gray-300 hover:text-white transition-colors">Training & Research</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/hub" className="text-gray-300 hover:text-white transition-colors">Training Programs</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Office Space Rentals</Link></li>
              <li><Link to="/hub" className="text-gray-300 hover:text-white transition-colors">Research & Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Consultancy Services</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Digital Libraries</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-woic-primary mt-0.5" />
                <p className="text-gray-300">Wale Opejin Innovation Centre, Gbongan Rd, Ode Omu 220104, Osun</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-woic-primary" />
                <a href="mailto:info@waleopjinfoundation.org" className="text-gray-300 hover:text-white transition-colors">info@waleopjinfoundation.org</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-woic-primary" />
                <a href="mailto:sales@waleopjinfoundation.org" className="text-gray-300 hover:text-white transition-colors">sales@waleopjinfoundation.org</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Wale Opejin Innovation Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
