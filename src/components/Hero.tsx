import React from 'react';
import { Shield, ArrowDown } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  return (
    <div className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-teal-900/20"></div>
      
      {/* Animated particles/grid (simplified) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-full h-full bg-[radial-gradient(#5D3FD3_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/30 border border-purple-700/30 text-purple-400 text-sm mb-8">
            <Shield className="h-4 w-4 mr-2" />
            <span>Privacy Protection Tool</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-400">ShadowMask</span>
            <br />
            Protect Your Images from AI Recognition
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mb-10">
            Your Face, Your Rules – Beyond AI's Reach ✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg">
              Download Now
            </Button>
            <Button size="lg" variant="outline">
              Learn How It Works
            </Button>
          </div>

          <div className="w-full max-w-5xl relative">
            {/* Featured image mockup */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-center text-gray-400 text-sm">ShadowMask v1.0</div>
              </div>
              <div className="p-6">
                <img 
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Image protection demonstration" 
                  className="rounded w-full object-cover mb-4 h-64"
                />
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-700 rounded p-3 text-center">
                    <div className="text-sm text-gray-300">Original</div>
                  </div>
                  <div className="bg-gray-700 rounded p-3 text-center">
                    <div className="text-sm text-gray-300">Processing...</div>
                  </div>
                  <div className="bg-gray-700 rounded p-3 text-center border-2 border-purple-500">
                    <div className="text-sm text-purple-300">Protected</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 text-sm mb-2">Learn More</span>
        <ArrowDown className="h-5 w-5 text-gray-400 animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;