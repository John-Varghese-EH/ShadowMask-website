import React, { forwardRef, useState } from 'react';
import { Shield, Upload, Check, ArrowRight } from 'lucide-react';
import Button from './Button';

const DemoSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600');
  const [protectedImage, setProtectedImage] = useState<string>('');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const applyProtection = () => {
    // Simulate image processing
    setIsProcessing(true);
    setTimeout(() => {
      // In a real implementation, this would be replaced with actual image processing
      setProtectedImage(selectedImage);
      setIsProcessing(false);
      setIsComplete(true);
    }, 2000);
  };

  const handleNextStep = () => {
    if (step === 3) {
      applyProtection();
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div ref={ref} className="py-24 bg-gray-950" id="demo">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">See ShadowMask in Action</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Protect your images with just a few clicks. Our demo shows how ShadowMask works to protect your privacy.
        </p>

        <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800">
          <div className="bg-gray-800 p-4 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-purple-500" />
              <h3 className="font-medium">ShadowMask Demo</h3>
            </div>
            <div className="flex space-x-4">
              <div className="text-sm text-gray-400">v1.0.0</div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center mb-8">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
                1
              </div>
              <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-purple-600' : 'bg-gray-700'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
                2
              </div>
              <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-purple-600' : 'bg-gray-700'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
                3
              </div>
              <div className={`flex-1 h-1 mx-2 ${isComplete ? 'bg-purple-600' : 'bg-gray-700'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${isComplete ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-400'}`}>
                <Check className="h-4 w-4" />
              </div>
            </div>

            <div className="min-h-64">
              {step === 1 && (
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gray-800 rounded-full mx-auto flex items-center justify-center">
                      <Upload className="h-8 w-8 text-purple-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Upload Your Image</h3>
                  <p className="text-gray-400 mb-6 max-w-md mx-auto">
                    Select an image you want to protect from AI recognition systems.
                  </p>
                  <div className="max-w-md mx-auto p-8 border-2 border-dashed border-gray-700 rounded-lg hover:border-purple-500 transition-colors">
                    <p className="text-gray-400">Drag & drop your image here or</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="imageUpload"
                    />
                    <label htmlFor="imageUpload">
                      <Button variant="outline" className="mt-3" as="span">
                        Browse Files
                      </Button>
                    </label>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gray-800 rounded-full mx-auto flex items-center justify-center">
                      <Shield className="h-8 w-8 text-teal-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Choose Protection Methods</h3>
                  <p className="text-gray-400 mb-6 max-w-md mx-auto">
                    Select which protection methods to apply to your image.
                  </p>
                  <div className="max-w-md mx-auto grid grid-cols-1 gap-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                      <input type="checkbox" id="alpha" className="w-4 h-4 accent-purple-600" defaultChecked />
                      <label htmlFor="alpha" className="flex-1 text-left">Alpha Layer Attacks</label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                      <input type="checkbox" id="adversarial" className="w-4 h-4 accent-purple-600" defaultChecked />
                      <label htmlFor="adversarial" className="flex-1 text-left">Adversarial Patterns</label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                      <input type="checkbox" id="encoder" className="w-4 h-4 accent-purple-600" defaultChecked />
                      <label htmlFor="encoder" className="flex-1 text-left">Encoder Attack</label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg border border-gray-700">
                      <input type="checkbox" id="metadata" className="w-4 h-4 accent-purple-600" defaultChecked />
                      <label htmlFor="metadata" className="flex-1 text-left">DMI-PROHIBITED Metadata</label>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gray-800 rounded-full mx-auto flex items-center justify-center">
                      <ArrowRight className="h-8 w-8 text-amber-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Preview Changes</h3>
                  <p className="text-gray-400 mb-6 max-w-md mx-auto">
                    Preview how your image will appear after protection is applied.
                  </p>
                  <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Original Image</p>
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <img 
                          src={selectedImage}
                          alt="Original" 
                          className="w-full object-cover h-48"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Protected Preview</p>
                      <div className="bg-gray-800 rounded-lg overflow-hidden relative">
                        <img 
                          src={selectedImage}
                          alt="Protected" 
                          className="w-full object-cover h-48"
                        />
                        <div className="absolute inset-0 bg-purple-500/10 flex items-center justify-center">
                          <div className="text-sm text-purple-200 bg-purple-900/80 px-3 py-1 rounded-full">
                            Protection Preview
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {isProcessing && (
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gray-800 rounded-full mx-auto flex items-center justify-center">
                      <div className="animate-spin h-8 w-8 border-4 border-purple-500 border-t-transparent rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Processing Image</h3>
                  <p className="text-gray-400 mb-6 max-w-md mx-auto">
                    Applying protection methods to your image...
                  </p>
                  <div className="w-full max-w-md mx-auto bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-purple-600 h-full w-2/3 animate-pulse"></div>
                  </div>
                </div>
              )}

              {isComplete && (
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-green-900/30 rounded-full mx-auto flex items-center justify-center">
                      <Check className="h-8 w-8 text-green-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Image Protected!</h3>
                  <p className="text-gray-400 mb-6 max-w-md mx-auto">
                    Your image has been successfully protected from AI recognition.
                  </p>
                  <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mb-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Original Image</p>
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <img 
                          src={selectedImage}
                          alt="Original" 
                          className="w-full object-cover h-48"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Protected Image</p>
                      <div className="bg-gray-800 rounded-lg overflow-hidden relative">
                        <img 
                          src={protectedImage}
                          alt="Protected" 
                          className="w-full object-cover h-48"
                        />
                        <div className="absolute inset-0 bg-green-500/10 flex items-center justify-center">
                          <div className="text-sm text-green-200 bg-green-900/80 px-3 py-1 rounded-full">
                            Protection Applied
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Button>
                      Download Protected Image
                    </Button>
                    <Button variant="outline" 
                      onClick={() => {
                        setStep(1);
                        setIsComplete(false);
                        setProtectedImage('');
                      }}
                    >
                      Protect Another Image
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {!isProcessing && !isComplete && (
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-800">
                <Button 
                  variant="outline" 
                  onClick={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}
                >
                  Back
                </Button>
                <Button onClick={handleNextStep}>
                  {step === 3 ? 'Apply Protection' : 'Next'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default DemoSection;