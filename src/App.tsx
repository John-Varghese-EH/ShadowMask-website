import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Shield, Upload, Image as ImageIcon, Download, Coffee, Github, Code, ArrowRight } from 'lucide-react';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import DemoSection from './components/DemoSection';
import CreatorPage from './components/CreatorPage';
import DownloadPage from './components/DownloadPage';
import ContactForm from './components/ContactForm';
import Button from './components/Button';

function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const featuresRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      <header className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-purple-500" />
            <span className="font-bold text-xl">ShadowMask</span>
          </Link>
          <nav className="hidden md:flex space-x-8 text-sm">
            <button 
              onClick={() => scrollToSection(featuresRef)} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection(demoRef)} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Demo
            </button>
            <Link 
              to="/download" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Download
            </Link>
            <button 
              onClick={() => scrollToSection(contactRef)} 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
            <Link 
              to="/creator" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Creator
            </Link>
            <a 
              href="https://github.com/John-Varghese-EH/ShadowMask" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </nav>
          <Link to="/download">
            <Button className="hidden md:flex">
              Download
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <button className="md:hidden text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {children}
      
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <section id="features" className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Advanced Protection Features</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            ShadowMask utilizes cutting-edge techniques to shield your images from AI systems
            while keeping them visually unchanged to human viewers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ImageIcon className="h-6 w-6 text-purple-500" />}
              title="Alpha Layer Attacks"
              description="Manipulates PNG transparency layers to disrupt AI facial recognition while remaining visually unchanged to humans."
            />
            
            <FeatureCard 
              icon={<Shield className="h-6 w-6 text-teal-500" />}
              title="Adversa