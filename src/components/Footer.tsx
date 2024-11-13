import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Store className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Jay Ramapeer Traders
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Your trusted partner in wholesale trading.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>123 Trading Street</li>
              <li>Mumbai, India</li>
              <li>Tel: +91 123 456 7890</li>
              <li>Email: contact@jayramapeertraders.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram />} href="#" />
              <SocialIcon icon={<Facebook />} href="#" />
              <SocialIcon icon={<Twitter />} href="#" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Jay Ramapeer Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a
    href={href}
    className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-gray-600 transition-colors"
  >
    {icon}
  </a>
);

export default Footer;