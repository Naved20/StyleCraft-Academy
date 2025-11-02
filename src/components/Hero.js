import React from 'react';

function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Master the Art of 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Hairstyling</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transform your passion into profession with industry-leading training and premium salon services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Explore Courses
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all duration-300">
                Book Service
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl h-96 flex items-center justify-center shadow-2xl">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">💇‍♀️</div>
                <p className="text-xl font-semibold">Professional Styling</p>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-full w-24 h-24 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">50% Off</span>
            </div>
<div className="absolute bottom-6 right-6">
  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-gray-200">
    <p className="text-sm font-medium text-gray-700">⭐ Expert Trainers</p>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;