import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Globe } from 'lucide-react';

const CreatorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-gray-800/50 rounded-xl p-8 backdrop-blur-lg border border-gray-700">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 ring-4 ring-purple-500/30">
              <img src="/src/logo.gif" alt="John Varghese" className="w-full h-full object-cover" />
            </div>
            
            <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">
              John Varghese
            </h1>
            <p className="text-lg text-gray-400 mb-2">@Cyber_Trinity (J0X)</p>
            
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://github.com/John-Varghese-EH" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/john--varghese/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://x.com/Cyber__Trinity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/cyber__trinity/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://cybertrinity.neocities.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Globe className="h-6 w-6" />
              </a>
            </div>

            <div className="space-y-4 text-gray-300">
              <p className="flex items-center">
                <span className="mr-2">🎓</span>
                Student passionate about cybersecurity, digital innovation, and lifelong learning
              </p>
              <p className="flex items-center">
                <span className="mr-2">🛡️</span>
                Empowering digital safety through technology and awareness
              </p>
              <p className="flex items-center">
                <span className="mr-2">💡</span>
                Exploring new tech, frameworks, and creative solutions
              </p>
              <p className="flex items-center">
                <span className="mr-2">🤝</span>
                Open to collaborations, mentorship, and knowledge sharing
              </p>
            </div>

            <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-gray-700 w-full">
              <h2 className="text-xl font-semibold mb-4">About ShadowMask</h2>
              <p className="text-gray-400 mb-4">
                ShadowMask is a privacy-focused tool that protects your images from unauthorized AI-based facial recognition and scraping. Using advanced techniques like Alpha Layer Attacks and Adversarial Patterns, it ensures your photos remain visible to humans while being unreadable to AI systems.
              </p>
              <a 
                href="https://github.com/John-Varghese-EH/ShadowMask" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github className="h-5 w-5 mr-2" />
                View Project on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorPage;