import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const About = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          {...fadeInUp}
        >
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-8">Our Story</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Jay Ramapeer Traders has been a trusted name in the trading industry for over two decades.
            We specialize in providing high-quality products to businesses across India, maintaining
            the highest standards of service and reliability.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <StatCard
            icon={<Award className="w-8 h-8" />}
            number="20+"
            label="Years Experience"
            delay={0.1}
          />
          <StatCard
            icon={<Users className="w-8 h-8" />}
            number="1000+"
            label="Happy Clients"
            delay={0.2}
          />
          <StatCard
            icon={<Globe className="w-8 h-8" />}
            number="50+"
            label="Cities Served"
            delay={0.3}
          />
          <StatCard
            icon={<TrendingUp className="w-8 h-8" />}
            number="95%"
            label="Growth Rate"
            delay={0.4}
          />
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="grid md:grid-cols-2 gap-16 items-center mb-32"
          {...fadeInUp}
        >
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Building Trust Through Quality
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our commitment to excellence and customer satisfaction has made us one of the most
              trusted trading companies in India. We believe in building long-term relationships
              with our clients through transparency, reliability, and consistent quality.
            </p>
          </div>
          <motion.div 
            className="relative h-[500px] rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1200&q=80"
              alt="Office building"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Vision Section */}
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          {...fadeInUp}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Our Vision</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            To become the most trusted and reliable trading partner for businesses across India,
            setting new standards in quality, service, and innovation in the trading industry.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const StatCard = ({
  icon,
  number,
  label,
  delay,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center group"
  >
    <div className="text-indigo-600 dark:text-indigo-400 mb-4 transform group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{number}</h3>
    <p className="text-gray-600 dark:text-gray-300">{label}</p>
  </motion.div>
);

export default About;