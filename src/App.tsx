import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Shield, Upload, Image as ImageIcon, Download, Coffee, Github, Code, ArrowRight } from 'lucide-react';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import DemoSection from './components/DemoSection';
import CreatorPage from './components/CreatorPage';
import ContactPage from './components/ContactPage';
import DownloadPage from './components/DownloadPage';
import Button from './components/Button';

function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const featuresRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);

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
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#5D3FD3_1px,transparent_1px)] [background-size:20px_20px] opacity-20 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-teal-900/20"></div>
      </div>

      {/* Navigation */}
      <header className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-purple-500" />
              <span className="font-bold text-xl">ShadowMask</span>
            </Link>
            
            <nav className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} md:space-x-8 text-sm ${isMenuOpen ? 'flex-col absolute top-full left-0 right-0 bg-gray-900/95 p-4 space-y-4 md:space-y-0 border-t border-gray-800' : 'md:flex-row md:relative md:bg-transparent md:p-0 md:border-0'}`}>
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
              <Link 
                to="/contact" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
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

            <div className="flex items-center space-x-4">
              <Link to="/download" className="hidden md:flex">
                <Button>
                  Download
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <button 
                className="md:hidden text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}

function HomePage() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      <section ref={featuresRef} className="py-24 bg-gray-900">
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
              title="Adversarial Patterns"
              description="Creates subtle, random cosmetic distortions targeting critical facial regions to confuse AI classifiers."
            />
            
            <FeatureCard 
              icon={<Code className="h-6 w-6 text-amber-500" />}
              title="Encoder Attack"
              description="Alters how AI models encode the image, making it undetectable to automated systems."
            />
            
            <FeatureCard 
              icon={<ArrowRight className="h-6 w-6 text-red-500" />}
              title="Diffusion Attack"
              description="Tricks generative AI so any attempted edits result in unrealistic or corrupted outputs."
            />
            
            <FeatureCard 
              icon={<Upload className="h-6 w-6 text-blue-500" />}
              title="DMI Metadata"
              description="Embeds special DMI-PROHIBITED metadata to signal AI scrapers not to use images for training."
            />
            
            <FeatureCard 
              icon={<Coffee className="h-6 w-6 text-green-500" />}
              title="Cross-Platform"
              description="Works seamlessly on Windows, macOS, Linux, and Android devices."
            />
          </div>
        </div>
      </section>

      <DemoSection ref={demoRef} />

      <section className="py-24 bg-gradient-to-r from-purple-900/50 to-teal-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Your Face, Your Rules – Beyond AI's Reach ✨</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Take back control of your digital identity. Download ShadowMask today and protect your photos from unauthorized AI analysis.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/download')}>
              Download Now
              <Download className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open('https://github.com/John-Varghese-EH/ShadowMask', '_blank')}>
              View on GitHub
              <Github className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/creator" element={<Layout><CreatorPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="/download" element={<Layout><DownloadPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;