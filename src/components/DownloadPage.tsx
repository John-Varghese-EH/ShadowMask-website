import React, { useEffect, useState } from 'react';
import { Download, Github, AppWindow as Windows, Apple, Link as Linux, Smartphone } from 'lucide-react';
import Button from './Button';

const DownloadPage = () => {
  const [userOS, setUserOS] = useState<string>('');

  useEffect(() => {
    const detectOS = () => {
      const platform = navigator.platform.toLowerCase();
      if (platform.includes('win')) return 'Windows';
      if (platform.includes('mac')) return 'macOS';
      if (platform.includes('linux')) return 'Linux';
      if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent)) {
        return 'Android';
      }
      return 'Unknown';
    };
    setUserOS(detectOS());
  }, []);

  const downloads = [
    {
      os: 'Windows',
      icon: Windows,
      version: '1.0.0',
      size: '24.5 MB',
      requirements: 'Windows 10 or later',
      link: '#'
    },
    {
      os: 'macOS',
      icon: Apple,
      version: '1.0.0',
      size: '28.2 MB',
      requirements: 'macOS 11 or later',
      link: '#'
    },
    {
      os: 'Linux',
      icon: Linux,
      version: '1.0.0',
      size: '22.8 MB',
      requirements: 'Ubuntu 20.04 or later',
      link: '#'
    },
    {
      os: 'Android',
      icon: Smartphone,
      version: '1.0.0',
      size: '15.6 MB',
      requirements: 'Android 8.0 or later',
      link: '#'
    }
  ];

  const userDownload = downloads.find(d => d.os === userOS);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Download ShadowMask</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose your platform and start protecting your images from AI recognition today.
          </p>
        </div>

        {userDownload && (
          <div className="max-w-2xl mx-auto mb-16 bg-gray-800/50 rounded-xl p-8 backdrop-blur-lg border border-purple-500/30">
            <h2 className="text-2xl font-bold mb-4">Recommended for your system</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <userDownload.icon className="h-8 w-8 text-purple-500 mr-4" />
                <div>
                  <h3 className="font-semibold">ShadowMask for {userDownload.os}</h3>
                  <p className="text-sm text-gray-400">Version {userDownload.version}</p>
                </div>
              </div>
              <Button>
                Download
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {downloads.map((download) => (
            <div key={download.os} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-purple-500/30 transition-all">
              <div className="flex items-center mb-4">
                <download.icon className="h-6 w-6 text-purple-500 mr-3" />
                <h3 className="text-xl font-semibold">{download.os}</h3>
              </div>
              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-400">Version {download.version}</p>
                <p className="text-sm text-gray-400">Size: {download.size}</p>
                <p className="text-sm text-gray-400">{download.requirements}</p>
              </div>
              <Button variant={download.os === userOS ? 'primary' : 'outline'} className="w-full">
                Download
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/John-Varghese-EH/ShadowMask" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5 mr-2" />
            View source code on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;