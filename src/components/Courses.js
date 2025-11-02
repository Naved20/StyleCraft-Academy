import React from 'react';

function Courses() {
  const courses = [
    {
      id: 1,
      title: "Basic Hair Cutting",
      duration: "2 Months",
      fee: "₹15,000",
      level: "Beginner",
      icon: "🔪",
      features: ["Tools Handling", "Basic Cuts", "Client Communication"],
      popular: true
    },
    {
      id: 2,
      title: "Advanced Coloring",
      duration: "3 Months",
      fee: "₹25,000",
      level: "Advanced",
      icon: "🎨",
      features: ["Color Theory", "Balyage", "Color Correction"],
      popular: false
    },
    {
      id: 3,
      title: "Bridal Styling Masterclass",
      duration: "1 Month",
      fee: "₹20,000",
      level: "Professional",
      icon: "👰",
      features: ["Bridal Makeup", "Hair Styling", "Traditional Styles"],
      popular: true
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Training Courses</h2>
          <p className="text-xl text-gray-600">Start your journey to become a hairstyling expert</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${
              course.popular ? 'border-purple-500 relative' : 'border-transparent'
            }`}>
              {course.popular && (
                <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 rounded-bl-lg font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">⏱️ {course.duration}</p>
                  <p className="text-2xl font-bold text-purple-600">{course.fee}</p>
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {course.level}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;