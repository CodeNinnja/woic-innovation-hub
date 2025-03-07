
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import FeatureCard from '@/components/FeatureCard';
import { Code, Cpu, BookOpen, Building2, Microscope, Lightbulb, Check } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Reimagining Possibilities, Redefining the Future
            </h1>
            <p className="text-xl mb-8 animate-slide-up">
              Innovation isn't just a concept—it's our commitment at Wale Opejin Innovation Centre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/contact">
                <Button className="bg-white text-woic-primary hover:bg-gray-100 text-base px-8 py-6">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-woic-primary text-base px-8 py-6">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sustainability Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Sustainability at WOIC" 
            subtitle="Creating long-term impact through sustainable innovation"
          />
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                At Wale Opejin Innovation Centre (WOIC), sustainability isn't just a concept—it's the foundation of everything we do. As a hub for innovation, research, and entrepreneurship, we are committed to long-term growth and impact.
              </p>
              <p className="text-gray-700 mb-6">
                Our approach integrates financial sustainability, cutting-edge training programs, strategic partnerships, and responsible resource management to create a thriving ecosystem for learning and development.
              </p>
              <ul className="space-y-3">
                {['Financial sustainability', 'Cutting-edge training', 'Strategic partnerships', 'Responsible resource management'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-woic-success mt-1 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-woic-primary">Our Commitment</h3>
              <p className="mb-6">
                We're dedicated to building a sustainable innovation ecosystem that benefits:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold mb-2">Individuals</h4>
                  <p className="text-sm">Through skill development and career opportunities</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold mb-2">Businesses</h4>
                  <p className="text-sm">By fostering innovation and growth</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold mb-2">Communities</h4>
                  <p className="text-sm">With economic development and social impact</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold mb-2">Environment</h4>
                  <p className="text-sm">Through responsible and sustainable practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Services" 
            subtitle="WOIC is a dynamic space designed to empower individuals, businesses, and researchers"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={BookOpen}
              title="Training Programs"
              description="Hands-on learning in tech, soft skills, and vocational training designed for the future workforce."
            />
            <ServiceCard 
              icon={Building2}
              title="Office Space Rentals"
              description="Fully equipped workspaces that fuel productivity for individuals and teams with flexible rental options."
            />
            <ServiceCard 
              icon={Microscope}
              title="Research & Development"
              description="Collaborative innovation with universities and businesses to drive breakthroughs in technology and solutions."
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button className="btn-primary">Explore All Services</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Training Highlights */}
      <section className="py-20 bg-woic-dark text-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Training Program Highlights" 
            subtitle="Building the skills needed for tomorrow's challenges"
            centered
            light
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Code, title: "Coding" },
              { icon: Cpu, title: "Robotics" },
              { icon: Lightbulb, title: "Artificial Intelligence" },
              { icon: BookOpen, title: "STEM" },
            ].map((item, index) => (
              <div key={index} className="bg-woic-dark bg-opacity-50 p-6 rounded-lg text-center border border-gray-700">
                <div className="bg-woic-primary bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-woic-primary" />
                </div>
                <h3 className="text-xl font-medium">{item.title}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/hub">
              <Button className="bg-white text-woic-primary hover:bg-gray-100">
                Discover Our Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-woic-primary to-woic-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of the Future of Innovation
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking for a place to learn, work, or collaborate, WOIC is your hub for growth.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-woic-primary hover:bg-gray-100 text-lg px-8 py-6">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Why Choose Us?" 
            subtitle="What makes WOIC stand out from other innovation centers"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-woic-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert-Led Solutions</h3>
              <p className="text-gray-600">
                Our team brings experience from various industries to help you innovate effectively.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-woic-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tailored Strategies</h3>
              <p className="text-gray-600">
                Every business is unique, and our solutions are customized to fit your specific goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-woic-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">End-to-End Support</h3>
              <p className="text-gray-600">
                From ideation to execution, we're with you at every step of your innovation journey.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="py-16 bg-woic-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Build the Future Together</h2>
          <p className="text-xl mb-8">
            Looking to transform your business with expert innovation consulting? Let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-woic-primary hover:bg-gray-100">
                Book a Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-woic-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
