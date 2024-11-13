import React from 'react';
import { Coffee, Clock, MapPin } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20 bg-[#4A2D1C]" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Coffee className="w-8 h-8" />}
            title="Premium Beans"
            description="Sourced from the finest coffee regions around the world"
          />
          <FeatureCard
            icon={<Clock className="w-8 h-8" />}
            title="Fast Service"
            description="Quick preparation without compromising quality"
          />
          <FeatureCard
            icon={<MapPin className="w-8 h-8" />}
            title="Cozy Location"
            description="Comfortable atmosphere in the heart of the city"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-[#5D3D2C] p-8 rounded-xl text-white hover:bg-[#6E4E3D] transition-colors">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default Features;