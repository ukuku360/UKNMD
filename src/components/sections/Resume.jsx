import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  const experiences = [
    {
      id: 1,
      role: 'Data Science Student',
      company: 'University of Melbourne',
      duration: '2022 - Present',
      description: 'Focusing on machine learning, deep learning, and data analysis. Working on various academic projects to apply theoretical knowledge into practical solutions.',
      technologies: ['Python', 'Data Analysis', 'Machine Learning', 'Deep Learning'],
    },
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science',
      institution: 'University of Melbourne',
      duration: '2022 - 2026 (Expected)',
      description: 'Major in Data Science. Planning to join or form study groups focused on machine learning and deep learning.',
    },
  ];

  const skills = [
    'Python', 'C', 'Java', 'pandas', 'NumPy', 'Matplotlib',
    'scikit-learn', 'PyTorch', 'TensorFlow', 'Linear Regression', 'Polynomial Regression', 'SVR',
    'Natural Language Processing', 'Computer Vision', 'Data Visualization', 'Data Analysis',
  ];

  const languages = [
    { name: 'Korean', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'Japanese', level: 'Basic conversational' },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Resume
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
            My educational journey and technical skills at a glance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Experience Section */}
          <motion.div
            className="space-y-10"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
              <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700 ml-4"></div>
            </div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{exp.role}</h4>
                  <span className="text-sm font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 py-1 px-3 rounded-full">
                    {exp.duration}
                  </span>
                </div>
                <h5 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">{exp.company}</h5>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="space-y-10">
            {/* Education Section */}
            <motion.div
              className="space-y-6"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
                <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700 ml-4"></div>
              </div>

              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{edu.degree}</h4>
                    <span className="text-sm font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 py-1 px-3 rounded-full">
                      {edu.duration}
                    </span>
                  </div>
                  <h5 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">{edu.institution}</h5>
                  <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Section */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h3>
                <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700 ml-4"></div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Languages Section */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Languages</h3>
                <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700 ml-4"></div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="space-y-4">
                  {languages.map((language, index) => (
                    <motion.div
                      key={language.name}
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <span className="font-medium text-gray-800 dark:text-gray-200">{language.name}</span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">
                        {language.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Download Resume */}
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Full Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;