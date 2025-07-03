import React, { useState } from 'react';
import { Clock, Shield, Truck, Star, Headphones, Leaf } from 'lucide-react';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Clock,
      title: '10-Minute Delivery',
      description: 'Lightning-fast delivery that brings groceries to your door in just 10 minutes',
      color: 'from-blue-500 to-blue-600',
      stats: '98% on-time delivery'
    },
    {
      icon: Shield,
      title: '100% Safe & Hygienic',
      description: 'All products are carefully sanitized and packaged with utmost care',
      color: 'from-green-500 to-green-600',
      stats: 'ISO certified facilities'
    },
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'No delivery charges on orders above ₹99. Save more with every order',
      color: 'from-orange-500 to-orange-600',
      stats: 'Save ₹50 per order'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Hand-picked fresh produce and premium brands at competitive prices',
      color: 'from-purple-500 to-purple-600',
      stats: '4.8★ quality rating'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you with any queries',
      color: 'from-pink-500 to-pink-600',
      stats: '<2 min response time'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable packaging and eco-friendly delivery practices',
      color: 'from-emerald-500 to-emerald-600',
      stats: '100% recyclable packaging'
    }
  ];

  const stats = [
    { value: '500K+', label: 'Happy Customers' },
    { value: '10M+', label: 'Orders Delivered' },
    { value: '50+', label: 'Cities Covered' },
    { value: '4.8★', label: 'App Rating' }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best grocery shopping experience with unmatched quality and service
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                {feature.description}
              </p>
              
              {/* Stats appear on hover */}
              <div className={`transition-all duration-300 ${
                hoveredFeature === index ? 'opacity-100 max-h-10' : 'opacity-0 max-h-0'
              } overflow-hidden`}>
                <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${feature.color} bg-opacity-10 rounded-full`}>
                  <span className="text-sm font-medium text-gray-700">{feature.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-2 group-hover:text-green-700 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;