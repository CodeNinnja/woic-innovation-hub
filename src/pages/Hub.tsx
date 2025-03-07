import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Code, Brain, Shield, Database, Cpu, Lightbulb, Users, MessageSquare, Briefcase, ScissorsSquare, Wrench, Battery, Car, Camera, Flag, Microscope } from 'lucide-react';

const Hub = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-woic-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Training & Research Hub</h1>
          <p className="text-xl max-w-3xl mx-auto">
            The center of learning, skill development, and knowledge exchange, equipping learners with 
            practical, industry-relevant skills for a rapidly evolving digital economy.
          </p>
        </div>
      </section>
      
      {/* Hub Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="WOIL's Hub for Training & Research" 
                subtitle="Building skills for the future of work"
              />
              <p className="text-gray-700 mb-6">
                We offer structured programs designed to equip learners with practical, industry-relevant 
                skills, ensuring they stay ahead in a rapidly evolving digital economy.
              </p>
              <p className="text-gray-700 mb-6">
                Our approach combines hands-on learning, expert guidance, and real-world applications to 
                create impactful educational experiences.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Code className="h-5 w-5 text-woic-primary" />
                    <h4 className="font-bold">Tech Skills</h4>
                  </div>
                  <p className="text-sm text-gray-600">From coding to AI and cybersecurity</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-5 w-5 text-woic-primary" />
                    <h4 className="font-bold">Soft Skills</h4>
                  </div>
                  <p className="text-sm text-gray-600">Leadership, communication, and teamwork</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Wrench className="h-5 w-5 text-woic-primary" />
                    <h4 className="font-bold">Vocational Skills</h4>
                  </div>
                  <p className="text-sm text-gray-600">Practical training in creative and technical fields</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Microscope className="h-5 w-5 text-woic-primary" />
                    <h4 className="font-bold">Research</h4>
                  </div>
                  <p className="text-sm text-gray-600">Collaboration with academia and industry</p>
                </div>
              </div>
              <Link to="/contact">
                <Button className="btn-primary">Explore Our Programs</Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="WOIC Hub" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Skills */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Tech Skills" 
            subtitle="Building technical expertise for the digital world"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-woic-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Code className="h-7 w-7 text-woic-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Software Development</h3>
              <p className="text-gray-600 mb-4">
                From web development to mobile apps, learners gain hands-on experience with programming 
                languages like Python, JavaScript, and Flutter.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Web development</li>
                <li>• Mobile app creation</li>
                <li>• Full-stack development</li>
                <li>• UI/UX integration</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-woic-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-7 w-7 text-woic-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-4">
                Understand AI models, automation, and deep learning applications in business 
                and healthcare contexts.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• AI fundamentals</li>
                <li>• Neural networks</li>
                <li>• Natural language processing</li>
                <li>• Computer vision</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-woic-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-woic-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                Learn to protect digital assets, prevent cyber threats, and implement robust 
                security protocols for organizations.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Ethical hacking</li>
                <li>• Threat detection</li>
                <li>• Security auditing</li>
                <li>• Incident response</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-woic-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Database className="h-7 w-7 text-woic-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Science & Analytics</h3>
              <p className="text-gray-600 mb-4">
                Gain expertise in big data, predictive analytics, and business intelligence 
                to make data-driven decisions.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Data visualization</li>
                <li>• Statistical analysis</li>
                <li>• Predictive modeling</li>
                <li>• Business intelligence</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-woic-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Cpu className="h-7 w-7 text-woic-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Blockchain & Web3</h3>
              <p className="text-gray-600 mb-4">
                Explore decentralized technologies, smart contracts, and crypto-related 
                innovations shaping the future.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Blockchain fundamentals</li>
                <li>• Smart contract development</li>
                <li>• Decentralized applications</li>
                <li>• Web3 integration</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-woic-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-7 w-7 text-woic-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tech for Social Impact</h3>
              <p className="text-gray-600 mb-4">
                Use technology to solve real-world educational, agriculture, and healthcare challenges.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• EdTech solutions</li>
                <li>• AgriTech innovations</li>
                <li>• Healthcare applications</li>
                <li>• Sustainable tech</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Soft Skills */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Soft Skills" 
            subtitle="Beyond technical knowledge, developing the critical people skills for professional success"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-woic-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Flag className="h-7 w-7 text-woic-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Leadership & Strategic Thinking</h3>
              <p className="text-gray-600">
                Develop decision-making, conflict resolution, and team management skills to lead 
                effectively in complex environments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-woic-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <MessageSquare className="h-7 w-7 text-woic-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Business Communication</h3>
              <p className="text-gray-600">
                Master workplace communication, negotiation, and public speaking for effective 
                professional interactions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-woic-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-woic-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration & Teamwork</h3>
              <p className="text-gray-600">
                Learn effective ways to work in teams, both in-person and remotely, to achieve 
                shared organizational goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-woic-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-woic-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Emotional Intelligence</h3>
              <p className="text-gray-600">
                Understand how to navigate workplace dynamics and enhance professional relationships 
                through empathy and self-awareness.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-woic-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-7 w-7 text-woic-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Entrepreneurship & Business</h3>
              <p className="text-gray-600">
                From idea conception to scaling a business, learn practical steps to build a 
                sustainable enterprise and navigate market challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vocational Skills */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Vocational Skills" 
            subtitle="Merging traditional craftsmanship with modern innovations"
            centered
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-woic-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <ScissorsSquare className="h-7 w-7 text-woic-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">3D Tailoring & Fashion Technology</h3>
              <p className="text-gray-600 mb-4">
                Learn digital pattern-making, automated cutting, and 3D clothing visualization 
                for the future of fashion.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Digital fashion design</li>
                <li>• 3D garment modeling</li>
                <li>• Automated pattern creation</li>
                <li>• Smart textile integration</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-woic-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Wrench className="h-7 w-7 text-woic-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Plumbing & Smart Home Installations</h3>
              <p className="text-gray-600 mb-4">
                Master traditional plumbing techniques while integrating IoT-enabled home 
                automation solutions.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Traditional plumbing skills</li>
                <li>• Smart water systems</li>
                <li>• IoT device integration</li>
                <li>• Home automation</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-woic-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Battery className="h-7 w-7 text-woic-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Renewable Energy & Solar Installations</h3>
              <p className="text-gray-600 mb-4">
                Gain hands-on experience in designing and maintaining solar power systems and other 
                renewable energy solutions.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Solar panel installation</li>
                <li>• System maintenance</li>
                <li>• Energy storage solutions</li>
                <li>• Sustainable design</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-woic-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Car className="h-7 w-7 text-woic-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automotive Technology & EVs</h3>
              <p className="text-gray-600 mb-4">
                Learn the mechanics of modern vehicles, including hybrid and electric car servicing.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Vehicle diagnostics</li>
                <li>• EV maintenance</li>
                <li>• Charging infrastructure</li>
                <li>• Battery management</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-woic-primary bg-opacity-10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Camera className="h-7 w-7 text-woic-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Creative Media & Digital Content</h3>
              <p className="text-gray-600 mb-4">
                Explore photography, videography, motion graphics, and content creation for the digital age.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Digital photography</li>
                <li>• Video production</li>
                <li>• Motion graphics</li>
                <li>• Social media content</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              Our vocational programs ensure learners can turn their skills into sustainable careers by 
              combining hands-on learning with business and marketing strategies.
            </p>
            <Link to="/contact">
              <Button className="btn-primary">Enroll in a Program</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Research Initiatives */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Research Initiatives" 
            subtitle="Collaborating to drive groundbreaking innovation"
            centered
          />
          
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            WOIC collaborates with universities, research institutions, and industry leaders to conduct 
            groundbreaking studies across various disciplines.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Brain className="h-6 w-6 text-woic-primary mr-2" />
                Artificial Intelligence & Automation
              </h3>
              <p className="text-gray-600 mb-4">
                Driving efficiency in industries through smart algorithms and robotics.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <div className="bg-woic-primary rounded-full w-5 h-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">R</div>
                  <span>Adaptive learning systems for personalized education</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-woic-primary rounded-full w-5 h-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">R</div>
                  <span>Industrial automation for manufacturing efficiency</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-woic-primary rounded-full w-5 h-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">R</div>
                  <span>AI applications in agricultural yield optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Users className="h-6 w-6 text-woic-primary mr-2" />
                HealthTech & Telemedicine
              </h3>
              <p className="text-gray-600 mb-4">
                Exploring the impact of digital healthcare solutions in improving medical access.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <div className="bg-woic-primary rounded-full w-5 h-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">R</div>
                  <span>Remote patient monitoring systems for rural healthcare</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-woic-primary rounded-full w-5 h-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">R</div>
                  <span>AI-assisted diagnostic tools for medical professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-woic-primary rounded-full w-5 h-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">R</div>
                  <span>Digital health record management for continuity of care</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Battery className="h-6 w-6 text-woic-primary mr-2" />
                Sustainable Development & Green Technology
              </h3>
              <p className="text-gray-600 mb-4">
                Researching clean energy solutions and sustainable urban planning.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <div className="bg-woic-primary rounded-full w-5 h-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">R</div>
                  <span>Advanced solar cell efficiency and energy storage</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-woic-primary rounded-full w-5 h-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">R</div>
                  <span>Smart city infrastructure for resource optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-woic-primary rounded-full w-5 h-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">R</div>
                  <span>Waste management and circular economy models</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Briefcase className="h-6 w-6 text-woic-primary mr-2" />
                Future of Work & Digital Economy
              </h3>
              <p className="text-gray-600 mb-4">
                Understanding shifts in global work trends and preparing businesses for the future.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <div className="bg-woic-primary rounded-full w-5 h-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">R</div>
                  <span>Remote work productivity and collaboration models</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-woic-primary rounded-full w-5 h-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">R</div>
                  <span>Digital skills gap analysis and workforce transformation</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-woic-primary rounded-full w-5 h-5 flex items-center justify-center text-white text-xs mr-2 mt-0.5">R</div>
                  <span>Emerging business models in the platform economy</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              By fostering a research-driven culture, WOIC remains at the forefront of technological advancements 
              and their practical applications.
            </p>
            <Link to="/contact">
              <Button className="btn-primary">Collaborate With Us</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-woic-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Learning Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking to develop new skills, conduct research, or find talent for your 
            business, WOIL is your partner for innovation and growth.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-woic-primary hover:bg-gray-100 text-lg px-8 py-6">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Hub;

