import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Resume from '../components/sections/Resume';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;