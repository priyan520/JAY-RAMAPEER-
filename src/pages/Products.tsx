import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '₹999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Electronics',
  },
  // Add more products...
];

const Products = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Our Products</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({
  name,
  price,
  image,
  category,
}: {
  name: string;
  price: string;
  image: string;
  category: string;
}) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
  >
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <span className="text-sm text-indigo-600 dark:text-indigo-400">{category}</span>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">{name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{price}</p>
      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-full hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors">
        View Details
      </button>
    </div>
  </motion.div>
);

export default Products;