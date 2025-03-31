import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'C', 'Java'],
    },
    {
      category: 'Data Science Tools & Libraries',
      items: ['pandas', 'NumPy', 'Matplotlib', 'scikit-learn', 'PyTorch', 'TensorFlow'],
    },
    {
      category: 'Machine Learning/Deep Learning',
      items: ['Regression models', 'NLP', 'Computer Vision'],
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-indigo-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get to know more about me, my background, and what I do.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-indigo-100 dark:bg-indigo-900/30 relative">
              <img 
                src="/images/yoonho_swiss.jpeg" 
                alt="Yoonho's profile picture" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold p-6 text-center">
              <div>
                <div className="text-3xl">2026</div>
                <div className="text-sm">Graduation Year</div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:pl-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              A passionate Data Science Student based in Melbourne, Australia
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              <strong>Name:</strong> Yoonho <br/>
              <strong>Birth Year:</strong> 2001 <br/>
              <strong>Nationality:</strong> Korean <br/>
              <strong>Current Residence:</strong> Melbourne, Australia
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a Data Science student with a passion for Deep Learning and AI. I'm currently pursuing my Bachelor of Science degree at the University of Melbourne, where I'm developing skills in machine learning, data analysis, and programming.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              When I'm not studying, you can find me solving mathematical problems, watching FC Barcelona matches, or exploring new topics in the field of AI. I'm always eager to learn and improve my skills in data science and machine learning.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-indigo-600 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Dog Walker</span>
              </div>
              
              <div className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-indigo-600 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Soccer Fan (FC Barcelona)</span>
              </div>
              
              <div className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-indigo-600 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Problem Solver</span>
              </div>
              
              <div className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-indigo-600 mr-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Continuous Learner</span>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Let's Talk
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </motion.div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-20">
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Skills
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={skillGroup.category}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4 text-center text-indigo-600 dark:text-indigo-400">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillGroup.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;