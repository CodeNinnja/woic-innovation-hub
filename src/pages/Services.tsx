
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Building2, 
  Microscope, 
  LineChart, 
  BookMarked,
  Users,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-woic-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            WOIC offers a comprehensive range of services designed to foster innovation, 
            learning, and business growth.
          </p>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="What We Offer" 
            subtitle="Comprehensive services to support your innovation journey"
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
            <ServiceCard 
              icon={LineChart}
              title="Consultancy Services"
              description="Expert guidance on market research, business strategy, technology implementation, and innovation solutions."
            />
            <ServiceCard 
              icon={BookMarked}
              title="Digital Libraries"
              description="Access to vast collections of research papers, industry reports, academic journals, and multimedia resources."
            />
            <ServiceCard 
              icon={Users}
              title="Community Programs"
              description="Initiatives that support digital literacy, entrepreneurship mentorship, and STEM education in underserved areas."
            />
          </div>
        </div>
      </section>
      
      {/* Office Space Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Office Space Rentals" 
                subtitle="Productive workspaces designed for innovation and collaboration"
              />
              <p className="text-gray-700 mb-6">
                Whether you need a quiet space to focus or a collaborative environment for your team, 
                WOIC provides the perfect setting for productivity and innovation.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-woic-success mt-1 mr-3" />
                  <span className="text-gray-700">Fully serviced office spaces for individuals and teams</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-woic-success mt-1 mr-3" />
                  <span className="text-gray-700">Meeting rooms and event venues with modern amenities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-woic-success mt-1 mr-3" />
                  <span className="text-gray-700">High-speed internet and IT infrastructure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-woic-success mt-1 mr-3" />
                  <span className="text-gray-700">Flexible rental options for short- and long-term needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-woic-success mt-1 mr-3" />
                  <span className="text-gray-700">Access to common areas and networking opportunities</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="btn-primary">Inquire About Space</Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Modern office space" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Digital Libraries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Digital library" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="order-1 md:order-2">
              <SectionTitle 
                title="Digital Libraries" 
                subtitle="Powering Innovation Through Knowledge"
              />
              <p className="text-gray-700 mb-6">
                At Wale Opejin Innovation Center, we believe that innovation starts with access to the right information. 
                Our digital library provides a vast collection of resources designed to support entrepreneurs, researchers, 
                and businesses in developing groundbreaking solutions.
              </p>
              <p className="text-gray-700 mb-6">
                Furthermore, WOIC creates online training modules and certifications, opening the door to a broader, 
                global audience through e-learning platforms.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-woic-success mt-1 mr-3" />
                  <span className="text-gray-700">Research papers and academic journals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-woic-success mt-1 mr-3" />
                  <span className="text-gray-700">Industry reports and market analyses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-woic-success mt-1 mr-3" />
                  <span className="text-gray-700">E-learning modules and certification courses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-woic-success mt-1 mr-3" />
                  <span className="text-gray-700">Multimedia resources and case studies</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="btn-primary">Access Resources</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Consultancy Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Consultancy Services" 
            subtitle="Expert guidance to navigate the rapidly evolving digital landscape"
            centered
          />
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            At Wale Opejin Innovation Center, we provide expert innovation consultancy to help businesses, 
            startups, and organizations navigate the rapidly evolving digital and technological landscapes.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Market Research & Data Analysis</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-woic-success mt-1 mr-2" />
                  <span className="text-gray-700 text-sm">Competitor analysis and benchmarking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-woic-success mt-1 mr-2" />
                  <span className="text-gray-700 text-sm">Consumer behavior insights</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-woic-success mt-1 mr-2" />
                  <span className="text-gray-700 text-sm">Market opportunity identification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-woic-success mt-1 mr-2" />
                  <span className="text-gray-700 text-sm">Data-driven decision frameworks</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Business Strategy & Innovation</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-woic-success mt-1 mr-2" />
                  <span className="text-gray-700 text-sm">Innovation roadmap development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-woic-success mt-1 mr-2" />
                  <span className="text-gray-700 text-sm">Business model transformation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-woic-success mt-1 mr-2" />
                  <span className="text-gray-700 text-sm">Strategic partnership identification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-woic-success mt-1 mr-2" />
                  <span className="text-gray-700 text-sm">Growth strategy formulation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Technology Implementation</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-woic-success mt-1 mr-2" />
                  <span className="text-gray-700 text-sm">Digital transformation advisory</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-woic-success mt-1 mr-2" />
                  <span className="text-gray-700 text-sm">Technology stack assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-woic-success mt-1 mr-2" />
                  <span className="text-gray-700 text-sm">AI and automation integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-woic-success mt-1 mr-2" />
                  <span className="text-gray-700 text-sm">Technology adoption roadmaps</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button className="btn-primary">Book a Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Corporate Social Responsibility */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Corporate Social Responsibility" 
            subtitle="Making a positive impact in our communities"
            centered
          />
          
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            We believe in giving back. WOIC partners with organizations to support community-driven 
            initiatives that create lasting positive change.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Digital literacy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Digital Literacy Programs</h3>
                <p className="text-gray-600">
                  Bridging the knowledge gap by teaching essential digital skills to underserved communities.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Entrepreneurship mentorship" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Entrepreneurship Mentorship</h3>
                <p className="text-gray-600">
                  Guiding young innovators and startups on their journey to creating sustainable businesses.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1564460549828-f0219a31bf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="STEM education" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">STEM Education</h3>
                <p className="text-gray-600">
                  Promoting science and technology education in schools and rural areas to inspire the next generation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-woic-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Build the Future Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
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

export default Services;
