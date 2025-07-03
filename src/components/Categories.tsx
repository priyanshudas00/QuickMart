import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const categories = [
    {
      name: 'Fruits & Vegetables',
      items: '500+ items',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      emoji: '🥬',
      products: ['Apples', 'Bananas', 'Carrots', 'Spinach']
    },
    {
      name: 'Dairy & Bakery',
      items: '200+ items',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      emoji: '🥛',
      products: ['Milk', 'Bread', 'Cheese', 'Yogurt']
    },
    {
      name: 'Meat & Fish',
      items: '150+ items',
      color: 'from-red-400 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      emoji: '🍖',
      products: ['Chicken', 'Fish', 'Mutton', 'Prawns']
    },
    {
      name: 'Snacks & Drinks',
      items: '300+ items',
      color: 'from-orange-400 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      emoji: '🍿',
      products: ['Chips', 'Cookies', 'Juice', 'Soda']
    },
    {
      name: 'Household',
      items: '250+ items',
      color: 'from-purple-400 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50',
      emoji: '🧽',
      products: ['Detergent', 'Soap', 'Tissues', 'Cleaners']
    },
    {
      name: 'Personal Care',
      items: '180+ items',
      color: 'from-pink-400 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      emoji: '🧴',
      products: ['Shampoo', 'Toothpaste', 'Lotion', 'Perfume']
    }
  ];

  const handleCategoryClick = (index: number) => {
    setSelectedCategory(selectedCategory === index ? null : index);
  };

  const handleViewAllCategories = () => {
    alert('Redirecting to all categories page...');
  };

  return (
    <section id="categories" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our wide range of fresh products and daily essentials
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <div key={index} className="relative">
              <div
                onClick={() => handleCategoryClick(index)}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${category.bgColor} rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300`}>
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${category.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                    <span className="text-lg sm:text-2xl">{category.emoji}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-xs sm:text-sm md:text-base leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-2 sm:mb-3">
                    {category.items}
                  </p>
                  <div className="flex items-center justify-center text-green-600 text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Shop Now</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                  </div>
                </div>
              </div>

              {/* Product Preview Dropdown */}
              {selectedCategory === index && (
                <div className="absolute top-full left-0 right-0 bg-white rounded-xl shadow-lg border border-gray-200 p-4 mt-2 z-10 animate-fadeIn">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Popular Items:</h4>
                  <div className="space-y-1">
                    {category.products.map((product, productIndex) => (
                      <button
                        key={productIndex}
                        onClick={() => alert(`Adding ${product} to cart`)}
                        className="block w-full text-left text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 px-2 py-1 rounded transition-colors duration-200"
                      >
                        {product}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <button 
            onClick={handleViewAllCategories}
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;