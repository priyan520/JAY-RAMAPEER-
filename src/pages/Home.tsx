import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { Truck, Package, Shield, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      
      {/* About Preview Section */}
      <motion.section 
        className="py-32 bg-white dark:bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative h-[600px] rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80" 
                alt="Trading office"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
            <div className="space-y-8">
              <motion.h2 
                className="text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                {...fadeInUp}
              >
                Two Decades of Excellence in Trading
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300"
                {...fadeInUp}
              >
                Since our establishment, Jay Ramapeer Traders has been at the forefront of wholesale trading,
                building lasting relationships with clients across India and beyond.
              </motion.p>
              <motion.div {...fadeInUp}>
                <Link 
                  to="/about"
                  className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:gap-4 transition-all"
                >
                  <span className="text-lg font-semibold">Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Specialties Section */}
      <section className="py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-20"
            {...fadeInUp}
          >
            Our Specialties
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            <SpecialtyCard
              icon={<Truck className="w-8 h-8" />}
              title="Fast Delivery"
              description="Quick and reliable shipping across India"
              delay={0.1}
            />
            <SpecialtyCard
              icon={<Package className="w-8 h-8" />}
              title="Quality Products"
              description="Premium quality assured products"
              delay={0.2}
            />
            <SpecialtyCard
              icon={<Shield className="w-8 h-8" />}
              title="Secure Trading"
              description="Safe and secure business transactions"
              delay={0.3}
            />
            <SpecialtyCard
              icon={<Phone className="w-8 h-8" />}
              title="24/7 Support"
              description="Round-the-clock customer service"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-20"
            {...fadeInUp}
          >
            Featured Products
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            <ProductPreview
              image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
              title="Premium Electronics"
              description="High-quality electronic products"
              delay={0.1}
            />
            <ProductPreview
              image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
              title="Modern Gadgets"
              description="Latest technology gadgets"
              delay={0.2}
            />
            <ProductPreview
              image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800"
              title="Smart Devices"
              description="Innovative smart solutions"
              delay={0.3}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const SpecialtyCard = ({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg group"
  >
    <div className="text-indigo-600 dark:text-indigo-400 mb-6 transform group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

const ProductPreview = ({
  image,
  title,
  description,
  delay,
}: {
  image: string;
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -10 }}
    className="group"
  >
    <div className="relative h-80 rounded-xl overflow-hidden mb-6">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
    </div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

export default Home;