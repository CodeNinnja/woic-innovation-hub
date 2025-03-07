
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, Star, Target, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-woic-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Wale Opejin Innovation Centre</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A hub for technology, research, and entrepreneurship, driving innovation and sustainable development.
          </p>
        </div>
      </section>
      
      {/* Mission, Vision, Goals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-woic-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700">
                To create an ecosystem where technology, research, and entrepreneurship thrive, equipping individuals and businesses with the skills and resources to drive innovation, economic growth, and sustainable development.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-woic-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To be Africa's leading hub for technology-driven learning, research, and enterprise development, shaping the future of work and industry.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-center">Our Goals</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-woic-success mt-1 mr-2 flex-shrink-0" />
                  <span>To bridge the digital skills gap by providing world-class training in technology, soft skills, and vocational fields.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-woic-success mt-1 mr-2 flex-shrink-0" />
                  <span>To foster an innovation-driven community that supports startups, researchers, and industry professionals.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-woic-success mt-1 mr-2 flex-shrink-0" />
                  <span>To promote sustainability through responsible business practices and impactful CSR initiatives.</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-woic-success mt-1 mr-2 flex-shrink-0" />
                  <span>To create an inclusive space where collaboration drives groundbreaking solutions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Approach" 
            subtitle="How we drive innovation and create lasting impact"
            centered
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Innovation workspace" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Innovation Through Collaboration</h3>
              <p className="text-gray-700 mb-6">
                At WOIC, we believe that the most impactful innovations come from diverse perspectives working together. Our approach combines:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-woic-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">1</div>
                  <div>
                    <h4 className="font-bold">Skill Development</h4>
                    <p className="text-gray-600">Equipping individuals with practical, in-demand skills for the future economy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-woic-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">2</div>
                  <div>
                    <h4 className="font-bold">Research Integration</h4>
                    <p className="text-gray-600">Connecting academic research with real-world applications</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-woic-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">3</div>
                  <div>
                    <h4 className="font-bold">Entrepreneurship Support</h4>
                    <p className="text-gray-600">Helping innovators turn ideas into sustainable businesses</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-woic-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">4</div>
                  <div>
                    <h4 className="font-bold">Community Impact</h4>
                    <p className="text-gray-600">Ensuring innovations address real community needs and challenges</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Get answers to common questions about WOIC"
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How can I get involved with the Innovation Centre?",
                  answer: "You can get involved by partnering with us on projects, attending our innovation workshops, or even applying for a collaborative project that aligns with your business needs. Reach out through our contact page to start a conversation."
                },
                {
                  question: "What kind of services do you offer?",
                  answer: "We offer a variety of services, including product development, research and innovation consulting, technology integration, and workshops designed to help your business thrive through innovation."
                },
                {
                  question: "Do you offer any training or workshops?",
                  answer: "Yes! We offer workshops on various aspects of innovation, from idea generation to tech integration and business model innovation. Our programs are designed to empower businesses to innovate sustainably."
                },
                {
                  question: "What makes your center different from other innovation hubs?",
                  answer: "We focus on creating a tangible impact by combining technology, creativity, and business strategy. Our approach is hands-on, collaborative, and driven by real-world outcomes."
                },
                {
                  question: "Who can benefit from your services?",
                  answer: "Our services cater to startups, established businesses, tech enthusiasts, and entrepreneurs looking to create breakthrough solutions, improve operational efficiency, and leverage cutting-edge technologies for growth."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-woic-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Innovate With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of innovators, entrepreneurs, and change-makers to build solutions for tomorrow's challenges.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-woic-primary hover:bg-gray-100 text-lg px-8 py-6">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
