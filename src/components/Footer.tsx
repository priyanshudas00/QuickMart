import React, { useState } from 'react';
import { ShoppingCart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const handleSocialClick = (platform: string) => {
    alert(`Opening ${platform}...`);
  };

  const handleLinkClick = (link: string) => {
    alert(`Navigating to ${link}...`);
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">QuickMart</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Your trusted partner for fresh groceries and daily essentials, delivered in just 10 minutes.
            </p>
            
            {/* Newsletter Signup */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-lg outline-none focus:bg-gray-700 transition-colors duration-200"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-lg transition-colors duration-200 disabled:opacity-50"
                >
                  {isSubscribed ? '✓' : <Send className="w-4 h-4" />}
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('Facebook')}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('Twitter')}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('Instagram')}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('LinkedIn')}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => handleLinkClick('About Us')} className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left">About Us</button></li>
              <li><button onClick={() => handleLinkClick('How It Works')} className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left">How It Works</button></li>
              <li><button onClick={() => handleLinkClick('Categories')} className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left">Categories</button></li>
              <li><button onClick={() => handleLinkClick('Offers')} className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left">Offers</button></li>
              <li><button onClick={() => handleLinkClick('Careers')} className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left">Careers</button></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><button onClick={() => handleLinkClick('Help Center')} className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left">Help Center</button></li>
              <li><button onClick={() => handleLinkClick('Contact Us')} className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left">Contact Us</button></li>
              <li><button onClick={() => handleLinkClick('Track Order')} className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left">Track Order</button></li>
              <li><button onClick={() => handleLinkClick('Returns')} className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left">Returns</button></li>
              <li><button onClick={() => handleLinkClick('FAQ')} className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left">FAQ</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">123 Business Street</p>
                  <p className="text-gray-300 text-sm sm:text-base">New York, NY 10001</p>
                </div>
              </div>
              <button 
                onClick={() => alert('Calling +1 (555) 123-4567...')}
                className="flex items-center space-x-3 text-left hover:text-green-400 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </button>
              <button 
                onClick={() => alert('Opening email client...')}
                className="flex items-center space-x-3 text-left hover:text-green-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-green-400" />
                <p className="text-gray-300">support@quickmart.com</p>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 QuickMart. All rights reserved. Designed by{' '}
              <button
                onClick={() => window.open('https://www.linkedin.com/in/priyanshudas00', '_blank')}
                className="text-green-400 hover:underline focus:outline-none"
                aria-label="LinkedIn profile of Priyanshu Raj"
              >
                Priyanshu Raj
              </button>.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <button onClick={() => handleLinkClick('Privacy Policy')} className="text-gray-400 hover:text-green-400 transition-colors duration-200">Privacy Policy</button>
              <button onClick={() => handleLinkClick('Terms of Service')} className="text-gray-400 hover:text-green-400 transition-colors duration-200">Terms of Service</button>
              <button onClick={() => handleLinkClick('Cookie Policy')} className="text-gray-400 hover:text-green-400 transition-colors duration-200">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;