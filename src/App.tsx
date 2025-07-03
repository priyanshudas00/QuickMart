import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Categories />
      <HowItWorks />
      <Features />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;