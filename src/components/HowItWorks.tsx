import React, { useState } from 'react';
import { Smartphone, ShoppingCart, Truck, Home, Play } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      icon: Smartphone,
      title: 'Download App',
      description: 'Download our app from App Store or Google Play Store',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      details: 'Available on iOS and Android. Quick 2-minute setup process.'
    },
    {
      icon: ShoppingCart,
      title: 'Place Order',
      description: 'Browse products and add items to your cart',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      details: 'Over 10,000 products to choose from. Easy search and filters.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Our delivery partner picks up your order',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      details: 'Real-time tracking. Professional delivery partners.'
    },
    {
      icon: Home,
      title: 'Enjoy at Home',
      description: 'Receive fresh groceries at your doorstep',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      details: 'Contactless delivery. Fresh and hygienic products.'
    }
  ];

  const handleStepClick = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  const handleStartShopping = () => {
    alert('Redirecting to app download...');
  };

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Getting your groceries delivered is easier than ever. Just follow these simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-orange-200 to-purple-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div 
                  onClick={() => handleStepClick(index)}
                  className="cursor-pointer"
                >
                  <div className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${step.bgColor} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center`}>
                      <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xs sm:text-sm font-bold text-gray-700">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                </div>

                {/* Expandable Details */}
                {activeStep === index && (
                  <div className="bg-gray-50 rounded-xl p-4 mt-4 animate-fadeIn">
                    <p className="text-sm text-gray-700">{step.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Ready to Get Started?
              </h3>
            </div>
            <p className="text-sm sm:text-base md:text-lg opacity-90 mb-6 max-w-md mx-auto">
              Join thousands of happy customers who trust us for their daily grocery needs
            </p>
            <button 
              onClick={handleStartShopping}
              className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Start Shopping Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;