import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User, MapPin, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useState('Select Location');
  const [showLocationModal, setShowLocationModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const locations = [
    'New York, NY',
    'Los Angeles, CA',
    'Chicago, IL',
    'Houston, TX',
    'Phoenix, AZ',
    'Philadelphia, PA'
  ];

  const handleLocationSelect = (selectedLocation: string) => {
    setLocation(selectedLocation);
    setShowLocationModal(false);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center cursor-pointer">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <span className="ml-2 text-xl lg:text-2xl font-bold text-gray-900">QuickMart</span>
              </div>
            </div>

            {/* Location - Hidden on mobile */}
            <div className="hidden md:flex items-center">
              <button 
                onClick={() => setShowLocationModal(true)}
                className="flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 rounded-lg px-3 py-2 transition-colors duration-200"
              >
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-700 max-w-32 truncate">{location}</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a href="#categories" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Categories</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors font-medium">How it Works</a>
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Features</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</a>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              <div className="hidden sm:flex items-center space-x-2">
                <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200">
                  <User className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setCartCount(cartCount + 1)}
                  className="relative p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {/* Mobile Location */}
              <button 
                onClick={() => setShowLocationModal(true)}
                className="flex items-center space-x-2 w-full px-3 py-2 text-left text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{location}</span>
              </button>
              
              <a href="#categories" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200">Categories</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200">How it Works</a>
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200">Features</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200">Contact</a>
              
              {/* Mobile Cart and User */}
              <div className="flex items-center space-x-4 px-3 py-2">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors duration-200">
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </button>
                <button 
                  onClick={() => setCartCount(cartCount + 1)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                >
                  <div className="relative">
                    <ShoppingCart className="w-5 h-5" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <span>Cart ({cartCount})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Location Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Select Location</h3>
              <button 
                onClick={() => setShowLocationModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2">
              {locations.map((loc, index) => (
                <button
                  key={index}
                  onClick={() => handleLocationSelect(loc)}
                  className="w-full text-left px-4 py-3 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors duration-200"
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;