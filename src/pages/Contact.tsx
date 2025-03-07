
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-woic-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team to learn more about our services or to discuss 
            how we can help you achieve your innovation goals.
          </p>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Get In Touch" 
                subtitle="We're here to answer your questions"
              />
              
              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-woic-primary focus:border-woic-primary"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-woic-primary focus:border-woic-primary"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-woic-primary focus:border-woic-primary"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-woic-primary focus:border-woic-primary"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-woic-primary hover:bg-woic-secondary text-white w-full py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-woic-primary bg-opacity-10 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-woic-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Our Location</h4>
                    <p className="text-gray-600">Wale Opejin Innovation centre, Gbongan Rd, Ode Omu 220104, Osun</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-woic-primary bg-opacity-10 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-woic-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-gray-600">info@waleopejinfoundation.org</p>
                    <p className="text-gray-600">sales@waleopejinfoundation.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-woic-primary bg-opacity-10 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-woic-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-gray-600">+234 (0) 123 456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-woic-primary bg-opacity-10 rounded-full p-3 mr-4">
                    <Clock className="h-6 w-6 text-woic-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about WOIC"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">How can I get involved with the Innovation Center?</h3>
              <p className="text-gray-600">
                You can get involved by partnering with us on projects, attending our innovation workshops, 
                or even applying for a collaborative project that aligns with your business needs. Reach out 
                through our contact page to start a conversation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What kind of services do you offer?</h3>
              <p className="text-gray-600">
                We offer a variety of services, including product development, research and innovation consulting, 
                technology integration, and workshops designed to help your business thrive through innovation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Do you offer any training or workshops?</h3>
              <p className="text-gray-600">
                Yes! We offer workshops on various aspects of innovation, from idea generation to tech integration 
                and business model innovation. Our programs are designed to empower businesses to innovate sustainably.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">What makes your center different from other innovation hubs?</h3>
              <p className="text-gray-600">
                We focus on creating a tangible impact by combining technology, creativity, and business strategy. 
                Our approach is hands-on, collaborative, and driven by real-world outcomes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3">Who can benefit from your services?</h3>
              <p className="text-gray-600">
                Our services cater to startups, established businesses, tech enthusiasts, and entrepreneurs 
                looking to create breakthrough solutions, improve operational efficiency, and leverage 
                cutting-edge technologies for growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-96 bg-gray-300">
        <div className="h-full w-full">
          {/* Replace with actual map integration if needed */}
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <p className="text-gray-500 text-lg">Map location of WOIC will be displayed here</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
