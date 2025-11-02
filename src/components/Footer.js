import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">StyleCraft Academy</h3>
            <p className="text-gray-400">Transforming beauty professionals through expert training and premium services.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-white transition-colors">Home</button></li>
              <li><button className="hover:text-white transition-colors">Services</button></li>
              <li><button className="hover:text-white transition-colors">Courses</button></li>
              <li><button className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Hair Cutting</li>
              <li>Hair Coloring</li>
              <li>Hair Treatment</li>
              <li>Bridal Makeover</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>📞 +91 98765 43210</p>
              <p>📧 info@stylecraft.com</p>
              <p>📍 Mumbai, India</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 StyleCraft Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;