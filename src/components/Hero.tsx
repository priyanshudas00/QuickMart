import React, { useState } from 'react';
import { ArrowRight, Clock, Truck, Shield, Search } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      // In a real app, this would navigate to search results
    }
  };

  const popularSearches = ['Milk', 'Bread', 'Eggs', 'Fruits', 'Vegetables'];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-4 lg:pt-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-emerald-400 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-teal-400 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-green-100 rounded-full text-green-700 font-medium text-sm">
                <Clock className="w-4 h-4 mr-2" />
                10-minute delivery
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Groceries in
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  10 minutes
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                Fresh groceries, daily essentials, and more delivered to your doorstep in just 10 minutes. Skip the queue, skip the traffic.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-lg p-2 flex items-center space-x-3 max-w-md mx-auto lg:mx-0">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                    placeholder="Search for products..."
                    className="w-full px-4 py-3 text-gray-700 placeholder-gray-400 border-none outline-none rounded-xl"
                  />
                  {isSearchFocused && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl mt-1 shadow-lg z-10">
                      <div className="p-3">
                        <p className="text-sm text-gray-500 mb-2">Popular searches:</p>
                        <div className="flex flex-wrap gap-2">
                          {popularSearches.map((item, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => setSearchQuery(item)}
                              className="px-3 py-1 bg-gray-100 hover:bg-green-100 text-sm text-gray-700 rounded-lg transition-colors duration-200"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 sm:px-6 py-3 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center space-x-2 font-medium"
                >
                  <Search className="w-4 h-4" />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </form>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Free Delivery</p>
                  <p className="text-xs text-gray-500">On orders above ₹99</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">100% Safe</p>
                  <p className="text-xs text-gray-500">Hygiene guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Grid */}
          <div className="relative mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-sm mx-auto lg:max-w-none">
              {/* Product Cards */}
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="w-full h-24 sm:h-32 bg-gradient-to-br from-red-100 to-red-200 rounded-xl mb-3 flex items-center justify-center">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-base sm:text-lg">🍎</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Fresh Apples</h3>
                  <p className="text-green-600 font-bold text-sm sm:text-base">₹120/kg</p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="w-full h-24 sm:h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mb-3 flex items-center justify-center">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-base sm:text-lg">🥕</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Carrots</h3>
                  <p className="text-green-600 font-bold text-sm sm:text-base">₹40/kg</p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 mt-4 sm:mt-8">
                <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="w-full h-24 sm:h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-3 flex items-center justify-center">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-base sm:text-lg">🥛</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Fresh Milk</h3>
                  <p className="text-green-600 font-bold text-sm sm:text-base">₹28/L</p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-3 sm:p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="w-full h-24 sm:h-32 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl mb-3 flex items-center justify-center">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-base sm:text-lg">🍌</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Bananas</h3>
                  <p className="text-green-600 font-bold text-sm sm:text-base">₹60/kg</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Clock className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-1000">
              <Truck className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;