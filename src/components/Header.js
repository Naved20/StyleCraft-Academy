import React from 'react';

function Header({ setCurrentPage, currentPage }) {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">💈</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">StyleCraft Academy</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'services', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`font-semibold transition-all duration-300 focus:outline-none focus:ring-0 ${
                  currentPage === page 
                    ? 'text-purple-600 border-b-2 border-purple-600' 
                    : 'text-gray-600 hover:text-purple-500'
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-0">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;