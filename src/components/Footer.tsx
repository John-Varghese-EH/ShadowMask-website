import React from 'react';
import { Shield, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-purple-500" />
              <span className="font-bold text-xl">ShadowMask</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your Face, Your Rules – Beyond AI's Reach ✨
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/John-Varghese-EH/ShadowMask" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/Cyber__Trinity" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/john--varghese/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/John-Varghese-EH/ShadowMask/wiki" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/John-Varghese-EH/ShadowMask/wiki/API-Reference" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/John-Varghese-EH/ShadowMask" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://pypi.org/project/shadowmask/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  PyPI Package
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Downloads</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/download" className="text-gray-400 hover:text-white transition-colors">
                  Windows
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-gray-400 hover:text-white transition-colors">
                  macOS
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-gray-400 hover:text-white transition-colors">
                  Linux
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-gray-400 hover:text-white transition-colors">
                  Android
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/creator" className="text-gray-400 hover:text-white transition-colors">
                  Creator
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/John-Varghese-EH/ShadowMask/blob/main/LICENSE" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p className="mb-2">© 2025 ShadowMask. All rights reserved.</p>
          <p>
            Made with ❤️ by{' '}
            <a 
              href="https://github.com/John-Varghese-EH" 
              target="_blank" 
              rel="noreferrer" 
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              John Varghese (J0X)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;