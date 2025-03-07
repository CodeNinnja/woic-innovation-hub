
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, link = "/contact" }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 card-hover">
      <div className="bg-primary bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link}>
        <Button className="w-full bg-primary hover:bg-primary/90">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
