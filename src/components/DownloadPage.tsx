import React, { useEffect, useState } from 'react';
import { Download, Windows, Apple, Linux, Smartphone } from 'lucide-react';
import Button from './Button';

const DownloadPage = () => {
  const [userOS, setUserOS] = useState<string>('');

  useEffect(() => {
    const detectOS = () => {
      const platform = navigator.platform.toLowerCase();
      if (platform.includes('win')) return 'windows';
      if (platform.includes('mac')) return 'macos';
      if (platform.includes('linux')) return 'linux';
      if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent)) {
        return 'android';
      }
      return 'unknown';
    };
    setUserOS(detectOS());
  }, []);

  const downloads = {
    windows: {
      icon: Windows,
      title: 'Windows',
      version: 'v1.0.0',
      size: '24.5 MB',
      requirements: 'Windows 10 or later',
      url: '#'
    },
    macos: {
      icon: Apple,
      title: 'macOS',
      version: 'v1.0.0',
      size: '22.8 MB',
      requirements: 'macOS 11 or later',
      url: '#'
    },
    linux: {
      icon: Linux,
      title: 'Linux',
      version: 'v1.0.0',
      size: '21.2 MB',
      requirements: 'Ubuntu 20.04 or equivalent',
      url: '#'
    },
    android: {
      icon: Smartphone,
      title: 'Android',
      version: 'v1.0.0',
      size: '15.6 MB',
      requirements: 'Android 8.0 or later',
      url: '#'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-4">Download ShadowMask</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Choose your platform and start protecting your images today.
        </p>

        {/* Recommended Download */}
        {userOS !== 'unknown' && downloads[userOS as keyof typeof downloads] && (
          <div className="max-w-2xl mx-auto mb-12 bg-purple-900/20 rounded-xl p-8 border border-purple-500/30">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Download className="h-5 w-5 mr-2 text-purple-400" />
              Recommended for Your System
            </h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {React.createElement(downloads[userOS as keyof typeof downloads].icon, {
                  className: "h-8 w-8 mr-3 text-purple-400"
                })}
                <div>
                  <h3 className="font-semibold">
                    ShadowMask for {downloads[userOS as keyof typeof downloads].title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {downloads[userOS as keyof typeof downloads].version} • {downloads[userOS as keyof typeof downloads].size}
                  </p>
                </div>
              </div>
              <Button>
                Download
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* All Downloads */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(downloads).map(([key, data]) => (
            <div key={key} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                {React.createElement(data.icon, { className: "h-6 w-6 mr-2 text-gray-400" })}
                <h3 className="font-semibold">{data.title}</h3>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-400">Version: {data.version}</p>
                <p className="text-sm text-gray-400">Size: {data.size}</p>
                <p className="text-sm text-gray-400">Requirements: {data.requirements}</p>
              </div>
              <Button variant={userOS === key ? 'primary' : 'outline'} className="w-full">
                Download
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
          <div className="space-y-2 text-gray-400">
            <p>
              <a href="#" className="text-purple-400 hover:text-purple-300">View Source Code</a>
              {' • '}
              <a href="#" className="text-purple-400 hover:text-purple-300">Installation Guide</a>
              {' • '}
              <a href="#" className="text-purple-400 hover:text-purple-300">Documentation</a>
            </p>
            <p className="text-sm">
              By downloading, you agree to our{' '}
              <a href="#" className="text-purple-400 hover:text-purple-300">Terms of Service</a>
              {' and '}
              <a href="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;