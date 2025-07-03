import React, { useState } from 'react';
import { Smartphone, Star, Download, Apple, Play } from 'lucide-react';

const DownloadApp = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const handleAppStoreClick = () => {
    alert('Redirecting to App Store...');
  };

  const handleGooglePlayClick = () => {
    alert('Redirecting to Google Play Store...');
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-green-600 to-emerald-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Download Our App
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-green-100">
                Get the best shopping experience with our mobile app. Order faster, track deliveries, and enjoy exclusive app-only deals.
              </p>
            </div>

            {/* App Features */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Download className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm sm:text-base text-green-100">Lightning-fast ordering</span>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm sm:text-base text-green-100">Exclusive app-only offers</span>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm sm:text-base text-green-100">Real-time order tracking</span>
              </div>
            </div>

            {/* Email Notification */}
            <div className="bg-white bg-opacity-10 rounded-2xl p-4 sm:p-6">
              <h4 className="text-lg font-semibold mb-3">Get notified when app launches</h4>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 outline-none"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50"
                >
                  {isSubmitted ? 'Subscribed!' : 'Notify Me'}
                </button>
              </form>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleAppStoreClick}
                className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Apple className="w-5 h-5 text-black" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
              <button 
                onClick={handleGooglePlayClick}
                className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 text-black" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            {/* App Rating */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">4.8★</div>
                <div className="text-xs sm:text-sm text-green-100">App Store</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">4.7★</div>
                <div className="text-xs sm:text-sm text-green-100">Google Play</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">1M+</div>
                <div className="text-xs sm:text-sm text-green-100">Downloads</div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center">
            <div className="relative w-64 sm:w-80 h-80 sm:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl overflow-hidden">
                {/* Phone Screen Content */}
                <div className="p-4 sm:p-6 text-white">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">QuickMart</h3>
                    <p className="text-green-100 text-xs sm:text-sm">Groceries in 10 minutes</p>
                  </div>
                  
                  {/* Mock App Interface */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-white bg-opacity-20 rounded-xl p-3 sm:p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-30 rounded-lg"></div>
                        <div className="flex-1">
                          <div className="h-2 sm:h-3 bg-white bg-opacity-30 rounded mb-2"></div>
                          <div className="h-1.5 sm:h-2 bg-white bg-opacity-20 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-xl p-3 sm:p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-30 rounded-lg"></div>
                        <div className="flex-1">
                          <div className="h-2 sm:h-3 bg-white bg-opacity-30 rounded mb-2"></div>
                          <div className="h-1.5 sm:h-2 bg-white bg-opacity-20 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
              <Download className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;