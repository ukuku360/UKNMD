import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../../data/social';

const SocialLinks = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;