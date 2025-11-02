import React from 'react';

function Services() {
  const services = [
    {
      id: 1,
      name: "Hair Cutting & Styling",
      price: "₹500 - ₹2000",
      duration: "1-2 hours",
      icon: "✂️",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Hair Coloring",
      price: "₹1500 - ₹5000",
      duration: "2-3 hours",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Hair Treatment",
      price: "₹1000 - ₹3000",
      duration: "1-2 hours",
      icon: "💆",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      name: "Bridal Makeover",
      price: "₹5000 - ₹15000",
      duration: "3-4 hours",
      icon: "👰",
      gradient: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-600">Professional hair care services for every occasion</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className={`bg-gradient-to-r ${service.gradient} h-2`}></div>
              <div className="p-6 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-2xl font-bold text-gray-900 mb-2">{service.price}</p>
                <p className="text-gray-500 mb-4">{service.duration}</p>
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;